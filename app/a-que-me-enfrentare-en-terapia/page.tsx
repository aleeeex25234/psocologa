import Link from "next/link";
import { Coffee } from "lucide-react";

export default function EnfrentareTerapia() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-24">
                <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
                    <Coffee className="text-[#749B8F] mb-4" size={48} />
                    <h1 className="font-sans text-2xl md:text-5xl font-bold text-gray-800">
                        ¿A qué me enfrentaré en terapia?
                    </h1>
                </div>

                <div className="space-y-6 md:space-y-8 text-gray-600 leading-relaxed text-sm md:text-lg">
                    <section className="bg-white/50 p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6 text-justify">
                        <p>
                            En nuestra primera sesión, escucharé el motivo que te ha llevado a terapia y exploraremos tus áreas vitales junto con tus experiencias previas relacionadas con el malestar. Juntos acordaremos los objetivos de la intervención, los cuales iremos adaptando y concretando a medida que avanzamos en el proceso.
                        </p>
                        <p>
                            Acompañaré tus emociones para guiar cada paso de manera efectiva. La cantidad y frecuencia de las sesiones dependerán de diversos factores, con la meta de ayudarte a recuperar el bienestar de tu vida lo antes posible.
                        </p>
                        <p>
                            En terapia, abordaremos emociones y situaciones que a menudo pueden resultar dolorosas, pero lo haremos desde un entorno seguro, con una aceptación incondicional, permitiéndote sentirte cuidado para expresarte con total libertad.
                        </p>
                        <p>
                            No te preocupes si no has ido nunca a terapia; el primer paso hacia tu cambio personal es el que más cuesta, pero si estás leyendo esto ya estás cerca, estás a punto de descubrir las capacidades que llevas dentro.
                        </p>
                        <p className="text-center pt-8 border-t border-gray-100 italic font-serif text-xl text-[#749B8F]">
                            "Te escucharé con atención plena para acompañarte en tu proceso terapeútico de la mejor manera posible."
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
