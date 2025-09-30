import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const personalInfo = {
  name: 'Mohammad Afrid Pasha',
  title: 'Advanced Software Engineer',
  location: 'Hyderabad, Telangana',
  phone: '+91 7569061834',
  email: 'afridpasha1983@gmail.com',
  linkedin: 'https://www.linkedin.com/in/afrid-pasha-80240b220/',
  github: 'https://github.com/afridpasha',
  portfolio: 'https://afridpasha.github.io'
}

export const codingProfiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/afridpasha1983/',
    image: '/LeetCode1.png'
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/afridpasha1983',
    image: '/codechef.png'
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/afridpasha1983',
    image: '/hackerrank.png'
  },
  {
    name: 'GeeksForGeeks',
    url: 'https://www.geeksforgeeks.org/user/afridpasvrls/',
    image: '/geeksforgeeks.png'
  }
]

export const education = [
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
]

export const certifications = [
  { name: 'Supervised Machine Learning', issuer: 'DeepLearning.AI (Coursera)', instructor: 'Andrew Ng', year: '2025' },
  { name: 'AWS Cloud Technical Essentials', issuer: 'Amazon Web Services (Coursera)', year: '2025' },
  { name: 'Databases for Developers', issuer: 'Oracle', year: '2025' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional', issuer: 'Oracle', year: '2025' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', year: '2025' },
  { name: 'Cisco Networking Academy (Introduction to Networks)', issuer: 'Cisco', year: '2025' },
  { name: 'Cisco Networking Academy (Introduction to Cybersecurity)', issuer: 'Cisco', year: '2025' }
]

export const achievements = [
  {
    title: 'Advanced to Stage-2 | AlgoVision Data Analytics Competition',
    url: 'https://drive.google.com/file/d/1mfOnzCj0TpI6RyeEfUlv79PE7xPk2Tow/view?usp=sharing'
  },
  {
    title: 'Providence LEAP Ideathon Qualified to Stage-2',
    url: 'https://drive.google.com/file/d/1kdCFHi2EhdrMi0QMG124bo-DezUCKUWL/view?usp=sharing'
  },
  {
    title: 'Secured 32nd Position in Deal Dynamics at Quark\'25, BITS Pilani',
    url: 'https://unstop.com/quiz/deal-dynamics-quark25-birla-institute-of-technology-and-sciences-bits-pilani-kk-birla-goa-campus-1365726/online-assessment/211414?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=result-out-deal-dynamics-bits-pilani-goa-birla-institute-of-technology-and-sciences-bits-pilani-kk-birla-goa-campus'
  },
  {
    title: 'Hackathon Participant | Felicity \'25',
    url: 'https://drive.google.com/file/d/1v0i21HSCjVEnjieBBWzutiinAxNKydCD/view?usp=sharing'
  }
]

export const skills = {
  languages: [
    { name: 'Java', level: 90, icon: '☕' },
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'JavaScript', level: 88, icon: '🟨' },
    { name: 'C++', level: 85, icon: '🔷' },
    { name: 'C', level: 82, icon: '⚙️' },
  ],
  frameworks: [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 88, icon: '🟢' },
    { name: 'Express.js', level: 85, icon: '🚀' },
    { name: 'Flask', level: 82, icon: '🐍' },
    { name: 'TensorFlow', level: 80, icon: '🧠' },
  ],
  cloud: [
    { name: 'AWS', level: 92, icon: '☁️' },
    { name: 'GCP', level: 85, icon: '🌐' },
    { name: 'Azure', level: 80, icon: '🔵' },
    { name: 'Oracle Cloud', level: 88, icon: '🔴' },
  ],
  databases: [
    { name: 'MySQL', level: 90, icon: '🐬' },
    { name: 'MongoDB', level: 88, icon: '🍃' },
    { name: 'DynamoDB', level: 85, icon: '⚡' },
    { name: 'SQL/NoSQL', level: 87, icon: '🗄️' },
  ]
}

