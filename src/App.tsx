import { FiExternalLink, FiGithub, FiMail } from 'react-icons/fi';
import projects from './projects';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-12 relative overflow-hidden bg-white">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Asymmetric layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile image - offset and elevated */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur opacity-20" />
              <img
                src="/mugshot.jpeg"
                alt="Trevor Sykes"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-white shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                👋
              </div>
            </div>

            {/* Content - offset to the right */}
            <div className="flex-1 text-center md:text-left md:pt-4">
              <div className="inline-block mb-3 px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                Available for opportunities
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Trevor Sykes
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-xl">
                Fullstack developer crafting clean, efficient web experiences with modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-150 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-150 hover:shadow-md"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 mx-auto rounded-full" />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              I'm a fullstack developer building clean, efficient web apps with React, Express.js, Tailwind, and more. I also work with Solidity for blockchain smart contracts, creating secure decentralized solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["React", "Express.js", "Tailwind", "Solidity", "Prisma", "Postgres"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-150 transform hover:-translate-y-0.5"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-4 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px]" />

        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-8">
            Have a project in mind? Let's build something great together.
          </p>

          <a
            href="mailto:trevsykes97@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-medium text-lg hover:shadow-2xl transition-all duration-150 transform hover:-translate-y-1 mb-8"
          >
            <FiMail size={20} />
            trevsykes97@gmail.com
          </a>

          <div className="flex justify-center gap-6 pt-8 border-t border-gray-700">
            <a
              href="https://github.com/trev-sykes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/trevsykes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <FiExternalLink size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;