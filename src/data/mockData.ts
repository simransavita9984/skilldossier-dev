import type { Mentor,Skill, DashboardData } from '../types/index'; 

export const mentorData: Mentor[] = [
  {
    id: 1,
    name: "Sarah Williams",
    role: "Senior Product Designer",
    company: "Adobe",
    bio: "Specializing in UX research, design systems, and product strategy with 8+ years of industry experience.",
    skills: ["UX Design", "Figma", "User Research"],
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    color: "blue",
    backgroundImage: 'https://i.pinimg.com/1200x/1f/b0/f7/1fb0f72c732c41bd70dd0052f14d2a6a.jpg',

  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Software Engineer",
    company: "Netflix",
    bio: "Expert in backend systems, distributed computing, and cloud infrastructure with focus on scalability.",
    skills: ["Backend", "AWS", "Java"],
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "green",
    backgroundImage : 'https://i.pinimg.com/1200x/b3/be/3a/b3be3a3d7253c5e0d796574cae5a3391.jpg'

  },
  {
    id: 3,
    name: "Jessica Rodriguez",
    role: "Data Science Manager",
    company: "Spotify",
    bio: "Specializing in machine learning, data visualization, and building data-driven product features.",
    skills: ["Python", "ML", "Tableau"],
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "purple",
    backgroundImage : 'https://i.pinimg.com/736x/db/29/c7/db29c787516fbb468ea220803f35862a.jpg'
  },
  {
    id: 4,
    name: "David Lee",
    role: "Full Stack Developer",
    company: "Shopify",
    bio: "Passionate about building responsive web applications with a strong focus on user experience and clean code.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    color: "yellow",
    backgroundImage : 'https://i.pinimg.com/736x/d4/84/26/d484268e95618b12770b217802b16dd3.jpg'
  },
  {
    id: 5,
    name: "Emily Clark",
    role: "Content Strategist",
    company: "HubSpot",
    bio: "Creating compelling content strategies that engage audiences and drive business growth through SEO and social media.",
    skills: ["Content Strategy", "SEO", "Social Media"],
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    color: "blue",
       backgroundImage : 'https://i.pinimg.com/736x/3f/33/6f/3f336fcca785df8799b18b2b152b2192.jpg'
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Cloud Architect",
    company: "Google",
    bio: "Designing and implementing scalable, secure, and resilient cloud solutions on Google Cloud Platform.",
    skills: ["GCP", "Kubernetes", "Cloud Computing", "Infrastructure as Code"],
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    color: "green",
       backgroundImage : 'https://i.pinimg.com/1200x/ab/b5/33/abb533741bcd9b568b61308b20d49673.jpg'
  }
];



export const skillData: Skill[] = [
  {
    id: 1,
    name: "Web Development",
    icon: "Code",
    description: "Master HTML, CSS, JavaScript and modern frameworks",
    courses: 12,
    mentors: 24,
    color: "blue"
  },
  {
    id: 2,
    name: "Data Science",
    icon: "BarChart3",
    description: "Learn Python, statistics, machine learning and more",
    courses: 9,
    mentors: 18,
    color: "green"
  },
  {
    id: 3,
    name: "UX Design",
    icon: "Palette",
    description: "User research, prototyping, and design thinking",
    courses: 7,
    mentors: 15,
    color: "purple"
  },
  {
    id: 4,
    name: "Digital Marketing",
    icon: "Megaphone",
    description: "SEO, social media, content strategy and analytics",
    courses: 10,
    mentors: 16,
    color: "yellow"
  },
  {
    id: 5,
    name: "Mobile App Development",
    icon: "Smartphone",
    description: "Build native and cross-platform mobile apps for iOS and Android.",
    courses: 15,
    mentors: 20,
    color: "green"
  },
  {
    id: 6,
    name: "Cybersecurity",
    icon: "Shield",
    description: "Protect systems and networks from digital attacks and threats.",
    courses: 8,
    mentors: 12,
    color: "purple"
  },
];



export const dashboardData: DashboardData = {
  connections: [
    {
      id: 1,
      initials: "SW",
      name: "Sarah Williams",
      status: "Next session: Tomorrow, 3:00 PM",
      color: "blue"
    },
    {
      id: 2,
      initials: "MC",
      name: "Michael Chen",
      status: "Next session: June 15, 10:00 AM",
      color: "green"
    },
    {
      id: 3,
      initials: "JR",
      name: "Jessica Rodriguez",
      status: "Awaiting response to request",
      color: "purple"
    },
    {
      id: 4,
      initials: "DL",
      name: "David Lee",
      status: "Next session: July 1, 2:00 PM",
      color: "yellow"
    },
  ],
  progress: {
    path: "Web Development Path",
    percentage: 65,
    completed: 13,
    total: 20
  },
  goals: [
    "Complete JavaScript module by June 12",
    "Schedule meeting with Michael Chen",
    "Finish portfolio project",
    "Research cloud computing certifications", 
    "Practice React hooks with a small app", 
    "Draft cover letter for new job applications" 
  ]
};