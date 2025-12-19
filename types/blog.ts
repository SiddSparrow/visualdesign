export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  publishedAt: string
  categories?: Array<{ // ← Agora é array de objetos
    _id: string
    title: string
    slug: string
  }>
  author?: {
    name: string
    image?: string
  }
  readingTime?: number
}

export interface BlogProps {
  posts: BlogPost[]
  categories?: Array<{
    _id: string
    title: string
    slug: string
  }>
}

