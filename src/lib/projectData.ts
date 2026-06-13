export interface Project {
  id: string;
  title: string;
  description: string;
  category: string; // The primary filter pill category
  featured: boolean; // If true, shows up in the "Featured" tab
  tags: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  image: string;
}

export const placeholderProjects: Project[] = [
  {
    id: "neon-commerce",
    title: "Neon Commerce",
    description: "Cyberpunk-themed e-commerce platform with realtime inventory, payment processing, and a custom headless CMS that scales to millions of products.",
    category: "Full-Stack & Products",
    featured: true,
    tags: ["Full-Stack", "E-Commerce"],
    techStack: ["Next.js", "Stripe", "Postgres", "Redis"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "synth-ai-studio",
    title: "Synth AI Studio",
    description: "Browser-based AI music generation suite. Trains on user samples and produces stems in seconds using diffusion models running on WebGPU.",
    category: "AI & Machine Learning",
    featured: true,
    tags: ["AI / ML", "Music Generation"],
    techStack: ["Python", "WebGPU", "FastAPI", "PyTorch"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nightcity-maps",
    title: "Nightcity Maps",
    description: "Interactive 3D city explorer with live data overlays. Built for a smart-city research lab to visualize traffic, energy and pollution in real time.",
    category: "Design & UI/UX",
    featured: false,
    tags: ["Visualization", "3D Maps"],
    techStack: ["Three.js", "Mapbox", "TS", "Deck.gl"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics",
    description: "Realtime product analytics dashboard with anomaly detection. Powering 30+ early-stage startups with sub-second query latency over billions of events.",
    category: "Full-Stack & Products",
    featured: true,
    tags: ["SaaS", "Analytics"],
    techStack: ["React", "ClickHouse", "Go"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "quantum-lab-real",
    title: "Quantum Lab",
    description: "Interactive playground for quantum circuit design with live state-vector visualizations and one-click execution on IBM Q hardware.",
    category: "Quantum Computing",
    featured: true,
    tags: ["Research", "Interactive"],
    techStack: ["Qiskit", "Next.js", "Python"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "social-impact-safehaven",
    title: "SafeHaven Platform",
    description: "A disaster response collaboration hub. Built to link regional volunteers, map live supply points, and track logistics.",
    category: "Social Impact",
    featured: false,
    tags: ["Disaster Response", "Open Source"],
    techStack: ["React", "FastAPI", "Mapbox", "Firebase"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1469571486040-af250c558d63?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fun-terminal-rain",
    title: "Matrix Terminal Rain",
    description: "An interactive terminal window emulator. Renders cascading streams of digital glyphs matching terminal size grids.",
    category: "Fun & Experimental",
    featured: false,
    tags: ["Creative Coding", "Retro Design"],
    techStack: ["HTML", "CSS", "Vanilla JS", "Canvas API"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  }
];
