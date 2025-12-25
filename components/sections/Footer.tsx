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

        {/* ========== WEBEXPRESS BADGE (SEO) ========== */}
        <motion.div 
          className="mt-12 pt-8 border-t"
          style={{ borderColor: `${siteConfig.colors.text}15` }}
          initial={FOOTER_CONFIG.animateOnScroll ? { opacity: 0, y: 20 } : {}}
          whileInView={FOOTER_CONFIG.animateOnScroll ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="text-center">
            <a 
              href="https://webexpress.net.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{ 
                backgroundColor: `${siteConfig.colors.primary}08`,
                border: `1px solid ${siteConfig.colors.primary}20`
              }}
              title="WebExpress - Sites Profissionais em 3 Dias"
            >
              {/* Ícone */}
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${siteConfig.colors.primary}15` }}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  style={{ color: siteConfig.colors.primary }}
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              
              {/* Texto */}
              <div className="text-left">
                <div 
                  className="text-[10px] font-medium uppercase tracking-wider opacity-50"
                  style={{ color: siteConfig.colors.text }}
                >
                  Site desenvolvido por
                </div>
                <div 
                  className="text-sm font-bold tracking-wide group-hover:tracking-wider transition-all"
                  style={{ color: siteConfig.colors.primary }}
                >
                  WebExpress
                </div>
              </div>
              
              {/* Seta */}
              <svg 
                className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: siteConfig.colors.primary }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            {/* Tagline */}
            <p 
              className="text-xs mt-3 opacity-40"
              style={{ color: siteConfig.colors.text }}
            >
              Seu site profissional em 3 dias • Hospedagem gratuita
            </p>
          </div>
        </motion.div>
        {/* ============================================ */}
      </Container>
    </footer>
  )
}