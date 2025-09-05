import { motion } from 'framer-motion';
import { GraduationCap, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = ['home', 'mentors', 'skills', 'dashboard'];
  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Learning Paths', href: '#' },
    { name: 'Success Stories', href: '#' },
  ];
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 dark:bg-gray-900 text-white py-12 px-6 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCap className="mr-2 text-blue-400" size={30} />
              SkillDossier
            </h3>
            <p className="text-gray-400 max-w-md">
              Connecting learners with mentors to accelerate career growth and skill development.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 capitalize focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded"
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          
      
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-200">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={item.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
        
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4 text-gray-200">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="px-4 py-2 rounded-lg focus:outline-none w-full text-gray-800 bg-gray-200 transition-colors duration-200 focus:ring-2 focus:ring-blue-400" 
                aria-label="Email address"
              />
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
        
      
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2023 SkillDossier.io. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;