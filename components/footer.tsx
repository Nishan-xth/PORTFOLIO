"use client"

import { personalInfo } from "@/lib/data"
import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-gray-800 py-8 bg-black/50 backdrop-blur">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#about")
              }}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#projects")
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
            >
              Contact
            </a>
          </div>

          <Button size="icon" className="rounded-full custom-icon-btn" onClick={scrollToTop}>
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}

