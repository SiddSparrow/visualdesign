'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getWhatsAppLink } from '@/lib/utils'
import { siteConfig, template } from '@/lib/site-config'

export default function CTA() {
  const handleClick = () => {
    window.open(
      getWhatsAppLink(
        siteConfig.social.whatsapp || '', 
        template.type === 'barbeiro' ? 'Olá! Gostaria de agendar um horário.' :
        template.type === 'coach' ? 'Olá! Gostaria de conhecer o processo de coaching.' :
        'Olá! Gostaria de agendar uma consulta.'
      ),
      '_blank'
    )
  }

  const getTitle = () => {
    switch(template.type) {
      case 'barbeiro':
        return 'Pronto Para Renovar o Visual?'
      case 'coach':
        return 'Pronto Para Transformar Sua Vida?'
      case 'medico':
        return 'Cuide da Sua Saúde Agora'
      case 'psicologo':
        return 'Pronto Para Começar Sua Jornada?'
      default:
        return 'Entre em Contato'
    }
  }

  const getSubtitle = () => {
    switch(template.type) {
      case 'barbeiro':
        return 'Agende seu horário e venha viver a melhor experiência em cuidados masculinos.'
      case 'coach':
        return 'Agende sua sessão estratégica e comece hoje mesmo a construir o futuro que você deseja.'
      case 'medico':
        return 'Agende sua consulta e receba atendimento médico de qualidade.'
      case 'psicologo':
        return 'Agende sua primeira sessão e dê o primeiro passo rumo ao seu bem-estar emocional.'
      default:
        return 'Entre em contato e saiba mais.'
    }
  }

  return (
    <section 
      className="py-20 text-white"
      style={{ 
        background: `linear-gradient(to bottom right, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`
      }}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {getTitle()}
          </h2>
          <p className="text-xl opacity-90">
            {getSubtitle()}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 transition-colors"
              style={{ color: siteConfig.colors.primary }}
              onClick={handleClick}
            >
              {template.hero.ctaPrimary}
            </Button>
            <Button 
              size="lg"
              className="border-2 border-white text-white hover:bg-white transition-colors"
              style={{ borderColor: 'white',
                backgroundColor: 'transparent'
               }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = siteConfig.colors.primary
                e.currentTarget.style.backgroundColor = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
              onClick={() => window.location.href = '#contact'}
            >
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}