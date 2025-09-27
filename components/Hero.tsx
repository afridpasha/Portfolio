'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Code, Database, Cloud } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Mohammad Afrid Pasha
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl text-gray-600 mb-6">
                <TypeAnimation
                  sequence={[
                    'Advanced Software Engineer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'ML/AI Enthusiast',
                    2000,
                    'Cloud Solutions Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              B.Tech IT student at Vasavi College of Engineering with expertise in full-stack development, 
              machine learning, and cloud technologies. Passionate about building innovative solutions 
              that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-primary-600">8.5</div>
                <div className="text-gray-600">CGPA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">7+</div>
                <div className="text-gray-600">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">3+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image & Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Profile Image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-purple-600 p-2">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/profile.jpg"
                    alt="Mohammad Afrid Pasha"
                    width={288}
                    height={288}
                    className="w-72 h-72 rounded-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                  <Code className="text-primary-600" size={24} />
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                  <Database className="text-green-600" size={24} />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                  <Cloud className="text-blue-600" size={24} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-600"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero