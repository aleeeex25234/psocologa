"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Mail, Instagram, Facebook, Menu, X } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  if (pathname?.startsWith('/dashboard')) {
    return null
  }

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/Logo.png"
              alt="Elena Cervera Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold text-slate-800">Elena Cervera</span>
            <span className="text-xs text-slate-600">Psicóloga - Psicoterapeuta</span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-700 hover:text-[#749B8F] transition-colors py-2">Inicio</Link>
          <Link href="/sobre_mi" className="text-sm text-gray-700 hover:text-[#749B8F] transition-colors py-2">Sobre mí</Link>
          <Link href="/preguntas-frecuentes" className="text-sm text-gray-700 hover:text-[#749B8F] transition-colors py-2">Preguntas frecuentes</Link>
          <Link href="/contacto" className="text-sm text-gray-700 hover:text-[#749B8F] transition-colors py-2">Contacto</Link>
          <Link href="/politicas" className="text-sm text-gray-700 hover:text-[#749B8F] transition-colors py-2">Políticas</Link>
        </nav>

        {/* Social Icons and Email (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="mailto:elenacerverapsico@gmail.com" className="text-gray-600 hover:text-[#749B8F] transition-colors p-2">
            <Mail size={20} />
          </a>
          <a href="https://www.instagram.com/elenacervera.psicologa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#749B8F] transition-colors p-2">
            <Instagram size={20} />
          </a>
          <a href="https://m.facebook.com/ElenaCerveraPsico/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#749B8F] transition-colors p-2">
            <Facebook size={20} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=34645132766" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#749B8F] transition-colors p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link href="/" className="text-base text-gray-700 hover:text-[#749B8F] py-2" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/sobre_mi" className="text-base text-gray-700 hover:text-[#749B8F] py-2" onClick={() => setIsOpen(false)}>Sobre mí</Link>
          <Link href="/preguntas-frecuentes" className="text-base text-gray-700 hover:text-[#749B8F] py-2" onClick={() => setIsOpen(false)}>Preguntas frecuentes</Link>
          <Link href="/contacto" className="text-base text-gray-700 hover:text-[#749B8F] py-2" onClick={() => setIsOpen(false)}>Contacto</Link>
          <Link href="/politicas" className="text-base text-gray-700 hover:text-[#749B8F] py-2" onClick={() => setIsOpen(false)}>Políticas</Link>

          <div className="flex items-center gap-6 pt-4 border-t border-gray-100 mt-2">
            <a href="mailto:elenacerverapsico@gmail.com" className="text-gray-600 hover:text-[#749B8F]">
              <Mail size={24} />
            </a>
            <a href="https://www.instagram.com/elenacervera.psicologa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#749B8F]">
              <Instagram size={24} />
            </a>
            <a href="https://m.facebook.com/ElenaCerveraPsico/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#749B8F]">
              <Facebook size={24} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=34645132766" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#749B8F]">
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
      )}
    </header>
  )
}