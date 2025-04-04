"use client"

import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { TypewriterEffect } from "./ui/typewriter-effect"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const words = [{ text: "Junior" }, { text: "Software" }, { text: "Engineer" }]

  if (!mounted) {
    return null
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 border-2 border-green-500/20 shadow-sm">
          <img
            src="/my-img.jpg?height=128&width=128"
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">{personalInfo.name}</h1>

        <div className="h-12 mb-6">
          <TypewriterEffect words={words} className="text-xl md:text-2xl text-gray-400" />
        </div>

        <p className="max-w-2xl text-gray-400 mb-8">{personalInfo.summary}</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" onClick={() => handleScrollToSection("contact")} className="rounded-full group custom-btn">
            Contact Me
            <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" onClick={() => handleScrollToSection("projects")} className="rounded-full group custom-btn">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Button size="icon" onClick={() => handleScrollToSection("about")} className="rounded-full custom-icon-btn">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

