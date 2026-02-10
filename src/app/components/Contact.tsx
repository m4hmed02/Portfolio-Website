import { motion } from "motion/react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Have a project in mind? Let's work together to create something amazing.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:2704muhammadahmed@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <Mail className="w-5 h-5 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Email</p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>2704muhammadahmed@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/923115168949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <MessageCircle className="w-5 h-5 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>WhatsApp</p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>+92 311 5168 949</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Location</p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-all resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}