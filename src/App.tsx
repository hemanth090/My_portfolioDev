import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Code2,
  Cpu,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

/**
 * Internationalization formatters
 */
const dateFormatting = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric'
});

const numberFormatting = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

/**
 * Data
 */
const DATA = {
  name: "Naveen Hemanth Kokkonda",
  title: "Aspiring AI Engineer & Frontend Developer",
  headline: "Developing AI-powered tools and modern web applications with a focus on Python and React.",
  bio: "Final-year Computer Science (Data Science) student with a passion for building practical AI solutions and responsive user interfaces.",
  profileImage: "/profile.png",
  contact: {
    location: "Hyderabad, India",
    phone: "+91-6300296968",
    email: "naveenhemanth4@gmail.com",
    linkedin: "https://www.linkedin.com/in/hemanthkokkonda/",
    github: "https://github.com/hemanth090/"
  },
  skills: [
    { category: "Programming", items: ["Python", "FastAPI", "React", "REST APIs"] },
    { category: "AI & Data", items: ["LLMs", "RAG Systems", "LangChain", "LangSmith"] },
    { category: "Databases", items: ["MongoDB", "SQL"] }
  ],
  projects: [
    {
      title: "Tokenizer",
      status: "Live",
      description: "A professional LLM token visualization and counting tool supporting various model encodings. Developed for AI engineers to audit prompt costs and model limits.",
      tech: ["React", "FastAPI", "Tiktoken", "LLM"],
      link: "https://tokenizer-omega.vercel.app/",
      github: "https://github.com/hemanth090/Tokenizer",
      image: "/projects/tokenizer.png"
    },
    {
      title: "TOON Studio",
      date: new Date(2025, 11), // Dec 2025
      description: "Token efficiency toolkit reducing LLM costs by 30-70% via Gemini AI integration and real-time analytics.",
      tech: ["Python", "FastAPI", "React", "Gemini AI"],
      link: "https://toon-optimizer.vercel.app/",
      github: "https://github.com/hemanth090/Toon-optimizer",
      image: "/projects/toon-studio.png"
    },
    {
      title: "KnoRa AI",
      date: new Date(2025, 7), // Aug 2025
      description: "RAG knowledge assistant supporting 7+ document formats utilizing FAISS vector stores and multiple LLM options.",
      tech: ["Python", "Streamlit", "FAISS", "Groq API"],
      link: "http://knora-ai.streamlit.app/",
      github: "https://github.com/hemanth090/knora_ai",
      image: "/projects/knora.png"
    }
  ],
  education: [
    {
      degree: "B.Tech CSE (Data Science)",
      school: "Sreyas Institute of Engineering and Technology",
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

/**
 * Components
 */

const SectionTitle = memo(({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-2 mb-8 group">
    <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
      <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
    </div>
    <h2 className="text-xl font-semibold tracking-tight uppercase text-neutral-400">{children}</h2>
  </div>
));
SectionTitle.displayName = 'SectionTitle';

const ProjectCard = memo(({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-all duration-300 overflow-hidden"
  >
    {project.image && (
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
        />
      </div>
    )}
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-white group-hover:text-neutral-200">{project.title}</h3>
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          {project.status || (project.date && dateFormatting.format(project.date))}
        </span>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t: string) => (
          <span key={t} className="px-2 py-1 text-[10px] font-mono bg-neutral-900 text-neutral-500 rounded border border-neutral-800">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Live Demo <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Source <Github className="w-3 h-3 ml-1" />
          </a>
        )}
        {!project.link && !project.github && (
          <div className="flex items-center text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">
            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </div>
  </motion.div>
));
ProjectCard.displayName = 'ProjectCard';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neutral-800 selection:text-white">
      {/* Skip to Content */}
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-bold"
      >
        Skip to content
      </a>

      {/* Navigation - Minimal fixed bar */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-black/80 backdrop-blur-md" role="navigation" aria-label="Main Navigation">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-mono tracking-tighter uppercase font-bold text-white">NH.K</span>
          <div className="flex gap-4 sm:gap-6">
            <a href="#projects" className="text-[10px] sm:text-xs font-medium text-neutral-400 hover:text-white transition-colors">PROJECTS</a>
            <a href="#skills" className="text-[10px] sm:text-xs font-medium text-neutral-400 hover:text-white transition-colors">SKILLS</a>
            <a href="#about" className="text-[10px] sm:text-xs font-medium text-neutral-400 hover:text-white transition-colors">ABOUT</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="about" className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 items-start"
          >
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-[0.3em] font-bold">
                  {DATA.title}
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-[0.9]">
                {DATA.name.split(' ').map((n, i) => (
                  <span key={i} className="block">{n}</span>
                ))}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 max-w-xl mb-6 leading-relaxed">
                {DATA.headline}
              </p>
              <p className="text-sm font-medium text-neutral-400 italic leading-relaxed max-w-lg mb-8">
                "{DATA.bio}"
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors">
                  Contact
                </button>
                <div className="flex gap-4">
                  <a
                    href={DATA.contact.github}
                    aria-label="Visit GitHub Profile"
                    className="p-3 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={DATA.contact.linkedin}
                    aria-label="Visit LinkedIn Profile"
                    className="p-3 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-0 lg:pt-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950 group">
                <img
                  src={DATA.profileImage}
                  alt={DATA.name}
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
                <div className="flex items-center gap-3 mb-6 text-neutral-300 font-medium">
                  <MapPin className="w-4 h-4 text-neutral-500" />
                  <span className="text-sm">{DATA.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300 font-medium">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span className="text-sm">{DATA.contact.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="mb-32">
          <SectionTitle icon={Code2}>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* Skills & Experience Grid */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-20">
          <section id="skills">
            <SectionTitle icon={Terminal}>Technical Expertise</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-12">
              {DATA.skills.map((skill) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  key={skill.category}
                >
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-neutral-900 pb-2">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {skill.items.map(item => (
                      <span key={item} className="text-neutral-400 hover:text-white transition-colors text-sm cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <aside className="space-y-16">
            {/* Education */}
            <section>
              <SectionTitle icon={Cpu}>Education</SectionTitle>
              {DATA.education.map(edu => (
                <div key={edu.degree} className="group cursor-default">
                  <p className="text-sm font-bold text-white mb-1">{edu.degree}</p>
                  <p className="text-xs text-neutral-500 mb-4">{edu.school}</p>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-400 border-t border-neutral-900 pt-3">
                    <span>CGPA: {numberFormatting.format(edu.score)}/10</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section>
              <SectionTitle icon={Award}>Certifications</SectionTitle>
              <div className="space-y-6">
                {DATA.certifications.map((cert) => (
                  <div key={cert.name} className="flex gap-4">
                    <div className="w-1 h-auto bg-neutral-900 rounded-full" />
                    <div>
                      <p className="text-xs font-medium text-neutral-300 mb-1">{cert.name}</p>
                      <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>

      <footer className="border-t border-neutral-900 py-12 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-neutral-400 font-mono italic">
            &copy; {new Date().getFullYear()} Naveen Hemanth Kokkonda
          </p>
          <div className="flex gap-4">
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-neutral-500 hover:text-white uppercase tracking-[0.2em] transition-colors"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf" // Placeholder: Add your resume.pdf to the public folder
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-neutral-500 hover:text-white uppercase tracking-[0.2em] transition-colors"
            >
              Resume
            </a>
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-[10px] font-bold text-neutral-500 hover:text-white uppercase tracking-[0.2em] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
