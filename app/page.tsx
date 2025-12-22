import { getPosts, getCategories } from '@/lib/sanity/queries'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Blog from '@/components/sections/Blog'
import PhotoGallery from '@/components/sections/PhotoGallery'
import { siteConfig, template } from '@/lib/site-config'
import SectionDivider from '@/components/ui/SectionDivider'

export default async function Home() {
  let posts = []
 // let categories: string[] =[]
  if (siteConfig.features.blog) {
    try {
      posts = await getPosts()
       //categories = await getCategories()
    } catch (error) {
      console.error('Erro ao buscar posts:', error)
    }
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <PhotoGallery/> 
      {siteConfig.features.blog && (
        <Blog 
          posts={posts} 
        />
      )}
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}