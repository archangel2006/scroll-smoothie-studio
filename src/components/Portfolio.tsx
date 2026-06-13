import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { useRef, useState, FormEvent, useEffect, useMemo } from "react";
import {
  Github, Linkedin, Mail, Twitter, ExternalLink, MapPin,
  Briefcase, Code2, Send, Atom, Brain, Cloud, Layers, Home,
  GraduationCap, FolderKanban, Wrench, Bot, Star, Cpu,
  Palette, Globe2, Gamepad2,
} from "lucide-react";

import heroAsset from "@/assets/hero.png.asset.json";
import cityAsset from "@/assets/city-bg.png.asset.json";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@alexander.dev", label: "Email" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({ id, children, className = "", padded = true }: { id: string; children: React.ReactNode; className?: string; padded?: boolean }) {
  return (
    <section id={id} className={`relative min-h-screen px-6 md:px-12 lg:px-24 ${padded ? "py-24" : ""} ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ kicker, title, compact = false }: { kicker: string; title: string; compact?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={compact ? "mb-6 text-center" : "mb-14 text-center"}
    >
      <p className="text-sm uppercase tracking-[0.4em] text-primary mb-3 font-display">{kicker}</p>
      <h2 className="text-5xl md:text-6xl font-bold text-gradient font-display">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </motion.div>
  );
}

// =================== EDUCATION ===================
const educationData = [
  {
    title: "Bachelor of Technology",
    years: "2024 — 2026",
    place: "Indira Gandhi Delhi Technical University",
    course: "Bachelor Of Technology",
    field: "Computer Science Engineering with Artificial Intelligence",
    score: "CGPA: 9.12",
    desc: "Focused on building practical software projects while strengthening foundations in algorithms, artificial intelligence, and system design. Actively exploring full-stack development and modern development tools.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    tag: "Clubs",
  },
  {
    title: "Senior Secondary Education",
    years: "2022 — 2024",
    place: "Delhi Public School",
    course: "CBSE — Class XII",
    field: "Physics, Chemistry, Mathematics with Computer Science",
    score: "95.4%",
    desc: "Concentrated on core sciences and programming. Led the coding club, mentored juniors and represented school in inter-school hackathons and olympiads.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    tag: "Topper",
  },
  {
    title: "Secondary Education",
    years: "2010 — 2022",
    place: "Delhi Public School",
    course: "CBSE — Class X",
    field: "Foundational Sciences & Mathematics",
    score: "96.2%",
    desc: "Built strong foundations in mathematics, science and computing. Captained the robotics team to a regional championship and won multiple inter-school science fairs.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    tag: "Robotics",
  },
];

function EducationSection() {
  const [active, setActive] = useState(0);
  const item = educationData[active];

  return (
    <Section id="education">
      <SectionTitle kicker="Academic Journey" title="Education" />
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-5">
          {educationData.map((edu, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={edu.title}
                layout
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(i)}
                className={`glass-card cursor-pointer rounded-2xl p-6 transition-all duration-500 ${
                  isOpen ? "neon-border shadow-neon" : "hover:border-primary/40"
                }`}
              >
                <motion.div layout="position" className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold font-display">{edu.title}</h3>
                </motion.div>
                <motion.span layout="position" className="inline-block mt-3 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/20 text-foreground border border-primary/40">
                  {edu.years}
                </motion.span>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="text-sm text-foreground/80 leading-relaxed overflow-hidden"
                    >
                      {edu.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="md:sticky md:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-2xl p-6 shadow-card"
            >
              <div className="relative overflow-hidden rounded-xl mb-5 aspect-[16/9]">
                <img src={item.image} alt={item.place} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gradient font-display uppercase tracking-wide">
                {item.place} <span className="block text-base mt-1 opacity-80">({item.years})</span>
              </h3>
              <div className="mt-4 space-y-1 text-sm">
                <p className="text-foreground/90 font-semibold">{item.course}</p>
                <p className="text-foreground/70">{item.field}</p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-base font-bold text-gradient">{item.score}</span>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/20 border border-primary/40 text-foreground">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

// =================== SKILLS (6 blocks) ===================
const skillBlocks = [
  { icon: Code2, title: "Programming Languages", items: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "R"] },
  { icon: Layers, title: "Full-Stack Development", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "FastAPI", "Flask", "Firebase", "MySQL"] },
  { icon: Brain, title: "Machine Learning & AI", items: ["Scikit-learn", "Pandas", "NumPy", "OpenCV", "Ultralytics"] },
  { icon: Bot, title: "Agentic AI & LLMs", items: ["LangChain", "Genkit", "FAISS", "RAG", "Semantic Search"] },
  { icon: Atom, title: "Quantum Computing", items: ["Qiskit", "Quantum Kernels", "QSVM", "ZZFeatureMap", "Grover's Search"] },
  { icon: Cloud, title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Figma"] },
];

function SkillsSection() {
  return (
    <Section id="skills">
      <SectionTitle kicker="Tech Arsenal" title="Skills" />
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillBlocks.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-6 hover:shadow-neon transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <cat.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold font-display">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s, j) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + j * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/15 text-foreground border border-primary/30 hover:bg-primary/30 hover:border-primary transition-all cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// =================== PROJECTS (Filterable showcase) ===================
type Project = {
  title: string;
  desc: string;
  domains: string[];
  stack: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  categories: string[]; // for filtering
};

const projects: Project[] = [
  {
    title: "Quantinel",
    desc: "Quantum-enhanced cybersecurity research platform combining Quantum Machine Learning, Intrusion Detection Systems, attack characterization, and threat intelligence pipelines.",
    domains: ["Quantum Computing", "Cybersecurity", "ML", "Research"],
    stack: ["Python", "Qiskit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    categories: ["featured", "ai"],
  },
  {
    title: "Learnscape",
    desc: "AI-powered visual learning platform that turns real-world objects into interactive STEM lessons using multimodal AI, computer vision, educational overlays, and voice interaction.",
    domains: ["Multimodal AI", "Computer Vision", "EdTech", "Agentic AI"],
    stack: ["Next.js", "TypeScript", "Genkit", "Gemini", "Canvas API", "Web Speech API"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    categories: ["featured", "ai"],
  },
  {
    title: "AmbuCast",
    desc: "Predictive ambulance intelligence system that forecasts emergency hotspots, analyzes risk levels, and recommends optimal ambulance deployment using ML and decision optimization.",
    domains: ["Predictive Analytics", "Healthcare AI", "ML", "Optimization"],
    stack: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Pandas", "NumPy"],
    image: "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    categories: ["featured", "ai", "social"],
  },
  {
    title: "Udyara",
    desc: "Trustworthy Retrieval-Augmented Generation system helping women entrepreneurs navigate government startup policies through semantic search and source-backed explanations.",
    domains: ["RAG", "Trustworthy AI", "Policy Intelligence"],
    stack: ["FastAPI", "LangChain", "FAISS", "Sentence Transformers", "Gemini", "React"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    categories: ["featured", "ai", "social"],
  },
  {
    title: "MSIS",
    desc: "Market Shock Intelligence System that detects financial market regimes, analyzes volatility behavior, predicts drawdown risks, and evaluates strategy robustness.",
    domains: ["Financial ML", "Risk Modeling", "Explainable Analytics"],
    stack: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Plotly", "Pandas"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    categories: ["featured", "ai"],
  },
  {
    title: "FridgeMate",
    desc: "AI-powered recipe generator that detects ingredients from fridge images using computer vision and generates personalized recipes using LLMs.",
    domains: ["Computer Vision", "Generative AI"],
    stack: ["YOLOv8", "FastAPI", "React", "Gemini", "OpenCV"],
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1600&q=80",
    categories: ["ai", "fullstack"],
  },
  {
    title: "AgroNomics",
    desc: "Crop price forecasting platform providing state and district-level agricultural market predictions across India using ML and historical commodity datasets.",
    domains: ["Agritech", "Machine Learning"],
    stack: ["Python", "Flask", "Scikit-learn", "Pandas"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    categories: ["ai", "social"],
  },
  {
    title: "ResQTweet",
    desc: "Disaster tweet intelligence system that classifies crisis-related tweets and generates concise alerts through NLP and summarization pipelines.",
    domains: ["NLP", "Crisis Intelligence"],
    stack: ["Python", "Scikit-learn", "Transformers", "Hugging Face"],
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1600&q=80",
    categories: ["ai", "social"],
  },
  {
    title: "LawyerAI",
    desc: "Legal Retrieval-Augmented Generation assistant for document-aware legal question answering and intelligent policy interpretation.",
    domains: ["Legal Tech", "RAG"],
    stack: ["FastAPI", "LangChain", "FAISS", "Gemini"],
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1600&q=80",
    categories: ["ai"],
  },
  {
    title: "Virasya",
    desc: "AI-powered artisan marketplace connecting traditional Indian artisans with global buyers through intelligent content generation and multilingual support.",
    domains: ["Marketplace", "Generative AI"],
    stack: ["Next.js", "Firebase", "Genkit", "Gemini"],
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1600&q=80",
    categories: ["fullstack"],
  },
  {
    title: "Waste2Worth",
    desc: "AI-assisted food waste redistribution platform connecting donors, organizations, and volunteers to reduce waste and improve community sustainability.",
    domains: ["Sustainability", "Full Stack"],
    stack: ["Next.js", "Firebase", "Genkit", "Gemini"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
    categories: ["fullstack", "social"],
  },
  {
    title: "SugarSync",
    desc: "Healthcare-focused platform designed to improve disease monitoring, tracking, and patient engagement through intelligent health workflows.",
    domains: ["Healthcare", "Product Design"],
    stack: ["React", "Firebase"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    categories: ["fullstack", "social"],
  },
  {
    title: "SafeHaven",
    desc: "Crowdsourced disaster management platform providing alerts, coordination, preparedness resources, and community-driven disaster response.",
    domains: ["Disaster Management", "Social Impact"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80",
    categories: ["fullstack", "social"],
  },
  {
    title: "CryptoPulse",
    desc: "Interactive cryptocurrency analytics dashboard providing market intelligence, visualizations, and trend monitoring.",
    domains: ["FinTech", "Data Visualization"],
    stack: ["React", "APIs", "Charts"],
    image: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=1600&q=80",
    categories: ["fullstack"],
  },
  {
    title: "PlanetQuest",
    desc: "Interactive environmental learning platform combining education, quizzes, eco-challenges, and sustainability awareness in a gamified experience.",
    domains: ["Education", "Sustainability"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80",
    categories: ["social"],
  },
  {
    title: "Apple Crate",
    desc: "Premium e-commerce and product experience design inspired by modern Apple-style interactions and visual storytelling.",
    domains: ["UI/UX", "E-commerce"],
    stack: ["Figma"],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1600&q=80",
    categories: ["design"],
  },
  {
    title: "LoreTrail",
    desc: "Narrative-driven travel and exploration experience focused on immersive storytelling and information architecture.",
    domains: ["UI/UX", "Travel"],
    stack: ["Figma"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    categories: ["design"],
  },
  {
    title: "The Hidden Mile",
    desc: "Experience-focused interface concept exploring navigation, engagement, and visual hierarchy.",
    domains: ["UI/UX", "Concept"],
    stack: ["Figma"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
    categories: ["design"],
  },
  {
    title: "Wireframes Collection",
    desc: "Collection of user flows, low-fidelity wireframes, interaction experiments, and design explorations.",
    domains: ["UI/UX", "Wireframes"],
    stack: ["Figma"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
    categories: ["design"],
  },
  {
    title: "Unstable Flappy",
    desc: "Experimental physics-inspired recreation of Flappy Bird with intentionally chaotic mechanics and gameplay.",
    domains: ["Game", "Experiment"],
    stack: ["JavaScript", "Canvas"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    categories: ["fun"],
  },
  {
    title: "Tic Tac Toe",
    desc: "Interactive implementation of the classic strategy game with clean UI and responsive gameplay.",
    domains: ["Game"],
    stack: ["React"],
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1600&q=80",
    categories: ["fun"],
  },
  {
    title: "Pokedex",
    desc: "Pokémon encyclopedia application powered by public APIs and dynamic search functionality.",
    domains: ["API", "App"],
    stack: ["React", "PokeAPI"],
    image: "https://images.unsplash.com/photo-1542779283-429940ce8336?auto=format&fit=crop&w=1600&q=80",
    categories: ["fun"],
  },
  {
    title: "Word Game",
    desc: "Vocabulary and word-association game built to explore frontend interaction patterns.",
    domains: ["Game"],
    stack: ["JavaScript"],
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1600&q=80",
    categories: ["fun"],
  },
  {
    title: "Weather App",
    desc: "Weather forecasting application using real-time weather APIs and responsive user interfaces.",
    domains: ["API", "Utility"],
    stack: ["React", "OpenWeather"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1600&q=80",
    categories: ["fun"],
  },
];

const filters = [
  { id: "featured", label: "Featured", icon: Star },
  { id: "ai", label: "AI & ML", icon: Brain },
  { id: "fullstack", label: "Full-Stack & Products", icon: Cpu },
  { id: "design", label: "Design & UI/UX", icon: Palette },
  { id: "social", label: "Social Impact", icon: Globe2 },
  { id: "fun", label: "Fun & Experimental", icon: Gamepad2 },
];

function ProjectsSection() {
  const [filter, setFilter] = useState("featured");
  const visible = useMemo(() => projects.filter((p) => p.categories.includes(filter)), [filter]);

  return (
    <section id="projects" className="relative px-6 md:px-12 lg:px-24 pt-16 pb-20">
      <SectionTitle kicker="Featured Builds" title="Projects" compact />

      {/* Filters */}
      <div className="mx-auto max-w-6xl mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {filters.map((f) => {
          const Icon = f.icon;
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                active
                  ? "glass-btn"
                  : "glass border border-primary/30 hover:border-primary/60 text-foreground/80 hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl">
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:shadow-neon transition-all duration-500"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  {p.featured && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/30 backdrop-blur-md border border-accent/50 text-foreground">
                      <Star className="h-3 w-3" /> Featured
                    </span>
                  )}
                  <h3 className="absolute bottom-3 left-4 right-4 text-xl font-bold font-display text-gradient drop-shadow-lg">
                    {p.title}
                  </h3>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-foreground/80 leading-relaxed mb-3 line-clamp-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.domains.slice(0, 3).map((d) => (
                      <span key={d} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-foreground/85 border border-accent/40">
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.slice(0, 5).map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-primary/15 text-foreground/80 border border-primary/30">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                        className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/40 transition">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live Demo"
                        className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/40 transition">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// =================== CONTACT ===================
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@alexander.dev?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" className="flex items-center">
      <div className="mx-auto max-w-5xl w-full">
        <SectionTitle kicker="Let's Build" title="Contact Me" />
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-2 glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold font-display text-gradient mb-3">Let's talk.</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              Got a project, a collaboration idea, or just want to say hi? Drop a message and it lands straight in my inbox.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/70 mb-6">
              <MapPin className="h-4 w-4 text-primary" /> New Delhi · Available worldwide
            </div>
            <a href="mailto:hello@alexander.dev" className="block text-lg font-bold text-gradient mb-6 break-all">
              hello@alexander.dev
            </a>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                   className="h-11 w-11 rounded-xl glass flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition">
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-3 glass-card rounded-3xl p-8 space-y-4 shadow-neon"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-primary mb-2 font-semibold">Name</label>
                <input
                  required maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-background/40 border border-primary/30 focus:border-primary px-4 py-3 outline-none transition placeholder:text-foreground/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-primary mb-2 font-semibold">Email</label>
                <input
                  required type="email" maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-background/40 border border-primary/30 focus:border-primary px-4 py-3 outline-none transition placeholder:text-foreground/40"
                  placeholder="you@domain.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-primary mb-2 font-semibold">Message</label>
              <textarea
                required maxLength={1500} rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-background/40 border border-primary/30 focus:border-primary px-4 py-3 outline-none transition placeholder:text-foreground/40 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="glass-btn">
              Send Message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
        <p className="mt-12 text-center text-xs text-foreground/60">© 2026 Alexander · Crafted with neon & caffeine</p>
      </div>
    </Section>
  );
}

// =================== RADIAL WHEEL NAV ===================
function RadialWheel() {
  const n = navItems.length;
  const stepAngle = 36; // degrees between items on the arc
  const radius = 130;
  const rotation = useMotionValue(0); // degrees; 0 means item 0 is centered
  const [active, setActive] = useState(0);
  const dragRef = useRef<HTMLDivElement>(null);

  // Snap to nearest item index
  const snapTo = (idx: number) => {
    const target = -idx * stepAngle;
    animate(rotation, target, { type: "spring", stiffness: 180, damping: 22 });
    setActive(((idx % n) + n) % n);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const dir = e.deltaY > 0 ? 1 : -1;
    snapTo(active + dir);
  };

  const handleClick = (i: number, href: string) => {
    if (i === active) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      snapTo(i);
    }
  };

  // Drag to rotate
  const dragStart = useRef<{ x: number; y: number; rot: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragStart.current = { x: e.clientX, y: e.clientY, rot: rotation.get() };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragStart.current) return;
    const dy = e.clientY - dragStart.current.y;
    rotation.set(dragStart.current.rot - dy * 0.6);
  };
  const onPointerUp = () => {
    if (!dragStart.current) return;
    dragStart.current = null;
    const r = rotation.get();
    const idx = Math.round(-r / stepAngle);
    snapTo(idx);
  };

  // Auto-detect active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const offsets = navItems.map((it) => {
        const el = document.querySelector(it.href) as HTMLElement | null;
        if (!el) return Infinity;
        const r = el.getBoundingClientRect();
        return Math.abs(r.top - 120);
      });
      const idx = offsets.indexOf(Math.min(...offsets));
      if (idx >= 0 && idx !== active) {
        const target = -idx * stepAngle;
        animate(rotation, target, { type: "spring", stiffness: 180, damping: 24 });
        setActive(idx);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
     
  }, [active]);

  return (
    <div className="fixed bottom-6 left-6 z-50 select-none">
      <div
        ref={dragRef}
        onWheel={handleWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative h-52 w-52 touch-none"
        style={{ cursor: "grab" }}
      >
        {/* Outer arc track */}
        <div className="absolute inset-0 rounded-full opacity-40"
             style={{
               background: "radial-gradient(circle at center, transparent 55%, oklch(0.6 0.18 305 / 0.18) 56%, transparent 72%)",
             }}
        />
        {/* Rotating ring of items */}
        <motion.div
          className="absolute inset-0"
          style={{ rotate: rotation }}
        >
          {navItems.map((item, i) => {
            const angle = i * stepAngle - 90; // start at top
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const Icon = item.icon;
            const isActive = i === active;
            // Distance from center index for fade
            let diff = i - active;
            if (diff > n / 2) diff -= n;
            if (diff < -n / 2) diff += n;
            const abs = Math.abs(diff);
            const visible = abs <= 1; // only show 3 (active + neighbors)
            return (
              <motion.button
                key={item.label}
                onClick={(e) => { e.stopPropagation(); handleClick(i, item.href); }}
                animate={{
                  opacity: visible ? (isActive ? 1 : 0.55) : 0,
                  scale: isActive ? 1.15 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ x, y, pointerEvents: visible ? "auto" : "none" }}
                aria-label={item.label}
              >
                {/* Counter-rotate so icons stay upright */}
                <motion.div
                  style={{ rotate: useTransform(rotation, (r) => -r) }}
                  className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? "glass-strong shadow-neon ring-1 ring-primary/70"
                      : "glass border border-primary/40 hover:border-primary"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-foreground/85"}`} />
                </motion.div>
                {/* Tooltip */}
                <motion.span
                  style={{ rotate: useTransform(rotation, (r) => -r) }}
                  className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full glass-strong px-2.5 py-1 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  {item.label}
                </motion.span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* VS Hub */}
        <motion.button
          onClick={() => {
            const el = document.querySelector(navItems[active].href);
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full flex items-center justify-center font-display font-extrabold text-lg tracking-wider text-foreground"
          style={{
            background: "linear-gradient(135deg, oklch(0.55 0.2 305 / 0.6), oklch(0.45 0.18 290 / 0.5))",
            backdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid oklch(0.85 0.15 305 / 0.55)",
            boxShadow: "0 0 24px oklch(0.72 0.22 305 / 0.55), inset 0 1px 0 oklch(1 0 0 / 0.25)",
          }}
          aria-label="Navigate to current section"
        >
          VS
        </motion.button>
      </div>
    </div>
  );
}

