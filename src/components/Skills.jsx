import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

export default function Skills() {
  const skills = [
    { category: "Programming languages", items: ["Javascript", "Ruby", "PHP", "Java", "Python", "C", "C++"] },
    { category: "Web Design", items: ["HTML", "CSS", "LESS", "Bootstrap", "TailwindCSS"] },
    { category: "Frameworks", items: ["Express", "CodeIgniter", "Ruby on Rails", "ReactJS", "Wordpress", "Laravel", "Flutter", "NodeJs"] },
    { category: "Libraries", items: ["JQuery", "EJS", "Sockets"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"] },
    { category: "Unit testing", items: ["Selenium", "Capybara", "Rspec"] },
    { category: "Continuous Integration", items: ["GitHub Actions", "Jenkins"] },
    { category: "Code versioning", items: ["Git", "Github", "Bitbucket", "Fork"] }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700">{item}</li>
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

