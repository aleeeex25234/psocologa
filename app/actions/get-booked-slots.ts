'use server'

import { createClient } from '@/lib/supabase/server'

export async function getBookedSlots(dia: string) {
    try {
        const supabase = await createClient()

        const { data, error } = await supabase
            .from('citas')
            .select('hora')
            .eq('dia', dia)

        if (error) {
            console.error('Error fetching booked slots:', error)
            return []
        }

        return data.map(cita => {
            // Normalizar a HH:MM si viene con segundos (ej: 09:00:00 -> 09:00)
            return typeof cita.hora === 'string' ? cita.hora.substring(0, 5) : cita.hora
        })
    } catch (e) {
        console.error('Exception in getBookedSlots:', e)
        return []
    }
}
