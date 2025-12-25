import { TemplateConfig } from '@/types/templates'

export const arquitetoTemplate: TemplateConfig = {
  name: 'Visual Design Arquitetura',
  logo: '/images/logo.png', // Adicionei logo para consistência
  type: 'arquiteto',
  colors: {
    navbar: 'transparent',

    services: '#1A1A1A',
    about: '#161616',
    testimonials: '#161616',
    faq: '#1A1A1A',
    cta: '#0F0F0F',
    contact: '#161616',
    footer: '#0F0F0F',
    blog: '#1A1A1A',

    // Cores principais
    primary: '#B87333',     // Bronze / cobre
    secondary: '#3A3A3A',   // Grafite
    accent: '#bebebeff',
    background: '#0F0F0F',
    text: '#E5E5E5',

    // Estados
    active: '#C0843D',
  },
  foto_perfil: '/images/about.jpg',
  foto_geral: '/images/hero.png',
  foto_faq: '/images/FAQ_2.png',
  features: {
    blog: false, // Ativar/desativar blog
    testimonials: true,
    faq: true,
    newsletter: false,
    cta: true,
    location: true
  },
  hero: {
    title: 'Transformamos espaços em experiências',
    subtitle: 'Arquitetura inovadora e personalizada para valorizar seu imóvel',
    ctaPrimary: 'Solicite Orçamento',
    ctaSecondary: 'WhatsApp'
  },
  services: {
    title: 'Projetos que transformam espaços em experiências',
    subtitle: 'Do conceito inicial à entrega final, cuidamos de cada detalhe com expertise e sensibilidade.',
    services: [
      {
        id: '1',
        icon: 'Layout', // Ou "Home" para representar projeto completo
        title: 'Projeto Residencial Completo',
        description: 'Criação de ambientes personalizados que refletem seu estilo de vida, do living ao quarto.'
      },
      {
        id: '2',
        icon: 'Briefcase', // Ou "Building" para comercial
        title: 'Design Comercial',
        description: 'Ambientes corporativos que inspiram produtividade e transmitem a identidade da sua marca.'
      },
      {
        id: '3',
        icon: 'Palette', // Para cores e acabamentos
        title: 'Consultoria de Cores & Acabamentos',
        description: 'Seleção de paletas, materiais e texturas que harmonizam com sua visão e orçamento.'
      },
      {
        id: '4',
        icon: 'Sofa', // Ou "Chair" para mobiliário
        title: 'Seleção de Mobiliário',
        description: 'Curadoria de peças exclusivas que combinam conforto, estilo e funcionalidade.'
      },
      {
        id: '5',
        icon: 'Layers', // Para projetos de iluminação
        title: 'Projeto de Iluminação',
        description: 'Cenários luminotécnicos que valorizam a arquitetura e criam a atmosfera ideal para cada momento.'
      },
      {
        id: '6',
        icon: 'Ruler', // Para plantas e medidas
        title: 'Layout & Otimização de Espaços',
        description: 'Soluções inteligentes para aproveitar cada centímetro, criando fluidez e organização.'
      }
    ]
  },
  about: {
    title: "Sobre a Corleone's",
    description: [
      'Há mais de 15 anos no mercado de São Paulo, oferecemos uma experiência única que combina tradição e modernidade. Desde 2009, preservamos a arte da barbearia clássica enquanto incorporamos as últimas tendências masculinas.',
      'Nossa equipe é formada por 8 barbeiros qualificados, todos certificados e com formação contínua no SENAC e cursos especializados. Cada profissional possui no mínimo 5 anos de experiência e passa por treinamentos trimestrais para dominar as técnicas mais recentes.'
    ],
    credentials: [
      { icon: 'Award', title: '15 Anos', description: 'De tradição e excelência desde 2009' },
      { icon: 'Star', title: '5.0', description: 'Avaliação no Google (1.247 avaliações)' },
      { icon: 'Users', title: '10.500+', description: 'Clientes fiéis cadastrados' },
      {
        icon: "Scissors",
        title: "45.000+",
        description: "Cortes realizados com perfeição"
      },
      {
        icon: "MapPin",
        title: "3 Unidades",
        description: "São Paulo, Campinas e Santos"
      },
      {
        icon: "Heart",
        title: "100%",
        description: "Satisfação garantida ou cortamos novamente"
      }
    ]
  },
  testimonials: {
    title: 'Histórias que Inspiram',
    subtitle: 'Depoimentos de clientes que transformaram seus espaços conosco.',
    testimonials: [
      {
        id: '1',
        name: 'Ana Costa',
        role: 'Proprietária de Apartamento',
        content: 'O apartamento ganhou vida! A equipe capturou exatamente o estilo que imaginava, mas não sabia como executar. Cada detalhe foi pensado com carinho.',
        rating: 5
      },
      {
        id: '2',
        name: 'Roberto Martins',
        role: 'CEO - TechStart',
        content: 'Nosso escritório agora é um diferencial competitivo. O projeto não só impressiona clientes, mas aumentou a produtividade da equipe em 40%.',
        rating: 5
      },
      {
        id: '3',
        name: 'Fernanda Oliveira',
        role: 'Proprietária de Loja',
        content: 'A loja triplicou as vendas após a reforma. O design criou uma experiência de compra que os clientes adoram e sempre comentam.',
        rating: 5
      },
      {
        id: '4',
        name: 'Marcos Silva',
        role: 'Arquiteto Parceiro',
        content: 'Trabalho em parceria há 3 anos. A sensibilidade para cores e materiais deles complementa perfeitamente minha arquitetura.',
        rating: 5
      },
      {
        id: '5',
        name: 'Isabela Rocha',
        role: 'Proprietária de Restaurante',
        content: 'Criaram a atmosfera perfeita para meu restaurante. Os clientes ficam mais tempo, pedem mais e sempre tiram fotos do ambiente.',
        rating: 5
      }
    ]
  },
  cta: {
    title: 'Pronto para transformar seu espaço sob medida?',
    subtitle: 'Somos especialistas em projetos de arquitetura únicos e personalizados, feitos sob medida para você. Garanta um design exclusivo que combinasofisticação, funcionalidade e inovação.',
    wppText: 'Olá! Gostaria de fazer um orçamento.'
  },
  faq: {
    text: 'Tire suas dúvidas sobre projetos, prazos e nosso processo de trabalho.',
    questions: [
      {
        id: '1',
        question: 'Como funciona o processo de um projeto arquitetônico?',
        answer: 'Nosso processo segue 4 etapas principais: 1) Briefing e análise do espaço, 2) Estudo preliminar e conceito, 3) Desenvolvimento do projeto executivo, 4) Acompanhamento da obra. Cada fase tem entregas claras e validação com o cliente.'
      },
      {
        id: '2',
        question: 'Quanto tempo leva para desenvolver um projeto completo?',
        answer: 'O prazo varia conforme a complexidade: apartamentos (4-6 semanas), casas (8-12 semanas), projetos comerciais (6-10 semanas). Após aprovado o conceito, desenvolvemos o projeto executivo em 3-4 semanas.'
      },
      {
        id: '3',
        question: 'Vocês acompanham a execução da obra?',
        answer: 'Sim, oferecemos pacotes completos que incluem visitas técnicas periódicas, compatibilização de projetos, aprovação de amostras e fiscalização da execução para garantir fidelidade ao projeto original.'
      },
      {
        id: '4',
        question: 'Quais documentos são necessários para iniciar um projeto?',
        answer: 'Precisamos da planta existente (se houver), memorial descritivo das necessidades, levantamento de medidas e, em alguns casos, fotos do local. Para construções novas, é necessário o terreno regularizado.'
      },
      {
        id: '5',
        question: 'Trabalham com projetos em outras cidades?',
        answer: 'Sim, atendemos projetos em todo o Brasil através de metodologia híbrida: visitas presenciais estratégicas combinadas com acompanhamento remoto via plataforma digital, reuniões online e relatórios fotográficos.'
      },
      {
        id: '6',
        question: 'Como é calculado o honorário do arquiteto?',
        answer: 'Nossos honorários podem ser calculados por: 1) Percentual do valor da obra, 2) Metragem quadrada do projeto, ou 3) Valor fixo por etapa. Oferecemos uma proposta detalhada após entender a complexidade do seu projeto.'
      },
      {
        id: '7',
        question: 'Vocês emitem ART?',
        answer: 'Sim, todos nossos projetos são acompanhados de Anotação de Responsabilidade Técnica (ART) registrada no CREA, garantindo segurança jurídica e conformidade com as normas técnicas.'
      }
    ]
  },
  blog: {
    enabled: false,
    title: 'Dicas de Estilo e Cuidados',
    subtitle: 'Artigos sobre tendências masculinas, cuidados com a barba e muito mais.',
    openInNewPage: false,
    categories: ['Cortes', 'Barba', 'Estilo', 'Cuidados Masculinos', 'Produtos']
  },
  contact: {
    style: 'split-image'
  }
}