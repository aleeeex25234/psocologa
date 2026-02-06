"use client"
import * as React from "react"
import { CheckCircle2, AlertCircle, X } from "lucide-react"
import { Button } from "./Button"

interface NotificationModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    message: string
    type?: 'success' | 'error'
    showContactButton?: boolean
}

export function NotificationModal({
    isOpen,
    onClose,
    title,
    message,
    type = 'success',
    showContactButton = false
}: NotificationModalProps) {
    if (!isOpen) return null

    const isError = type === 'error'

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-300 text-center">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 ${isError ? 'bg-red-50' : 'bg-turquoise-50'} rounded-full flex items-center justify-center animate-bounce duration-1000`}>
                        {isError ? (
                            <AlertCircle className="w-10 h-10 text-red-500" />
                        ) : (
                            <CheckCircle2 className="w-10 h-10 text-turquoise-500" />
                        )}
                    </div>
                </div>

                <h2 className="font-serif text-3xl text-slate-900 mb-4">{title}</h2>
                <p className={`text-slate-600 mb-8 leading-relaxed ${isError ? 'italic' : ''}`}>
                    {message}
                </p>

                <div className="space-y-3">
                    {showContactButton && (
                        <a
                            href="https://wa.me/34645132766"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 text-lg font-semibold rounded-xl bg-[#25D366] text-white shadow-xl shadow-green-500/20 hover:bg-[#128C7E] transition-all transform hover:scale-[1.02]"
                        >
                            Contactar por WhatsApp
                        </a>
                    )}
                    <Button
                        onClick={onClose}
                        className={`w-full py-4 text-lg shadow-xl ${isError ? 'bg-slate-100 text-slate-600 hover:bg-slate-200 shadow-none' : 'shadow-turquoise-500/20'}`}
                    >
                        {isError ? 'Cerrar' : 'Entendido, gracias'}
                    </Button>
                </div>
            </div>
        </div>
    )
}
