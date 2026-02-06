'use client'

import { useState } from 'react'
import { login } from './actions'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { User, Lock, Loader2 } from 'lucide-react'

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData(event.currentTarget)
        const result = await login(formData)

        if (result?.error) {
            setError(result.error)
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#749B8F60_0%,_transparent_95%)] bg-white flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-slate-800 mb-2 tracking-tighter">Acceso de Administración</h1>
                    <p className="text-slate-500">Inicia sesión para gestionar tus citas</p>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Correo electrónico"
                                required
                                className="pl-12"
                            />
                            <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 peer-focus:text-turquoise-500 transition-colors" />
                        </div>

                        <div className="relative">
                            <Input
                                name="password"
                                type="password"
                                placeholder="Contraseña"
                                required
                                className="pl-12"
                            />
                            <Lock className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 peer-focus:text-turquoise-500 transition-colors" />
                        </div>

                        {error && (
                            <div className="p-3 rounded-xl bg-red-50 text-red-600 text-sm font-medium animate-in shake duration-300">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 text-lg bg-turquoise-600 hover:bg-turquoise-700 shadow-xl shadow-turquoise-500/20"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Iniciando...
                                </>
                            ) : (
                                'Entrar al Panel'
                            )}
                        </Button>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <a href="/" className="text-slate-400 hover:text-turquoise-600 transition-colors text-sm font-medium">
                        ← Volver a la web pública
                    </a>
                </div>
            </div>
        </main>
    )
}
