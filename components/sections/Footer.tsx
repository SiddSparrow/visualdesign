'use client'

import Container from '@/components/ui/Container'
import { siteConfig } from '@/lib/site-config'
import { Instagram, Facebook, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react'
import useProcessTitle from '@/hooks/templateFunctions'
import Image from 'next/image'
import { motion } from 'framer-motion'

// ========== CONFIGURAÇÕES ==========
const FOOTER_CONFIG = {
  // Animação ao aparecer
  animateOnScroll: true,
  
  // Mostrar logo
  showLogo: true,
  
  // Divisor decorativo
  showDivider: true,
}
// ======================================================

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    ...(siteConfig.features.blog ? [{ label: 'Blog', href: '#blog' }] : []),
    { label: 'Contato', href: '#contact' },
  ]

  const contactLinks = [
    ...(siteConfig.social.whatsapp ? [{ 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      href: `https://wa.me/${siteConfig.social.whatsapp.replace(/\D/g, '')}` 
    }] : []),
    ...(siteConfig.email ? [{ 
      icon: Mail, 
      label: 'E-mail', 
      href: `mailto:${siteConfig.email}` 
    }] : []),
    ...(siteConfig.phone ? [{ 
      icon: Phone, 
      label: 'Fone', 
      href: `tel:${siteConfig.phone.replace(/\D/g, '')}` 
    }] : []),
  ]

  const socialLinks = [
    ...(siteConfig.social.facebook ? [{ icon: Facebook, href: siteConfig.social.facebook, name: 'Facebook' }] : []),
    ...(siteConfig.social.instagram ? [{ icon: Instagram, href: siteConfig.social.instagram, name: 'Instagram' }] : []),
    ...(siteConfig.social.linkedin ? [{ icon: Linkedin, href: siteConfig.social.linkedin, name: 'LinkedIn' }] : []),
  ]

  return (
    <footer 
      className="relative py-16"
      style={{ backgroundColor: siteConfig.colors.footer }}
    >
      <Container>
        {/* Conteúdo Principal - Layout Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Logo */}
          <motion.div
            initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0, y: 20 } : {}}
            whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            {FOOTER_CONFIG.showLogo && siteConfig.logo && (
              <Image
                src={siteConfig.logo}
                alt="Logo"
                width={300}
                height={90}
                className="transition-all duration-300 hover:scale-105"
                priority
              />
            )}
          </motion.div>

          {/* Coluna 2: Navegação */}
          <motion.div
            initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0, y: 20 } : {}}
            whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: siteConfig.colors.primary }} />
                </svg>
              </div>
              <h4 
                className="font-semibold text-lg uppercase tracking-wider"
                style={{ color: siteConfig.colors.text }}
              >
                Navegue
              </h4>
            </div>
            
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0, x: -10 } : {}}
                  whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 1, x: 0 } : {}}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a 
                    href={link.href}
                    className="text-base hover:translate-x-2 transition-all duration-300 inline-block opacity-70 hover:opacity-100"
                    style={{ color: siteConfig.colors.text }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3: Contato */}
          <motion.div
            initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0, y: 20 } : {}}
            whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
              >
                <MessageCircle size={20} style={{ color: siteConfig.colors.primary }} />
              </div>
              <h4 
                className="font-semibold text-lg uppercase tracking-wider"
                style={{ color: siteConfig.colors.text }}
              >
                Contato
              </h4>
            </div>
            
            <ul className="space-y-3">
              {contactLinks.map((contact, index) => (
                <motion.li 
                  key={index}
                  initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0, x: -10 } : {}}
                  whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 1, x: 0 } : {}}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a 
                    href={contact.href}
                    className="text-base hover:translate-x-2 transition-all duration-300 inline-block opacity-70 hover:opacity-100"
                    style={{ color: siteConfig.colors.text }}
                    target={contact.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={contact.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  >
                    {contact.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divisor */}
        {FOOTER_CONFIG.showDivider && (
          <motion.div 
            className="h-px mb-8"
            style={{ backgroundColor: `${siteConfig.colors.text}20` }}
            initial={FOOTER_CONFIG.animateOnScroll ? { scaleX: 0 } : {}}
            whileInView={FOOTER_CONFIG.animateOnScroll ? { scaleX: 1 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        )}

        {/* Rodapé Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p 
            className="text-sm opacity-60 order-2 md:order-1"
            style={{ color: siteConfig.colors.text }}
            initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0 } : {}}
            whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 0.6 } : {}}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </motion.p>

          {/* Redes Sociais */}
          {socialLinks.length > 0 && (
            <motion.div 
              className="flex gap-4 order-1 md:order-2"
              initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0 } : {}}
              whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 1 } : {}}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: `${siteConfig.colors.primary}15`,
                    color: siteConfig.colors.text 
                  }}
                  whileHover={{ 
                    backgroundColor: siteConfig.colors.primary,
                    color: '#ffffff'
                  }}
                  initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0, scale: 0 } : {}}
                  whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 1, scale: 1 } : {}}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </Container>
    </footer>
  )
}