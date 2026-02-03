'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, GraduationCap } from 'lucide-react'
import { education } from '@/lib/utils'

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic background and continuous learning journey
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-4">
                <GraduationCap size={32} className="text-primary-600 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.institution}</h3>
                      <p className="text-primary-600 font-semibold text-lg mb-1">{edu.degree}</p>
                      {edu.honors && (
                        <p className="text-gray-600 mb-2">{edu.honors}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 mb-2 md:justify-end">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="text-xl font-bold text-green-600">{edu.grade}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
