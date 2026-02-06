"use client"

import { Button } from "@/components/ui/Button"
import { MessageCircle } from "lucide-react"
import { format, parse, isValid } from "date-fns"

interface Appointment {
    id: string
    created_at: string
    dia: string
    hora: string
    nombre: string
    telefono: string
    pago: number | null
    // Add other fields if necessary
}

interface AppointmentsTableProps {
    data: Appointment[]
}

export function AppointmentsTable({ data }: AppointmentsTableProps) {

    const handleWhatsAppClick = (telefono: string | number | null | undefined) => {
        if (!telefono) return

        const phoneStr = String(telefono)

        // Remove formatting from phone if necessary, though usually it's clean digits
        const cleanPhone = phoneStr.replace(/\D/g, '')
        // Assuming country code +34 for Spain if not present, but user input might vary.
        // If input is 9 digits (Spain), prepend 34.
        const finalPhone = cleanPhone.length === 9 ? `34${cleanPhone}` : cleanPhone

        window.open(`https://wa.me/${finalPhone}`, '_blank')
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
                <div className="text-gray-400 mb-2 font-medium">No hay citas para este día.</div>
                <p className="text-sm text-gray-300">Selecciona otra fecha en el calendario.</p>
            </div>
        )
    }

    return (
        <div suppressHydrationWarning className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-center">
                    <thead className="bg-gray-50/50 text-gray-500 font-sans text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-8 py-6 font-bold text-center">Hora</th>
                            <th className="px-8 py-6 font-bold text-center">Paciente</th>
                            <th className="px-8 py-6 font-bold text-center">Importe</th>
                            <th className="px-8 py-6 font-bold text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.map((cita) => (
                            <tr key={cita.id} className="group hover:bg-turquoise-50/10 transition-colors">
                                <td className="px-8 py-6 text-center">
                                    <div className="font-serif text-xl font-bold text-slate-800">
                                        {cita.hora.substring(0, 5)}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <div className="font-medium text-slate-700 text-lg">
                                        {cita.nombre}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <div className="text-xl font-bold text-slate-800">
                                        {cita.pago ? `${cita.pago}€` : '-'}
                                    </div>
                                </td>
                                <td className="px-8 py-6 flex justify-center">
                                    <Button
                                        variant="outline"
                                        onClick={() => handleWhatsAppClick(cita.telefono)}
                                        className="hover:bg-green-500 hover:text-white hover:border-green-500 gap-2 transition-all"
                                        title="Abrir WhatsApp"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span className="hidden sm:inline">WhatsApp</span>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
