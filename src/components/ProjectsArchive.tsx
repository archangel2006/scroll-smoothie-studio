import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Brain, Atom, Code2, Globe, PenTool, FlaskConical,
  Search, ArrowLeft, Github, ExternalLink, BookOpen
} from "lucide-react";
import { placeholderProjects, Project } from "@/lib/projectData";
import cityAsset from "@/assets/background1.png";

const filters = [
  { id: "Featured", label: "Featured", icon: Star },
  { id: "AI & Machine Learning", label: "AI & Machine Learning", icon: Brain },
  { id: "Quantum Computing", label: "Quantum Computing", icon: Atom },
  { id: "Full-Stack & Products", label: "Full-Stack & Products", icon: Code2 },
  { id: "Social Impact", label: "Social Impact", icon: Globe },
  { id: "Design & UI/UX", label: "Design & UI/UX", icon: PenTool },
  { id: "Fun & Experimental", label: "Fun & Experimental", icon: FlaskConical }
];

export default function ProjectsArchive() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Featured");

  // Filter projects by both search query and active category pill
  const filteredProjects = placeholderProjects.filter((project) => {
    const matchesFilter =
      activeFilter === "Featured"
        ? project.featured
        : project.categories.includes(activeFilter);

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative min-h-screen text-foreground py-16 px-6 md:px-12 lg:px-24">
      {/* Persistent city background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${cityAsset})` }}
      />
      <div className="fixed inset-0 -z-10 bg-background/35" />

      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition duration-300 font-display uppercase tracking-wider font-semibold cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.4em] text-primary mb-3 font-display font-semibold block">
            PROJECT ARCHIVE
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient font-display mb-4">
            All Projects
          </h1>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-2xl font-semibold">
            A collection of engineering, AI, quantum computing, research, product, and design projects.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-primary/60">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search projects by title, tag, stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-background/40 border border-primary/30 focus:border-primary/80 focus:shadow-neon outline-none transition placeholder:text-foreground/40 text-sm font-semibold"
          />
        </div>

        {/* Filter Pills System */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isSelected = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold font-display tracking-wider uppercase border transition-all duration-300 cursor-pointer ${isSelected
                  ? "bg-primary/20 text-foreground border-primary shadow-neon scale-105"
                  : "bg-background/50 border-primary/25 text-foreground/70 hover:border-primary/50 hover:text-foreground"
                  }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col hover:shadow-neon transition-all duration-500"
                style={{
                  background: "oklch(0.18 0.08 295 / 0.45)",
                  backdropFilter: "blur(24px) saturate(160%)",
                  WebkitBackdropFilter: "blur(24px) saturate(160%)",
                  border: "1px solid oklch(0.6 0.18 305 / 0.35)",
                }}
              >
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden bg-background/25">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/45 to-transparent" />

                  {/* Domain Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/25 border border-accent/40 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-display text-gradient mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-primary/10 text-foreground/80 border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions / Links */}
                  <div className="flex items-center gap-3 mt-auto border-t border-primary/10 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/30 transition text-foreground"
                        title="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/30 transition text-foreground"
                        title="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        className="h-9 px-4 rounded-full glass flex items-center justify-center gap-1.5 text-xs font-semibold hover:bg-primary/30 transition text-foreground ml-auto"
                        title="View Case Study"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Case Study
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 glass-card rounded-3xl border border-primary/20 max-w-lg mx-auto"
          >
            <p className="text-foreground/60 text-sm font-semibold mb-2">No projects found</p>
            <p className="text-xs text-foreground/40">Try adjusting your search query or choosing another category filter.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
