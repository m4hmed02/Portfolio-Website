import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stay Updated
          </h2>
          <p className="text-lg text-white/90 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Subscribe to my newsletter for the latest articles, tips, and insights about web development
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/95 dark:bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              <Send className="w-5 h-5" />
              Subscribe
            </button>
          </form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-white font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ✓ Successfully subscribed! Check your email.
            </motion.p>
          )}

          <p className="mt-6 text-white/75 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            No spam. Unsubscribe anytime. Your email is safe with me.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
