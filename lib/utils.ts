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
  linkedin: 'https://www.linkedin.com/in/mohammad-afrid-pasha/',
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
    honors: 'Honours in Artificial Intelligence and Machine Learning',
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
    title: 'Qualified for TCS CodeVita Season 13 – Round 2',
    url: 'https://drive.google.com/drive/folders/1rgivPi9mEDueX1p99axTgaUWUhgdIHoX?usp=sharing'
  },
  {
    title: 'Achieved Gold + Elite Certification in NPTEL Programming In Java',
    url: 'https://drive.google.com/file/d/1VcrkP6lOxlcuzzKcIoPQ11r8xuJsXwUe/view?usp=sharing'
  },
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
    { name: 'Java', level: 90, logo: '/Logos/java-logo.png' },
    { name: 'Python', level: 95, logo: '/Logos/Python Logo.png' },
    { name: 'JavaScript', level: 88, logo: '/Logos/JavaScript Logo.png' },
    { name: 'C++', level: 85, logo: '/Logos/CPP logo.png' },
    { name: 'C', level: 82, logo: '/Logos/C Logo.png' },
  ],
  frameworks: [
    { name: 'React.js', level: 90, logo: '/Logos/React Logo.png' },
    { name: 'Node.js', level: 88, logo: '/Logos/Node-js-logo.png' },
    { name: 'Express.js', level: 85, logo: '/Logos/Express.js Logo.png' },
    { name: 'Flask', level: 82, logo: '/Logos/Flask-framework-Logo.png' },
    { name: 'TensorFlow', level: 80, logo: '/Logos/Tensorflow Logo.jpg' },
  ],
  cloud: [
    { name: 'AWS', level: 92, logo: '/Logos/AWS Cloud logo.png' },
    { name: 'GCP', level: 85, logo: '/Logos/GCP Cloud Logo.png' },
    { name: 'Azure', level: 80, logo: '/Logos/azure Logo.png' },
    { name: 'Oracle Cloud', level: 88, logo: '/Logos/oracle-cloud-logo.jpg' },
  ],
  databases: [
    { name: 'MySQL', level: 90, logo: '/Logos/MySQL Logo.png' },
    { name: 'MongoDB', level: 88, logo: '/Logos/Mongodb-logo.png' },
    { name: 'DynamoDB', level: 85, logo: '/Logos/DynamoDB Logo.png' },
    { name: 'SQL/NoSQL', level: 87, logo: '/Logos/NoSQL Logo.png' },
  ]
}

export const projects = [
  {
    id: 1,
    title: 'DeepFit AI - AI Powered Fitness Assessment Platform',
    description: 'AI-powered fitness assessment platform achieving 95% pose accuracy with real-time contactless measurements',
    problem: 'Traditional fitness assessments require expensive equipment, trained personnel, and physical contact, preventing scalable remote athlete evaluation',
    solution: 'Architected production-grade AI platform using MediaPipe pose estimation, MiDaS depth networks, and PyTorch models achieving 95% accuracy with contactless measurements (±2cm height, ±3kg weight)',
    tech: ['Python', 'Flask', 'MongoDB Atlas', 'Docker', 'MediaPipe', 'OpenCV', 'PyTorch', 'MiDaS', 'Deep Learning', 'Computer Vision', 'REST APIs', 'WebSocket'],
    features: ['Real-time pose estimation at 30 FPS with sub-100ms latency', 'Contactless body measurements with 95% accuracy', 'Exercise classification with 92% precision across 4+ exercise types', 'ML-powered athlete benchmarking and clustering', 'Live analytics dashboard with performance visualizations', 'Automated leaderboard and progress tracking'],
    results: ['95% pose accuracy', '30+ FPS processing', '40% faster corrections', '10K+ assessments/month'],
    liveUrl: 'https://afridpasha1983-deepfit-ai.hf.space',
    githubUrl: 'https://github.com/afridpasha/DeepFit_AI',
    image: '/projects/deepfit.jpg'
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
    liveUrl: 'https://afridpasha1983-traffic-optimization-ai.hf.space/',
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
    liveUrl: 'https://local-connect-e-commerce-mongo-2.onrender.com',
    githubUrl: 'https://github.com/afridpasha/Local-Connect-E-commerce_Mongo',
    image: '/projects/ecommerce.jpg'
  },
  {
    id: 4,
    title: 'Real-Time Cyber Threat Detection System',
    description: 'Enterprise-grade security system with 99.9% threat detection accuracy',
    problem: 'Organizations facing increasing cyber threats with slow detection and response times',
    solution: 'Engineered ML-powered threat detection system processing 1M+ events per second',
    tech: ['Python', 'Scikit-learn', 'Network Security', 'Machine Learning', 'Real-time Processing'],
    features: ['Real-time threat detection', 'Automated response system', 'Network monitoring', 'Security analytics'],
    results: ['99.9% detection accuracy', '1M+ events/second', '60% faster mitigation'],
    liveUrl: 'https://drive.google.com/file/d/1kUXbdVpQoCQHTb-43ESjicTHHhmQ2DSH/view?usp=sharing',
    githubUrl: 'https://github.com/afridpasha/-Real-Time-Cyber-Threat-Detection-System/tree/main',
    image: '/projects/cybersecurity.jpg'
  }
]

export const experience = [
  {
    company: 'Walmart Global Tech',
    role: 'Advanced Software Engineer',
    period: 'Jun 2025 - Jul 2025',
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
    period: 'Jul 2025 - Aug 2025',
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