'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getWhatsAppLink } from '@/lib/utils'
import { siteConfig, template } from '@/lib/site-config'
import Image from 'next/image'

// ========== TIPOS ==========
type ContentPosition = 'left' | 'center' | 'right'
type OverlayStyle = 'dark' | 'gradient' | 'light' | 'colorful' | 'none'
type ButtonLayout = 'horizontal' | 'vertical'

// ========== CONFIGURAÇÕES ==========
const CTA_CONFIG = {
  // Imagem de fundo
  showBackgroundImage: true,
  backgroundImage: '/images/FAQ.png', // Coloque sua imagem aqui
  
  // Posição do conteúdo: 'left' | 'center' | 'right'
  contentPosition: 'center' as ContentPosition,
  
  // Overlay sobre a imagem: 'dark' | 'gradient' | 'light' | 'colorful' | 'none'
  overlayStyle: 'dark' as OverlayStyle,
  
  // Opacidade do overlay (0-100)
  overlayOpacity: 70,
  
  // Layout dos botões: 'horizontal' | 'vertical'
  buttonLayout: 'horizontal' as ButtonLayout,
  
  // Altura da seção
  minHeight: '500px', // ou 'auto', '60vh', '400px'
  
  // Padding vertical
  paddingY: 'py-20', // 'py-12' | 'py-16' | 'py-20' | 'py-32'
  
  // Efeito parallax na imagem
  parallaxEffect: false,
  
  // Mostrar segundo botão
  showSecondaryButton: false,
  
  // Textos em cor clara (para fundos escuros)
  lightText: true,
}
// ======================================================

export default function CTA() {
  if (!siteConfig.features.cta) return null

  const handleWhatsAppClick = () => {
    window.open(
      getWhatsAppLink(
        siteConfig.social.whatsapp || '', 
        siteConfig.cta.wppText
      ),
      '_blank'
    )
  }

  const handleContactClick = () => {
    window.location.href = '#contact'
  }

  // Classes de posicionamento do conteúdo
  const getContentPositionClasses = () => {
    const positions = {
      left: 'items-start text-left',
      center: 'items-center text-center',
      right: 'items-end text-right'
    }
    return positions[CTA_CONFIG.contentPosition]
  }

  // Classes de layout dos botões
  const getButtonLayoutClasses = () => {
    const layouts = {
      horizontal: 'flex-col sm:flex-row',
      vertical: 'flex-col'
    }
    return layouts[CTA_CONFIG.buttonLayout]
  }

  // Justificação dos botões baseado na posição
  const getButtonJustification = () => {
    const justifications = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end'
    }
    return justifications[CTA_CONFIG.contentPosition]
  }

  // Estilo do overlay
  const getOverlayStyle = () => {
    const opacity = CTA_CONFIG.overlayOpacity / 100

    switch (CTA_CONFIG.overlayStyle) {
      case 'dark':
        return {
          background: `rgba(0, 0, 0, ${opacity})`
        }
      case 'gradient':
        return {
          background: `linear-gradient(to right, rgba(0, 0, 0, ${opacity}) 0%, rgba(0, 0, 0, ${opacity * 0.5}) 100%)`
        }
      case 'light':
        return {
          background: `rgba(255, 255, 255, ${opacity})`
        }
      case 'colorful':
        return {
          background: `linear-gradient(135deg, ${siteConfig.colors.primary}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, ${siteConfig.colors.secondary}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 100%)`
        }
      case 'none':
        return { background: 'transparent' }
    }
  }

  // Cor do texto
  const getTextColor = () => {
    if (!CTA_CONFIG.showBackgroundImage) {
      return { color: siteConfig.colors.text }
    }
    return { color: CTA_CONFIG.lightText ? '#ffffff' : siteConfig.colors.text }
  }

  return (
    <section 
      className={`relative ${CTA_CONFIG.paddingY} flex items-center overflow-hidden`}
      style={{ 
        background: CTA_CONFIG.showBackgroundImage ? 'transparent' : siteConfig.colors.cta,
        minHeight: CTA_CONFIG.minHeight
      }}
    >
      {/* Imagem de Fundo */}
      {CTA_CONFIG.showBackgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={CTA_CONFIG.backgroundImage}
            alt="Background"
            fill
            className={`object-cover ${CTA_CONFIG.parallaxEffect ? 'transform scale-110' : ''}`}
            priority
            quality={90}
          />
          
          {/* Overlay */}
          <div 
            className="absolute inset-0 transition-all duration-300"
            style={getOverlayStyle()}
          />
        </div>
      )}

      {/* Conteúdo */}
      <Container className="relative z-10">
        <div className={`flex flex-col ${getContentPositionClasses()} gap-6`}>
          {/* Largura máxima do conteúdo */}
          <div className={`max-w-3xl space-y-6 ${CTA_CONFIG.contentPosition === 'center' ? 'mx-auto' : ''}`}>
            {/* Título */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={getTextColor()}
            >
              {siteConfig.cta.title}
            </h2>
            
            {/* Subtítulo */}
            <p 
              className="text-lg md:text-xl opacity-90"
              style={getTextColor()}
            >
              {siteConfig.cta.subtitle}
            </p>
            
            {/* Botões */}
            <div className={`flex ${getButtonLayoutClasses()} gap-4 ${getButtonJustification()} pt-4`}>
              {/* Botão Principal */}
              <Button 
                size="lg"
                /* className="hover:scale-105 transition-transform shadow-lg" */
                className="border-2 transition-all hover:scale-105 shadow-lg"
                style={{ 
                  /* backgroundColor: siteConfig.colors.primary,
                  color: 'white' */
                  borderColor: CTA_CONFIG.lightText ? 'white' : siteConfig.colors.primary,
                    color: CTA_CONFIG.lightText ? 'white' : siteConfig.colors.primary,
                    backgroundColor: 'transparent'
                }}
                onClick={handleWhatsAppClick}
              >
                {template.hero.ctaPrimary}
              </Button>
              
              {/* Botão Secundário */}
              {CTA_CONFIG.showSecondaryButton && (
                <Button 
                  size="lg"
                  className="border-2 transition-all hover:scale-105 shadow-lg"
                  style={{ 
                    borderColor: CTA_CONFIG.lightText ? 'white' : siteConfig.colors.primary,
                    color: CTA_CONFIG.lightText ? 'white' : siteConfig.colors.primary,
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = CTA_CONFIG.lightText ? 'white' : siteConfig.colors.primary
                    e.currentTarget.style.color = CTA_CONFIG.lightText ? siteConfig.colors.primary : 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = CTA_CONFIG.lightText ? 'white' : siteConfig.colors.primary
                  }}
                  onClick={handleContactClick}
                >
                  Enviar Mensagem
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Decoração adicional (opcional) */}
      {CTA_CONFIG.showBackgroundImage && (
        <>
          {/* Partículas/Pontos decorativos */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse" />
          <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full opacity-30 animate-pulse delay-100" />
          <div className="absolute bottom-16 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-200" />
        </>
      )}
    </section>
  )
}