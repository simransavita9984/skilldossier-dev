import Header from './components/Header';
import Hero from './components/Hero';
import Mentors from './components/Mentors';
import Skills from './components/Skills';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import ChatBot from './components/ChatBot';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Mentors />
        <Skills />
        <Dashboard />
      </main>
     <ChatBot/>
      <Footer />
    </div>
  );
}

export default App;