import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Muhammad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise is outstanding."
    },
    {
      name: "David Chen",
      role: "Founder, CarRental Pro",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "The rental SaaS platform Muhammad built has been instrumental in scaling our business. Professional, reliable, and highly skilled developer."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, Digital Ventures",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "Working with Muhammad was a pleasure. He understood our requirements perfectly and delivered a robust, scalable solution on time."
    },
    {
      name: "Michael Brown",
      role: "CTO, InnovateTech",
      image: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      text: "Exceptional full-stack developer! Muhammad's expertise in MERN stack and best practices helped us build a high-performance application."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            What clients say about working with me
          </p>

          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <Quote className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-6" />
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                "{testimonials[activeIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-lg"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {testimonials[activeIndex].role}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-gray-900 dark:bg-white w-8" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
