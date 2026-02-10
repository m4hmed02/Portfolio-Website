import { ThemeProvider } from "./components/ThemeContext";
import { ScrollProgress } from "./components/ScrollProgress";
import { LoadingAnimation } from "./components/LoadingAnimation";
import { Navbar } from "./components/Navbar";
import { HeroTyping } from "./components/HeroTyping";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Statistics } from "./components/Statistics";
import { Services } from "./components/Services";
import { ProjectsWithFilter } from "./components/ProjectsWithFilter";
import { CodeShowcase } from "./components/CodeShowcase";
import { Timeline } from "./components/Timeline";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Newsletter } from "./components/Newsletter";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <LoadingAnimation />
        <ScrollProgress />
        <Navbar />
        <HeroTyping />
        <About />
        <Skills />
        <Statistics />
        <Services />
        <ProjectsWithFilter />
        <CodeShowcase />
        <Timeline />
        <Testimonials />
        <Blog />
        <Newsletter />
        <Contact />
        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}