export const projects = [
  {
    id: 1,
    title: 'Real-Time Cyber Threat Detection System',
    description: 'Enterprise-grade security system with 99.9% threat detection accuracy',
    problem: 'Organizations facing increasing cyber threats with slow detection and response times',
    solution: 'Engineered ML-powered threat detection system processing 1M+ events per second',
    tech: ['Python', 'Scikit-learn', 'Network Security', 'Machine Learning', 'Real-time Processing'],
    features: ['Real-time threat detection', 'Automated response system', 'Network monitoring', 'Security analytics'],
    results: ['99.9% detection accuracy', '1M+ events/second', '60% faster mitigation'],
    liveUrl: 'https://github.com/afridpasha/cyber-threat-detection',
    githubUrl: 'https://github.com/afridpasha/-Real-Time-Cyber-Threat-Detection-System/tree/main',
    image: '/projects/cybersecurity.jpg'
  },
  {
    id: 2,
    title: 'Traffic Optimization System',
    description: 'Intelligent traffic management using computer vision and ML algorithms',
    problem: 'Urban traffic congestion causing delays and inefficient traffic flow management',
    solution: 'Implemented YOLO v8 computer vision for vehicle detection with ML optimization',
    tech: ['Python', 'YOLO v8', 'Computer Vision', 'Machine Learning', 'OpenCV'],
    features: ['Real-time vehicle detection', 'Traffic flow optimization', 'Smart signal control', 'Analytics dashboard'],
    results: ['40% traffic flow improvement', 'Real-time detection', 'Smart optimization'],
    liveUrl: 'https://github.com/afridpasha/traffic-optimization',
    githubUrl: 'https://github.com/afridpasha/TRAFFIC-OPTIMIZATION/tree/master',
    image: '/projects/traffic.jpg'
  },
  {
    id: 3,
    title: 'Local Connect E-commerce Platform',
    description: 'Full-stack dual marketplace connecting consumers with local service providers',
    problem: 'Lack of platform connecting local service providers with consumers efficiently',
    solution: 'Developed MERN stack platform with microservices architecture and hybrid database',
    tech: ['MERN Stack', 'MySQL', 'Microservices', 'Node.js', 'React.js', 'Express.js'],
    features: ['Dual marketplace', 'Service provider matching', 'Real-time booking', 'Payment integration'],
    results: ['Full-stack implementation', 'Microservices architecture', 'Scalable design'],
    liveUrl: 'https://github.com/afridpasha/local-connect',
    githubUrl: 'https://github.com/afridpasha/Local-Connect-E-commerce',
    image: '/projects/ecommerce.jpg'
  }
]

export const experience = [
  {
    company: 'Walmart Global Tech',
    role: 'Advanced Software Engineer',
    period: 'Jul 2025',
    description: 'Worked on advanced software architecture and database design for enterprise solutions',
    achievements: [
      'Mastered Advanced Data Structures and Software Architecture',
      'Specialized in Relational Database Design and Data Munging',
      'Completed comprehensive training in enterprise software development'
    ],
    tech: ['Advanced Data Structures', 'Software Architecture', 'Database Design', 'Data Processing'],
    certificateUrl: 'https://drive.google.com/file/d/1FVQ51fYqTGOy5SqUU_jDQqYeuy1TAQvE/view?usp=sharing'
  },
  {
    company: 'Oasis Infobyte',
    role: 'Web Development Intern',
    period: 'Jun 2025',
    description: 'Developed web applications using modern technologies and frameworks',
    achievements: [
      'Built responsive web applications using React.js, HTML, and CSS',
      'Completed assigned projects with modern web development practices',
      'Gained hands-on experience in full-stack web development'
    ],
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Web Development'],
    certificateUrl: 'https://drive.google.com/file/d/1DCA7CbSNBqNxpK-fI2a_jABl9XP0TiFd/view?usp=sharing'
  }
]