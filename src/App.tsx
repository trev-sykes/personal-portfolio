import ProjectCard from './components/ProjectCard';
import projects from './projects';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* HERO SECTION */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-gray-200 px-4 bg-[radial-gradient(circle_at_center,#a0aec0_1px,transparent_1px)] bg-[length:20px_20px] [mask-image:radial-gradient(circle,black_50%,transparent_100%)]">
        <div className="flex flex-col items-center w-full max-w-md mx-auto">
          <img
            src="/mugshot.jpeg"
            alt="Trevor Sykes's profile picture"
            className="w-20 h-20 rounded-full mb-4 object-cover sm:w-24 sm:h-24"
            loading="lazy"
          />
          <h3 className="text-3xl font-bold mb-3 text-gray-800">Trevor Sykes</h3>
          <p className="text-base mb-5 max-w-sm text-gray-700">Fullstack developer building clean, efficient web apps.</p>
          <div className="flex flex-col gap-3">
            <a
              href="#projects"
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-150"
            >
              View My Projects
            </a>
            <a
              href="/public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Sykes's resume (opens in new tab)"
              className="text-sm text-blue-500 hover:underline"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">About Me</h2>
        <p className="text-base max-w-md mx-auto mb-6 text-center text-gray-700 leading-relaxed">
          I'm a fullstack developer building clean, efficient web apps with React, Express.js, Tailwind, and more. I also work with Solidity for blockchain smart contracts, creating secure decentralized solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["React", "Express.js", "Tailwind", "Solidity", "Prisma", "Postgres"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">My Projects</h2>
        <div className="flex flex-col gap-6 max-w-lg mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              liveDemo={project.liveDemo}
              github={project.github}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-12 px-4 bg-gray-200 text-gray-800 text-center bg-[radial-gradient(circle_at_center,#a0aec0_1px,transparent_1px)] bg-[length:20px_20px] [mask-image:radial-gradient(circle,black_50%,transparent_100%)]">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-base mb-4">
          Email:{" "}
          <a
            href="mailto:trevsykes97@gmail.com"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Trevor Sykes (opens in new tab)"
          >
            trevsykes97@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-5 text-sm">
          <a
            href="https://github.com/trev-sykes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Trevor Sykes's GitHub profile (opens in new tab)"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <FiGithub size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/trevsykes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Trevor Sykes's LinkedIn profile (opens in new tab)"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <FiExternalLink size={16} />
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;