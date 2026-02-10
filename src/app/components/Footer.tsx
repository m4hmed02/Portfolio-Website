import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Muhammad Ahmed
              </h3>
              <p className="text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                MERN Stack Developer
              </p>
            </div>

            <div className="flex gap-6">
              <a 
                href="mailto:2704muhammadahmed@gmail.com" 
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/923115168949" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              © {new Date().getFullYear()} Muhammad Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}