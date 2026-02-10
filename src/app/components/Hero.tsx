import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>
              Muhammad Ahmed
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-gray-700 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              MERN Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Crafting scalable full-stack applications with modern technologies.
              Specialized in MongoDB, Express.js, React, and Node.js.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-gray-200"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a href="mailto:2704muhammadahmed@gmail.com" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/923115168949" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://github.com/m4hmed02" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/dev-mahmed/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-lg transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}