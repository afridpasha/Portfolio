'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/lib/utils'
import Image from 'next/image'

const SkillBar = ({ skill, index }: { skill: any, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // Larger size for logos that are hard to see
  const logoSize = ['C++', 'Express.js', 'DynamoDB', 'SQL/NoSQL'].includes(skill.name) ? 55 : 28

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
          <Image src={skill.logo} alt={skill.name} width={logoSize} height={logoSize} className="object-contain" />
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
      </div>
    </section>
  )
}

export default Skills