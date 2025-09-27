'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Users, Award, TrendingUp, ExternalLink } from 'lucide-react'
import { experience } from '@/lib/utils'

const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary-200 hidden lg:block" />
      
      {/* Timeline Dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden lg:block" />

      <div className="lg:ml-20 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow relative">
        {/* Certificate Link */}
        <div className="absolute top-4 right-4">
          <motion.a
            href={exp.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-primary-600 hover:bg-primary-100 transition-colors shadow-md"
          >
            <ExternalLink size={16} />
          </motion.a>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
            <h4 className="text-xl text-primary-600 font-semibold mb-2">{exp.company}</h4>
          </div>
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span className="text-sm">{exp.period}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{exp.description}</p>

        {/* Key Achievements */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
            <Award size={16} className="mr-2 text-yellow-500" />
            Key Achievements
          </h5>
          <ul className="space-y-2">
            {exp.achievements.map((achievement: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + idx * 0.1 + 0.3 }}
                className="flex items-start text-gray-600"
              >
                <TrendingUp size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h5 className="font-semibold text-gray-800 mb-3">Technologies Used</h5>
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((tech: string) => (
              <span
                key={tech}
                className="tech-badge"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience in software engineering, web development, and advanced technologies 
            with a focus on delivering innovative solutions and continuous learning.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>

        {/* Leadership & Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Leadership & Collaboration
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={32} className="text-blue-600" />,
                title: 'Technical Skills',
                description: 'Expertise in multiple programming languages and frameworks',
                metric: '10+ Technologies'
              },
              {
                icon: <Award size={32} className="text-yellow-600" />,
                title: 'Certifications',
                description: 'Industry-recognized certifications from top organizations',
                metric: '7+ Certifications'
              },
              {
                icon: <TrendingUp size={32} className="text-green-600" />,
                title: 'Academic Excellence',
                description: 'Consistent high performance in academics',
                metric: '8.5 CGPA'
              },
              {
                icon: <Calendar size={32} className="text-purple-600" />,
                title: 'Project Delivery',
                description: 'Successfully completed high-impact projects',
                metric: '3+ Major Projects'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="text-2xl font-bold text-primary-600">{item.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                achievement: "Advanced to Stage-2 | AlgoVision Data Analytics Competition",
                description: "Demonstrated exceptional data analytics and problem-solving skills",
                icon: "📈"
              },
              {
                achievement: "Providence LEAP Ideathon Qualified to Stage-2",
                description: "Innovative solution design and presentation skills recognized",
                icon: "💡"
              },
              {
                achievement: "Secured 32nd Position in Deal Dynamics at Quark'25, BITS Pilani",
                description: "Outstanding performance in competitive programming and analytics",
                icon: "🏆"
              },
              {
                achievement: "Hackathon Participant | Felicity '25",
                description: "Active participation in technical competitions and innovation challenges",
                icon: "🚀"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{item.achievement}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience