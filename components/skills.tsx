"use client"

import { skills } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import SectionHeading from "./section-heading"
import { Radar } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-transparent">
      <div className="container">
        <SectionHeading title="Skills" subtitle="My technical expertise and professional capabilities" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skillCategory, index) => (
            <Card
              key={index}
              className="h-full border border-gray-800 shadow-sm hover:shadow-md transition-shadow bg-black/50 backdrop-blur"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="bg-transparent p-2 rounded-md border border-white/30">
                    <Radar className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-medium text-white">{skillCategory.category}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white hover:text-black transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

