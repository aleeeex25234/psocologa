import Link from "next/link";
import { Layers, RefreshCw, GitBranch, GraduationCap, ShieldCheck } from "lucide-react";

export default function PsicoterapiaIntegrativa() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-24">
                <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
                    <Layers className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-2xl md:text-5xl font-bold text-gray-800">
                        La Psicoterapia Integrativa
                    </h1>
                    <p className="mt-4 text-[#749B8F] font-bold text-lg md:text-2xl italic">
                        Un enfoque unificador para la totalidad del ser
                    </p>
                </div>

                <div className="space-y-8 md:space-y-12 text-gray-600 leading-relaxed text-sm md:text-lg">
                    <section className="bg-white/50 p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-justify">
                        <p className="font-medium text-gray-800">
                            La Psicoterapia Integrativa representa un modelo de vanguardia que busca la unificación de la persona, abordando sus dimensiones afectiva, conductual, cognitiva, fisiológica y espiritual de manera integrada y armónica.
                        </p>

                        <p>
                            Su propósito fundamental es integrar aquellos aspectos no conscientes o no resueltos de la personalidad, permitiendo que el individuo recupere su capacidad de respuesta espontánea y flexible, mejorando significativamente su contacto con el mundo interno y externo.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <RefreshCw size={24} />
                                <h2 className="font-bold text-lg md:text-xl text-gray-800">Sinergia Teórica</h2>
                            </div>
                            <p className="text-sm text-justify">
                                Combinamos diversas corrientes psicológicas —psicodinámica, humanista, cognitivo-conductual y Gestalt— para ofrecer un abordaje profundo y adaptado a la singularidad de cada paciente.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <GitBranch size={24} />
                                <h2 className="font-bold text-lg md:text-xl text-gray-800">Perspectiva Evolutiva</h2>
                            </div>
                            <p className="text-sm text-justify">
                                Consideramos las tareas y crisis propias de cada etapa vital, entendiendo el síntoma actual como parte de un proceso de desarrollo humano en constante evolución.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <GraduationCap size={24} />
                                <h2 className="font-bold text-lg md:text-xl text-gray-800">Compromiso Ético</h2>
                            </div>
                            <p className="text-sm text-justify">
                                Este enfoque exige del terapeuta un aprendizaje continuo y un diálogo interdisciplinar permanente, promoviendo una integración personal que revierte en la calidad del encuentro clínico.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <ShieldCheck size={24} />
                                <h2 className="font-bold text-lg md:text-xl text-gray-800">Bienestar Multidimensional</h2>
                            </div>
                            <p className="text-sm text-justify">
                                Nuestro objetivo es potenciar el bienestar en los ámbitos intrapsíquico, interpersonal y socio-político, respetando siempre los límites del individuo y su entorno vital.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-gray-100 italic font-serif text-xl text-[#749B8F]">
                        "La integración no es solo un destino, sino un proceso de presencia y contacto pleno con la vida."
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
