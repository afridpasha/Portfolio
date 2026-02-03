'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a results-driven <span className="font-semibold text-primary-600">Full-Stack Software Engineer</span> and <span className="font-semibold text-primary-600">AI/ML enthusiast</span> pursuing B.E. in Information Technology with Honours in Artificial Intelligence at Vasavi College of Engineering (CGPA: 8.5). With proven expertise in MERN Stack development, cloud-native architectures, and deep learning, I specialize in building scalable, production-grade solutions that drive measurable business impact. My technical arsenal spans Data Structures & Algorithms, microservices architecture, computer vision, and multi-cloud platforms (AWS, GCP, Azure, OCI), complemented by hands-on experience at <span className="font-semibold text-primary-600">Walmart Global Tech</span> and <span className="font-semibold text-primary-600">Oasis Infobyte</span> where I optimized system performance by 40% and delivered applications serving 10,000+ users.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From engineering real-time AI-powered fitness tracking systems with <span className="font-semibold text-primary-600">95% pose accuracy</span> using TensorFlow and MediaPipe, to architecting RESTful APIs handling $50K+ e-commerce transactions with zero security breaches, I thrive at the intersection of innovation and execution. My work in YOLOv8-based traffic optimization and MySQL database performance tuning demonstrates my ability to leverage machine learning, neural networks, and distributed systems to solve complex real-world challenges. As a qualified <span className="font-semibold text-primary-600">TCS CodeVita competitor</span> and <span className="font-semibold text-primary-600">AWS/Oracle Cloud certified professional</span>, I'm passionate about leveraging cutting-edge technologies—from PyTorch and NLP to containerization and CI/CD pipelines—to create intelligent, user-centric solutions that scale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
