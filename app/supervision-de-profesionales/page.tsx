import Link from "next/link";
import { Users } from "lucide-react";

export default function SupervisionProfesionales() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-24">
                <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
                    <Users className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-2xl md:text-5xl font-bold text-gray-800">
                        Supervisión de Profesionales
                    </h1>
                </div>

                <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-lg">
                    <section className="bg-white/50 p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-justify">
                        <p className="font-bold text-[#749B8F]">
                            Imprescindible para un buen ejercicio profesional.
                        </p>
                        <p>
                            Espacio para revisar lo que ocurre en el proceso psicoterapéutico, desde una visión global, dónde se incluyen los asuntos nucleares del paciente, las dinámicas transferenciales y la contratransferencia del psicóterapeuta con el paciente.
                        </p>
                        <p>
                            Así como profundizar en recursos y técnicas que ayuden en el proceso psicoterapéutico, según cada caso.
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
