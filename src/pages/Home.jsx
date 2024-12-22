import { ThemeProvider } from "next-themes"
import AppNavbar from "../components/AppNavbar"
import Hero from "../components/Hero"
import Experiences from "@components/Experiences"
import Skills from "@components/Skills"
import Education from "@components/Education"
import Projects from "@components/Projects"
import Contact from "@components/Contact"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/20">
        <AppNavbar />
         <Hero />
        <Experiences />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

