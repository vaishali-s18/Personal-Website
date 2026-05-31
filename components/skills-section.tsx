"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    name: "HTML",
    icon: "🌐",
    color: "from-orange-500 to-red-500",
    level: 95,
  },
  {
    name: "CSS",
    icon: "🎨",
    color: "from-blue-400 to-blue-600",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "from-yellow-400 to-yellow-600",
    level: 85,
  },
  {
    name: "React.js",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
    level: 88,
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "from-green-500 to-emerald-600",
    level: 75,
  },
  {
    name: "Git",
    icon: "📦",
    color: "from-orange-500 to-red-600",
    level: 85,
  },
  {
    name: "GitHub",
    icon: "🐙",
    color: "from-purple-500 to-purple-700",
    level: 90,
  },
  {
    name: "Responsive Design",
    icon: "📱",
    color: "from-pink-500 to-purple-500",
    level: 92,
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400 mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              
              <div className="relative glass rounded-2xl p-6 h-full border border-white/5 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {skill.icon}
                </div>
                
                {/* Name */}
                <h3 className="text-lg font-semibold mb-3 text-foreground">{skill.name}</h3>
                
                {/* Progress bar */}
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-2 block">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
