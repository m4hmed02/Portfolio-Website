import { motion } from "motion/react";
import { Code2, Database, Server, Smartphone } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React.js, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express.js, RESTful APIs",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB, PostgreSQL, MySQL",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach, Cross-browser compatibility",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            I'm a passionate MERN Stack Developer with expertise in building robust and scalable web applications.
            I specialize in creating seamless user experiences with clean, maintainable code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}