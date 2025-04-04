"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      // Set header background when scrolled
      setScrolled(window.scrollY > 10)

      // Find active section
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-black/80 border-b border-gray-800 backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-end md:justify-center">
        {/* <div className="flex items-center gap-2">
          <a href="#" className="text-xl font-medium text-white">
            {personalInfo.name}
          </a>
        </div> */}

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className={cn(
                "text-sm font-medium transition-colors relative",
                activeSection === item.href.substring(1) ? "text-green-400" : "text-gray-400 hover:text-green-400",
              )}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 rounded-full" />
              )}
            </a>
          ))}
          {/* <Button asChild className="rounded-full custom-btn">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
            >
              Contact
            </a>
          </Button> */}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="custom-icon-btn rounded-full"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="container md:hidden py-4 bg-black/95 backdrop-blur border-b border-gray-800">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={cn(
                  "text-sm font-medium transition-colors p-2 rounded-md",
                  activeSection === item.href.substring(1)
                    ? "bg-green-500/10 text-green-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5",
                )}
              >
                {item.name}
              </a>
            ))}
            {/* <Button onClick={() => handleNavClick("#contact")} className="mt-2 custom-btn">
              Contact
            </Button> */}
          </nav>
        </div>
      )}
    </header>
  )
}

