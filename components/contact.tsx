"use client"

import type React from "react"

import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from "lucide-react"
import SectionHeading from "./section-heading"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 bg-transparent">
      <div className="container">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Reach out to me!" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="h-full border border-gray-800 shadow-sm bg-black/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
              <CardDescription className="text-gray-400">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-colors">
                <div className="bg-transparent p-2 rounded-full border border-white/30">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-colors">
                <div className="bg-transparent p-2 rounded-full border border-white/30">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a href={`tel:${personalInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-colors">
                <div className="bg-transparent p-2 rounded-full border border-white/30">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  linkedin.com/in/{personalInfo.linkedin}
                </a>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-colors">
                <div className="bg-transparent p-2 rounded-full border border-white/30">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  github.com/{personalInfo.github}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-800 shadow-sm bg-black/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-400">I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
            <form
                className="space-y-4"
                action="https://formspree.io/f/xeqyyvjj"
                method="POST"
                onSubmit={(e) => {
                  setIsSubmitting(true)
                  // We don't prevent default here to allow the form to submit to Formspree
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                        name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black/30 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                           name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black/30 border-gray-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                          name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-black/30 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                     name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-black/30 border-gray-700 text-white"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full custom-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

