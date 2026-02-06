import Image from "next/image";
import Link from "next/link";
import { Heart, Search, Smile, Users, MessageCircle, Phone, Mail, Instagram, Facebook, Linkedin, Quote, Coffee, HelpCircle, Leaf, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F60_0%,_transparent_95%)] bg-white font-sans text-gray-700 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="order-2 md:order-1 space-y-4">
            <h1 className="font-sans text-4xl md:text-4xl font-bold text-gray-800 tracking-tight">
              Hola, soy Elena Cervera
            </h1>
            <h2 className="font-bold text-2xl md:text-2xl text-[#749B8F]">
              Psicóloga sanitaria y Psicoterapeuta Integrativa
            </h2>
            <p className="text-base md:text-base leading-relaxed">
              Desde 2003 acompañando en procesos de psicoterapia y crecimiento personal, con confianza, compromiso y dedicación.
            </p>
            <p className="text-base md:text-base leading-relaxed">
              Reconociendo la singularidad de cada persona y acompañándola en la búsqueda de claridad y bienestar.
            </p>
            <p className="text-base md:text-base leading-relaxed">
              Comprometida con una formación teórica continuada y un trabajo personal, para poder acompañar de la mejor manera, con respeto y profesionalidad.
            </p>
          </div>

          {/* Photo - Right */}
          <div className="order-1 md:order-2 flex justify-end">
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
              <Image
                src="/foto_elena.jpeg"
                alt="Elena Cervera"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
          ¿En qué te ayudaré?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <ServiceItem icon={<Heart className="text-white" size={32} />} title="Psicoterapia" />
          <ServiceItem icon={<Search className="text-white" size={32} />} title="Evaluación y diagnóstico" />
          <ServiceItem icon={<Smile className="text-white" size={32} />} title="Supervisión de profesionales" />
          <ServiceItem icon={<Users className="text-white" size={32} />} title="Apoyo y orientación" />
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-transparent py-20 px-4 md:px-6 overflow-x-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">

          {/* Title - Shows first on mobile, second column on desktop */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-10 order-1 lg:order-2">
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Metodología entre sesiones <span className="text-[#749B8F]">conmigo</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify order-3 lg:order-2">
              <p>
                Es importante que la persona que vaya a terapia sepa que <strong className="font-semibold text-gray-700">"plan de ruta"</strong> vamos a llevar. Para que la intervención sea eficaz, es de vital importancia realizar una evaluación exhaustiva.
              </p>
              <p>
                Gracias a esa evaluación sabremos sobre qué aspectos tendremos que aplicar el tratamiento. Tan importante como el tratamiento será la <strong className="font-semibold text-gray-700">prevención de recaídas</strong>. Ello hará que no volvamos a sufrir el mismo problema y nos dará habilidades para poder ser un poco más felices.
              </p>
              <p>
                Un aspecto fundamental para cambiar aquello que nos preocupa, será también las <strong className="font-semibold text-gray-700">tareas para casa</strong>. Aprovecharemos para poner en práctica aquello que hemos aprendido en terapia y consolidar los avances en tu día a día.
              </p>
            </div>
          </div>

          {/* Timeline - Shows second on mobile, first column on desktop */}
          <div className="relative pl-0 md:pl-4 order-2 lg:order-1">
            {/* Vertical Line - Centered relative to circles (w-12 mobile=24px center, w-16 desktop=32px center) */}
            <div className="absolute left-6 md:left-[48px] top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#749B8F]/30 z-0"></div>

            <div className="space-y-12 relative z-10">
              {/* Node 1 */}
              <div className="flex gap-4 md:gap-8 items-start group">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#749B8F] flex items-center justify-center relative z-20 shadow-sm">
                  <span className="text-2xl md:text-3xl font-bold text-[#749B8F]">1</span>
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-2 text-lg">Sesión Inicial</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Nos conocemos y ponemos sobre la mesa aquello que nos preocupa. Establecemos las bases de la relación terapéutica.
                  </p>
                </div>
              </div>

              {/* Node 2 */}
              <div className="flex gap-4 md:gap-8 items-start group">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#749B8F] flex items-center justify-center relative z-20 shadow-sm">
                  <span className="text-2xl md:text-3xl font-bold text-[#749B8F]">2</span>
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-2 text-lg">Evaluación</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Evaluamos y analizamos en profundidad el problema. Para poder hacer una buena intervención y diseñar un plan eficaz.
                  </p>
                </div>
              </div>

              {/* Node 3 */}
              <div className="flex gap-4 md:gap-8 items-start group">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#749B8F] flex items-center justify-center relative z-20 shadow-sm">
                  <span className="text-2xl md:text-3xl font-bold text-[#749B8F]">3</span>
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-2 text-lg">Intervención</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Empezamos el tratamiento. Una pequeña parte didáctica y sobretodo práctica. Aplicamos técnicas para mejorar tu bienestar.
                  </p>
                </div>
              </div>

              {/* Node 4 */}
              <div className="flex gap-4 md:gap-8 items-start group">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#749B8F] flex items-center justify-center relative z-20 shadow-sm">
                  <span className="text-2xl md:text-3xl font-bold text-[#749B8F]">4</span>
                </div>
                <div className="pt-1 md:pt-2">
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-2 text-lg">Prevenir Recaídas</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Anticipar y afrontar problemas que tuvimos para no volver a caer en ellos. Te dotamos de autonomía futura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Buttons CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <CTAButton text="¿A qué me enfrentaré en terapia?" href="/a-que-me-enfrentare-en-terapia" />
          <CTAButton text="¿Quieres empezar ya?" href="/contacto" />
          <CTAButton text="¿Qué es la supervisión de profesionales?" href="/supervision-de-profesionales" />
          <CTAButton text="Cómo saber si debería empezar" href="/como-saber-si-deberia-empezar" />
        </div>
      </section>

      {/* Mente Section - Abstract & Reflective */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xs md:max-w-sm h-40 md:h-64 mb-6 md:mb-8">
            <Image
              src="/mente.png"
              alt="Mente y claridad"
              fill
              className="object-contain opacity-80"
            />
          </div>
          <div className="text-center max-w-xl">
            <p className="font-serif italic text-lg md:text-2xl text-gray-500 leading-relaxed">
              "Desenredar el ovillo de la mente no es borrar el pasado, sino aprender a caminar entre sus hilos con claridad y compasión."
            </p>
            <div className="w-10 h-0.5 bg-[#749B8F]/20 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Extra Questions Section - Transparent background to show main gradient */}
      <section className="w-full bg-transparent py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center space-y-4">
              <Link href="/psicoterapia-integrativa">
                <h3 className="font-sans text-2xl md:text-3xl text-gray-700 font-bold underline decoration-[#749B8F] decoration-2 underline-offset-8 hover:text-[#749B8F] transition-colors cursor-pointer">
                  ¿Qué es la Psicoterapia <br /> Integrativa?
                </h3>
              </Link>
            </div>
            <div className="text-center space-y-4 relative">
              <Link href="/psicoterapia-individual">
                <h3 className="font-sans text-2xl md:text-3xl text-gray-700 font-bold underline decoration-[#749B8F] decoration-2 underline-offset-8 hover:text-[#749B8F] transition-colors cursor-pointer">
                  ¿Qué es la Psicoterapia <br /> individual?
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 py-8">
          <div className="h-px bg-gray-200 flex-grow max-w-[100px]"></div>
          <div className="w-2 h-2 rounded-full bg-[#749B8F]/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#749B8F]/50"></div>
          <div className="w-2 h-2 rounded-full bg-[#749B8F]/30"></div>
          <div className="h-px bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
      </div>

      {/* Quote Section - Transparent background to show main gradient */}
      <section className="w-full bg-transparent py-20 relative">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white p-8 md:p-16 rounded-[2rem] shadow-sm border border-[#749B8F]/10 text-center relative z-10 transition-transform hover:scale-[1.01] duration-500">
            <Quote className="mx-auto text-[#749B8F]/40 mb-6 md:mb-8 rotate-180" size={40} fill="currentColor" />
            <p className="font-serif italic text-xl md:text-3xl text-gray-700 leading-relaxed mb-6 md:mb-8">
              "Si cuidas tu mente, tu mente cuidará de ti. Es tan importante atender lo que sentimos como lo que nos duele"
            </p>
            <div className="w-16 h-0.5 bg-[#749B8F]/30 mx-auto mb-6"></div>
            <p className="text-[#749B8F] text-sm tracking-[0.2em] uppercase font-bold">Thich Nhat Hanh</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#4A635D] text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo & Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col mb-4">
              <h4 className="font-serif text-lg font-bold">Elena Cervera</h4>
              <p className="text-sm opacity-80">Psicóloga - Psicoterapeuta</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/elenacervera.psicologa/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://m.facebook.com/ElenaCerveraPsico/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=34645132766" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all">
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
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h5 className="font-bold mb-2">Navegación</h5>
            <FooterLink href="/">Inicio</FooterLink>
            <FooterLink href="/sobre_mi">Sobre mí</FooterLink>
            <FooterLink href="/preguntas-frecuentes">Preguntas frecuentes</FooterLink>
            <FooterLink href="/contacto">Contacto</FooterLink>
            <FooterLink href="/politicas">Políticas</FooterLink>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h5 className="font-bold mb-2">Contacto</h5>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} />
              <span>elenacerverapsico@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} />
              <span>+34 645 13 27 66</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 mt-16 pt-8 border-t border-white/10 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Elena Cervera. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

// Components
function ServiceItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center text-center group cursor-default">
      <div className="w-20 h-20 bg-[#749B8F] rounded-full flex items-center justify-center mb-6 shadow-md transform transition-transform group-hover:scale-110 group-hover:bg-[#63857a]">
        {icon}
      </div>
      <h3 className="font-sans text-sm md:text-base font-bold text-gray-700 leading-tight uppercase tracking-wider">
        {title}
      </h3>
    </div>
  );
}

function CTAButton({ text, href = "#" }: { text: string; href?: string }) {
  return (
    <Link
      href={href}
      className="w-full bg-[#749B8F] text-white py-6 md:py-8 px-6 rounded-lg text-center font-sans font-bold text-base md:text-xl shadow-lg hover:bg-[#63857a] hover:shadow-xl transition-all duration-300"
    >
      {text}
    </Link>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all">
      <Icon size={20} />
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all">
      {children}
    </Link>
  );
}
