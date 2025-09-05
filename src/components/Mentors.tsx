import { useState } from 'react';
import { motion } from 'framer-motion';
import MentorCard from './MentorCard';
import { mentorData } from '../data/mockData';

const Mentors: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const mentorsToShow = mentorData.slice(0, visibleCount);

  const handleViewAllClick = () => {
    setVisibleCount(mentorData.length);
  };

  return (
    <section id="mentors" className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Featured Mentors</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Connect with industry experts who can guide you through your career journey</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentorsToShow.map((mentor, index) => (
            <MentorCard key={mentor.id} mentor={mentor} index={index} />
          ))}
        </div>
        
        {visibleCount < mentorData.length && (
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewAllClick}
              className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Mentors
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Mentors;