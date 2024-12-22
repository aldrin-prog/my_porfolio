import { useState, useEffect } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'
import { Button } from "@components/ui/button";

import { useTheme } from "next-themes"

export default function AppNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-primary">AL</a>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-2">
            <NavLink href="#experience" mobile>Experience</NavLink>
            <NavLink href="#skills" mobile>Skills</NavLink>
            <NavLink href="#education" mobile>Education</NavLink>
            <NavLink href="#projects" mobile>Projects</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children, mobile = false }) {
  return (
    <a
      href={href}
      className={`text-foreground hover:text-primary transition-colors duration-300 ${
        mobile ? 'block py-2' : ''
      }`}
    >
      {children}
    </a>
  )
}

