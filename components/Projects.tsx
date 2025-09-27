'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'
import { projects } from '@/lib/utils'
import { useState } from 'react'
import Image from 'next/image'

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [showDetails, setShowDetails] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary-400 to-purple-600 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-4 right-4 flex space-x-2">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.liveUrl}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ExternalLink size={16} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.githubUrl}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <Github size={16} />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {project.results.map((result: string, idx: number) => (
            <div key={idx} className="text-center">
              <div className="text-2xl mb-1">
                {idx === 0 ? '⚡' : idx === 1 ? '🎯' : '📈'}
              </div>
              <div className="text-sm text-gray-600">{result}</div>
            </div>
          ))}
        </div>

        {/* Toggle Details */}
        <motion.button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4"
          whileHover={{ x: 5 }}
        >
          {showDetails ? 'Hide Details' : 'View Details'}
          <ArrowRight size={16} className="ml-1" />
        </motion.button>

        {/* Detailed Information */}
        <motion.div
          initial={false}
          animate={{ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="border-t pt-6 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Target size={16} className="mr-2 text-red-500" />
                Problem Statement
              </h4>
              <p className="text-gray-600 text-sm">{project.problem}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Zap size={16} className="mr-2 text-yellow-500" />
                Solution Approach
              </h4>
              <p className="text-gray-600 text-sm">{project.solution}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            className="flex-1 bg-primary-600 text-white text-center py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            className="flex-1 border-2 border-primary-600 text-primary-600 text-center py-3 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors"
          >
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing high-impact projects that demonstrate technical expertise, 
            problem-solving skills, and measurable business results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Architecture Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            System Architecture Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏗️</div>
              <h4 className="font-semibold text-gray-800 mb-2">Microservices</h4>
              <p className="text-gray-600 text-sm">
                Designed scalable microservices architectures handling millions of requests
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">☁️</div>
              <h4 className="font-semibold text-gray-800 mb-2">Cloud Native</h4>
              <p className="text-gray-600 text-sm">
                Built cloud-native applications with auto-scaling and high availability
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h4 className="font-semibold text-gray-800 mb-2">CI/CD Pipelines</h4>
              <p className="text-gray-600 text-sm">
                Implemented automated deployment pipelines reducing release time by 80%
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects