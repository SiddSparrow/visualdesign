'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/lib/site-config'
import { menu } from 'framer-motion/client'
import { MenuItemBuilder } from 'sanity/structure'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ]

  if(siteConfig.features.blog) {
    menuItems.splice(3, 0, { label: 'Blog', href: '#blog' })
  }
  let logo = false;
  if(siteConfig.logo != '') logo = true;
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {logo && (
            <Image
              src={siteConfig.logo}
              alt="Logo" 
              width={70} //configurar manualmente conforme necessidade
              height={100}
              /* className="object-contain h-10 w-auto max-w-[150px]"  */// Classes adicionadas
              priority
            />
          )}
              
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 transition-colors"
                style={{
                  '--hover-border-color': { color: siteConfig.colors.primary }
                }as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = siteConfig.colors.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#374151'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: siteConfig.colors.primary }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
         <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.4, 0, 0.2, 1] // Curva de animação suave
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.2,
                      delay: index * 0.05, // Cada item aparece com um pequeno delay
                      ease: 'easeOut'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = siteConfig.colors.primary
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#374151'
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  )
}