import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { GraduationCap } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 fixed w-full z-50 transition-colors duration-300"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer flex items-center"
            onClick={() => scrollToSection('home')}
          >
            <GraduationCap className="mr-2" />
            SkillDossier
          </motion.span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['home', 'mentors', 'skills', 'dashboard'].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`#${item}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;