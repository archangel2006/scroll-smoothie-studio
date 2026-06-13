import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import {
  Github, Linkedin, Mail, Twitter, ExternalLink, MapPin,
  Briefcase, Code2, ChevronLeft, ChevronRight, Send, Atom,
  Brain, Cloud, Layers, Trophy, Home, GraduationCap, Sparkles,
  FolderKanban, User, Menu, X
} from "lucide-react";

import heroAsset from "@/assets/hero.png.asset.json";
import cityAsset from "@/assets/city-bg.png.asset.json";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Skills", href: "#skills", icon: Sparkles },
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

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative min-h-screen px-6 md:px-12 lg:px-24 py-24 ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="mb-14 text-center"
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
                className={`glass-card cursor-pointer rounded-2xl p-6 transition-all duration-500 ${
                  isOpen ? "neon-border shadow-neon" : "hover:border-primary/40"
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
  { icon: Brain, title: "Machine Learning & AI", items: ["Scikit-learn", "Pandas", "NumPy", "OpenCV", "Ultralytics", "LangChain", "Genkit", "FAISS"] },
  { icon: Atom, title: "Quantum Computing", items: ["Qiskit", "Quantum Kernels", "QSVM", "ZZFeatureMap", "Grover's Search"] },
  { icon: Cloud, title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Figma", "Vercel", "Netlify", "Firebase Hosting"] },
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
    title: "Neon Commerce",
    tag: "Full-Stack",
    desc: "Cyberpunk-themed e-commerce platform with realtime inventory, payment processing, and a custom headless CMS that scales to millions of products.",
    stack: ["Next.js", "Stripe", "Postgres", "Redis"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Synth AI Studio",
    tag: "AI / ML",
    desc: "Browser-based AI music generation suite. Trains on user samples and produces stems in seconds using diffusion models running on WebGPU.",
    stack: ["Python", "WebGPU", "FastAPI", "PyTorch"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Nightcity Maps",
    tag: "Visualization",
    desc: "Interactive 3D city explorer with live data overlays. Built for a smart-city research lab to visualize traffic, energy and pollution in real time.",
    stack: ["Three.js", "Mapbox", "TS", "Deck.gl"],
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Pulse Analytics",
    tag: "SaaS",
    desc: "Realtime product analytics dashboard with anomaly detection. Powering 30+ early-stage startups with sub-second query latency over billions of events.",
    stack: ["React", "ClickHouse", "Go"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Quantum Lab",
    tag: "Research",
    desc: "Interactive playground for quantum circuit design with live state-vector visualizations and one-click execution on IBM Q hardware.",
    stack: ["Qiskit", "Next.js", "Python"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80",
    demo: "https://example.com",
    github: "https://github.com",
  },
];

function ProjectsSection() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % projects.length);
  const prev = () => setIdx((i) => (i - 1 + projects.length) % projects.length);

  return (
    <Section id="projects">
      <SectionTitle kicker="Selected Work" title="Projects" />
      <div className="mx-auto max-w-6xl">
        <div className="relative h-[520px] md:h-[560px] flex items-center justify-center">
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


        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button onClick={prev} aria-label="Previous"
                  className="h-12 w-12 rounded-full glass-card hover:bg-primary/30 transition flex items-center justify-center">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-primary shadow-neon" : "w-2 bg-foreground/30 hover:bg-foreground/60"}`} />
            ))}
          </div>
          <button onClick={next} aria-label="Next"
                  className="h-12 w-12 rounded-full glass-card hover:bg-primary/30 transition flex items-center justify-center">
            <ChevronRight className="h-5 w-5" />
          </button>
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

// =================== CIRCULAR MENU ===================
function CircularMenu() {
  const [open, setOpen] = useState(false);
  const radius = 110;
  const start = -90; // pointing up
  const end = 0;     // pointing right (quarter arc into top-right of button)
  const step = (end - start) / (navItems.length - 1);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative h-16 w-16">
        {/* Radial items */}
        <AnimatePresence>
          {open && navItems.map((item, i) => {
            const angle = (start + step * i) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                animate={{ x, y, opacity: 1, scale: 1 }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: i * 0.04 }}
                className="group absolute top-2 left-2 h-12 w-12 rounded-full glass-strong flex items-center justify-center text-foreground hover:bg-primary/40 hover:shadow-neon"
                aria-label={item.label}
              >
                <Icon className="h-5 w-5" />
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-full glass-strong px-3 py-1 text-xs font-semibold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  {item.label}
                </span>
              </motion.a>
            );
          })}
        </AnimatePresence>

        {/* Trigger */}
        <motion.button
          onClick={() => setOpen((o) => !o)}
          whileTap={{ scale: 0.92 }}
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative h-16 w-16 rounded-full glass-strong flex items-center justify-center shadow-neon"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
      {/* Persistent city background — kept visible (no global blur) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${cityAsset.url})` }}
      />
      <div className="fixed inset-0 -z-10 bg-background/35" />

      {/* Circular expandable menu (bottom-left) */}
      <CircularMenu />


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
