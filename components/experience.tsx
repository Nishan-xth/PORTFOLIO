"use client"

import { experience } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-muted/50">
      <div className="container">
        <SectionHeading title="Professional Experience" subtitle="My work history and professional journey" />

        <div className="max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="mb-6 card-hover">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{job.position}</CardTitle>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                          {job.company} | {job.location}
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">{job.company}</h4>
                          <p className="text-sm">
                            A leading technology company specializing in compliance and automation solutions.
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    <div className="text-sm font-medium">{job.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {responsibility}
                      </motion.li>
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

