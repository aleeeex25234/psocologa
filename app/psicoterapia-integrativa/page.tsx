import Link from "next/link";
import { Layers } from "lucide-react";

export default function PsicoterapiaIntegrativa() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-24">
                <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
                    <Layers className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-2xl md:text-5xl font-bold text-gray-800">
                        La Psicoterapia Integrativa
                    </h1>
                </div>

                <div className="space-y-8 md:space-y-12 text-gray-600 leading-relaxed text-sm md:text-lg">
                    <section className="bg-white/50 p-8 rounded-2xl border border-gray-100 shadow-sm text-justify">
                        <p>
                            La Psicoterapia Integrativa es un enfoque unificador que valora la totalidad del individuo, abordando sus dimensiones afectiva, conductual, cognitiva, fisiológica y espiritual. Busca integrar aspectos no conscientes o no resueltos de la personalidad para fomentar una mayor espontaneidad, flexibilidad y capacidad de contacto con el mundo. Este enfoque combina diversas corrientes psicológicas (psicodinámica, humanista, Gestalt, entre otras) desde una perspectiva evolutiva, considerando las tareas y crisis de cada etapa vital. Además, promueve la integración personal del terapeuta y exige un compromiso ético con el aprendizaje continuo y el diálogo interdisciplinar. Su objetivo es potenciar el bienestar del individuo en los ámbitos intrapsíquico, interpersonal y socio-político, respetando sus límites y el entorno.
                        </p>
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
