import { motion } from "motion/react";
import { Code, Database, Palette, Rocket, Shield, Smartphone } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web application development using MERN stack with scalable architecture and clean code.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Creating mobile-first, responsive websites that work seamlessly across all devices and browsers.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "API Development",
      description: "RESTful API design and development with authentication, authorization, and comprehensive documentation.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description: "Implementing industry-standard security practices including JWT, bcrypt, and data encryption.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Palette,
      title: "UI/UX Integration",
      description: "Converting designs into pixel-perfect, interactive interfaces with smooth animations and transitions.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Optimizing application performance, load times, and implementing best practices for scalability.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Comprehensive solutions for your web development needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
