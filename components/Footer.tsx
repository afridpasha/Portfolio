'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Mohammad Afrid Pasha</h3>
              <p className="text-gray-400">
                Advanced Software Engineer passionate about creating innovative solutions 
                in machine learning, web development, and cloud technologies.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact & Social */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:afridpasha1983@gmail.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  afridpasha1983@gmail.com
                </a>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: <Github size={20} />, href: 'https://github.com/afridpasha' },
                  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/afrid-pasha-80240b220/' },
                  { icon: <Mail size={20} />, href: 'mailto:afridpasha1983@gmail.com' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500" />
              <span>using Next.js, TypeScript & Tailwind CSS</span>
            </div>
            <div className="text-gray-400">
              © {new Date().getFullYear()} Mohammad Afrid Pasha. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer