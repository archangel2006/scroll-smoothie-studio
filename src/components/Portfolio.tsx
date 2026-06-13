import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect, FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  Github, Linkedin, Mail, Twitter, ExternalLink, MapPin,
  Briefcase, Code2, ChevronLeft, ChevronRight, Send, Atom,
  Brain, Cloud, Layers, Trophy, Home, GraduationCap, Sparkles,
  Folder, Wrench, Terminal, Cpu, X, ChevronUp,
  Instagram
} from "lucide-react";

import heroAsset from "@/assets/hero.png";
import cityAsset from "@/assets/background-1.png";

// Education images
import igdtuwAsset from "@/assets/education/igdtuw.png";
import cjmAsset from "@/assets/education/cjm.png";
import bbpsAsset from "@/assets/education/bbps.png";

// Project images — uncomment each line when you add the file to src/assets/projects/
// import learnscapeImg from "@/assets/projects/learnscape.jpg";   // TODO: add learnscape.jpg
// import ambucastImg from "@/assets/projects/ambucast.jpg";       // TODO: add ambucast.jpg
// import udyaraImg from "@/assets/projects/udyara.jpg";           // TODO: add udyara.jpg
// import lawyeraiImg from "@/assets/projects/lawyerai.jpg";       // TODO: add lawyerai.jpg
// import quantinelImg from "@/assets/projects/quantinel.jpg";     // TODO: add quantinel.jpg
// import msisImg from "@/assets/projects/msis.jpg";               // TODO: add msis.jpg

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhavi-srivastava26/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/archangel2006", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/archangel.26/", label: "Instagram" },
  { icon: Mail, href: "mailto:26.archangel@gmail.com", label: "Email" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative min-h-screen px-6 md:px-12 lg:px-24 py-24 ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ kicker, title, className = "mb-14" }: { kicker: string; title: string; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={`${className} text-center`}
    >
      <p className="text-sm uppercase tracking-[0.4em] text-primary mb-3 font-display">{kicker}</p>
      <h2 className="text-5xl md:text-6xl font-bold text-gradient font-display">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </motion.div>
  );
}

// =================== EDUCATION (Harmonium) ===================
const educationData = [
  {
    title: "Bachelor of Technology",
    years: "2024 — 2028",
    place: "Indira Gandhi Delhi Technical University",
    course: "Bachelor Of Technology",
    field: "Computer Science Engineering with Artificial Intelligence",
    score: "CGPA: 9.12",
    desc: "Focused on building practical software projects while strengthening foundations in algorithms, artificial intelligence, and system design. Actively exploring full-stack development and modern development tools.",
    image: igdtuwAsset,
    tag: "",
  },
  {
    title: "Senior Secondary Education",
    years: "2022 — 2024",
    place: "Convent Of Jesus & Mary",
    course: "CBSE — Class XII",
    field: "Physics, Chemistry, Mathematics with Computer Science",
    score: "Marks: 95%",
    desc: "Concentrated on core sciences and programming, building foundations in Python programming and SQL-based database systems. AISSCE Subject Topper in Physics and Chemistry.",
    image: cjmAsset,
    tag: "",
  },
  {
    title: "Secondary Education",
    years: "2010 — 2022",
    place: "Bal Bharati Public School",
    course: "CBSE — Class X",
    field: "Foundational Sciences & Mathematics",
    score: "Marks: 96%",
    desc: "Developed strong academic foundations throughout school, receiving multiple meritorious distinctions across the years. Earned multiple awards and recognitions in volleyball and chess. Actively participated in sports, music, and art alongside academics.",
    image: bbpsAsset,
    tag: "",
  },
];

