import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
    title: string;
    description: string;
    liveDemo: string;
    github: string;
    thumbnail?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveDemo, github, thumbnail }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-150 ease-out hover:scale-[1.02] bg-[radial-gradient(circle_at_center,#e2e8f0_1px,transparent_1px)] bg-[length:16px_16px] border border-gray-200/50">
            {thumbnail && (
                <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                        src={thumbnail}
                        alt={`${title} screenshot`}
                        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/10 to-transparent pointer-events-none" />
                </div>
            )}
            <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="text-base text-gray-600 mb-4 leading-relaxed">{description}</p>
            <div className="flex gap-4 text-sm">
                <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} live demo (opens in new tab)`}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-150"
                >
                    <FiExternalLink size={16} />
                    Live Demo
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} GitHub repository (opens in new tab)`}
                    className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-50 transition-all duration-150"
                >
                    <FiGithub size={16} />
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;