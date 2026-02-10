import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Blog() {
  const articles = [
    {
      title: "Building Scalable MERN Applications",
      excerpt: "Learn how to structure your MERN stack application for optimal scalability and maintainability.",
      date: "Feb 5, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      category: "Development"
    },
    {
      title: "JWT Authentication Best Practices",
      excerpt: "Implementing secure authentication in Node.js applications with JWT tokens and refresh tokens.",
      date: "Jan 28, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      category: "Security"
    },
    {
      title: "React Performance Optimization Tips",
      excerpt: "Advanced techniques to optimize React applications for better performance and user experience.",
      date: "Jan 15, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      category: "React"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Sharing knowledge and insights about web development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              View All Articles
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
