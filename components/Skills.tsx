'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/lib/utils'

const SkillBar = ({ skill, index }: { skill: any, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-gray-800">{skill.name}</span>
        </div>
        <span className="text-primary-600 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full"
        />
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ title, skillList, delay = 0 }: { title: string, skillList: any[], delay?: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
      {skillList.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks, with expertise spanning 
            full-stack development, machine learning, cloud platforms, and cybersecurity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <SkillCategory 
            title="Languages" 
            skillList={skills.languages} 
            delay={0.1}
          />
          <SkillCategory 
            title="Frameworks" 
            skillList={skills.frameworks} 
            delay={0.2}
          />
          <SkillCategory 
            title="Cloud & DevOps" 
            skillList={skills.cloud} 
            delay={0.3}
          />
          <SkillCategory 
            title="Databases" 
            skillList={skills.databases} 
            delay={0.4}
          />
        </div>

        {/* Certifications */}
        <motion.div
          id="certifications"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Supervised Machine Learning', issuer: 'DeepLearning.AI (Coursera)', year: '2025', link: 'https://drive.google.com/file/d/18h-K8dgiFdzXVhHn9eYlyK9wBnREWn5L/view?usp=sharing' },
              { name: 'AWS Cloud Technical Essentials', issuer: 'Amazon Web Services', year: '2025', link: 'https://drive.google.com/file/d/1QpIv5dAmT4pTD4xWythFlpDyn--_JDmh/view?usp=sharing' },
              { name: 'Oracle Cloud Multicloud Architect', issuer: 'Oracle', year: '2025', link: 'https://drive.google.com/drive/folders/1jnoKOlePgrXFQ32oeNK8tIyFXtjtTnZc?role=writer' },
              { name: 'Oracle AI Foundations Associate', issuer: 'Oracle', year: '2025', link: 'https://drive.google.com/drive/folders/1jTTmzIbYFcIo2z0vhtBHOrN6x-bDtlBV?usp=sharing' },
              { name: 'Cisco Networking Academy', issuer: 'Cisco', year: '2025', link: 'https://drive.google.com/drive/folders/1YAfNVvC7a-D-SoYINTEyowRBq9x_RsI5?usp=sharing' },
              { name: 'Databases for Developers', issuer: 'Oracle', year: '2025', link: 'https://drive.google.com/file/d/1K8CwmIIrQSrmzjgZ2lVRRaA1O9MO5R2Z/view?usp=sharing' },
            ].map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all text-center cursor-pointer group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
                <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
                <p className="text-primary-600 font-medium">{cert.year}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Education
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                institution: 'Vasavi College Of Engineering, Hyderabad',
                degree: 'Bachelor of Technology in Information Technology',
                period: '2023 – 2027',
                grade: 'CGPA - 8.5',
                location: 'Telangana, India'
              },
              {
                institution: 'Sri Nalanda Junior College, Bhadradri Kothagudem',
                degree: 'MPC',
                period: '2020 – 2022',
                grade: 'Percentage - 91.1%',
                location: 'Telangana, India'
              },
              {
                institution: 'D.A.V Model School, Palvancha',
                degree: 'SSC',
                period: '2020',
                grade: 'GPA - 10.00/10.00',
                location: 'Telangana, India'
              }
            ].map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                    <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">{edu.period}</p>
                    <p className="text-green-600 font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills