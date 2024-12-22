import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

export default function Education() {
  const education = [
    {
      degree: "BS IN COMPUTER SCIENCE",
      school: "BICOL UNIVERSITY",
      year: "2018-2022"
    },
    {
      degree: "TVL ICT - MAJOR IN PROGRAMMING",
      school: "WRI-COLLEGES SENIOR HIGH",
      year: "2016-2018"
    }
  ]

  const trainings = [
    {
      name: "DICT MERN Bootcamp",
      description: "A 2-month Web Development Bootcamp organized by PCI Innovations Tech Center Inc. that focused on the MERN stack (MongoDB, Express.js, React.js, and Node.js). During this intensive program, I acquired hands-on experience in building and deploying full-stack web applications."
    },
    {
      name: "Village88 bootcamp",
      description: "Village88 offers a 3.5-month, rigorous training program that covers basic to advanced web development concepts. The training was divided into 4 tracks: web fundamentals, PHP, JavaScript, and an elective track where trainee had to choose among front-end development, back-end development, and QA. At the end of each track, trainees must pass an examination in order to be certified. Aside from these technical skills, soft skills were also taught during the training, like the importance of being proactive, honest, and committed to your work."
    },
    {
      name: "FFU FManila flutter bootcamp",
      description: "2 months training about the fundamentals and advance concept of mobile development using dart and flutter framework."
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Education and Training</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-gray-500">{edu.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Training</h3>
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>{training.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{training.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

