import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
    title: string;
    description: string;
    liveDemo: string;
    github: string;
    thumbnail?: string;
    index: number;
}

const ProjectCard = ({ title, description, liveDemo, github, thumbnail }: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [200, 0, -30, -150]);
    const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [12, 0, -2, -5, -12]);
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.75, 1, 0.98, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.75, 0.95], [0, 1, 1, 0]);

    const blur = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [10, 0, 0, 8]);
    const blurValue = useTransform(blur, (value) => `blur(${value}px)`);

    const brightness = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.7, 1, 1, 0.8]);
    const saturate = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.5, 1, 1, 0.7]);

    return (
        <motion.div
            ref={cardRef}
            style={{
                y,
                rotate,
                scale,
                opacity,
                filter: useTransform(
                    () => `${blurValue.get()} brightness(${brightness.get()}) saturate(${saturate.get()})`
                ),
                borderColor: 'var(--border-color)'
            }}
            className="group relative rounded-3xl overflow-hidden border"
        >
            {/* Glassmorphism backdrop - adapts to theme */}
            <div
                className="absolute inset-0 backdrop-blur-xl"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
            />

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(100, 100, 100, 0.08) 0%, transparent 50%)'
                }}
            />

            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{
                        backgroundImage: 'linear-gradient(to right, transparent, var(--bg-primary), transparent)'
                    }}
                />
            </div>

            {/* Content wrapper */}
            <div className="relative">
                {/* Thumbnail section */}
                <div className="relative h-56 overflow-hidden">
                    {thumbnail ? (
                        <>
                            <div className="absolute inset-0">
                                <img
                                    src={thumbnail}
                                    alt={title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating glass action buttons */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                                <a
                                    href={liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                                    style={{
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--text-primary)'
                                    }}
                                >
                                    <FiExternalLink size={18} />
                                </a>
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                                    style={{
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--text-secondary)'
                                    }}
                                >
                                    <FiGithub size={18} />
                                </a>
                            </div>
                        </>
                    ) : (
                        <div
                            className="flex items-center justify-center h-full"
                            style={{
                                background: `linear-gradient(to bottom right, var(--bg-secondary), var(--bg-tertiary))`
                            }}
                        >
                            <div className="text-8xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">💻</div>
                        </div>
                    )}
                </div>

                {/* Content section */}
                <div
                    className="relative p-7 backdrop-blur-sm"
                    style={{
                        background: `linear-gradient(to bottom, var(--bg-tertiary), var(--bg-secondary))`
                    }}
                >
                    {/* Top border line */}
                    <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{
                            background: `linear-gradient(to right, transparent, var(--border-color), transparent)`,
                            opacity: 0.5
                        }}
                    />

                    <h3
                        className="text-xl font-bold mb-3 transition-colors duration-300"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {title}
                    </h3>

                    <p
                        className="text-sm mb-6 leading-relaxed line-clamp-2 transition-colors duration-200"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        {description}
                    </p>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                        <a
                            href={liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm"
                        >
                            <FiExternalLink size={16} />
                            <span>Live Demo</span>
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center justify-center gap-2 text-sm"
                        >
                            <FiGithub size={16} />
                            <span className="hidden sm:inline">Code</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Accent line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                <div
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                        background: 'linear-gradient(to right, var(--color-gray-300), var(--color-gray-600), var(--color-gray-800))'
                    }}
                />
                <div
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                    style={{
                        background: `linear-gradient(to right, transparent, var(--bg-primary), transparent)`,
                        opacity: 0.5
                    }}
                />
            </div>

            {/* Outer glow effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-2xl" />
        </motion.div>
    );
};

export default ProjectCard;