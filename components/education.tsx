"use client"

import { education } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container">
        <SectionHeading title="Education" subtitle="My academic background and qualifications" />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {edu.institution} | {edu.location}
                    </div>
                    <div className="text-sm font-medium">{edu.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary">{edu.gpa}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

