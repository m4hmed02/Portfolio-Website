import { motion } from "motion/react";
import { ExternalLink, Github, ShoppingCart, Car } from "lucide-react";
import { useState } from "react";

export function ProjectsWithFilter() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce website with admin panel, wishlist, shopping cart, and secure checkout. Built with MERN stack featuring user authentication and payment integration.",
      image: "https://images.unsplash.com/photo-1726443221401-ddd359c08d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGNhcnQlMjBjaGVja291dHxlbnwxfHx8fDE3NzA2MjQzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: ShoppingCart,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      features: ["Admin Dashboard", "Wishlist & Cart", "Secure Checkout", "Order Tracking"],
      category: "fullstack"
    },
    {
      title: "Rental Car SaaS",
      description: "Multi-vendor SaaS platform where sellers list vehicles and customers browse and book rentals. Enterprise-grade security with bcrypt and JWT authentication.",
      image: "https://images.unsplash.com/photo-1572738468450-610a57ada5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzA2MjQzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Car,
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Bcrypt"],
      features: ["Multi-Vendor", "JWT Auth", "Secure Encryption", "Booking System"],
      category: "fullstack"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Showcasing my expertise in building scalable web applications
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <project.icon className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg text-xs text-gray-700 dark:text-gray-300"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-xs"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Demo</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 border-2 border-gray-200 dark:border-gray-600">
                      <Github className="w-4 h-4" />
                      <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Code</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
