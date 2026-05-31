"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Heart } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/vaishali-s18", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vaishali-v-236501316/", label: "LinkedIn" },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="text-2xl font-bold gradient-text">
              VB
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Creating beautiful digital experiences
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 text-muted-foreground hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Designed and Developed with
            <Heart size={14} className="text-pink-500 fill-pink-500" />
            by
            <span className="gradient-text font-medium">Vaishali Bakshi</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
