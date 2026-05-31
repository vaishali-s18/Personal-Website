"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, BookOpen, Briefcase, Code, Rocket, Star } from "lucide-react"

const achievements = [
  {
    year: "2024",
    title: "Started Professional Projects",
    description: "Began building real-world applications and contributing to team projects, focusing on React.js and modern frontend technologies.",
    icon: Rocket,
    color: "from-purple-500 to-blue-500",
  },
  {
    year: "2024",
    title: "AIcruit Development",
    description: "Led frontend development for an AI-powered recruitment platform, implementing complex UI components and state management.",
    icon: Briefcase,
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "2023",
    title: "Reactopedia Launch",
    description: "Created and launched a comprehensive React learning platform with tutorials, filtering, and progress tracking features.",
    icon: Code,
    color: "from-blue-500 to-purple-500",
  },
  {
    year: "2023",
    title: "Frontend Certifications",
    description: "Completed multiple certifications in React.js, JavaScript, and responsive web design from industry-recognized platforms.",
    icon: Award,
    color: "from-pink-500 to-purple-500",
  },
  {
    year: "2022",
    title: "Web Development Journey Began",
    description: "Started learning HTML, CSS, and JavaScript. Built first responsive websites and discovered passion for frontend development.",
    icon: BookOpen,
    color: "from-orange-500 to-pink-500",
  },
  {
    year: "Ongoing",
    title: "Continuous Learning",
    description: "Actively exploring new technologies, contributing to open-source, and staying updated with the latest web development trends.",
    icon: Star,
    color: "from-yellow-500 to-orange-500",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400 mb-4 block">
            Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 md:-ml-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 ring-4 ring-background z-10" />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 group">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shrink-0`}>
                        <achievement.icon size={24} className="text-white" />
                      </div>

                      <div className="flex-1">
                        {/* Year badge */}
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-purple-300 mb-2">
                          {achievement.year}
                        </span>
                        
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
