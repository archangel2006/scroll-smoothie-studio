import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Twitter, ExternalLink, MapPin, GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react";
import heroAsset from "@/assets/hero.png.asset.json";
import cityAsset from "@/assets/city-bg.png.asset.json";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
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
      <p className="text-sm uppercase tracking-[0.4em] text-primary mb-3">{kicker}</p>
      <h2 className="text-5xl md:text-6xl font-bold text-gradient">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </motion.div>
  );
}

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative min-h-screen text-foreground">
      {/* Persistent city background for sections after hero */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${cityAsset.url})` }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background/95" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-full px-2 py-2"
      >
        <ul className="flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-4 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-primary/20 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* HERO */}
      <section ref={heroRef} id="home" className="relative min-h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-cover bg-center"
          // hero image is different from rest
        >
          <img src={heroAsset.url} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="rain-overlay" />
        </motion.div>

        <div className="relative z-10 flex min-h-screen items-center justify-end px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl text-right md:pr-8">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm uppercase tracking-[0.4em] text-primary mb-5"
            >
              Portfolio • 2026
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            >
              Hi! I'm <span className="text-foreground">Alexander</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
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
              <a
                href="#projects"
                className="ml-2 inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-primary-foreground animate-glow"
                style={{ background: "var(--gradient-primary)" }}
              >
                View Projects <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/60 text-xs uppercase tracking-[0.3em]"
        >
          Scroll ↓
        </motion.div>
      </section>

      {/* EDUCATION */}
      <Section id="education">
        <SectionTitle kicker="Academic Journey" title="Education" />
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          {[
            { icon: GraduationCap, title: "Bachelor of Technology", years: "2024 — 2026", place: "Indira Gandhi Delhi Technical University", desc: "Computer Science Engineering with Artificial Intelligence. Focused on building practical software while strengthening foundations in algorithms, ML, and system design.", cgpa: "CGPA: 9.12" },
            { icon: GraduationCap, title: "Senior Secondary Education", years: "2022 — 2024", place: "Delhi Public School", desc: "PCM with Computer Science. Active in coding clubs and hackathons, exploring full-stack development and competitive programming.", cgpa: "95.4%" },
            { icon: GraduationCap, title: "Secondary Education", years: "2010 — 2022", place: "Delhi Public School", desc: "Built foundational skills in mathematics and computer science. Led the school robotics team to a regional championship.", cgpa: "96.2%" },
            { icon: Sparkles, title: "Certifications", years: "Ongoing", place: "AWS · Meta · Google", desc: "AWS Certified Developer, Meta Frontend Specialist, Google Cloud Associate. Continually shipping side projects to learn new stacks.", cgpa: "5+ Certs" },
          ].map((edu, i) => (
            <motion.div
              key={edu.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7 shadow-card hover:shadow-neon transition-shadow duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <edu.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                </div>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 mb-3">
                {edu.years}
              </span>
              <p className="text-sm text-foreground/85 font-semibold mb-2">{edu.place}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.desc}</p>
              <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                <span className="text-sm font-bold text-gradient">{edu.cgpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <SectionTitle kicker="Tech Arsenal" title="Skills" />
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
          {[
            { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
            { title: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis", "FastAPI"] },
            { title: "Tools & Cloud", skills: ["AWS", "Docker", "Kubernetes", "Git", "Figma", "Vercel"] },
          ].map((cat, i) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-7 neon-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/15 text-foreground border border-primary/30 hover:bg-primary/30 hover:border-primary transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <SectionTitle kicker="Selected Work" title="Projects" />
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
          {[
            { title: "Neon Commerce", tag: "Full-Stack", desc: "Cyberpunk-themed e-commerce platform with realtime inventory, payment processing, and a custom CMS.", stack: ["Next.js", "Stripe", "Postgres"] },
            { title: "Synth AI Studio", tag: "AI / ML", desc: "Browser-based AI music generation suite. Trains on user samples and produces stems in seconds.", stack: ["Python", "WebGL", "FastAPI"] },
            { title: "Nightcity Maps", tag: "Visualization", desc: "Interactive 3D city explorer with live data overlays. Built for a smart-city research lab.", stack: ["Three.js", "Mapbox", "TS"] },
            { title: "Pulse Analytics", tag: "SaaS", desc: "Realtime product analytics dashboard with anomaly detection. Powering 30+ early-stage startups.", stack: ["React", "ClickHouse", "Go"] },
          ].map((p, i) => (
            <motion.article
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl p-7 shadow-card hover:shadow-neon transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">{p.tag}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded bg-primary/15 text-foreground/85 border border-primary/20">{s}</span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                View Case Study <ExternalLink className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <SectionTitle kicker="Career Path" title="Work Experience" />
        <div className="mx-auto max-w-4xl relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
          {[
            { role: "Senior Full Stack Engineer", company: "Nightcity Labs", years: "2025 — Present", desc: "Leading frontend architecture for a realtime collaboration suite serving 50k+ users. Mentoring a team of four engineers." },
            { role: "Full Stack Developer", company: "Pulse Studios", years: "2024 — 2025", desc: "Built core analytics product from scratch — ingest pipeline, query engine, and dashboard UI. Shipped to first 100 paying customers." },
            { role: "Software Engineer Intern", company: "Vertex Robotics", years: "2023 — 2024", desc: "Worked on telemetry and visualization systems for autonomous warehouse robots. Reduced p95 dashboard latency by 70%." },
            { role: "Freelance Developer", company: "Independent", years: "2022 — 2023", desc: "Designed and shipped 12+ websites and small SaaS tools for indie founders and creative studios worldwide." },
          ].map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative mb-10 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"} pl-12 md:pl-0`}
            >
              <div className={`absolute top-6 ${i % 2 ? "left-2 md:-left-2" : "left-2 md:-right-2"} h-4 w-4 rounded-full bg-primary shadow-neon`} />
              <div className="glass rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold">{job.years}</span>
                </div>
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{job.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{job.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="flex items-center">
        <div className="mx-auto max-w-3xl w-full text-center">
          <SectionTitle kicker="Let's Build" title="Contact Me" />
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg text-muted-foreground mb-10"
          >
            Got a project, a collaboration idea, or just want to say hi? My inbox is always open.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-strong rounded-3xl p-10 shadow-neon"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" /> Based in New Delhi · Available worldwide
            </div>
            <a
              href="mailto:hello@alexander.dev"
              className="inline-block text-3xl md:text-4xl font-bold text-gradient hover:scale-105 transition-transform"
            >
              hello@alexander.dev
            </a>
            <div className="mt-10 flex items-center justify-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl glass hover:bg-primary/30 hover:scale-110 transition-all duration-300"
                >
                  <s.icon className="h-5 w-5 text-foreground" />
                </a>
              ))}
            </div>
          </motion.div>
          <p className="mt-12 text-xs text-muted-foreground/70">© 2026 Alexander · Crafted with neon & caffeine</p>
        </div>
      </Section>
    </div>
  );
}
