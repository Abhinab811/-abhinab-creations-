import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-4">
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-purple-500 pr-2 animate-typewriter animate-blink">
              Abhinab Creations
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Crafting stunning digital experiences that captivate, convert, and create lasting impact.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="#contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link href="#portfolio">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold text-lg rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
