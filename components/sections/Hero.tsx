'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig, template } from '@/lib/site-config'
import { getWhatsAppLink } from '@/lib/utils'

export default function Hero() {
  const handleAgendarClick = () => {
    window.location.href = '#contact'
  }

  const handleWhatsAppClick = () => {
    window.open(
      getWhatsAppLink(siteConfig.social.whatsapp || '', 'Olá! Gostaria de mais informações.'), 
      '_blank'
    )
  }

  const processTitle = (title: string) => {
    return title.split(/(<span>.*?<\/span>)/g).map((part, index) => {
      if (part.startsWith('<span>')) {
        const text = part.replace(/<\/?span>/g, '')
        return (
          <span key={index} style={{ color: siteConfig.colors.primary }}>
            {text}
          </span>
        )
      }
      return part
    })
  }

  const bgColor = siteConfig.colors.background || '#F8FAFC'

  return (
    <section id="home" className="py-20 md:py-32 overflow-hidden" style={{ background: `linear-gradient(to bottom right, ${bgColor}, white)` }}>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {processTitle(template.hero.title)}
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600">
                {template.hero.subtitle}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleAgendarClick}
                  style={{ backgroundColor: siteConfig.colors.primary }}
                  className="hover:opacity-90 transition-opacity transform hover:scale-105 duration-200"
                >
                  {template.hero.ctaPrimary}
                </Button>
                <Button 
                  size="lg"
                  className="border-2 transition-all transform hover:scale-105 duration-200"
                  style={{ 
                    borderColor: siteConfig.colors.primary,
                    color: siteConfig.colors.primary,
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${siteConfig.colors.primary}10`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                  onClick={handleWhatsAppClick}
                >
                  {template.hero.ctaSecondary}
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} direction="right">
            <div className="relative h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Imagem Hero
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}