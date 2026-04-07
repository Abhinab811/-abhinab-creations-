import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Design & Development",
    description: "Responsive, fast, and modern websites built with Next.js, Tailwind CSS, and Framer Motion.",
    icon: "💻",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Branding & Identity",
    description: "Complete brand identity packages including logos, color palettes, and style guides.",
    icon: "🎨",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design with Figma prototypes that convert visitors into customers.",
    icon: "✨",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "SEO & Marketing",
    description: "Search engine optimization and digital marketing to grow your online presence.",
    icon: "🚀",
    color: "from-orange-500 to-red-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Creative Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform your vision into reality with our comprehensive creative services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-white/50 dark:border-gray-700/50 transition-all duration-500 hover:bg-white dark:hover:bg-gray-800"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