function EducationSection() {
  const [active, setActive] = useState(0);
  const item = educationData[active];

  return (
    <Section id="education">
      <SectionTitle kicker="Academic Journey" title="Education" />
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-start">
        {/* Left: accordion panels */}
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
                className={`glass-card cursor-pointer rounded-2xl p-6 transition-all duration-500 ${isOpen ? "neon-border shadow-neon" : "hover:border-primary/40"
                  }`}
              >
                <motion.div layout="position" className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold font-display">{edu.title}</h3>
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }} className="text-primary">
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
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

        {/* Right: detail panel */}
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
  { icon: Cpu, title: "Agentic AI & LLMs", items: ["LangChain", "Genkit", "FAISS", "RAG", "Semantic Search"] },
  { icon: Atom, title: "Quantum Computing", items: ["Qiskit", "Quantum Kernels", "QSVM", "ZZFeatureMap", "Grover's Search"] },
  { icon: Terminal, title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Figma"] },
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

// =================== PROJECTS (Cinematic Slider) ===================
const projects = [
  {
    title: "Learnscape",
    tag: "Multimodal AI",
    desc: "AI-powered visual learning platform that transforms real-world objects into interactive STEM lessons using computer vision, educational overlays, voice interaction, and agentic reasoning.",
    stack: ["Next.js", "TypeScript", "Genkit", "Gemini", "Canvas API"],
    image: "", // TODO: replace with learnscapeImg once learnscape.jpg is added
    demo: "",
    github: "https://github.com/archangel2006/learnscape",
  },
  {
    title: "AmbuCast",
    tag: "Healthcare AI",
    desc: "Predictive ambulance intelligence system that forecasts emergency hotspots, analyzes risk levels, and recommends optimal ambulance deployment using machine learning and optimization pipelines.",
    stack: ["Python", "XGBoost", "Scikit-learn", "Streamlit", "Pandas"],
    image: "", // TODO: replace with ambucastImg once ambucast.jpg is added
    demo: "",
    github: "https://github.com/archangel2006/ambucast-dispatch",
  },
  {
    title: "Udyara",
    tag: "Trustworthy RAG",
    desc: "Retrieval-Augmented Generation platform helping women entrepreneurs navigate government startup policies through semantic search, embeddings, and source-backed explanations.",
    stack: ["FastAPI", "LangChain", "FAISS", "Gemini", "React"],
    image: "", // TODO: replace with udyaraImg once udyara.jpg is added
    demo: "",
    github: "https://github.com/archangel2006/Udyara",
  },

  {
    title: "LawyerAI",
    tag: "Legal AI",
    desc: "Legal Retrieval-Augmented Generation assistant designed for document-aware legal question answering, intelligent policy interpretation, and context-grounded information retrieval.",
    stack: ["FastAPI", "LangChain", "FAISS", "Gemini"],
    image: "", // TODO: replace with lawyeraiImg once lawyerai.jpg is added
    demo: "",
    github: "https://github.com/archangel2006/LawyerAI",
  },
  {
    title: "Quantinel",
    tag: "Quantum Cybersecurity",
    desc: "Quantum-enhanced cybersecurity research platform combining Quantum Machine Learning, Intrusion Detection Systems, attack characterization, and threat intelligence pipelines for next-generation cyber defense.",
    stack: ["Python", "Qiskit", "Scikit-learn", "Pandas", "NumPy"],
    image: "", // TODO: replace with quantinelImg once quantinel.jpg is added
    demo: "",
    github: "https://github.com/archangel2006/Quantinel",
  },

  {
    title: "MSIS",
    tag: "Financial ML",
    desc: "Market Shock Intelligence System for financial regime detection, volatility analysis, drawdown prediction, risk modeling, and explainable market analytics.",
    stack: ["Python", "XGBoost", "Scikit-learn", "Plotly", "Pandas"],
    image: "", // TODO: replace with msisImg once msis.jpg is added
    demo: "",
    github: "https://github.com/archangel2006/MSIS",
  }
];

function ProjectsSection() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % projects.length);
  const prev = () => setIdx((i) => (i - 1 + projects.length) % projects.length);

  return (
    <Section id="projects">
      <SectionTitle kicker="Featured Projects" title="Projects" className="mb-4" />
      <div className="mx-auto max-w-6xl">
        <div className="relative h-[460px] md:h-[500px] flex items-center justify-center">
          {projects.map((p, i) => {
            const offset = ((i - idx) + projects.length) % projects.length;
            const rel = offset > projects.length / 2 ? offset - projects.length : offset;
            const isActive = rel === 0;
            const abs = Math.abs(rel);
            return (
              <motion.article
                key={p.title}
                animate={{
                  x: rel * 80,
                  scale: isActive ? 1 : 0.82 - abs * 0.04,
                  opacity: abs > 2 ? 0 : 1 - abs * 0.25,
                  zIndex: 10 - abs,
                  rotateY: rel * -8,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[88%] sm:w-[520px] md:w-[640px] rounded-3xl overflow-hidden shadow-card"
                style={{
                  transformStyle: "preserve-3d",
                  background: "oklch(0.18 0.08 295 / 0.45)",
                  backdropFilter: "blur(24px) saturate(160%)",
                  WebkitBackdropFilter: "blur(24px) saturate(160%)",
                  border: "1px solid oklch(0.6 0.18 305 / 0.35)",
                }}
              >
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-70" style={{ filter: "blur(2px)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/30" />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-accent/30 backdrop-blur-md border border-accent/40 text-foreground">
                    {p.tag}
                  </span>
                  <h3 className="absolute bottom-4 left-5 right-5 text-2xl md:text-3xl font-bold font-display text-gradient drop-shadow-lg">{p.title}</h3>
                </div>
                <div className="p-6 relative">
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 pr-24">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded bg-primary/15 text-foreground/85 border border-primary/30">{s}</span>
                    ))}
                  </div>
                  <div className="absolute bottom-5 right-5 flex gap-2">
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                      className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary/40 transition">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live Demo"
                      className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary/40 transition">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>


        {/* Controls and CTA row (aligned to bottom-right of section) */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-6 relative max-w-3xl mx-auto">
          {/* Left spacer to keep controls centered */}
          <div className="hidden md:block w-48" />

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button onClick={prev} aria-label="Previous"
              className="h-12 w-12 rounded-full glass-card hover:bg-primary/30 transition flex items-center justify-center cursor-pointer">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${i === idx ? "w-8 bg-primary shadow-neon" : "w-2 bg-foreground/30 hover:bg-foreground/60"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next"
              className="h-12 w-12 rounded-full glass-card hover:bg-primary/30 transition flex items-center justify-center cursor-pointer">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* View All Projects CTA (aligned to bottom-right) */}
          <div className="md:w-48 flex justify-end w-full">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary bg-primary/10 text-foreground font-display font-bold tracking-wide hover:bg-primary/20 hover:shadow-neon hover:scale-105 transition-all duration-300 cursor-pointer text-xs"
            >
              View All Projects <ChevronRight className="h-3.5 w-3.5 text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

// =================== CONTACT ===================
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:26.archangel@gmail.com?subject=${subject}&body=${body}`;
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
            <a href="mailto:26.archangel@gmail.com" className="block text-lg font-bold text-gradient mb-6 break-all">
              26.archangel@gmail.com
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
        <p className="mt-12 text-center text-xs text-foreground/60">© 2026 Vaibhavi Srivastava · Crafted with !hate</p>
      </div>
    </Section>
  );
}

// =================== NAVIGATION WHEEL ===================
interface NavigationWheelProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

function NavigationWheel({ activeSection, onSelectSection }: NavigationWheelProps) {
  const radius = 130;
  const activeAngle = -45; // middle of the visible quarter circle (-90 to 0)
  const angleStep = 30; // separation between adjacent menu items

  // Find index of active section
  const activeIndex = navItems.findIndex(
    (item) => item.href.replace("#", "") === activeSection
  );

  const resolvedActiveIndex = activeIndex === -1 ? 0 : activeIndex;

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      if (resolvedActiveIndex < navItems.length - 1) {
        onSelectSection(navItems[resolvedActiveIndex + 1].href.replace("#", ""));
      }
    } else {
      if (resolvedActiveIndex > 0) {
        onSelectSection(navItems[resolvedActiveIndex - 1].href.replace("#", ""));
      }
    }
  };

  const handlePrev = () => {
    if (resolvedActiveIndex > 0) {
      onSelectSection(navItems[resolvedActiveIndex - 1].href.replace("#", ""));
    }
  };

  const handleNext = () => {
    if (resolvedActiveIndex < navItems.length - 1) {
      onSelectSection(navItems[resolvedActiveIndex + 1].href.replace("#", ""));
    }
  };

  return (
    <div
      className="fixed bottom-6 left-6 z-50 pointer-events-none select-none"
      style={{ width: 220, height: 220 }}
      onWheel={handleWheel}
    >
      <div className="relative w-full h-full pointer-events-auto">
        {/* Invisible Arc Guidelines/Background */}
        <svg className="absolute inset-0 pointer-events-none z-0 overflow-visible" style={{ left: 32, top: 120 }}>
          {/* Main arc ring */}
          <circle
            cx="0"
            cy="0"
            r={radius}
            fill="none"
            stroke="rgba(168, 85, 247, 0.15)"
            strokeWidth="2"
          />
          {/* Glowing dash ring */}
          <circle
            cx="0"
            cy="0"
            r={radius + 8}
            fill="none"
            stroke="rgba(236, 72, 153, 0.2)"
            strokeWidth="1"
            strokeDasharray="6 15"
          />
        </svg>

        {/* Center fixed "VS" monogram core */}
        <motion.div
          className="absolute rounded-full flex items-center justify-center bg-background/95 border-2 border-primary z-20 font-display font-extrabold text-xl text-primary tracking-tighter cursor-pointer hover:scale-105 transition-all duration-300 select-none"
          style={{
            width: 64,
            height: 64,
            left: 0,
            bottom: 0,
          }}
          animate={{
            boxShadow: [
              "0 0 15px rgba(168, 85, 247, 0.6), inset 0 0 10px rgba(168, 85, 247, 0.3)",
              "0 0 25px rgba(168, 85, 247, 0.9), inset 0 0 15px rgba(168, 85, 247, 0.5)",
              "0 0 15px rgba(168, 85, 247, 0.6), inset 0 0 10px rgba(168, 85, 247, 0.3)"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
          onClick={() => onSelectSection("home")}
          title="Go to Home"
        >
          {/* Animated spinning hud outer border */}
          <motion.div
            className="absolute inset-[-4px] rounded-full border border-dashed border-primary/50 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />
          {/* Rotating scanner line */}
          <motion.div
            className="absolute inset-0 rounded-full border-t border-accent/40 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
          VS
        </motion.div>

        {/* Navigation Arrows on HUD inner ring */}
        <button
          onClick={handlePrev}
          disabled={resolvedActiveIndex === 0}
          className="absolute z-30 flex items-center justify-center rounded-full border border-primary/40 bg-background/90 text-primary hover:bg-primary/20 hover:text-foreground transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          style={{
            width: 24,
            height: 24,
            left: 20,
            bottom: 76,
            boxShadow: "0 0 5px rgba(168, 85, 247, 0.2)"
          }}
          aria-label="Previous Section"
        >
          <ChevronUp className="h-3.5 w-3.5" />
        </button>

        <button
          onClick={handleNext}
          disabled={resolvedActiveIndex === navItems.length - 1}
          className="absolute z-30 flex items-center justify-center rounded-full border border-primary/40 bg-background/90 text-primary hover:bg-primary/20 hover:text-foreground transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          style={{
            width: 24,
            height: 24,
            left: 76,
            bottom: 20,
            boxShadow: "0 0 5px rgba(168, 85, 247, 0.2)"
          }}
          aria-label="Next Section"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>

        {/* Rotating Icons on the circumference */}
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isCurrentActive = i === resolvedActiveIndex;

          // Calculate angle for this item based on the active index
          const angleDeg = activeAngle + (i - resolvedActiveIndex) * angleStep;

          // Convert to radians for trigonometric functions
          const angleRad = angleDeg * (Math.PI / 180);

          // Calculate coordinates from center (32, 188)
          const cx = 32;
          const cy = 188;
          const x = cx + radius * Math.cos(angleRad);
          const y = cy + radius * Math.sin(angleRad);

          // Determine visibility based on angle
          const isVisible = angleDeg >= -110 && angleDeg <= 20;

          // Compute opacity: fade out as it approaches boundaries
          let opacity = 0;
          if (isVisible) {
            if (angleDeg < -90) {
              opacity = 1 - ((-90 - angleDeg) / 20);
            } else if (angleDeg > 0) {
              opacity = 1 - (angleDeg / 20);
            } else {
              opacity = 1;
            }
          }

          const size = isCurrentActive ? 48 : 36;

          return (
            <div
              key={item.label}
              className="absolute z-10 transition-all duration-700 ease-out"
              style={{
                left: x,
                top: y,
                transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
                opacity: isVisible ? opacity : 0,
                pointerEvents: isVisible && opacity > 0.3 ? "auto" : "none"
              }}
            >
              <button
                onClick={() => onSelectSection(item.href.replace("#", ""))}
                className={`group flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${isCurrentActive
                  ? "bg-primary/20 text-foreground border-2 border-primary shadow-neon scale-110"
                  : "bg-background/80 text-foreground/70 border border-primary/30 hover:border-primary/70 hover:text-foreground hover:bg-primary/10"
                  }`}
                style={{
                  width: size,
                  height: size,
                  boxShadow: isCurrentActive ? "0 0 15px rgba(168, 85, 247, 0.5)" : "none"
                }}
                title={item.label}
              >
                <Icon className={`${isCurrentActive ? "h-5 w-5" : "h-4 w-4"}`} />

                {/* Text label beside active icon only */}
                {isCurrentActive && (
                  <span
                    className="absolute left-full ml-3 whitespace-nowrap rounded-lg bg-background/90 border border-primary/40 px-2.5 py-1 text-xs font-display font-semibold tracking-wider text-primary shadow-neon pointer-events-none"
                    style={{
                      textShadow: "0 0 5px rgba(168, 85, 247, 0.5)"
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </button>
            </div>
          );
        })}
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

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "education", "skills", "projects", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen text-foreground">
      {/* Persistent city background — kept visible (no global blur) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${cityAsset})` }}
      />
      <div className="fixed inset-0 -z-10 bg-background/35" />

      {/* Circular HUD navigation wheel (bottom-left) */}
      <NavigationWheel activeSection={activeSection} onSelectSection={scrollToSection} />


      {/* HERO */}
      <section ref={heroRef} id="home" className="relative min-h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <img src={heroAsset} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
              Hi! I'm Vaibhavi Srivastava
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
