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
    color: "blue"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Software Engineer",
    company: "Netflix",
    bio: "Expert in backend systems, distributed computing, and cloud infrastructure with focus on scalability.",
    skills: ["Backend", "AWS", "Java"],
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "green"
  },
  {
    id: 3,
    name: "Jessica Rodriguez",
    role: "Data Science Manager",
    company: "Spotify",
    bio: "Specializing in machine learning, data visualization, and building data-driven product features.",
    skills: ["Python", "ML", "Tableau"],
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "purple"
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
  }
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
    }
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
    "Finish portfolio project"
  ]
};