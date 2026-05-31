"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated glowing orbs */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/40 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.2, 0.4]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/40 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 -left-5 w-24 h-24 bg-cyan-500/30 rounded-full blur-2xl"
              />
              
              {/* Main container */}
              <div className="relative glass rounded-3xl p-8 h-full flex items-center justify-center glow-purple overflow-hidden">
                {/* Inner decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-64 h-64 rounded-full border border-purple-500/20"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-72 h-72 rounded-full border border-blue-500/10"
                  />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-80 h-80 rounded-full border border-cyan-500/10"
                  />
                </div>
                
                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [-20, 20, -20],
                    x: [-10, 10, -10]
                  }}
                  transition={{ duration: 7, repeat: Infinity }}
                  className="absolute top-8 right-12 w-2 h-2 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    y: [15, -15, 15],
                    x: [5, -5, 5]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-12 left-10 w-1.5 h-1.5 bg-blue-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    x: [-8, 8, -8]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-1/3 left-8 w-1 h-1 bg-cyan-400 rounded-full"
                />
                
                <div className="text-center relative z-10">
                  {/* Profile picture with animated border */}
                  <div className="relative w-52 h-52 mx-auto mb-6">
                    {/* Animated gradient ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full p-1"
                      style={{
                        background: "conic-gradient(from 0deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6)"
                      }}
                    />
                    {/* Inner shadow ring */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-sm" />
                    {/* Image container */}
                    <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
                      <Image
                        src="/images/vaishali-profile.png"
                        alt="Vaishali Bakshi"
                        width={200}
                        height={200}
                        className="rounded-full object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">Creative Problem Solver</p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full text-sm"
              >
                ✨ React.js
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-sm"
              >
                💻 Frontend Dev
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm uppercase tracking-widest text-purple-400 mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate about creating
              <span className="gradient-text"> exceptional </span>
              web experiences
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a frontend developer with a deep passion for crafting beautiful, 
                responsive, and user-centric web applications. My journey in web development 
                began with curiosity and has evolved into a commitment to excellence.
              </p>
              <p>
                I specialize in React.js and modern JavaScript, constantly exploring new 
                technologies and best practices to deliver cutting-edge solutions. I believe 
                in writing clean, maintainable code that not only works but delights users.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring the latest web trends, 
                contributing to open-source projects, or diving deep into UI/UX principles 
                to enhance my design sensibilities.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10">
              {[
                { number: "10+", label: "Projects" },
                { number: "2+", label: "Years Learning" },
                { number: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
