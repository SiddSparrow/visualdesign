import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { Playfair_Display, Inter, Syne } from 'next/font/google'
import './globals.css'

// Configurar CADA fonte separadamente
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair', // Opcional: para usar como variável CSS
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.description}`,
  description: siteConfig.description,
  keywords: ['psicóloga', 'psicologia', 'terapia', 'saúde mental', 'ansiedade', 'depressão', 'tcc'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="pt-BR" 
      className={`${syne.variable} ${playfair.variable} ${inter.variable}`} // Variáveis CSS
    >
      <body className={inter.className}> {/* Fonte padrão do body */}
        {children}
      </body>
    </html>
  )
}