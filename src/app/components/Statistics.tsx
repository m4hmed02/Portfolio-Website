import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Award, Briefcase, Code2, Users } from "lucide-react";

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [count, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export function Statistics() {
  const stats = [
    {
      icon: Briefcase,
      value: 3,
      suffix: "+",
      label: "Years Experience",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code2,
      value: 50,
      suffix: "+",
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Technologies Mastered",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      value: 30,
      suffix: "+",
      label: "Happy Clients",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Achievements
            </h2>
            <p className="text-lg text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              Numbers that define my journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <Counter value={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
