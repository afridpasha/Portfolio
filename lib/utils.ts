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
  { name: 'Supervised Machine Learning', issuer: 'DeepLearning.AI (Coursera)', instructor: 'Andrew Ng', year: '2025', url: 'https://drive.google.com/file/d/18h-K8dgiFdzXVhHn9eYlyK9wBnREWn5L/view?usp=sharing' },
  { name: 'AWS Cloud Technical Essentials', issuer: 'Amazon Web Services (Coursera)', year: '2025', url: 'https://drive.google.com/file/d/1QpIv5dAmT4pTD4xWythFlpDyn--_JDmh/view?usp=sharing' },
  { name: 'Databases for Developers', issuer: 'Oracle', year: '2025', url: 'https://drive.google.com/file/d/1K8CwmIIrQSrmzjgZ2lVRRaA1O9MO5R2Z/view?usp=sharing' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional', issuer: 'Oracle', year: '2025', url: 'https://drive.google.com/drive/folders/1jnoKOlePgrXFQ32oeNK8tIyFXtjtTnZc?role=writer' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', year: '2025', url: 'https://drive.google.com/drive/folders/1jTTmzIbYFcIo2z0vhtBHOrN6x-bDtlBV?usp=sharing' },
  { name: 'Oracle Data Platform 2025 Certified Foundations Associate', issuer: 'Oracle', year: '2026', url: 'https://drive.google.com/drive/folders/1lL2OMZYctbSsLhwXAXgA5GVDnsMN8BhW?usp=sharing' },
  { name: 'Introduction to Networks', issuer: 'Cisco Networking Academy', year: '2025', url: 'https://drive.google.com/file/d/1orrQxkz10R8lvO98bknZNrOVLsSXufKO/view?usp=sharing' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', year: '2025', url: 'https://drive.google.com/file/d/10Gd7H_FzRrM3vusIcjdXgW3J_AdGtHRY/view?usp=sharing' },
  { name: 'Cisco Packet Tracer Certified Professional', issuer: 'Cisco Networking Academy', year: '2025', url: 'https://drive.google.com/file/d/1X1HmSo2kVtuN9Fyww9hG-TLH0VNskph8/view?usp=sharing' },
  { name: 'Industrial Networking Essentials', issuer: 'Cisco Networking Academy', year: '2025', url: 'https://drive.google.com/file/d/1BomoGDi7YOtYDn1iRlqP5ujN1PBQIH_I/view?usp=sharing' },
  { name: 'Operating Systems Basics', issuer: 'Cisco Networking Academy', year: '2025', url: 'https://drive.google.com/file/d/1KyjuiIEBkNtJkVV7Xog2MAI0lsrwwECK/view?usp=sharing' },
  { name: 'Software Engineer', issuer: 'HackerRank', year: '2025', url: 'https://drive.google.com/file/d/11Pm4BbsFVkYyvBlYiuEo2tc18nYLpcxJ/view?usp=sharing' },
  { name: 'Software Engineer Intern', issuer: 'HackerRank', year: '2025', url: 'https://drive.google.com/file/d/1CFjqIglLM35uI-1J_FXeDoDD2DDTJxB2/view?usp=sharing' },
  { name: 'SQL (Advanced)', issuer: 'HackerRank', year: '2025', url: 'https://drive.google.com/file/d/1wOe6qsNdQVFblIuQCf_7z2ydmcMHs1M2/view?usp=sharing' },
  { name: 'Python (Basic)', issuer: 'HackerRank', year: '2024', url: 'https://drive.google.com/file/d/1sy5qc5c2VrDhrTMrXhtlUUNvcNxkDFKy/view?usp=sharing' },
  { name: 'Java (Basic)', issuer: 'HackerRank', year: '2024', url: 'https://drive.google.com/file/d/10DXDriuELT6-bMEatehk40FGsBsZadzG/view?usp=sharing' },
  { name: 'Problem Solving (Basic)', issuer: 'HackerRank', year: '2024', url: 'https://drive.google.com/file/d/1HTh6lQXhtBW3fDGAlVe9MKjpjnUYTWZy/view?usp=sharing' },
  { name: 'Problem Solving (Intermediate)', issuer: 'HackerRank', year: '2024', url: 'https://drive.google.com/file/d/1WPwCuGO0X1vAvIntg5AY6GtcCgNYEEmI/view?usp=sharing' },
  { name: 'AI Tools Workshop', issuer: 'be10x', year: '2024', url: 'https://drive.google.com/file/d/1b8--M_viSVA2DY4rGH1sybGk12PGf_9a/view?usp=sharing' }
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
    title: '2nd Place | Technical Project Expo — Sudhee 2026, CBIT Hyderabad',
    url: 'https://drive.google.com/drive/folders/1fI6ZahvxQgB-Oa6_ND9D1Y0bLBnvtNx6?usp=sharing'
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
    title: 'Shortlisted for Round 2 | AISEHack 2026 — IBM × IIT Delhi × ANRF, IIIT Hyderabad',
    url: 'https://drive.google.com/drive/folders/1zgQg7le4rAebDjk0impr1r9HNzNLa4KN?usp=sharing'
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
    image: '/projects/deepfit.jpg',
    appLogo: '/projects/deepfit-app-logo.png',
    apkUrl: '/apks/DeepFit.apk'
  },
  {
    id: 2,
    title: 'NeuroPlex AI - Neural Intelligence for Healthcare | OSCC Detection Platform',
    description: 'Enterprise-grade, production-ready two-stage AI diagnostic platform achieving 96.8% hybrid fusion accuracy for real-time Oral Squamous Cell Carcinoma (OSCC) detection via combining Dual Vision Transformers',
    problem: 'Oral Squamous Cell Carcinoma (OSCC) diagnosis demands highly specialized pathologists, expensive lab infrastructure, inconsistent H&E stain normalization across laboratories, lack of transparent AI decision-making (black-box models), absence of personalized survival prognosis, language barriers in clinical reporting, and inability to scale remote cancer screening — all of which delay early detection, worsen patient outcomes, and increase economic burden on healthcare systems globally',
    solution: 'Architected production-grade medical AI platform deploying dual-stage inference: Stage-1 HetFusionNet v2 (76M parameters) fuses Swin-ViT-Small + CrossViT-15 transformers achieving 95.2% CNN accuracy with MC-Dropout Bayesian uncertainty quantification. Stage-2 RealTabPFN-2.5 processes 20-feature clinical vectors for TNM staging and survival prediction. Hybrid Fusion algorithm [(0.95×CNN) + (0.5×Tabular)] delivers 96.8% accuracy. Integrates Macenko stain normalization, Grad-CAM++/Layer-CAM explainability, WSI spatial heatmaps, SHAP risk attribution, Kaplan-Meier survival curves, Gemini 2.5 Flash + Groq Llama 3.3 70B VLM for clinical narratives, MongoDB + Cloudflare R2 storage, and Flask REST API — all in <30 second inference',
    tech: ['Swin-ViT-Small', 'CrossViT-15', 'HetFusionNet', 'MC-Dropout (Bayesian Deep Learning)', 'Macenko Stain Normalization (SVD)', 'Grad-CAM++', 'Layer-CAM', 'Explainable AI (XAI)', 'RealTabPFN-2.5', 'XGBoost Ensemble', 'SHAP TreeExplainer', 'Kaplan-Meier Survival Analysis', 'Vision-Language Models (VLM)', 'Whole Slide Imaging (WSI)', 'Tile-Based Spatial Analysis', 'Cloudflare R2 (S3-compatible)', 'IndexedDB (Browser Storage)', 'HIPAA-Compliant Architecture', 'Otsu Thresholding', 'CLAHE Contrast Enhancement', 'Docker'],
    features: ['Dual-stage AI pipeline: HetFusionNet v2 CNN (95.2%) fusing Swin-ViT + CrossViT for OSCC classification from H&E images', 'MC-Dropout Bayesian uncertainty with 50 passes outputting confidence levels (HIGH/MODERATE/LOW) and uncertainty scores', 'Macenko stain normalization with quality control (blur detection, tissue thresholding) for multi-lab standardization', 'RealTabPFN-2.5 tabular model processing 20 features for TNM staging, survival prediction, treatment plans, and cost estimation', 'Hybrid Fusion [(0.95×CNN) + (0.5×Tabular)] with risk stratification achieving 96.8% accuracy (+1.6% vs CNN, +9.5% vs tabular)', 'Grad-CAM++ and Layer-CAM XAI heatmaps with CLAHE enhancement for clinician-interpretable diagnostic regions', 'WSI spatial analysis: 224×224 tile inference generating color-coded heatmaps (Blue=Normal, Yellow=Suspicious, Red=Cancer)', 'SHAP risk attribution identifying modifiable factors (Tobacco +25.3%, Alcohol +18.7%) with personalized reduction strategies', 'Kaplan-Meier survival curves with 1/3/5/10-year predictions, population benchmarking, and clinical recommendations', 'VLM integration (Gemini 2.5 + Groq Llama 3.3 70B) for clinical narratives, medical Q&A, and 100+ language translation', 'MongoDB + Cloudflare R2 storage: metadata/thumbnails in MongoDB, 26+ MB PDF reports via R2 presigned URLs', 'Temporal comparison engine with SSIM scoring for disease progression and treatment response tracking', 'Hospital-grade auth (bcrypt, Flask-Login, CSRF, rate limiting) with multi-user support and HIPAA-compliant audit trails', 'Professional PDF reports with XAI heatmaps, WSI maps, Kaplan-Meier curves, SHAP plots, and treatment plans', 'REST API with 8 endpoints processing full inference in <30 seconds on Intel i7 + NVIDIA RTX 3070'],
    results: ['96.8% hybrid fusion accuracy (CNN + Tabular ensemble)', '95.2% Stage-1 CNN accuracy (AUC-ROC 0.982)', '<30 seconds full-pipeline inference (XAI + WSI + VLM)', '100+ languages supported via VLM translation', '26+ MB clinical PDF reports auto-generated', '87.3% Stage-2 tabular staging accuracy', '50-pass MC-Dropout Bayesian uncertainty quantification', '256 WSI tiles analyzed per image in spatial heatmap'],
    liveUrl: 'https://afridpasha1983-hetfusion-federated-learning-medical-ai.hf.space/',
    githubUrl: 'https://github.com/afridpasha/NeuroPlex-AI',
    image: '/projects/neuroplex.png',
    appLogo: '/projects/neuroplex-app-logo.png',
    apkUrl: '/apks/NeuroPlex-AI.apk'
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
    title: 'FlowBridge - Hybrid Multi-Protocol File Transfer & Real-Time Collaboration Platform',
    description: 'Cloud-native distributed file exchange ecosystem achieving 800 Mbps TCP throughput and 10,000+ concurrent WebSocket connections across quad-protocol architecture',
    problem: 'Enterprise file transfer systems are fragmented, protocol-locked, and fail to deliver simultaneous high-throughput transfers, real-time P2P collaboration, and zero-knowledge security within a single scalable platform',
    solution: 'Engineered a production-grade, cloud-agnostic distributed platform unifying HTTP REST, WebRTC DataChannels, raw TCP Sockets, and WebSocket streams — backed by CRDT-powered collaborative IDE, AES-256-GCM zero-knowledge encryption, multi-cloud storage abstraction (Cloudflare R2, Backblaze B2, MinIO), and Redis Pub/Sub achieving 800 Mbps throughput with sub-25ms P99 latency',
    tech: [
      'Python', 'Flask', 'WebSocket', 'WebRTC', 'TCP Sockets', 'REST APIs',
      'MongoDB', 'Redis', 'Celery', 'Docker', 'Kubernetes', 'Nginx',
      'Cloudflare R2', 'Backblaze B2', 'MinIO', 'Boto3',
      'JWT', 'AES-256-GCM', 'Argon2id', 'TOTP 2FA',
      'CRDT', 'Bloom Filter', 'Merkle Tree', 'HyperLogLog',
      'Eventlet', 'Gunicorn', 'Flask-SocketIO', 'Pydantic',
      'Consistent Hashing', 'Circuit Breaker', 'Distributed Systems'
    ],
    features: [
      'Quad-protocol architecture — HTTP, WebSocket, WebRTC P2P DataChannels & raw TCP streams in a single platform',
      'Real-time collaborative CodeShare IDE powered by CRDT differential sync with live multi-cursor tracking',
      'AES-256-GCM zero-knowledge client-side encryption with Argon2id hashing and TOTP 2FA (Google Authenticator)',
      'Multi-cloud VFS abstraction with Circuit Breaker failover across Cloudflare R2, Backblaze B2, and MinIO',
      'Redis-backed Token Bucket rate limiting, Bloom Filter O(1) lookups, and HyperLogLog cardinality estimation',
      'Merkle Tree chunk integrity verification with resumable uploads and SHA-256 end-to-end checksums',
      'Secure OTP share links with Fibonacci backoff brute-force mitigation and UUIDv4 IDOR protection',
      'Kubernetes HPA auto-scaling with Prometheus/Grafana observability and structured JSON audit logging'
    ],
    results: [
      '800 Mbps raw TCP throughput',
      '10,000+ concurrent WebSockets',
      '400 Mbps WebRTC P2P transfers',
      'Sub-25ms P99 end-to-end latency'
    ],
    liveUrl: 'https://flowbridge-lb.afridpasha1983.workers.dev',
    githubUrl: 'https://github.com/afridpasha/Flow_Bridge_File_Transfer/tree/master',
    image: '/projects/flowbridge.png',
    appLogo: '/projects/FlowBridgeFileTransfer-App-Logo.png',
    apkUrl: '/apks/FlowBridgeFileTransfer.apk'
  },
  {
    id: 5,
    title: 'Perfumes Shop - AI-Powered Luxury E-Commerce Platform',
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
    id: 6,
    title: 'Perfumes Shop - AI-Powered Luxury E-Commerce Platform',
    description: 'Production-ready full-stack e-commerce platform with AI chatbot achieving 99.9% uptime and seamless payment processing',
    problem: 'Luxury perfume retailers lack intelligent customer support and secure payment systems for online shopping experiences',
    solution: 'Architected scalable MERN stack platform integrating Google Gemini AI chatbot, Stripe payments, and microservices architecture with auto-scaling on Render Cloud',
    tech: ['MERN Stack', 'React 18', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Google Gemini API', 'Stripe API', 'JWT', 'SCSS', 'GSAP', 'Three.js', 'Web Speech API', 'REST APIs', 'Microservices'],
    features: ['AI chatbot with voice recognition reducing support queries by 40%', 'Secure Stripe payment gateway with PCI-DSS compliance', 'Real-time inventory management and order tracking', 'Promo code system with automated discount validation', 'Responsive UI with 3D animations and <2s load time', 'Role-based access control with JWT authentication'],
    results: ['99.9% uptime', '40% reduced support queries', '<2s page load', '95+ Lighthouse score', '100% secure transactions', '24/7 AI support'],
    liveUrl: 'https://perfumesshop-d2gt.onrender.com/',
    githubUrl: 'https://github.com/afridpasha/PerfumesShop',
    image: '/projects/perfumes-shop.png'
  },
  {
    id: 6,
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