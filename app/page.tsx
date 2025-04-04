import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import { Sparkles } from "@/components/sparkles"

export default function Home() {
  return (
    <Sparkles
      className="min-h-screen"
      background="#000000"
      particleColor="#00ff00"
      particleCount={200}
      particleSize={1.5}
    >
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Sparkles>
  )
}

