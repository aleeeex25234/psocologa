'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function deleteAppointment(id: string) {
    const supabaseAdmin = createAdminClient()

    const { error } = await supabaseAdmin
        .from('citas')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Error deleting appointment:', error)
        return { success: false, error: 'No se pudo eliminar la cita.' }
    }

    revalidatePath('/dashboard')
    return { success: true }
}
