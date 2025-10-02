import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from "framer-motion";
import { FiExternalLink, FiGithub, FiMail } from 'react-icons/fi';
import projects from './projects';
import ProjectCard from './components/ProjectCard';
import { useRef } from 'react';

function App() {
  // Animation variants for sections
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

  // Ref and scroll tracking for projects section
  const projectsRef = useRef(null);
  const { scrollYProgress: projectsScroll } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });
  // Refined parallax range: more pronounced movement
  const projectsY = useTransform(projectsScroll, [0, 1], [0, -150]);

  // Ref and scroll tracking for hero section
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  // Parallax for hero orbs: subtle movement
  const heroY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="min-h-[70vh] flex items-center justify-center px-4 py-12 relative overflow-hidden bg-white">
        {/* Parallax orbs background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-25" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#6B7280', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#1E3A8A', stopOpacity: 0.1 }} />
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
            {/* Profile image with enhanced glass effect */}
            <motion.div
              className="relative flex-shrink-0"
              variants={fadeInUp}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <img
                  src="/mugshot.jpeg"
                  alt="Trevor Sykes"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-white shadow-2xl"
                />
                {/* Glass overlay on image */}
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

            {/* Content */}
            <div className="flex-1 text-center md:text-left md:pt-4">
              <motion.div
                variants={fadeInUp}
                className="inline-block mb-3 px-5 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-gray-200/50 shadow-sm"
              >
                Available for opportunities
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
              >
                Trevor Sykes
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-xl"
              >
                Fullstack developer crafting clean, efficient web experiences with modern technologies.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              >
                <a
                  href="#projects"
                  className="px-7 py-3.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                >
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION with glass effect */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 mx-auto rounded-full shadow-sm" />
          </motion.div>

          <motion.div
            className="relative rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" />

            {/* Gradient accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-gray-100/50 to-transparent rounded-full blur-3xl" />

            <div className="relative">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
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
                    className="px-5 py-2.5 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl text-sm font-medium border border-gray-200/50 hover:border-gray-400 hover:bg-white hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION with scroll snapping and refined parallax orbs */}
      <section id="projects" ref={projectsRef} className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration with animated shapes */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-30" />
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#6B7280', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#1E3A8A', stopOpacity: 0.1 }} />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Featured Projects
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 mx-auto rounded-full shadow-sm" />
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

      {/* CONTACT SECTION with enhanced glass effect */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:30px_30px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Gradient orbs for depth */}
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/95 backdrop-blur-sm text-gray-900 rounded-xl font-medium text-lg hover:bg-white hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 mb-10 shadow-xl"
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