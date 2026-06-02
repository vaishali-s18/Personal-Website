"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Reactopedia",
    description: "A modern React learning platform with comprehensive tutorials, smart filtering, search functionality, and progress tracking to help developers master React.",
    tech: ["React.js", "JavaScript", "CSS", "REST API"],
    gradient: "from-purple-600 to-blue-600",
    link: "https://reactopedia-66149.web.app/",
    github: "https://github.com/vaishali-s18/Reactopedia",
    preview: "/images/reactopedia-preview.png",
  },
  {
    title: "AIcruit",
    description: "An AI-powered recruitment platform designed to simplify and streamline hiring workflows, making the recruitment process more efficient and intelligent.",
    tech: ["React.js", "MongoDB", "Node.js", "AI/ML"],
    gradient: "from-cyan-500 to-blue-600",
    link: "http://ai-cruit-lyart.vercel.app/",
    github: "https://github.com/vaishali-s18/AIcruit",
    preview: "/images/aicruit-preview.png",
  },
  {
    title: "Portfolio Website",
    description: "A responsive, modern portfolio built with cutting-edge frontend technologies showcasing my skills, projects, and professional journey.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-pink-500 to-purple-600",
    link: "https://my-portfolio-three-rho-91.vercel.app/",
    github: "https://github.com/vaishali-s18/MyPortfolio",
    preview: "/images/portfolio-preview.png",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400 mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white mb-4`}>
                        Featured Project
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        <a
                          href={project.link}
                          className="flex items-center gap-2 text-sm text-foreground hover:text-purple-400 transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-sm text-foreground hover:text-purple-400 transition-colors"
                        >
                          <Github size={16} />
                          Source Code
                        </a>
                      </div>
                    </div>

                    {/* Visual preview */}
                    <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className={`aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} p-0.5 overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500`}>
                        <div className="w-full h-full rounded-2xl overflow-hidden relative">
                          <Image
                            src={project.preview}
                            alt={`${project.title} preview`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>

                      {/* Floating decoration */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-4 -right-4 w-20 h-20 border border-white/10 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
