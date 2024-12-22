import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@components/ui/button";
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Aldrin B. Lobis</h1>
            <p className="text-2xl mb-6">Software Developer</p>
            <p className="mb-8 text-lg">Taguig City, Metro Manila | aldrinlobis1@gmail.com | 09563250519</p>
            <div className="flex space-x-4 mb-8">
              <SocialLink href="https://github.com/aldrin-prog" icon={<GitHub />} />
              {/* <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin />} /> */}
              <SocialLink href="mailto:aldrinlobis1@gmail.com" icon={<Mail />} />
            </div>
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-9xl font-bold">AL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-secondary transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

