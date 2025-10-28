import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiMoon, FiSun, FiCode, FiDatabase, FiLayers } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import projects from './projects';

function App() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    backend: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs"],
    blockchain: ["Solidity", "Ethereum", "Smart Contracts", "Web3"]
  };

  return (
    <div className="min-h-screen" style={{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      transition: 'background-color 0.3s ease'
    }}>

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-sm"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
      </motion.button>

      {/* Hero Section - Concise & Professional */}
      <section className="px-6 pt-20 pb-16 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <motion.img
            variants={fadeIn}
            src="/mugshot.jpeg"
            alt="Trevor Sykes"
            className="w-32 h-32 rounded-full object-cover ring-4"
            style={{
              borderColor: 'var(--bg-primary)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
            }}
          />

          <div className="flex-1 text-center md:text-left">
            <motion.div variants={fadeIn} className="inline-block mb-3 px-4 py-1.5 rounded-full text-sm font-medium" style={{
              backgroundColor: 'var(--bg-tertiary)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-color)'
            }}>
              Open to opportunities
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">Trevor Sykes</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl mb-6" style={{ color: 'var(--text-secondary)' }}>
              Fullstack Developer specializing in React, TypeScript & Blockchain
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section - Clear & Scannable */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: FiLayers, title: "Frontend", skills: skills.frontend },
            { icon: FiDatabase, title: "Backend", skills: skills.backend },
            { icon: FiCode, title: "Blockchain", skills: skills.blockchain }
          ].map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon size={24} style={{ color: 'var(--text-primary)' }} />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag text-sm">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section - Hero Focus */}
      <section id="projects" className="px-6 py-16 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-3 text-center"
        >
          Featured Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          Production-ready applications showcasing full-stack development
        </motion.p>

        <div className="space-y-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden bg-gray-200">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                  {/* Mobile description */}
                  <p className="md:hidden mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.mobileDescription}
                  </p>

                  {/* Desktop / tablet description */}
                  <p className="hidden md:block mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="hidden sm:flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-tag text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium hover:underline"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <FiGithub size={18} /> View Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium hover:underline"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <FiExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleProjects(visibleProjects + 3)} // load 3 more at a time
              className="btn-primary"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* Contact Section - Direct & Professional */}
      <section id="contact" className="px-6 py-20 text-center" style={{
        backgroundColor: theme === 'dark' ? '#0f172a' : '#111827'
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-8">
            Looking for a developer who can deliver clean, efficient solutions? Let's talk.
          </p>

          <a
            href="mailto:trevsykes97@gmail.com"
            className="mailto-btn inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-lg transition-transform hover:scale-105 mb-10"
          >
            <span>trevsykes97@gmail.com</span>
          </a>

          <div className="flex justify-center gap-8 pt-8 border-t border-gray-700">
            <a
              href="https://github.com/trev-sykes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FiGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/trevsykes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FiExternalLink size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </section>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .btn-primary {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: transform 0.2s;
          display: inline-block;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          padding: 0.75rem 1.5rem;
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.2s;
          display: inline-block;
        }
        
        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: var(--text-secondary);
        }
        
        .skill-tag {
          padding: 0.5rem 1rem;
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
          border-radius: 0.5rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }
          .mailto-btn {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          text-align: center;
          flex-wrap: wrap; /* ensures icon + text don't overflow on small screens */
        }

        [data-theme="dark"] .mailto-btn {
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          border-color: var(--border-color);
        }
        
        :root {
          --bg-primary: #ffffff;
          --bg-secondary: #f9fafb;
          --bg-tertiary: #f3f4f6;
          --text-primary: #111827;
          --text-secondary: #6b7280;
          --border-color: #e5e7eb;
        }
        
        [data-theme="dark"] {
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --bg-tertiary: #334155;
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --border-color: #334155;
        }
      `}</style>
    </div>
  );
}

export default App;