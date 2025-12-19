// lib/sanity/queries.ts
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity' // Usando seu client existente
import { client } from '../../sanity/client'
import { BlogPost } from '@/types/blog'

// Query para buscar todos os posts do blog
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "content": pt::text(body),
    "image": mainImage.asset->url,
    publishedAt,
    "readingTime": round(length(pt::text(body)) / 5 / 180),
    "categories": categories[]->{
      _id,
      title,
    },
    author->{
      name,
      "image": image.asset->url
    }
  }
`

// Query para buscar um post específico
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    "image": mainImage.asset->url,
    publishedAt,
    "readingTime": round(length(pt::text(body)) / 5 / 180),
    author->{
      name,
      "image": image.asset->url
    }
  }
`
// Para pegar apenas as categorias (únicas):
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`

// Função para buscar todos os posts
export async function getPosts() {
  return await sanityClient.fetch(postsQuery)
}

// Função para buscar um post específico
export async function getPost(slug: string) {
  return await sanityClient.fetch(postQuery, { slug })
}


// Função para buscar todas as categorias
export async function getCategories(): Promise<string[]> {
  try {
    const categories = await sanityClient.fetch<string[]>(categoriesQuery)
    return categories || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}
export async function getPostsByCategory(category: string, limit?: number): Promise<BlogPost[]> {
  const query = `*[_type == "post" && $category in categories] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ''} {
    _id,
    _createdAt,
    title,
    slug,
    author,
    mainImage,
    categories,
    publishedAt,
    excerpt,
    body
  }`

  try {
    return await client.fetch(query, { category })
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}



// sanity/schemas/post.ts
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'body',
      title: 'Conteúdo',
      type: 'blockContent',
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { author } = selection
      return { ...selection, subtitle: author && `por ${author}` }
    },
  },
}