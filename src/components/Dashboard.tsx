import { motion } from 'framer-motion';
import { dashboardData } from '../data/mockData';

const Dashboard: React.FC = () => {
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
      text: 'text-yellow-800 dark:text-yellow-200',
    },
  };

  return (
    <section id="dashboard" className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Your Learning Dashboard</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Track your progress, manage mentor relationships, and plan your next steps</p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Your Mentor Connections</h3>
              
              <div className="space-y-6">
                {dashboardData.connections.map((connection, index) => {
                  const color = colorClasses[connection.color];
                  return (
                    <motion.div 
                      key={connection.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center"
                    >
                      <div className={`w-12 h-12 ${color.bg} rounded-full flex items-center justify-center mr-4`}>
                        <span className={`${color.text} font-semibold`}>{connection.initials}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 dark:text-white">{connection.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{connection.status}</p>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        Message
                      </motion.button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Your Progress</h3>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6"
              >
                <h4 className="font-medium text-gray-800 dark:text-white mb-4">{dashboardData.progress.path}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${dashboardData.progress.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 h-2.5 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{dashboardData.progress.completed} of {dashboardData.progress.total} modules completed</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
              >
                <h4 className="font-medium text-gray-800 dark:text-white mb-4">Upcoming Goals</h4>
                <ul className="space-y-3">
                  {dashboardData.goals.map((goal, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{goal}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;