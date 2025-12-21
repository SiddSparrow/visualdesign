'use client'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { template, siteConfig } from '@/lib/site-config'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useHandleWhatsAppClick } from '@/hooks/templateFunctions'

// ========== TIPOS ==========
type LayoutStyle = 'grid-4' | 'grid-3' | 'masonry' | 'featured'
type OverlayStyle = 'gradient' | 'dark' | 'colorful' | 'minimal'
type HoverEffect = 'zoom' | 'slide' | 'fade' | 'lift'

// ========== CONFIGURAÇÕES ==========
const BARBERSHOP_CONFIG = {
  // Layout: 'grid-4' | 'grid-3' | 'masonry' | 'featured'
  layout: 'grid-4' as LayoutStyle,
  
  // Estilo do overlay: 'gradient' | 'dark' | 'colorful' | 'minimal'
  overlayStyle: 'gradient' as OverlayStyle,
  
  // Efeito no hover: 'zoom' | 'slide' | 'fade' | 'lift'
  hoverEffect: 'zoom' as HoverEffect,
  
  // Altura dos cards (em pixels)
  cardHeight: 400,
  
  // Mostrar botão "Saiba mais"
  showButton: true,
  
  // Mostrar preço (se disponível)
  showPrice: false,
  
  // Animação nos cards
  animateCards: true,
  
  // Bordas arredondadas
  roundedCorners: 'xl', // 'none' | 'lg' | 'xl' | '2xl' | '3xl'
  
  // ===== IMAGENS DOS SERVIÇOS =====
  // Adicione os caminhos das suas imagens aqui
  serviceImages: {
    'corte': '/images/corte_1.jpg',
    'barba': '/images/barba_1.jpg',
    'corte-barba': {
      main: '/images/corte_2.jpg',
      secondary: '/images/barba_2.jpg'
    },
    'tratamento': '/images/tratamento.jpg',
    'default': '/images/services/placeholder.jpg'
  }
}
// ======================================================

export default function BarbershopServices() {
  
  // Mapeia os serviços com suas imagens
  const getServiceImage = (serviceId: string, serviceTitle: string) => {
    const images = BARBERSHOP_CONFIG.serviceImages as any
    
    // Tenta encontrar por ID exato
    if (images[serviceId]) return images[serviceId]
    
    // Tenta encontrar por palavras-chave no título
    const titleLower = serviceTitle.toLowerCase()
    
    if (titleLower.includes('corte') && titleLower.includes('barba')) {
      return images['corte-barba']
    }
    if (titleLower.includes('corte')) return images['corte']
    if (titleLower.includes('barba')) return images['barba']
    if (titleLower.includes('tratamento')) return images['tratamento']
    
    return images['default']
  }

  const getOverlayClasses = () => {
    switch (BARBERSHOP_CONFIG.overlayStyle) {
      case 'gradient':
        return 'bg-gradient-to-t from-black via-black/60 to-transparent'
      case 'dark':
        return 'bg-black/50'
      case 'colorful':
        return 'bg-gradient-to-br from-purple-900/80 via-black/70 to-blue-900/80'
      case 'minimal':
        return 'bg-black/30'
    }
  }

  const getHoverClasses = () => {
    switch (BARBERSHOP_CONFIG.hoverEffect) {
      case 'zoom':
        return 'group-hover:scale-110'
      case 'slide':
        return 'group-hover:translate-y-[-10px]'
      case 'fade':
        return 'group-hover:opacity-70'
      case 'lift':
        return 'group-hover:scale-105'
    }
  }

  const getGridClasses = () => {
    switch (BARBERSHOP_CONFIG.layout) {
      case 'grid-4':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
      case 'grid-3':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-4 gap-6'
      case 'featured':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    }
  }

  const roundedMap = {
    'none': 'rounded-none',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  }

  return (
    <section id="services" className="py-20" style={{backgroundColor: siteConfig.colors.services}}>
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{color: siteConfig.colors.text}}
            >
              {siteConfig.services.title}
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{color: siteConfig.colors.text}}
            >
              {siteConfig.services.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className={getGridClasses()}>
          {template.services.services.map((service, index) => {
            const serviceImage = getServiceImage(service.id, service.title)
            const isDoubleImage = typeof serviceImage === 'object' && serviceImage.main
            
            return (
              <FadeIn key={service.id} delay={BARBERSHOP_CONFIG.animateCards ? 0.1 * (index + 1) : 0}>
                <div 
                  className={`group relative overflow-hidden ${roundedMap[BARBERSHOP_CONFIG.roundedCorners as keyof typeof roundedMap]} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
                  style={{ height: BARBERSHOP_CONFIG.cardHeight }}
                >
                  {/* Imagem de Fundo */}
                  {!isDoubleImage ? (
                    <div className="absolute inset-0">
                      <Image
                        src={serviceImage as string}
                        alt={service.title}
                        fill
                        className={`object-cover transition-all duration-700 ${getHoverClasses()}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  ) : (
                    // Duas imagens sobrepostas para "Corte + Barba"
                    <>
                      <div className="absolute inset-0">
                        <Image
                          src={serviceImage.main}
                          alt={service.title}
                          fill
                          className={`object-cover transition-all duration-700 ${getHoverClasses()}`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <Image
                          src={serviceImage.secondary}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                    </>
                  )}

                  {/* Overlay */}
                  <div className={`absolute inset-0 ${getOverlayClasses()} transition-all duration-500`} />

                  {/* Conteúdo */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    {/* Indicador de serviço combo (se for duplo) */}
                    {isDoubleImage && (
                      <div className="absolute top-4 right-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                          style={{ backgroundColor: siteConfig.colors.primary }}
                        >
                          Combo
                        </span>
                      </div>
                    )}

                    {/* Título */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                      {service.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-sm md:text-base text-white/90 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {service.description}
                    </p>

                    {/* Preço (se habilitado e disponível) */}
                    {BARBERSHOP_CONFIG.showPrice && (
                      <div className="text-xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Consulte nossos preços
                      </div>
                    )}

                    {/* Botão */}
                    {BARBERSHOP_CONFIG.showButton && (
                      <button 
                        onClick={useHandleWhatsAppClick}
                        className="flex items-center gap-2 font-semibold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: siteConfig.colors.primary }}
                      >
                        Consulte nossos preços
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}

                    {/* Barra decorativa */}
                    <div 
                      className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: siteConfig.colors.primary }}
                    />
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}