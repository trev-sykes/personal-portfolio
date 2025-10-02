export interface Project {
    id: number;
    title: string;
    description: string;
    liveDemo: string;
    github: string;
    thumbnail?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "ChatRooms",
        description:
            "A modern full-stack chat application with real-time messaging, user authentication, and a responsive mobile-first design. Built with React, TypeScript, Express.js, Prisma, and PostgreSQL, featuring smooth animations and a scalable backend.",
        liveDemo: "https://chat-rooms-chi.vercel.app/",
        github: "https://github.com/trev-sykes/ChatRooms",
        thumbnail: "/chatrooms.png"
    },
    {
        id: 2,
        title: "Hype Dex",
        description:
            "A decentralized bonding curve marketplace for creating, minting, and burning ETH-backed ERC-6909 tokens. Built with React, TypeScript, Solidity, Foundry, and Wagmi, featuring quadratic token pricing, real-time charting, and trustless on-chain reserves.",
        liveDemo: "https://hype-it.vercel.app/",
        github: "https://github.com/trev-sykes/hype-dex",
        thumbnail: "/hype-dex.png",
    },
    {
        id: 3,
        title: "Question Everything",
        description:
            "A personal blog built with React, TypeScript, Vite, and Framer Motion where I explore topics like crypto, conspiracies, technology, AI, and more. Features smooth transitions and content animations, offering a space to share ideas and insights.",
        liveDemo: "https://question-everything.vercel.app/",
        github: "https://github.com/trev-sykes/question-everything",
        thumbnail: "/question-everything.png",
    },
    {
        id: 4,
        title: "Nostromo Notes",
        description:
            "A terminal-style React app inspired by the Alien franchise, allowing users to add, modify, and delete notes with interactive features, animations, and a nostalgic boot sequence. Built with React, TypeScript, Vite, and zustand for efficient state management.",
        liveDemo: "https://nostromo-notes.vercel.app/",
        github: "https://github.com/trev-sykes/nostromo-notes",
        thumbnail: "/nostromo-notes.png",
    },
    {
        id: 5,
        title: "Bonding Curve Simulator",
        description:
            "Interactive tokenomics visualization with bonding curves. Simulates asset prices in bonding curve markets with real-time charts using React, TypeScript, ReCharts, and Material UI. Features linear + logarithmic curves, random trade execution, and responsive design.",
        liveDemo: "https://bonding-curve-asset-simulator.vercel.app/",
        github: "https://github.com/trev-sykes/BondingCurveSimulator",
        thumbnail: "/bonding-curve.png",
    },
    {
        id: 6,
        title: "Bitcoin Stablecoin Protocol",
        description:
            "A decentralized stablecoin protocol on Ethereum Sepolia, built with Solidity for BTC-backed minting and liquidation with 10% bonuses. Features a React + TypeScript frontend with Chainlink price feeds for real-time BTC pricing and Ethers.js for blockchain integration.",
        liveDemo: "https://stablecoin-protocol.vercel.app/",
        github: "https://github.com/trev-sykes/Stablecoin-Protocol",
        thumbnail: "/stablecoin.png",
    },
    {
        id: 7,
        title: "Home Page Template",
        description:
            "A sleek and modern landing page with Web3 aesthetics, built with React, TypeScript, TailwindCSS, Vite, and Framer Motion. Features smooth animations, responsive interactive buttons, and a polished, adaptable layout suitable for e-commerce brands and Web3 dApps.",
        liveDemo: "https://home-page-template.vercel.app/",
        github: "https://github.com/trev-sykes/home-page-template",
        thumbnail: "/home-page.png",
    },

    {
        id: 8,
        title: "Proof of Regret",
        description:
            "A Web3 dApp on Arbitrum that lets users confess regrets for 0.001 ETH, seek forgiveness for 0.0001 ETH, and resolve after 3 days with ETH payouts. Built with React, TypeScript, and Solidity, featuring real-time blockchain data and responsive confession cards.",
        liveDemo: "https://proof-of-regret.vercel.app/",
        github: "https://github.com/trev-sykes/proof-of-regret",
        thumbnail: "/proof-of-regret.png",
    },
];

export default projects;