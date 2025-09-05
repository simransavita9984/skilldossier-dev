import { motion } from 'framer-motion';
import { Code, BarChart3, Palette, Megaphone, Cpu, Database, Cloud, MessageCircle, Shield, Zap, Camera, Music,
  Video, BookOpen, Briefcase, Globe, Mail, Phone, MapPin, Heart, Star, Users, Settings, Home, Search,
  Bell, User, Lock, Unlock,
  Eye,
  EyeOff,
  Download,
  Upload,
  Image,
  File,
  Folder,
  Trash2,
  Edit2,
  Copy,
  Save,
  Filter,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  Plus,
  Minus,
  HelpCircle,
  Info,
  AlertCircle,
  AlertTriangle,
  type LucideIcon
} from 'lucide-react';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

//mapping object 
const iconMap: Record<string, LucideIcon> = {
  Code,
  BarChart3,
  Palette,
  Megaphone,
  Cpu,
  Database,
  Cloud,
  MessageCircle,
  Shield,
  Zap,
  Camera,
  Music,
  Video,
  BookOpen,
  Briefcase,
  Globe,
  Mail,
  Phone,
  MapPin,
  Heart,
  Star,
  Users,
  Settings,
  Home,
  Search,
  Bell,
  User,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Download,
  Upload,
  Image,
  File,
  Folder,
  Trash2,
  Edit2,
  Copy,
  Save,
  Filter,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  Plus,
  Minus,
  HelpCircle,
  Info,
  AlertCircle,
  AlertTriangle,
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-600 dark:text-blue-400'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-600 dark:text-green-400'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-600 dark:text-purple-400'
    },
    yellow: {
      bg: 'bg-yellow-100 dark:bg-yellow-900',
      text: 'text-yellow-600 dark:text-yellow-400'
    }
  };

  const color = colorClasses[skill.color];
  const IconComponent = iconMap[skill.icon] || HelpCircle; 

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105"
    >
      <div className={`w-14 h-14 ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
        <IconComponent className={`text-2xl ${color.text}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <span>{skill.courses} courses</span>
        <span className="mx-2">•</span>
        <span>{skill.mentors} mentors</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;