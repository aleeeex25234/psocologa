"use client"

import { Button } from "@/components/ui/Button"
import { MessageCircle, Trash2, X } from "lucide-react"
import { format, parse, isValid } from "date-fns"
import { deleteAppointment } from "@/app/actions/delete-appointment"

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

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de que quieres eliminar esta cita?')) return
        const result = await deleteAppointment(id)
        if (!result.success) {
            alert(result.error)
        }
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
        <div suppressHydrationWarning className="space-y-4">
            {/* Table for Desktop */}
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-center">
                    <thead className="bg-gray-50/50 text-gray-500 font-sans text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-4 py-3 font-bold text-center">Hora</th>
                            <th className="px-4 py-3 font-bold text-center">Paciente</th>
                            <th className="px-4 py-3 font-bold text-center">Importe</th>
                            <th className="px-4 py-3 font-bold text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.map((cita) => (
                            <tr key={cita.id} className="group hover:bg-turquoise-50/10 transition-colors">
                                <td className="px-4 py-3 text-center">
                                    <div className="font-sans text-base font-bold text-slate-800">
                                        {cita.hora.substring(0, 5)}
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <div className="font-medium text-slate-700 text-sm">
                                        {cita.nombre}
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <div className="text-base font-bold text-slate-800">
                                        {cita.pago ? `${cita.pago}€` : '-'}
                                    </div>
                                </td>
                                <td className="px-4 py-3 flex justify-center gap-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => handleWhatsAppClick(cita.telefono)}
                                        className="hover:bg-green-500 hover:text-white hover:border-green-500 gap-2 transition-all py-1 px-3 text-xs h-8"
                                        title="Abrir WhatsApp"
                                    >
                                        <MessageCircle className="w-3 h-3" />
                                        <span className="hidden sm:inline">WhatsApp</span>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={() => handleDelete(cita.id)}
                                        className="hover:bg-red-500 hover:text-white hover:border-red-500 p-2 h-8 w-8 text-red-500 transition-all"
                                        title="Eliminar Cita"
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Cards for Mobile */}
            <div className="md:hidden space-y-4">
                {data.map((cita) => (
                    <div key={cita.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex justify-between items-center">
                            <span className="bg-turquoise-50 text-turquoise-700 px-3 py-1 rounded-full text-sm font-bold">
                                {cita.hora.substring(0, 5)}
                            </span>
                            <span className="text-slate-400 font-bold text-lg">
                                {cita.pago ? `${cita.pago}€` : ''}
                            </span>
                        </div>

                        <div>
                            <div className="text-xl font-bold text-slate-800">{cita.nombre}</div>
                        </div>

                        <div className="flex gap-2 pt-2">
                            <Button
                                variant="outline"
                                onClick={() => handleWhatsAppClick(cita.telefono)}
                                className="flex-1 bg-green-50 border-green-100 text-green-700 hover:bg-green-100 gap-3 py-6 rounded-2xl font-bold"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => handleDelete(cita.id)}
                                className="w-16 h-14 bg-red-50 border-red-100 text-red-600 hover:bg-red-100 rounded-2xl flex items-center justify-center p-0"
                                title="Eliminar Cita"
                            >
                                <X className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
