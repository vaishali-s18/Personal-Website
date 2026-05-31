"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const skills = [
  {
    name: "HTML",
    color: "from-orange-500 to-red-500",
    bgGlow: "bg-orange-500/20",
    level: 95,
    description: "Semantic markup & accessibility",
  },
  {
    name: "CSS",
    color: "from-blue-400 to-blue-600",
    bgGlow: "bg-blue-500/20",
    level: 90,
    description: "Animations & modern layouts",
  },
  {
    name: "JavaScript",
    color: "from-yellow-400 to-yellow-600",
    bgGlow: "bg-yellow-500/20",
    level: 85,
    description: "ES6+ & async programming",
  },
  {
    name: "React.js",
    color: "from-cyan-400 to-blue-500",
    bgGlow: "bg-cyan-500/20",
    level: 88,
    description: "Hooks, context & state management",
  },
  {
    name: "MongoDB",
    color: "from-green-500 to-emerald-600",
    bgGlow: "bg-green-500/20",
    level: 75,
    description: "NoSQL database design",
  },
  {
    name: "Git",
    color: "from-orange-500 to-red-600",
    bgGlow: "bg-orange-500/20",
    level: 85,
    description: "Version control & branching",
  },
  {
    name: "GitHub",
    color: "from-purple-500 to-purple-700",
    bgGlow: "bg-purple-500/20",
    level: 90,
    description: "Collaboration & CI/CD",
  },
  {
    name: "Responsive Design",
    color: "from-pink-500 to-purple-500",
    bgGlow: "bg-pink-500/20",
    level: 92,
    description: "Mobile-first approach",
  },
]

function SkillCard({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Background glow on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 ${skill.bgGlow} rounded-3xl blur-xl`}
      />

      <div className="relative glass rounded-3xl p-6 h-full border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Animated corner accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "40%" }}
          transition={{ duration: 0.4 }}
          className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
        />

        {/* Skill name with gradient */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground">{skill.name}</h3>
          <motion.span
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.08, type: "spring" }}
            className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}
          >
            {skill.level}%
          </motion.span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-5">{skill.description}</p>

        {/* Circular progress indicator */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-white/10"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDasharray: "0, 176" }}
                animate={isInView ? { strokeDasharray: `${skill.level * 1.76}, 176` } : {}}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.08 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}
              >
                <span className="text-white text-xs font-bold">{skill.name.charAt(0)}</span>
              </motion.div>
            </div>
          </div>

          {/* Linear progress bar */}
          <div className="flex-1">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: 0.5 + index * 0.08 }}
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
              >
                {/* Animated shimmer */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute bottom-4 right-4 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.5 : 0.2 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm uppercase tracking-widest text-purple-400 mb-4 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10"
          >
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern web technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { label: "Technologies", value: "8+" },
            { label: "Projects Built", value: "10+" },
            { label: "Code Commits", value: "500+" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-1"
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
