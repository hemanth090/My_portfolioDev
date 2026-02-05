

/**
 * Internationalization formatters
 */
export const dateFormatting = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric'
});

export const numberFormatting = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

/**
 * Data
 */
export const DATA = {
    name: "Naveen Hemanth Kokkonda",
    title: "Frontend Developer",
    headline: "Building high-performance, interactive user interfaces for data-intensive applications.",
    bio: "Final-year Computer Science student specializing in Data Science. Passionate about crafting intuitive, accessible, and responsive web experiences.",
    about: "I am a Frontend Developer with a strong foundation in Computer Science. My focus is on bridging the gap between complex data and user-friendly interfaces. I specialize in building production-ready applications using React, TypeScript, and modern CSS frameworks, ensuring that every pixel serves a purpose and every interaction is smooth.",
    profileImage: "/profile.webp",
    contact: {
        location: "Hyderabad, India",
        phone: "+91-6300296968",
        email: "naveenhemanth4@gmail.com",
        linkedin: "https://www.linkedin.com/in/hemanthkokkonda/",
        github: "https://github.com/hemanth090/"
    },
    skills: [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { category: "Backend & API", items: ["Python", "FastAPI", "REST APIs", "Node.js"] },
        { category: "Tools & DevOps", items: ["Git", "Vite", "Figma", "Vercel"] }
    ],
    projects: [
        {
            title: "Tokenizer",
            status: "Live",
            description: "Interactive dashboard for visualizing LLM tokenization in real-time. featuring dynamic encoding graphs and a responsive cost-calculation engine to help engineers optimize prompt efficiency.",
            tech: ["React", "TypeScript", "Recharts", "Radix UI"],
            link: "https://tokenizer-omega.vercel.app/",
            github: "https://github.com/hemanth090/Tokenizer",
            image: "/projects/tokenizer.webp"
        },
        {
            title: "TOON Studio",
            date: new Date(2025, 11),
            description: "A comprehensive analytics platform for tracking token usage. Built with a focus on data visualization and performance, enabling users to monitor API costs through interactive charts.",
            tech: ["React", "Tailwind CSS", "FastAPI", "Shadcn UI"],
            link: "https://toon-optimizer.vercel.app/",
            github: "https://github.com/hemanth090/Toon-optimizer",
            image: "/projects/toon-studio.webp"
        },
        {
            title: "KnoRa AI",
            date: new Date(2025, 7),
            description: "A modern conversational interface for RAG systems. Implemented optimistic UI updates, streaming responses, and file drag-and-drop interactions for a seamless document chat experience.",
            tech: ["React", "Streamlit", "CSS Modules", "Axios"],
            link: "http://knora-ai.streamlit.app/",
            github: "https://github.com/hemanth090/knora_ai",
            image: "/projects/knora.webp"
        }
    ],
    experience: [
        {
            company: "Tradl AI",
            role: "Frontend Developer",
            location: "Bangalore, India",
            period: "Present",
            link: "https://tradl.in",
            description: "Developed the frontend interface enabling users to query NSE/BSE data using natural language. Built responsive data visualizations that present quant-grade analysis instantly, replacing complex traditional filters with a simple conversational UI."
        }
    ],
    education: [
        {
            degree: "B.Tech CSE (Data Science)",
            school: "Sreyas Institute of Engineering and Technology",
            location: "Hyderabad, India",
            score: 7.51,
            period: "2022 - 2026"
        }
    ],
    certifications: [
        { name: "Oracle Cloud Generative AI Professional", date: "Aug 2025" },
        { name: "Simplilearn Front End Development", date: "Jun 2025" },
        { name: "MongoDB Python Developer Path", date: "Jan 2024" }
    ]
};
