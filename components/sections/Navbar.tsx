'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/lib/site-config'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="text-xl font-bold"
            style={{ color: siteConfig.colors.primary }}
          >
            {siteConfig.name}
          </div>

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
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
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
        )}
      </Container>
    </nav>
  )
}