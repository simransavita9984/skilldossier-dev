import { motion } from 'framer-motion';
import type { Mentor } from '../types';
import { Star, Briefcase, MapPin, MessageSquare, PlusCircle } from 'lucide-react'; 

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
      button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500', 
      shadow: 'shadow-blue-500/50',
      focusRing: 'focus:ring-blue-500',

    },
    green: {
      bg: 'bg-green-200 dark:bg-green-600',
      text: 'text-green-600 dark:text-green-400',
      badge: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      button: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
      shadow: 'shadow-green-500/50',
        focusRing: 'focus:ring-green-500',
    },
    purple: {
      bg: 'bg-purple-200 dark:bg-purple-600',
      text: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      button: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
      shadow: 'shadow-purple-500/50',
        focusRing: 'focus:ring-purple-500',
    },
    yellow: {
      bg: 'bg-yellow-200 dark:bg-yellow-600',
      text: 'text-yellow-600 dark:text-yellow-400',
      badge: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      button: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
      shadow: 'shadow-yellow-500/50',
       focusRing: 'focus:ring-yellow-500',
    }
  };

  const color = colorClasses[mentor.color];

 
  const bgImages: Record<typeof mentor.color, string> = {
    blue:
     '', 
     
    green:
     '',
    purple: 
    '', 
    yellow:
     '', 
  };

  const currentBgImage = mentor.backgroundImage || bgImages[mentor.color];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${color.shadow} `}
    >
     
      <div 
        className={`h-48 rounded-t-xl bg-cover bg-center relative group`}
        style={{ backgroundImage: `url(${currentBgImage})` }}
      >
        <div className={`absolute inset-0 ${color.bg} opacity-70 group-hover:opacity-80 transition-opacity duration-300 rounded-t-xl`}></div> {/* Color overlay */}
        
      
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 overflow-hidden shadow-md">
          <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
        </div>
        
       
        <div className="absolute top-4 right-4 flex items-center bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 px-3 py-1 rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200 backdrop-blur-sm">
          <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
          <span>{mentor.rating || 'N/A'}</span>
        </div>
      </div>

     
      <div className="pt-16 pb-6 px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{mentor.name}</h3>
        <p className={`${color.text} font-medium text-md flex items-center justify-center gap-1 mb-2`}>
          <Briefcase className="w-4 h-4" /> {mentor.role} @ {mentor.company}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center gap-1 mb-4">
            <MapPin className="w-4 h-4" /> {mentor.location || 'Remote'}
        </p>

        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {mentor.bio}
        </p>

        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {mentor.skills.map((skill, i) => (
            <span key={i} className={`${color.badge} text-xs px-3 py-1 rounded-full font-medium shadow-sm`}>
              {skill}
            </span>
          ))}
        </div>

       
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: `0 4px 15px ${color.shadow.split('/')[0]}` }} // Enhanced shadow on hover
            whileTap={{ scale: 0.98 }}
            className={`flex-1 flex items-center justify-center gap-2 ${color.button} text-white py-2 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            <MessageSquare className="w-5 h-5" /> Connect
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(75, 85, 99, 0.2)', color: color.text }}
            whileTap={{ scale: 0.98 }}
     
className={`flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 
  text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg transition-all duration-200 focus:outline-none 
  focus:ring-2 focus:ring-offset-2 ${color.focusRing}`}
>
            <PlusCircle className="w-5 h-5" /> View Profile
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MentorCard;