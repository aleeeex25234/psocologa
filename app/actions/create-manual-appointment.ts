'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function createManualAppointment(formData: {
    nombre: string
    telefono: string
    dia: string
    hora: string
}) {
    const supabaseAdmin = createAdminClient()

    // 1. Conflict Check (Strict)
    // We don't want to double book even manually
    const { data: conflicts, error: conflictError } = await supabaseAdmin
        .from('citas')
        .select('id')
        .eq('dia', formData.dia)
        .eq('hora', formData.hora)
        .maybeSingle()

    if (conflictError) {
        return { success: false, error: 'Error al verificar disponibilidad.' }
    }

    if (conflicts) {
        return {
            success: false,
            error: 'Ya existe una cita agendada para ese día y hora.'
        }
    }

    // 2. Prepare Data
    // Clean phone number (ensure string or int consistency)
    // For manual entry, we trust the input more, but let's strip non-digits just in case
    const cleanPhone = formData.telefono.replace(/\D/g, '')
    const phoneInt = parseInt(cleanPhone, 10)

    if (isNaN(phoneInt)) {
        return { success: false, error: 'El teléfono no es válido.' }
    }

    // 3. Ensure patient exists in 'telefono' table
    // Doing manual check + insert/update to be more robust and get clearer errors
    const { data: existingPatient, error: searchError } = await supabaseAdmin
        .from('telefono')
        .select('telefono')
        .eq('telefono', phoneInt)
        .maybeSingle()

    if (searchError) {
        console.error('Error searching patient:', searchError)
        return { success: false, error: `Error al buscar paciente: ${searchError.message}` }
    }

    if (existingPatient) {
        // Update name if it changed
        const { error: updateError } = await supabaseAdmin
            .from('telefono')
            .update({ nombre: formData.nombre })
            .eq('telefono', phoneInt)

        if (updateError) {
            console.error('Error updating patient name:', updateError)
            return { success: false, error: `Error al actualizar paciente: ${updateError.message}` }
        }
    } else {
        // Insert new patient
        const { error: insertPatientError } = await supabaseAdmin
            .from('telefono')
            .insert({ telefono: phoneInt, nombre: formData.nombre })

        if (insertPatientError) {
            console.error('Error inserting new patient:', insertPatientError)
            return { success: false, error: `Error al crear nuevo paciente: ${insertPatientError.message}` }
        }
    }

    // 4. Insert Appointment
    const { error: insertError } = await supabaseAdmin
        .from('citas')
        .insert([
            {
                nombre: formData.nombre,
                telefono: cleanPhone, // Store as string if that's the convention in 'citas'
                dia: formData.dia,
                hora: formData.hora
            }
        ])

    if (insertError) {
        console.error('Error creating manually appointment:', insertError)
        return { success: false, error: 'Error al crear la cita.' }
    }

    revalidatePath('/dashboard')
    return { success: true }
}
