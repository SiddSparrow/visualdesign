import Container from '@/components/ui/Container'
import ContactForm from '@/components/forms/ContactForm'
import { SiteConfig } from '@/types'
import { siteConfig } from '@/lib/site-config'
import Location from '../ui/Location'

export default function Contact() {
  return (
    <section id="contact" className="py-20" style={{backgroundColor: siteConfig.colors.contact}}>
      <Container>
        <Location
          address="Rua Buenos Aires, 65"
          city="Rio de Janeiro - RJ"
          latitude={-22.902584}
          longitude={-43.178468}
          placeName="MASP"
          mapStyle='roadmap'
          layout='overlay'
          />
          
          <div style={{margin:'2rem'}}></div>
        <ContactForm />
      </Container>
    </section>
  )
}