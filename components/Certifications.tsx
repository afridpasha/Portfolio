'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certifications } from '@/lib/utils'

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-center cursor-pointer"
              onClick={() => cert.url && window.open(cert.url, '_blank')}
            >
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
              {cert.instructor && (
                <p className="text-sm text-gray-500 mb-2">Instructor: {cert.instructor}</p>
              )}
              <p className="text-sm font-semibold text-blue-600">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
