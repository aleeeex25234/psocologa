import Link from "next/link";
import { ChevronRight, Award, BookOpen, Users, Briefcase } from "lucide-react";

export default function Curriculum() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-24">
                <h1 className="font-sans text-2xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
                    Currículum completo
                </h1>

                <div className="space-y-16">
                    {/* Formación Principal */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b-2 border-[#749B8F] pb-2 text-[#749B8F]">
                            <Award size={28} />
                            <h2 className="text-lg md:text-3xl font-bold text-gray-800">Formación Académica</h2>
                        </div>
                        <ul className="space-y-4">
                            <CVItem text="Licenciada en Psicología especialidad en Clínica, colegiada A-1355. Habilitada como Psicóloga Sanitaria por el Gobierno de Aragón." />
                            <CVItem text="Diplomada en Trabajo Social en la rama de Salud Mental." />
                            <CVItem text="Máster en Psicoterapia Integradora Humanista por el Instituto Erich Fromm de Barcelona." />
                            <CVItem text="Formada en Análisis Transaccional durante 2 años, en el Gabinete de Análisis Transaccional de Jesús Cuadra." />
                            <CVItem text="Formada en Terapia Gestalt, Formación de Base, por el Equipo Quatro en Madrid." />
                            <CVItem text="Psicoterapia de Integración y Reprocesamiento del Trauma, Método Aleceia, por el Instituto Alecés con Mario Salvador y Carmen Cuenca." />
                        </ul>
                    </section>

                    {/* Especializaciones */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b-2 border-[#749B8F] pb-2 text-[#749B8F]">
                            <BookOpen size={28} />
                            <h2 className="text-lg md:text-3xl font-bold text-gray-800">Cursos y Especializaciones</h2>
                        </div>
                        <ul className="space-y-4">
                            <CVItem text="Experta en Trastornos de personalidad nivel básico y avanzado por la Asociación española para el Fomento y Desarrollo de la Psicoterapia AEFDP." />
                            <CVItem text="Experta en Trastornos Psicosomáticos por la asociación AEFDP." />
                            <CVItem text="Experta en Clínica e Intervención en Trauma y EMDR por la Sociedad Española de Medicina Psicosomática y Psicoterapia SEMPYP." />
                            <CVItem text="Curso de Extensión Universitaria 'La terapia EMDR y el manejo del Trauma' impartido por Anabel González por la UNED." />
                            <CVItem text="Curso 'El abuso sexual y su influencia en las patologías alimentarias y de imagen corporal' dirigido por Natalia Seijo por la AEFDP." />
                            <CVItem text="Curso 'Apego y trastornos del comportamiento alimentarios' impartido por Natalia Seijo por la AEFDP." />
                            <CVItem text="Master Class 'Atendiendo el Trauma preverbal con IFS' impartido por Collen West por el Centro 'Acerca de Psicoterapia'." />
                            <CVItem text="Máster Class 'Finding Solid Ground' con Bethany Brand y Ruth Lanius, Centro Cuatro Ciclos." />
                            <CVItem text="Curso 'Ejercicios para conocer y sanar tus partes' dirigido por Saúl Perez." />
                            <CVItem text="Curso 'Desarrollo y madurez' dirigido por José Antonio García Monge en el Centro Pignatelli." />
                            <CVItem text="Curso 'Terapia Gestalt' impartido por Jorge Puig, en el centro Pignatelli." />
                            <CVItem text="Curso 'Sueños y Gestalt' impartido por Carlos Cervera." />
                            <CVItem text="Curso 'Conflictos y convivencia en los centros de primaria' dirigido por Blanca Robles y organizado por FASE-CGT." />
                            <CVItem text="Curso intensivo de 'Comunicación y relación de ayuda' y 'Desarrollo personal', impartido por el Teléfono de la Esperanza de Aragón." />
                            <CVItem text="Curso 'Trabajar en Equipo' impartido en el Centro de día Romareda." />
                        </ul>
                    </section>

                    {/* Congresos */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b-2 border-[#749B8F] pb-2 text-[#749B8F]">
                            <Users size={28} />
                            <h2 className="text-lg md:text-3xl font-bold text-gray-800">Congresos y Conferencias</h2>
                        </div>
                        <ul className="space-y-4">
                            <CVItem text="X Congreso Español de Análisis Transaccional, 'El AT ante el cambio de milenio: la sociedad de la comunicación'." />
                            <CVItem text="I Jornadas Internacionales de Traumaterapia, con Stephen W. Porges y Peter A. Levine." />
                            <CVItem text="Conferencia 'El Cuerpo lleva la Cuenta, Cerebro, Mente, Cuerpo y Neurociencia' con Bessel van der Kolk." />
                        </ul>
                    </section>

                    {/* Experiencia */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b-2 border-[#749B8F] pb-2 text-[#749B8F]">
                            <Briefcase size={28} />
                            <h2 className="text-lg md:text-3xl font-bold text-gray-800">Experiencia Profesional</h2>
                        </div>
                        <div className="space-y-4 text-gray-600 leading-relaxed italic text-sm md:text-base">
                            <p>
                                En el 2003 empecé a trabajar como Psicoterapeuta en el Centro Albor con el que sigo colaborando en la actualidad y desde el 2019 trabajo también en mi consulta privada.
                            </p>
                            <p>
                                Entre el 2008 al 2011 trabajé como psicóloga infantil para el programa de Caixaproinfancia.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center">
                    <Link href="/sobre_mi" className="text-[#749B8F] hover:underline font-bold">
                        ← Volver a Sobre mí
                    </Link>
                </div>
            </main>
        </div>
    );
}

function CVItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
            <ChevronRight className="text-[#749B8F] mt-1 shrink-0" size={20} />
            <span>{text}</span>
        </li>
    );
}
