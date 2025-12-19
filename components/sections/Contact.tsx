import Container from '@/components/ui/Container'
import ContactForm from '@/components/forms/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <ContactForm />
      </Container>
    </section>
  )
}