import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Textarea } from "@components/ui/textarea"
import { Button } from "@components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="grid md:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <ContactItem icon={<Mail className="text-primary" />} href="mailto:aldrinlobis1@gmail.com">
                    aldrinlobis1@gmail.com
                  </ContactItem>
                  <ContactItem icon={<Phone className="text-primary" />} href="tel:09563250519">
                    09563250519
                  </ContactItem>
                  <ContactItem icon={<MapPin className="text-primary" />}>
                    Taguig City, Metro Manila
                  </ContactItem>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, children, href }) {
  const content = (
    <div className="flex items-center">
      <div className="mr-4">{icon}</div>
      <span className="text-foreground">{children}</span>
    </div>
  )

  return href ? (
    <a href={href} className="hover:text-primary transition-colors duration-300">
      {content}
    </a>
  ) : (
    content
  )
}

