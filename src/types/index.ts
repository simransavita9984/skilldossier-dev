export interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  bio: string;
  skills: string[];
  image: string;
  color: 'blue' | 'green' | 'purple' | 'yellow';
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  description: string;
  courses: number;
  mentors: number;
  color: 'blue' | 'green' | 'purple' | 'yellow';
}

export interface Connection {
  id: number;
  initials: string;
  name: string;
  status: string;
  color: 'blue' | 'green' | 'purple';
}

export interface Progress {
  path: string;
  percentage: number;
  completed: number;
  total: number;
}

export interface DashboardData {
  connections: Connection[];
  progress: Progress;
  goals: string[];
}