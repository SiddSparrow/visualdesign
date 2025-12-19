import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, '')
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = formatPhone(phone)
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${cleanPhone}${encodedMessage}`
}