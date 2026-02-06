import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink, Instagram, Facebook, Users } from "lucide-react";

export default function Contacto() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
                <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
                    Contacto
                </h1>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
                    {/* Info Side */}
                    <div className="space-y-12">
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <MapPin size={24} className="md:w-7 md:h-7" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Ubicaciones</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-[#749B8F]/5 p-6 rounded-xl border-l-4 border-[#749B8F]">
                                    <p className="font-bold text-gray-800">Consulta 1</p>
                                    <p>Calle Pedro IV El Ceremonioso, 11, 4ºC</p>
                                    <p className="text-sm opacity-70">Zaragoza, España</p>
                                </div>
                                <div className="bg-[#749B8F]/5 p-6 rounded-xl border-l-4 border-[#749B8F]">
                                    <p className="font-bold text-gray-800">Consulta 2</p>
                                    <p>Calle Tomás Bretón, 44 Pral. Dcha</p>
                                    <p className="text-sm opacity-70">Zaragoza, España</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Phone size={24} className="md:w-7 md:h-7" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Teléfono</h2>
                            </div>
                            <a
                                href="tel:+34645132766"
                                className="block bg-white shadow-sm border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow text-xl font-bold text-gray-700"
                            >
                                +34 645 13 27 66
                            </a>
                        </section>

                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Mail size={24} className="md:w-7 md:h-7" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Email</h2>
                            </div>
                            <a
                                href="mailto:elenacerverapsico@gmail.com"
                                className="block bg-white shadow-sm border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow text-lg font-bold text-gray-700 break-words"
                            >
                                elenacerverapsico@gmail.com
                            </a>
                        </section>
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-[#749B8F]">
                                <Users size={28} />
                                <h2 className="text-2xl font-bold text-gray-800">Redes Sociales</h2>
                            </div>
                            <div className="flex gap-4">
                                <SocialLink
                                    href="https://www.instagram.com/elenacervera.psicologa/"
                                    icon={<Instagram size={24} />}
                                    label="Instagram"
                                />
                                <SocialLink
                                    href="https://m.facebook.com/ElenaCerveraPsico/"
                                    icon={<Facebook size={24} />}
                                    label="Facebook"
                                />
                                <SocialLink
                                    href="https://api.whatsapp.com/send?phone=34645132766"
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                            <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0 1 0v1a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1" />
                                        </svg>
                                    }
                                    label="WhatsApp"
                                />
                            </div>
                        </section>
                    </div>

                    {/* Maps Side */}
                    <div className="space-y-8">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[300px] relative group">
                            <iframe
                                src="https://maps.google.com/maps?q=C.%20de%20Pedro%20IV%2C%2011%2C%20Zaragoza%2C%20Spain&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                Consulta 1
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[300px] relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.670238122345!2d-0.8967406234914946!3d41.64122397126889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914e13da36577%3A0x6b498f3af50529d5!2sC.%20de%20Tom%C3%A1s%20Bret%C3%B3n%2C%2044%2C%2049005%20Zaragoza!5e0!3m2!1ses!2ses!4v1710382100000!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                Consulta 2
                            </div>
                        </div>
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

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white shadow-sm border border-gray-100 p-4 rounded-xl hover:shadow-md hover:text-[#749B8F] transition-all group"
            title={label}
        >
            {icon}
        </a>
    );
}
