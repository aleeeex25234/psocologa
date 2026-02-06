import Link from "next/link";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function PreguntasFrecuentes() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <div className="flex flex-col items-center mb-16 text-center">
                    <HelpCircle className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-800">
                        Preguntas Frecuentes
                    </h1>
                </div>

                <div className="space-y-12">
                    <FAQItem
                        question="¿Cuándo es apropiado ver a un psicólogo?"
                        answer="En realidad, en cualquier momento es apropiado tomar la decisión de consultar a un psicólogo. A menudo, ciertas circunstancias, eventos específicos o situaciones pueden hacernos sentir más vulnerables, lo que suele ser un punto de inflexión para buscar ayuda profesional. No te culpes si la idea de ver a un psicólogo ha estado rondando en tu mente durante mucho tiempo sin tomar la decisión, nunca es tarde para llamar."
                    />

                    <FAQItem
                        question="¿Cuánto tiempo dura la terapia y cuánta frecuencia se requiere?"
                        answer="La duración de la terapia no está predefinida. Depende de factores como la naturaleza de los problemas que se aborden, la frecuencia de las sesiones, la disposición del paciente, la calidad de la relación terapéutica y otros. Es importante considerar que alguien puede comenzar la terapia para abordar un problema específico y luego optar por continuar para trabajar en aspectos que surgen durante las sesiones y que no se habían planteado previamente. El terapeuta y el paciente evaluarán juntos el progreso y determinarán el momento adecuado para dar por finalizada la terapia."
                    />

                    <FAQItem
                        question="¿En qué consiste la terapia?"
                        answer={(
                            <div className="space-y-4">
                                <p>
                                    La terapia implica tomar consciencia de aspectos que tal vez no habías explorado en profundidad o que no habías abordado hasta ahora. Se trata de construir una relación consigo mismo más sana y compasiva, aprender a tomar decisiones, conocerse, respetarse, ser cada vez más consciente y vivir en coherencia con lo que uno es y quiere en la vida.
                                </p>
                                <p>
                                    Todo esto en un entorno seguro y construyendo un vínculo de apego seguro entre paciente y psicólogo.
                                </p>
                                <p>
                                    Trabajaremos aquellos aspectos que te están haciendo sufrir en la actualidad desde una perspectiva global y profunda, yendo a la raíz del problema. Siempre respetando el ritmo del paciente y hasta donde quiera y pueda llegar en cada momento.
                                </p>
                                <p>
                                    Se trabajará de la manera que sea más apropiada según el problema que se presente, el momento vital y capacidad que tenga la persona en ese momento.
                                </p>
                            </div>
                        )}
                    />

                    <FAQItem
                        question="¿Qué debo compartir en la primera sesión si no sé qué decir?"
                        answer={(
                            <div className="space-y-4">
                                <p>
                                    La terapia se lleva a cabo en un entorno seguro, y es importante tomarte tu tiempo para compartir lo que te sientas cómodo compartiendo, sin sentir la presión de revelar todo de inmediato. Es común que las personas que son nuevas en la terapia tengan preocupaciones sobre qué decir, ya que se trata de exponer su mundo privado, lo que puede despertar inseguridades, miedos y dudas.
                                </p>
                                <p>
                                    Se crea un entorno tranquilo y seguro que te permita expresarte a tu propio ritmo tanto en la primera sesión como en las siguientes. No hay prisa ni expectativas concretas sobre lo que debes o no debes compartir; es un proceso en el que cada persona marca sus propios tiempos.
                                </p>
                            </div>
                        )}
                    />

                    <FAQItem
                        question="Nunca he sido una persona que comparte sus problemas, ¿me sentiré cómodo haciéndolo?"
                        answer="El entorno terapéutico debe brindarte comodidad y seguridad para que puedas expresarte. La mayoría de las personas se sienten más aliviadas después de la primera sesión. Es importante que compartas todo lo que te sientas capaz de compartir con confianza. Estoy dispuesta a escuchar cualquier pregunta, duda, inquietud, sugerencia o queja que tengas. La sinceridad y la confianza son esenciales, por lo que incluso si no te sientes del todo cómodo, expresar tus sentimientos solo fortalecerá la relación terapéutica."
                    />

                    <FAQItem
                        question="¿Qué pasa si me quedo en silencio durante una sesión de terapia?"
                        answer="Como se mencionó anteriormente, en la terapia, tú marcas el ritmo. El respeto y la comprensión son fundamentales en todo momento. Si sientes que es apropiado quedarte en silencio en algún momento de la terapia, tienes la libertad de hacerlo."
                    />

                    <FAQItem
                        question="¿Me sentiré juzgado por lo que comparta?"
                        answer="El entorno terapéutico está diseñado para el paciente, un lugar donde puedes ser, sentir y expresar lo que necesites. No se te juzgará y se te transmitirá esta actitud desde el primer momento."
                    />
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

function FAQItem({ question, answer }: { question: string, answer: React.ReactNode }) {
    return (
        <div className="space-y-4 bg-white/50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-start gap-3">
                <span className="text-[#749B8F] mt-1 shrink-0">¿</span>
                <span>{question.replace(/^[¿?]/, '')}</span>
            </h3>
            <div className="text-gray-600 leading-relaxed pl-8">
                {answer}
            </div>
        </div>
    );
}
