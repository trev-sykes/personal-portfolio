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

    // Track scroll progress of this specific card
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Transform values based on scroll position with smoother curves
    const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [200, 0, -30, -150]);
    const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [12, 0, -2, -5, -12]);
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.75, 1, 0.98, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.75, 0.95], [0, 1, 1, 0]);

    // Dynamic blur effect - more blur at entry/exit
    const blur = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [10, 0, 0, 8]);
    const blurValue = useTransform(blur, (value) => `blur(${value}px)`);

    // Subtle brightness/saturation changes
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
            }}
            className="group relative rounded-3xl overflow-hidden border border-gray-200/50"
        >
            {/* Glassmorphism backdrop */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(100, 100, 100, 0.08) 0%, transparent 50%)'
                }}
            />

            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Content wrapper with relative positioning */}
            <div className="relative">
                {/* Thumbnail section with enhanced glass effect */}
                <div className="relative h-56 overflow-hidden">
                    {thumbnail ? (
                        <>
                            {/* Image with overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={thumbnail}
                                    alt={title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                {/* Gradient overlays for depth */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating glass action buttons */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                                <a
                                    href={liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <FiExternalLink size={18} />
                                </a>
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <FiGithub size={18} />
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-50 to-gray-100">
                            <div className="text-8xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">💻</div>
                        </div>
                    )}
                </div>

                {/* Content section with glass effect */}
                <div className="relative p-7 bg-gradient-to-b from-white/50 to-white/80 backdrop-blur-sm">
                    {/* Subtle top border line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent" />

                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                        {description}
                    </p>

                    {/* Action buttons with enhanced glass style */}
                    <div className="flex gap-3">
                        <a
                            href={liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-[1.02] hover:-translate-y-0.5"
                        >
                            <FiExternalLink size={16} />
                            <span>Live Demo</span>
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-white hover:border-gray-900 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-0.5"
                        >
                            <FiGithub size={16} />
                            <span className="hidden sm:inline">Code</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Enhanced accent line at bottom with gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>

            {/* Outer glow effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-2xl shadow-gray-400/20" />
        </motion.div>
    );
};

export default ProjectCard;