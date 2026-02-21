import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function Timeline() {
  const timeline = [
    {
      icon: Briefcase,
      type: "work",
      title: "Full Stack Developer",
      organization: "Digital Innovations",
      description: "Developed multiple e-commerce platforms and SaaS applications using MERN stack with focus on performance optimization."
    },
    {
      icon: Award,
      type: "achievement",
      title: "Enterprise SaaS Platform Launch",
      organization: "Major Project Achievement",
      period: "2022",
      description: "Successfully launched a multi-vendor rental platform."
    },
    {
      icon: GraduationCap,
      type: "education",
      title: "Bachelor's in Computer Science",
      organization: "Air University",
      period: "2023 - 2027",
      description: "Graduated with honors, specialized in web technologies and software engineering."
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16" style={{ fontFamily: "'Inter', sans-serif" }}>
            Experience, education, and key milestones
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 ml-16"
              >
                {/* Icon */}
                <div className="absolute -left-20 top-0 w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <item.icon className="w-8 h-8 text-white dark:text-gray-900" />
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1 dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
