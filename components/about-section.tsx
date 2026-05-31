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
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl" />
              
              {/* Main container */}
              <div className="relative glass rounded-3xl p-8 h-full flex items-center justify-center glow-purple">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 overflow-hidden">
                    <Image
                      src="/images/vaishali-profile.png"
                      alt="Vaishali Bakshi"
                      width={192}
                      height={192}
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <p className="text-lg text-muted-foreground">Creative Problem Solver</p>
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
