import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/4 mb-10 md:mb-0 pr-0 md:pr-12 max-w-lg"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
            Unlock Your Career Potential
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Connect with expert mentors, develop in-demand skills, and accelerate your career growth with SkillDossier.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
            >
              Find a Mentor
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
            >
              Explore Skills
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="md:w-3/4 flex justify-center p-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 25px 40px rgba(59, 130, 246, 0.5)' }}
            className="w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 cursor-pointer overflow-hidden"
            style={{ maxHeight: '420px' }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/8b/6f/d1/8b6fd1da7cb3f0b7e9f7bceb5dd3a05d.jpg"
                alt="Mentors and trainees in a training session"
                className="w-full h-full object-cover"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
