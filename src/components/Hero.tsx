import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Unlock Your Career Potential</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Connect with expert mentors, develop in-demand skills, and accelerate your career growth with SkillDossier.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Find a Mentor
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Skills
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Mentor Connections</h2>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-3 py-1 rounded-full">Active</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">JD</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800 dark:text-white">John Doe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">UX Designer • Google</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">AS</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800 dark:text-white">Alice Smith</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer • Microsoft</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 dark:text-yellow-400 font-semibold">RJ</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800 dark:text-white">Robert Johnson</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager • Airbnb</p>
                </div>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 py-2 rounded-lg font-medium transition-colors"
            >
              View All Connections
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;