// =================== ROOT ===================
export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative min-h-screen text-foreground">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${cityAsset.url})` }}
      />
      <div className="fixed inset-0 -z-10 bg-background/35" />

      <RadialWheel />

      {/* HERO */}
      <section ref={heroRef} id="home" className="relative min-h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <img src={heroAsset.url} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="rain-overlay" />
        </motion.div>

        <div className="relative z-10 flex min-h-screen items-center justify-end px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl text-right md:pr-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)] font-display"
            >
              Hi! I'm Alexander
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-display"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 text-base md:text-lg text-foreground/85 font-semibold leading-relaxed max-w-xl ml-auto"
            >
              Crafting immersive digital experiences with code, design, and a touch of neon.
              Specialized in building scalable web applications that blur the line between art and engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 flex items-center justify-end gap-4"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg glass hover:bg-primary/30 hover:scale-110 transition-all duration-300"
                >
                  <s.icon className="h-5 w-5 text-foreground" />
                </a>
              ))}
              <a href="#projects" className="glass-btn ml-2">
                View Projects <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <EducationSection />
      <SkillsSection />
      <ProjectsSection />

      {/* EXPERIENCE */}
      <Section id="experience">
        <SectionTitle kicker="Career Path" title="Work Experience" />
        <div className="mx-auto max-w-4xl relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
          {[
            {
              role: "Quantum Machine Learning Intern",
              company: "DRDO SAG",
              years: "Feb 2026 – Present",
              points: [
                "Working on Quantum Machine Learning applications for cybersecurity and attack characterization under DRDO SAG.",
                "Studying and implementing quantum computing concepts, algorithms, quantum kernels, and hybrid quantum-classical approaches using Qiskit.",
                "Developing and evaluating QSVM-based solutions while benchmarking performance against classical machine learning models.",
              ],
            },
            {
              role: "Deep Learning Research Intern",
              company: "IGDTUW",
              years: "Jun 2026 – Present",
              points: [
                "Conducting research on automated Fatty Liver Disease grading from ultrasound images using deep learning techniques.",
                "Exploring attention mechanisms, explainable AI, and medical image analysis for publication-oriented research.",
              ],
            },
            {
              role: "Project Admin",
              company: "Social Winter of Code",
              years: "Jan 2026 – Mar 2026",
              points: [
                "Led contributor management and development activities for SafeHaven: an open-source disaster management platform.",
                "Reviewed and merged 25+ pull requests from 11+ contributors while maintaining project quality and workflows.",
              ],
            },
            {
              role: "Open Source Contributor",
              company: "Social Summer of Code",
              years: "Jun 2025 – Aug 2025",
              points: [
                "Contributed to 6+ open-source projects with 25+ merged pull requests across multiple repositories.",
                "Ranked among the Top 20 contributors out of 1200+ participants worldwide.",
              ],
            },
            {
              role: "Python & Machine Learning Intern",
              company: "Anveshan Foundation, IGDTUW",
              years: "Jun 2025 – Aug 2025",
              points: [
                "Completed an intensive 8-week internship covering Python, data analysis, machine learning, model evaluation, and real-world project development.",
                "Built and optimized predictive models on the WHO Life Expectancy dataset, leading to a research paper accepted and presented at CONFLUENCE 2026 (Springer LNEE).",
              ],
            },
          ].map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative mb-10 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"} pl-12 md:pl-0`}
            >
              <div className={`absolute top-6 ${i % 2 ? "left-2 md:-left-2" : "left-2 md:-right-2"} h-4 w-4 rounded-full bg-primary shadow-neon`} />
              <div className="glass-card rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold">{job.years}</span>
                </div>
                <h3 className="text-xl font-bold font-display">{job.role}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{job.company}</p>
                <ul className="space-y-2">
                  {job.points.map((pt, j) => (
                    <li key={j} className="text-sm text-foreground/75 leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <ContactSection />
    </div>
  );
}
