"use client"

import { projects } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Eye } from "lucide-react"
import SectionHeading from "./section-heading"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container">
        <SectionHeading title="Projects" subtitle="Explore my recent work and technical achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 bg-black/50"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                  {/* <Badge variant="outline"   className="border-green-500/30 text-green-400 hover:bg-green-500/10 transition-colors text-xs">
                    {project.date}
                  </Badge> */}
                </div>
                <p className="text-sm text-gray-400">{project.technologies}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-1 text-sm text-gray-300">
                  {project.description.slice(0, 2).map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                {project.description.length > 2 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" size="sm" className="mt-2 p-0 h-auto text-white hover:text-green-300">
                        Read more
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-black/90 border-gray-800 text-white">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          {project.technologies} | {project.date}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <ul className="space-y-2">
                          {project.description.map((desc, descIndex) => (
                            <li key={descIndex} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </CardContent>
              {/* <CardFooter className="flex gap-2">
                <Button size="sm" className="w-full custom-btn" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="w-full custom-btn" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

