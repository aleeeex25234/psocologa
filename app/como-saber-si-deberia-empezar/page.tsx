import Link from "next/link";
import { Leaf, MessageCircle } from "lucide-react";

export default function ComoSaberSiEmpezar() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-24">
                <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
                    <Leaf className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-2xl md:text-5xl font-bold text-gray-800">
                        ¿Cómo saber si debería empezar?
                    </h1>
                </div>

                <div className="space-y-8 md:space-y-12 text-gray-600 leading-relaxed text-sm md:text-lg">
                    <section className="bg-white/50 p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-justify">
                        <p className="font-medium text-gray-800">
                            Es completamente normal querer buscar alivio para el dolor. Ya sea que estés atravesando un duelo, enfrentando desafíos en el trabajo, lidiando con una enfermedad, enfrentando una ruptura o lidiando con un diagnóstico de trastorno emocional, tu sufrimiento es válido y merece atención.
                        </p>
                        <p className="font-bold text-[#749B8F]">
                            Lo importante es saber que se puede trabajar en ello y buscar ayuda.
                        </p>
                        <p>
                            El sufrimiento es una parte intrínseca de la vida, afectando a las cosas que valoramos y, en ocasiones, limitando áreas vitales, lo que conlleva a una sensación de fracaso y descontento personal.
                        </p>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center space-y-6 mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Si crees que necesitas ayuda, contáctame sin compromiso</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                <Link
                                    href="/contacto"
                                    className="flex items-center justify-center gap-2 bg-[#749B8F] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#63857a] transition-all"
                                >
                                    <MessageCircle size={20} />
                                    Contactar ahora
                                </Link>
                                <Link
                                    href="https://api.whatsapp.com/send?phone=34645132766"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 bg-white text-[#749B8F] border-2 border-[#749B8F] px-8 py-4 rounded-lg font-bold hover:bg-[#749B8F]/5 transition-all"
                                >
                                    WhatsApp
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center">
                    <Link href="/" className="text-[#749B8F] hover:underline font-bold">
                        ← Volver al Inicio
                    </Link>
                </div>
            </main>
        </div>
    );
}
