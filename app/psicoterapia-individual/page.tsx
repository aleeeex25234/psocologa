import Link from "next/link";
import { User } from "lucide-react";

export default function PsicoterapiaIndividual() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-10 md:px-6 md:py-24">
                <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
                    <User className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-2xl md:text-5xl font-bold text-gray-800">
                        La Psicoterapia Individual
                    </h1>
                </div>

                <div className="space-y-8 md:space-y-12 text-gray-600 leading-relaxed text-sm md:text-lg">
                    <section className="bg-white/50 p-8 rounded-2xl border border-gray-100 shadow-sm text-justify">
                        <p>
                            La psicoterapia individual transcurre en el marco de la relación terapéutica entre paciente y psicoterapeuta, con profundo respeto, comprensión y confidencialidad. Desde este marco se ayuda a la persona a resolver y afrontar sus diferentes problemas personales, conflictos, bloqueos, malestares psicológicos y emocionales etc, que pueden estar afectando a su vida y a su bienestar. Este proceso busca un mayor autoconocimiento de la persona, despertando una mirada más compasiva, amorosa y comprensiva con uno mismo, y aprendiendo una mejor manera de relacionarse con los demás y con el mundo. Las sesiones pueden ser presenciales y on-line.
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
