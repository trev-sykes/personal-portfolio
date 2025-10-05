import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from "framer-motion";
import { FiExternalLink, FiGithub, FiMail, FiMoon, FiSun } from 'react-icons/fi';
import projects from './projects';
import ProjectCard from './components/ProjectCard';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const projectsRef = useRef(null);
  const { scrollYProgress: projectsScroll } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });
  const projectsY = useTransform(projectsScroll, [0, 1], [0, -50]);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], [100, -150]);
  return (
    <div
      className="font-sans transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Dark Mode Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="theme-toggle"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? (
            <FiMoon size={20} color="var(--text-primary)" />
          ) : (
            <FiSun size={20} color="var(--text-primary)" />
          )}
        </motion.div>
      </motion.button>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="min-h-[70vh] flex items-center justify-center px-4 py-12 relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-25" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-gray-600)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--color-blue-900)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <motion.g style={{ y: heroY }}>
              <circle cx="30%" cy="20%" r="120" fill="url(#heroGradient)" />
              <circle cx="70%" cy="80%" r="180" fill="url(#heroGradient)" />
            </motion.g>
          </svg>
        </div>

        <motion.div
          className="relative w-full max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div
              className="relative flex-shrink-0"
              variants={fadeInUp}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <img
                  src="/mugshot.jpeg"
                  alt="Trevor Sykes"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 shadow-2xl"
                  style={{
                    borderColor: 'var(--bg-primary)',
                    boxShadow: 'var(--shadow-2xl)'
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xl shadow-xl backdrop-blur-sm"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                👋
              </motion.div>
            </motion.div>

            <div className="flex-1 text-center md:text-left md:pt-4">
              <motion.div
                variants={fadeInUp}
                className="inline-block mb-3 px-5 py-2 backdrop-blur-sm rounded-full text-sm font-medium border shadow-sm"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-color)'
                }}
              >
                Available for opportunities
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="gradient-text text-4xl md:text-5xl font-bold mb-4"
              >
                Trevor Sykes
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl mb-6 leading-relaxed max-w-xl"
                style={{ color: 'var(--text-secondary)' }}
              >
                Fullstack developer crafting clean, efficient web experiences with modern technologies.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              >
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section
        className="py-20 px-4 relative"
        style={{
          background: `linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))`
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              About Me
            </h2>
            <div className="gradient-divider mx-auto" />
          </motion.div>

          <motion.div
            className="glass-card relative rounded-3xl p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full blur-3xl" />

            <div className="relative">
              <p
                className="text-base md:text-lg leading-relaxed mb-10 text-center max-w-2xl mx-auto"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm a fullstack developer building clean, efficient web apps with React, Express.js, Tailwind, and more. I also work with Solidity for blockchain smart contracts, creating secure decentralized solutions.
              </p>

              <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {["React", "Express.js", "Tailwind", "Solidity", "Prisma", "Postgres"].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeInUp}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-32 px-4 relative overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))`
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-30" />
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-gray-600)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--color-blue-900)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <motion.g style={{ y: projectsY }}>
              <circle cx="20%" cy="30%" r="150" fill="url(#shapeGradient)" />
              <circle cx="80%" cy="70%" r="200" fill="url(#shapeGradient)" />
            </motion.g>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Featured Projects
            </h2>
            <div className="gradient-divider mx-auto" />
          </motion.div>

          <div className="snap-y snap-mandatory space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="snap-start snap-always min-h-[60vh] flex items-center justify-center"
              >
                <div className="max-w-2xl w-full">
                  <ProjectCard {...project} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          backgroundColor: theme === 'dark' ? '#0f172a' : '#111827'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:30px_30px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl" />

        <motion.div
          className="relative max-w-2xl mx-auto text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg mb-10"
          >
            Have a project in mind? Let's build something great together.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="mailto:trevsykes97@gmail.com"
            className="contact-link mb-10"
            style={{
              backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
              color: theme === 'dark' ? '#f1f5f9' : '#111827'
            }}
          >
            <FiMail size={20} />
            trevsykes97@gmail.com
          </motion.a>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-8 pt-8 border-t border-gray-700/50"
          >
            <a
              href="https://github.com/trev-sykes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200 group"
            >
              <FiGithub size={22} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/trevsykes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200 group"
            >
              <FiExternalLink size={22} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;