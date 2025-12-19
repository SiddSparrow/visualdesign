'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { getWhatsAppLink } from '@/lib/utils'

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      getWhatsAppLink(siteConfig.social.whatsapp || '', 'Olá! Vim pelo site e gostaria de mais informações.'),
      '_blank'
    )
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco
      </span>
    </button>
  )
}