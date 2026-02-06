"use client"
import * as React from "react"
import { AlertCircle, X } from "lucide-react"

interface ToastProps {
    message: string | null
    isVisible: boolean
    onClose: () => void
    type?: 'error' | 'success'
}

export function Toast({ message, isVisible, onClose, type = 'error' }: ToastProps) {
    React.useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    if (!isVisible || !message) return null

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-sm px-4 animate-in slide-in-from-bottom-4 fade-in duration-300">
            <div className={`
        flex items-center gap-3 p-4 rounded-2xl shadow-xl border
        ${type === 'error' ? 'bg-red-50 border-red-100 text-red-700' : 'bg-turquoise-50 border-turquoise-100 text-turquoise-700'}
      `}>
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium flex-grow">{message}</span>
                <button onClick={onClose} className="p-1 hover:opacity-70 transition-opacity">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}
