"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { CalendarIcon, Clock, User, Phone, Euro, Plus, X } from "lucide-react"
import { createManualAppointment } from "@/app/actions/create-manual-appointment"

export function ManualAppointmentModal() {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState<{ message: string, type: 'error' | 'success' } | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setToast(null)

        const formData = new FormData(e.currentTarget)
        // Coerce values safely
        const data = {
            nombre: formData.get('nombre') as string,
            telefono: formData.get('telefono') as string,
            dia: formData.get('dia') as string,
            hora: formData.get('hora') as string,
        }

        const result = await createManualAppointment(data)

        setLoading(false)

        if (result.success) {
            setToast({ type: 'success', message: 'Cita creada correctamente' })
            setTimeout(() => {
                setOpen(false)
                setToast(null)
            }, 1500)
        } else {
            setToast({ type: 'error', message: result.error || 'Error al crear la cita' })
        }
    }

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                className="gap-2 bg-turquoise-600 hover:bg-turquoise-700 text-white font-sans shadow-lg hover:shadow-xl transition-all"
            >
                <Plus size={20} />
                <span className="hidden sm:inline">Nueva Cita</span>
            </Button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors bg-gray-50 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="font-sans text-2xl font-bold text-slate-800 mb-6">Nueva Cita Manual</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-4">
                                <div className="relative">
                                    <Input
                                        name="nombre"
                                        placeholder="Nombre del Paciente"
                                        required
                                        className="pl-10 h-12 text-base"
                                        labelClassName="pl-10"
                                    />
                                    <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                                </div>

                                <div className="relative">
                                    <Input
                                        name="telefono"
                                        type="tel"
                                        placeholder="Teléfono"
                                        required
                                        pattern="[0-9]{9}"
                                        className="pl-10 h-12 text-base"
                                        labelClassName="pl-10"
                                    />
                                    <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="relative">
                                        <Input
                                            name="dia"
                                            type="date"
                                            required
                                            className="pl-10 h-12 text-base"
                                        />
                                        <CalendarIcon className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                                    </div>
                                    <div className="relative">
                                        <Input
                                            name="hora"
                                            type="time"
                                            required
                                            step="3600" // Steps of 1 hour if preferred, or default
                                            className="pl-10 h-12 text-base"
                                        />
                                        <Clock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            {toast && (
                                <div className={`text-sm p-3 rounded-xl text-center font-medium animate-in fade-in slide-in-from-top-2 ${toast.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                    {toast.message}
                                </div>
                            )}

                            <div className="flex justify-end gap-3 pt-2">
                                <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="text-gray-500">
                                    Cancelar
                                </Button>
                                <Button type="submit" disabled={loading} className="px-8">
                                    {loading ? 'Guardando...' : 'Crear Cita'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
