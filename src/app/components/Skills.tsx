import { motion } from "motion/react";

export function Skills() {
  const technologies = [
    { name: "React.js", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "MongoDB", color: "bg-emerald-500" },
    { name: "Express.js", color: "bg-gray-700" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Next.js", color: "bg-black" },
    { name: "Tailwind CSS", color: "bg-cyan-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "PostgreSQL", color: "bg-indigo-500" },
    { name: "JWT", color: "bg-purple-500" },
    { name: "Bcrypt", color: "bg-orange-500" },
    { name: "RESTful APIs", color: "bg-teal-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Technologies & Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            My technical toolkit for building modern web applications
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className={`${tech.color} px-6 py-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}