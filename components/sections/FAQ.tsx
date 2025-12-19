'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { template, siteConfig } from '@/lib/site-config'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const getFAQDescription = () => {
    switch(template.type) {
      case 'coach':
        return 'Tire suas dúvidas sobre o processo de coaching.'
      case 'barbeiro':
        return 'Respostas para as principais dúvidas.'
      case 'medico':
        return 'Informações importantes sobre consultas e atendimento.'
      case 'psicologo':
        return 'Tire suas dúvidas sobre o processo terapêutico.'
      default:
        return 'Tire suas dúvidas mais comuns.'
    }
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getFAQDescription()}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {template.faq.questions.map((faq, index) => (
            <FadeIn key={faq.id} delay={0.05 * (index + 1)}>
              <div 
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    <ChevronDown 
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: siteConfig.colors.primary }}
                    />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.4,
                            ease: [0.4, 0.0, 0.2, 1]
                          },
                          opacity: {
                            duration: 0.3,
                            delay: 0.1,
                            ease: 'easeOut'
                          }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.3,
                            ease: [0.4, 0.0, 0.2, 1]
                          },
                          opacity: {
                            duration: 0.2,
                            ease: 'easeIn'
                          }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ 
                          y: 0,
                          transition: {
                            duration: 0.3,
                            ease: 'easeOut'
                          }
                        }}
                        exit={{ 
                          y: -10,
                          transition: {
                            duration: 0.2,
                            ease: 'easeIn'
                          }
                        }}
                        className="px-6 py-4 bg-gray-50 text-gray-600"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}