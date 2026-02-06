import Link from "next/link";
import { Users, BookOpen, ShieldCheck, Zap } from "lucide-react";

export default function SupervisionProfesionales() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-24">
                <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
                    <Users className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-2xl md:text-5xl font-bold text-gray-800">
                        Supervisión de Profesionales
                    </h1>
                    <p className="mt-4 text-[#749B8F] font-bold text-lg md:text-2xl italic">
                        Un pilar fundamental para la excelencia clínica
                    </p>
                </div>

                <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-lg">
                    <section className="bg-white/50 p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-justify">
                        <p className="font-medium text-gray-800">
                            La supervisión clínica no es solo una recomendación ética, sino un requisito imprescindible para garantizar un ejercicio profesional responsable, riguroso y de alta calidad. En el complejo campo de la psicoterapia, el profesional necesita un espejo y un espacio de seguridad donde profundizar en su práctica.
                        </p>

                        <p>
                            Este es un espacio diseñado para revisar lo que ocurre en el proceso psicoterapéutico desde una visión global, integrando los asuntos nucleares del paciente con la experiencia subjetiva del terapeuta.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <BookOpen size={24} />
                                <h2 className="font-bold text-lg md:text-xl text-gray-800">Visión Global</h2>
                            </div>
                            <p className="text-sm">
                                Analizamos la casuística desde una perspectiva integradora, identificando los nudos relacionales y asuntos nucleares que marcan el ritmo del proceso terapéutico.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <ShieldCheck size={24} />
                                <h2 className="font-bold text-lg md:text-xl text-gray-800">Mundo Interno</h2>
                            </div>
                            <p className="text-sm">
                                Profundizamos en las dinámicas de <strong>transferencia y contratransferencia</strong>. Comprender qué se moviliza en el psicoterapeuta es clave para transformar la vivencia en una herramienta diagnóstica potente.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Zap size={24} />
                                <h2 className="font-bold text-lg md:text-xl text-gray-800">Recursos Técnicos</h2>
                            </div>
                            <p className="text-sm">
                                Exploramos técnicas y recursos específicos según cada caso, dotando al profesional de una "caja de herramientas" flexible, fundamentada y efectiva.
                            </p>
                        </div>

                        <div className="bg-[#749B8F]/5 p-8 rounded-2xl border-l-4 border-[#749B8F] space-y-4">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Heart size={24} className="text-[#749B8F]" />
                                <h2 className="font-bold text-lg md:text-xl text-gray-800">Autocuidado</h2>
                            </div>
                            <p className="text-sm">
                                La supervisión actúa como un contenedor emocional, facilitando el procesamiento del impacto del sufrimiento del otro y previniendo el desgaste profesional o burnout.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-gray-100 italic font-serif text-xl text-[#749B8F]">
                        "Entender la supervisión como un proceso de aprendizaje continuo permite al psicoterapeuta crecer de la mano de sus pacientes."
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
