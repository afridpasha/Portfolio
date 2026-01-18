'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'
import { codingProfiles } from '@/lib/utils'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [codingDropdownOpen, setCodingDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Coding Profiles Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setCodingDropdownOpen(!codingDropdownOpen)}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center space-x-1"
              >
                <span>Coding Profiles</span>
                <ChevronDown size={16} className={`transition-transform ${codingDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {codingDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 bg-white rounded-lg shadow-lg border py-2 min-w-[180px] z-50"
                >
                  {codingProfiles.map((profile) => (
                    <motion.a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ backgroundColor: '#f3f4f6' }}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                      onClick={() => setCodingDropdownOpen(false)}
                    >
                      <Image src={profile.image} alt={profile.name} width={20} height={20} className="rounded" />
                      <span>{profile.name}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/afridpasha"
              className="text-gray-600 hover:text-primary-600"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/mohammad-afrid-pasha/"
              className="text-gray-600 hover:text-primary-600"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:afridpasha1983@gmail.com"
              className="text-gray-600 hover:text-primary-600"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Mohammad_Afrid_Pasha_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-primary-700 transition-colors"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Coding Profiles */}
            <div className="mt-4 pt-4 border-t">
              <div className="text-gray-600 font-medium mb-2">Coding Profiles</div>
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Image src={profile.image} alt={profile.name} width={20} height={20} className="rounded" />
                  <span>{profile.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header