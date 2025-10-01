import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
    title: string;
    description: string;
    liveDemo: string;
    github: string;
    thumbnail?: string;
}

const ProjectCard = ({ title, description, liveDemo, github, thumbnail }: ProjectCardProps) => (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 to-gray-800/0 group-hover:from-gray-900/3 group-hover:to-gray-800/3 transition-all duration-300 pointer-events-none z-10" />

        {/* Thumbnail section */}
        <div className="relative h-52 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {thumbnail ? (
                <>
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Floating action buttons on hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <a
                            href={liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all duration-150 shadow-lg"
                        >
                            <FiExternalLink size={18} />
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-150 shadow-lg"
                        >
                            <FiGithub size={18} />
                        </a>
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-full">
                    <div className="text-7xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300">💻</div>
                </div>
            )}
        </div>

        {/* Content section */}
        <div className="relative p-6 z-20">
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                {title}
            </h3>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-150">
                {description}
            </p>

            {/* Action buttons */}
            <div className="flex gap-3">
                <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-150 shadow-sm hover:shadow-md transform hover:scale-105"
                >
                    <FiExternalLink size={16} />
                    <span>Live Demo</span>
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-900 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150 transform hover:scale-105"
                >
                    <FiGithub size={16} />
                    <span className="hidden sm:inline">Code</span>
                </a>
            </div>
        </div>

        {/* Accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
);

export default ProjectCard;