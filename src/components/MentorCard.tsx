import { motion } from 'framer-motion';
import type { Mentor } from '../types';

interface MentorCardProps {
  mentor: Mentor;
  index: number;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, index }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-200 dark:bg-blue-600',
      text: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    green: {
      bg: 'bg-green-200 dark:bg-green-600',
      text: 'text-green-600 dark:text-green-400',
      badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      button: 'bg-green-600 hover:bg-green-700'
    },
    purple: {
      bg: 'bg-purple-200 dark:bg-purple-600',
      text: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    yellow: {
      bg: 'bg-yellow-200 dark:bg-yellow-600',
      text: 'text-yellow-600 dark:text-yellow-400',
      badge: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      button: 'bg-yellow-600 hover:bg-yellow-700'
    }
  };

  const color = colorClasses[mentor.color];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <div className={`h-48 ${color.bg} relative`}>
        <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 overflow-hidden">
          <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="pt-14 pb-6 px-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{mentor.name}</h3>
        <p className={`${color.text} mb-2`}>{mentor.role} • {mentor.company}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{mentor.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.skills.map((skill, i) => (
            <span key={i} className={`${color.badge} text-sm px-3 py-1 rounded-full`}>
              {skill}
            </span>
          ))}
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full ${color.button} text-white py-2 rounded-lg transition-colors`}
        >
          Connect
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MentorCard;