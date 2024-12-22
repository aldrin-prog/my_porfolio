import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Badge } from "@components/ui/badge"
import { Button } from "@components/ui/button"

export default function Projects() {
  const projects = [
    {
        name: "Event Booking System",
        description: "A web based application with payment implementation of stripe api  where you can manage and book an event",
        techStack: ["MongoDb", "Express", "Nodejs","React"],
        demo: "https://event-frontend-gold.vercel.app/"
      },
    {
      name: "Online Bidding System",
      description: "Developed an e-commerce application with a live bidding feature. Includes user registration, payment integration, and a real-time bidding dashboard.",
      techStack: ["Ruby", "Ruby on Rails", "Javascript"],
      demo: "https://youtu.be/-anGdION8eE"
    },
    {
      name: "Real-time illegal parking Detection",
      description: "Desktop application utilizing AI for illegal parking detection with features like manual/automatic segmentation and vehicle recognition.",
      techStack: ["Python", "OpenCV", "Yolo5 model", "Flask"],
      demo: "https://youtu.be/9pNWmBxV_X0"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

