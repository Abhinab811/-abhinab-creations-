import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/images/portfolio1.jpg",
    link: "#"
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "/images/portfolio2.jpg",
    link: "#"
  },
  {
    title: "Mobile App UI",
    category: "UI/UX Design",
    image: "/images/portfolio3.jpg",
    link: "#"
  },
  {
    title: "SaaS Dashboard",
    category: "Web Design",
    image: "/images/portfolio4.jpg",
    link: "#"
  },
  {
    title: "Restaurant Website",
    category: "Web Development",
    image: "/images/portfolio5.jpg",
    link: "#"
  },
  {
    title: "Fitness App",
    category: "UI/UX Design",
    image: "/images/portfolio6.jpg",
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my latest projects and creative work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
