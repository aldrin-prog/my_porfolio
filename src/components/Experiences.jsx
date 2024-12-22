import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

export default function Experiences() {
  const experiences = [
    {
      title: "Engineer, Server System Design & Operation",
      company: "Samsung Electronics Philippines",
      date: "April 2024 - November 2024",
      responsibilities: [
        "Code refactoring and project maintenance",
        "Perform bug fixing, test and log analysis"
      ]
    },
    {
      title: "Software Developer",
      company: "Technos System Engineering Services",
      date: "February 2023 - April 2024",
      responsibilities: [
        "Created static and dynamic frontend",
        "Implemented functional and responsive design",
        "Work both on frontend and backend"
      ]
    },
    {
      title: "Frontend Developer (Internship)",
      company: "Office of the Vice President of Academic Affair, Bicol University",
      date: "",
      responsibilities: [
        "Online Accreditation System",
        "Implemented research design",
        "Design development based from the UI design"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 mb-2">{exp.date}</p>
                  <ul className="list-disc list-inside">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700">{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

