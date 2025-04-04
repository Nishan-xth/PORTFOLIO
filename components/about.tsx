"use client"
import { education, experience } from "@/lib/data"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GraduationCap, Briefcase } from "lucide-react"
import { Badge } from "./ui/badge"

export default function About() {
  return (
    <section id="about" className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my background" className="text-green-500" />

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/50 border border-white/20">
              <TabsTrigger
                value="personal"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-black"
              >
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">About</span>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-black"
              >
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-black"
              >
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="bg-black/50 border-gray-800 text-white">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a Junior Software Engineer with a passion for building efficient, user-friendly applications.
                    Currently pursuing my Bachelor's in Information Management at St. Xavier's College, I specialize in
                    full-stack development using React, Next.js, Node.js, and Firebase.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, I enjoy exploring new technologies, exploring new resources, and
                    continuously expanding my knowledge in software development.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience">
              <Card className="bg-black/50 border-gray-800 text-white">
                <CardContent className="pt-6 space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="bg-transparent p-2 rounded-md border border-white/30">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">{job.position}</h3>
                          <p className="text-gray-400">
                            {job.company} | {job.location}
                          </p>
                          <p className="text-sm font-medium mb-3">{job.period}</p>

                          <ul className="space-y-2 text-sm">
                            {job.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education">
              <Card className="bg-black/50 border-gray-800 text-white">
                <CardContent className="pt-6 space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="bg-transparent p-2 rounded-md border border-white/30">
                          <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">{edu.degree}</h3>
                          <p className="text-gray-400">
                            {edu.institution} | {edu.location}
                          </p>
                          <p className="text-sm font-medium">{edu.period}</p>
                          <Badge variant="outline" className="mt-2 border-white/30 text-white">
                            {edu.gpa}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

