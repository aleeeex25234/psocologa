import Link from "next/link";
import { User, Compass, Globe, Video } from "lucide-react";
export default function PsicoterapiaIndividual() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <div className="flex flex-col items-center mb-16 text-center">
                    <User className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-800">
                        La Psicoterapia Individual
                    </h1>
                </div>

                <div className="space-y-12 text-gray-600 leading-relaxed text-base md:text-lg">
                    <section className="bg-white/50 p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-justify">
                        <p className="font-medium text-gray-800">
                            La psicoterapia individual transcurre en el marco de la relación terapéutica entre paciente y psicoterapeuta, fundamentada en un compromiso de profundo respeto, comprensión y absoluta confidencialidad.
                        </p>

                        <p>
                            Desde este marco de seguridad y confianza, acompaño a la persona en el proceso de resolver y afrontar sus diferentes desafíos personales, conflictos internos, bloqueos emocionales o malestares psicológicos que puedan estar afectando su calidad de vida y su equilibrio vital.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Compass size={24} />
                                <h2 className="font-bold text-xl text-gray-800">Autoconocimiento</h2>
                            </div>
                            <p className="text-sm">
                                Este proceso facilita un mayor autoconocimiento, permitiendo descubrir y comprender las dinámicas internas que rigen nuestro comportamiento y emociones.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Heart size={24} className="text-[#749B8F]" />
                                <h2 className="font-bold text-xl text-gray-800">Mirada Compasiva</h2>
                            </div>
                            <p className="text-sm">
                                Buscamos despertar una mirada más compasiva, amorosa y comprensiva hacia uno mismo, sanando la relación con nuestra propia brújula interna.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Globe size={24} />
                                <h2 className="font-bold text-xl text-gray-800">Vínculos Saludables</h2>
                            </div>
                            <p className="text-sm">
                                A través del cambio personal, se aprende una mejor manera de relacionarse con los demás y con el mundo que nos rodea, estableciendo límites y conexiones más sanas.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Video size={24} />
                                <h2 className="font-bold text-xl text-gray-800">Modalidad Flexible</h2>
                            </div>
                            <p className="text-sm">
                                Para adaptarnos a tus necesidades y circunstancias, las sesiones pueden realizarse tanto de forma <strong>presencial</strong> como <strong>online</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-gray-100 italic font-serif text-xl text-[#749B8F]">
                        "Un camino hacia el reencuentro con tu bienestar a través de un espacio de aceptación incondicional."
                    </div>
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

function Heart({ className, size }: { className?: string; size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}
