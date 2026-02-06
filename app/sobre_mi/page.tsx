import Image from "next/image";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

export default function SobreMi() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-6 py-12 md:py-24">
                <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
                    Sobre mí
                </h1>

                <div className="space-y-8 text-gray-600 leading-relaxed text-base md:text-lg">
                    <p className="text-justify">
                        Desde niña he tenido contacto con el mundo de la salud mental y emocional gracias a una familiar que era psiquiatra, siempre me produjo un gran interés saber el porqué del sufrimiento humano y poder aliviarlo. Al finalizar Trabajo Social me di cuenta que mi verdadera pasión era ser psicoterapeuta.
                    </p>
                    <p className="text-justify">
                        Durante la carrera de psicología empecé a formarme en diferentes ramas de la psicología humanista y poco a poco fui ampliando mis conocimientos con otras formaciones en relación al trauma y apego, EMDR, trastornos de personalidad y psicosomáticos etc.
                    </p>
                    <p className="text-justify italic border-l-4 border-[#749B8F] pl-6 py-2 bg-[#749B8F]/5">
                        Algo sobre mí es que soy madre de un hijo y una hija, me encanta la naturaleza, el yoga, las manualidades, la lectura y los animales, tengo una gata, un perro y una perrita.
                    </p>
                    <p className="text-justify">
                        En lo profesional mi formación es como Psicoterapeuta integrativa, y considero importante tener una formación amplia para poder atender a cada persona de la mejor manera posible según sus necesidades.
                    </p>
                    <p className="text-justify">
                        Trabajo de una manera acorde con mi manera de ser y como considero que tiene que ser el acompañamiento a una persona en su proceso de terapia, de manera cercana, pero con profesionalidad, comprometida con mi propio proceso personal y formación continuada.
                    </p>
                    <p className="text-justify font-semibold text-gray-800">
                        Para mi acompañar a las personas en su camino hacia el autoconocimiento y bienestar es una experiencia muy gratificante, con la que me siento muy comprometida desde el momento que vienen a mi consulta.
                    </p>
                </div>

                {/* Qualifications Section */}
                <div className="mt-20 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-[#749B8F] pb-2 inline-block">
                            Formación Académica y Profesional
                        </h2>

                        <ul className="space-y-4">
                            <QualificationItem text="Licenciada en Psicología especialidad en Clínica, colegiada A-1355" />
                            <QualificationItem text="Habilitada como Psicóloga Sanitaria por el Gobierno de Aragón." />
                            <QualificationItem text="Diplomada en Trabajo Social en la rama de Salud Mental." />
                            <QualificationItem text="Máster en Psicoterapia Integradora Humanista por el Instituto Erich Fromm de Barcelona." />
                            <QualificationItem text="Formada en Análisis Transaccional durante 2 años, en el Gabinete de Análisis Transaccional de Jesús Cuadra." />
                            <QualificationItem text="Formada en Terapia Gestalt, Formación de Base, por el Equipo Quatro en Madrid." />
                            <QualificationItem text="Psicoterapia de Integración y Reprocesamiento del Trauma, Método Aleceia, por el Instituto Alecés con Mario Salvador y Carmen Cuenca." />
                            <QualificationItem text="Experta en Trastornos de personalidad nivel básico y avanzado por la Asociación española para el Fomento y Desarrollo de la Psicoterapia AEFDP." />
                            <QualificationItem text="Experta en Trastornos Psicosomáticos por la asociación AEFDP." />
                            <QualificationItem text="Experta en Clínica e Intervención en Trauma y EMDR por la Sociedad Española de Medicina Psicosomática y Psicoterapia SEMPYP." />
                            <QualificationItem text="Curso de Extensión Universitaria 'La terapia EMDR y el manejo del Trauma' impartido por Anabel González por la UNED." />
                        </ul>
                    </div>

                    {/* CV Link */}
                    <div className="flex justify-center pt-8">
                        <Link
                            href="/curriculum-completo"
                            className="flex items-center gap-2 bg-[#749B8F] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#63857a] hover:shadow-xl transition-all duration-300"
                        >
                            <FileText size={20} />
                            Click aquí para ver el curriculum completo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer is already handled by Layout if applicable, but per current structure, 
          the landing page has its own footer. I will add a simplified footer or link back. */}
            <div className="max-w-4xl mx-auto px-6 pb-16 text-center">
                <Link href="/" className="text-[#749B8F] hover:underline font-bold">
                    ← Volver al Inicio
                </Link>
            </div>
        </div>
    );
}

function QualificationItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-gray-600">
            <ChevronRight className="text-[#749B8F] mt-1 shrink-0" size={20} />
            <span>{text}</span>
        </li>
    );
}
