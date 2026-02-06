'use server'

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'
import { isBefore, startOfToday, addDays, parseISO, format } from 'date-fns'

export async function bookAppointment(formData: {
  telefono: string
  dia: string
  hora: string
}) {
  // 0. Validar rango de fecha
  const bookingDate = parseISO(formData.dia)
  const today = startOfToday()
  const maxDate = addDays(today, 33)

  if (isBefore(bookingDate, today)) {
    return { success: false, error: 'No se pueden agendar citas en fechas pasadas.' }
  }

  if (isBefore(maxDate, bookingDate)) {
    return { success: false, error: 'Solo se pueden agendar citas con un máximo de 33 días de antelación.' }
  }

  // Usar cliente admin para verificar telefono (bypasa RLS)
  const supabaseAdmin = createAdminClient()

  // 1. Verificar si el telefono existe y obtener el nombre
  const cleanedPhone = formData.telefono.trim()
  const phoneAsNumber = parseInt(cleanedPhone, 10)

  console.log('[DEBUG] Buscando telefono (string):', cleanedPhone)
  console.log('[DEBUG] Buscando telefono (number):', phoneAsNumber)

  const { data: telefonos, error: phoneError } = await supabaseAdmin
    .from('telefono')
    .select('telefono, nombre')
    .eq('telefono', phoneAsNumber)

  console.log('[DEBUG] Query result:', { telefonos, phoneError })

  if (phoneError) {
    console.error('Phone check error:', phoneError)
    return {
      success: false,
      error: `Error de base de datos: ${phoneError.message}`
    }
  }

  // Tomar el primer resultado si existe
  const paciente = telefonos && telefonos.length > 0 ? telefonos[0] : null
  console.log('[DEBUG] Paciente encontrado:', paciente)
  console.log('[DEBUG] Total resultados:', telefonos?.length || 0)

  if (!paciente) {
    return {
      success: false,
      error: 'Lo siento, pero en este momento no puedo agendar citas a nuevos pacientes. Mandame un mensaje al 645132766 y miro lo que puedo hacer.'
    }
  }

  // 1.5 Verificar si ya tiene una cita pendiente (hoy o futuro)
  const now = new Date()
  const todayStr = format(now, 'yyyy-MM-dd')
  const currentTimeStr = format(now, 'HH:mm:ss')

  console.log('[DEBUG] Comprobando duplicados para:', cleanedPhone, 'desde:', todayStr, 'Hora actual:', currentTimeStr)

  // Buscamos duplicados por el teléfono (en citas puede estar guardado como string o numero dependiendo de la tabla)
  // Usamos .or() para mayor seguridad si hubiera inconsistencia de tipos
  const { data: duplicateCheckData, error: duplicateError } = await supabaseAdmin
    .from('citas')
    .select('dia, hora')
    .or(`telefono.eq.${cleanedPhone},telefono.eq.${phoneAsNumber}`)
    .gte('dia', todayStr)
    .order('dia', { ascending: true })
    .order('hora', { ascending: true })

  if (duplicateError) {
    console.error('[DEBUG] Duplicate check error:', duplicateError)
  }

  // Filtrar en JS para manejar con precisión "hoy + hora pasada"
  const pendingAppt = duplicateCheckData?.find(cita => {
    // Si dia es timestamp (ej: 2026-02-06T00:00:00), extraemos solo la fecha
    const citaDatePart = typeof cita.dia === 'string' ? cita.dia.substring(0, 10) : format(parseISO(cita.dia), 'yyyy-MM-dd')

    if (citaDatePart > todayStr) return true // Cita en día futuro
    if (citaDatePart === todayStr) {
      // Si es hoy, comparamos la hora (HH:mm:ss)
      return cita.hora > currentTimeStr
    }
    return false
  })

  console.log('[DEBUG] Cita pendiente encontrada:', pendingAppt)

  if (pendingAppt) {
    const citaDatePart = typeof pendingAppt.dia === 'string' ? pendingAppt.dia.substring(0, 10) : format(parseISO(pendingAppt.dia), 'yyyy-MM-dd')
    return {
      success: false,
      error: `Lo siento, ya tienes una cita pendiente para el ${format(parseISO(citaDatePart), 'dd/MM/yyyy')} a las ${pendingAppt.hora.substring(0, 5)}. No puedes agendar otra hasta que pase la actual.`
    }
  }

  // 2. Verificar colisión de horario (Double check para evitar duplicados)
  const supabase = await createClient()
  const { data: existingSlots, error: checkError } = await supabase
    .from('citas')
    .select('id')
    .eq('dia', formData.dia)
    .eq('hora', formData.hora)
    .maybeSingle()

  if (checkError) {
    console.error('Collision check error:', checkError)
    return { success: false, error: 'Error al verificar disponibilidad.' }
  }

  if (existingSlots) {
    return {
      success: false,
      error: 'Lo siento, ese horario acaba de ser reservado por otra persona. Por favor, selecciona otra hora.'
    }
  }

  // 3. Proceder con la insercion usando el nombre de la BD
  // Usar cliente regular para la inserción (respeta RLS de citas)

  const { data, error } = await supabase
    .from('citas')
    .insert([
      {
        nombre: paciente.nombre,
        telefono: formData.telefono,
        dia: formData.dia,
        hora: formData.hora
      },
    ])
    .select()

  if (error) {
    console.error('Error booking appointment:', error)
    return { success: false, error: 'Error al procesar la cita. Intente de nuevo.' }
  }

  revalidatePath('/dashboard')
  return { success: true, nombre: paciente.nombre }
}