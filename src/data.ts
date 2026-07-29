import type { PortfolioData } from './types';

/**
 * Internationalization formatters
 */
export const numberFormatting = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

/**
 * Single source of truth for the whole site.
 *
 * Experience, project, skill, education, and certification copy is transcribed
 * verbatim from the owner's resume. `headline`, `bio`, and `about` are the
 * pre-existing portfolio prose and are intentionally unchanged.
 *
 * Annotated explicitly rather than with `satisfies` so optional fields are
 * guaranteed present on every array element instead of relying on TS
 * array-literal union normalisation.
 */
export const DATA: PortfolioData = {
    name: "Naveen Hemanth Kokkonda",
    title: "Full Stack AI Engineer (Product)",
    headline: "Building high-performance, interactive user interfaces for data-intensive applications.",
    bio: "Final-year Computer Science student specializing in Data Science. Passionate about crafting intuitive, accessible, and responsive web experiences.",
    about: "I am a Frontend Developer with a strong foundation in Computer Science. My focus is on bridging the gap between complex data and user-friendly interfaces. I specialize in building production-ready applications using React and modern CSS frameworks, ensuring that every pixel serves a purpose and every interaction is smooth.",
    profileImage: "/profile.webp",
    contact: {
        location: "Hyderabad, India",
        phone: "+91-6300296968",
        email: "naveenhemanth4@gmail.com",
        linkedin: "https://www.linkedin.com/in/hemanthkokkonda/",
        github: "https://github.com/hemanth090/",
        website: "hemanthk.dev"
    },
    skills: [
        { category: "Programming Languages", items: ["Python", "TypeScript", "SQL"] },
        { category: "Web Technologies", items: ["React", "FastAPIs", "Streamlit", "REST APIs", "WebSockets"] },
        {
            category: "AI & Machine Learning",
            items: [
                "LLMs (Claude SDK, GPT SDK, Gemini, Qwen, LLaMA)",
                "RAG Systems",
                "LangChain",
                "Langfuse",
                "LangSmith",
                "FAISS",
                "Qdrant"
            ]
        },
        { category: "Databases & Cloud", items: ["MongoDB", "DuckDB", "AWS", "Bedrock", "Vercel"] },
        { category: "Tools & DevOps", items: ["Git"] }
    ],
    projects: [
        {
            title: "TOON Studio",
            subtitle: "Token Efficiency Toolkit",
            date: "Dec 2025",
            description: "A comprehensive analytics platform for tracking token usage. Built with a focus on data visualization and performance, enabling users to monitor API costs through interactive charts.",
            highlights: [
                "Created a full-stack JSON/TOON conversion tool to cut LLM API token usage, with a transparent cost analytics dashboard showing per-token pricing ($0.15/1M input, $0.60/1M output).",
                "Integrated Google Gemini 2.5 Flash with LangSmith tracing and WebSocket streaming for real-time, AI-powered data analysis with live token usage monitoring.",
                "Optimized frontend performance with debounced API calls and a Notion-inspired UI, deployed on Vercel with a CI/CD pipeline."
            ],
            technologies: ["Python", "FastAPI", "React", "WebSockets", "Google Gemini AI", "LangSmith", "Vite"],
            link: "https://toon-optimizer.vercel.app/",
            github: "https://github.com/hemanth090/Toon-optimizer",
            image: "/projects/toon-studio.webp",
            inResume: true
        },
        {
            title: "KnoRa AI",
            subtitle: "Knowledge Assistant",
            date: "Aug 2025",
            description: "A modern conversational interface for RAG systems. Implemented optimistic UI updates, streaming responses, and file drag-and-drop interactions for a seamless document chat experience.",
            highlights: [
                "Engineered a RAG system enabling semantic document search across multiple formats (PDF, DOCX, XLSX, PPTX, CSV, MD, TXT) with intelligent chunking and context overlap.",
                "Implemented a FAISS vector store using all-MiniLM-L6-v2 embeddings with batch processing and configurable similarity thresholds for efficient retrieval.",
                "Integrated the Groq LLM API with multiple model options, featuring streaming responses, temperature control, and source citation."
            ],
            technologies: ["Python", "Streamlit", "FAISS", "Sentence Transformers", "Groq API", "Docker", "RAG"],
            link: "https://knora-ai.streamlit.app/",
            github: "https://github.com/hemanth090/knora_ai",
            image: "/projects/knora.webp",
            inResume: true
        },
        {
            // Portfolio-only: shipped and live, but absent from the resume, so it
            // is excluded from the printed A4 document to protect the page budget.
            title: "Tokenizer",
            date: "Live",
            description: "Interactive dashboard for visualizing LLM tokenization in real-time, featuring dynamic encoding graphs and a responsive cost-calculation engine to help engineers optimize prompt efficiency.",
            highlights: [],
            technologies: ["React", "Recharts", "Radix UI"],
            link: "https://tokenizer-omega.vercel.app/",
            github: "https://github.com/hemanth090/Tokenizer",
            image: "/projects/tokenizer.webp",
            inResume: false
        }
    ],
    experience: [
        {
            role: "Full Stack AI Engineer (Product)",
            company: "Tradl AI",
            context: "Stock Research and Trading Analyst",
            location: "On-site, Bangalore",
            start: "Dec 2025",
            end: "Present",
            link: "https://tradl.in",
            highlights: [
                "Owned end-to-end development of the Home Page and MarketBuzz News Page, shipping the platform's primary user-facing surfaces from design to production",
                "Improved financial data table performance by 40% and reduced memory consumption by 60% by implementing TanStack Virtual for 1,000+ stock tickers as well as the Discovery and Playground page tables",
                "Deployed the Pattern Detection frontend on AWS, integrating a live WebSocket connection to stream real-time ticker bar and LTP (last traded price) data directly onto TradingView charts",
                "Developed a financial RAG system for grounded, citation-backed question answering over PDF filings using Python, Chainlit, Qdrant, and DuckDB",
                "Engineered hybrid retrieval combining DeepInfra Qwen3-Embedding-4B dense embeddings with sparse search and DeepInfra Qwen3-Reranker-4B reranking, and orchestrated agent-based workflows for document retrieval, financial metric lookup, and multi-step reasoning using Claude Sonnet/Haiku and Bedrock Qwen3-235B",
                "Designed ingestion and indexing pipelines including Qwen3-VL-based page-level extraction for charts and tables to process 45 financial filings into 30,137 indexed points, improving retrieval recall from 0.37 to 0.61 on a 90-question financial QA benchmark"
            ]
        }
    ],
    education: [
        {
            degree: "B.Tech, Computer Science and Engineering (Data Science)",
            school: "Sreyas Institute of Engineering and Technology",
            location: "Hyderabad, India",
            score: 7.51,
            period: "Oct 2022 - Jun 2026"
        }
    ],
    certifications: [
        { name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", date: "Aug 2025" },
        { name: "Simplilearn Front End Development covering HTML, CSS, JavaScript", date: "Jun 2025" },
        { name: "Core Python Programming by Infosys Springboard", date: "Sep 2024" }
    ]
};
