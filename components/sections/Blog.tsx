'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { template, siteConfig } from '@/lib/site-config'
import { BlogPost } from '@/types/blog'
import { ChevronDown, Clock, Calendar } from 'lucide-react'

interface Category {
  _id: string
  title: string
  slug: string
}

interface BlogProps {
  posts: Array<{
    _id: string
    title: string
    categories?: Category[]
  }>
  categories?: Category[]
}

export default function Blog({ posts }: BlogProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  if (!template.blog.enabled) return null

  // Usar categorias do Sanity se disponíveis, senão usar do template
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all' || !selectedCategory) {
      return posts
    }
    
    return posts.filter(post => 
      post.categories?.some(category => 
        category._id === selectedCategory || 
        category.title === selectedCategory ||
        category.slug === selectedCategory
      )
    )
  }, [posts, selectedCategory])

  const toggleCard = (id: string) => {
    if (template.blog.openInNewPage) return
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50" style={{backgroundColor:siteConfig.colors.blog}}>
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {template.blog.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {template.blog.subtitle}
            </p>
          </div>
        </FadeIn> 

        {/* Blog Grid */}
        <FadeIn delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{marginTop:'1rem'}}>
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post._id}
                post={post}
                index={index}
                isExpanded={expandedCard === post._id}
                onToggle={() => toggleCard(post._id)}
              />
            ))}
          </AnimatePresence>
        </div>
        </FadeIn>
        {filteredPosts.length === 0 && (
          <FadeIn>
            <div className="text-center py-12 text-gray-500">
              Nenhum artigo encontrado nesta categoria.
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  )
}

function BlogCard({
  post,
  index,
  isExpanded,
  onToggle,
}: {
  post: BlogPost
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Imagem */}
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ backgroundColor: siteConfig.colors.primary }}
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Metadata */}
        <div className="flex items-center gap-3 mb-4">
          {post.author?.image && (
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
            />
          )}
          <div className="flex-1 min-w-0">
            {post.author?.name && (
              <p className="text-sm font-semibold text-gray-900 truncate">
                {post.author.name}
              </p>
            )}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar size={12} />
              <time>
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-opacity-80 transition-all">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Conteúdo Expandido */}
        <AnimatePresence>
          {!template.blog.openInNewPage && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200 mb-4">
                <div className="prose prose-sm max-w-none text-gray-700">
                  {post.content}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botão */}
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group/btn mt-auto"
          style={{ color: siteConfig.colors.primary }}
        >
          {template.blog.openInNewPage ? (
            <>
              Ler artigo completo
              <svg
                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </>
          ) : (
            <>
              {isExpanded ? 'Mostrar menos' : 'Ler mais'}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </>
          )}
        </button>
      </div>
    </motion.div>
  )
}