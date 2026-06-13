export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  featured: boolean;
  tags: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  image: string;
}

export const placeholderProjects: Project[] = [
  {
    id: "quantinel",
    title: "Quantinel",
    description: "Quantum-enhanced cybersecurity research platform combining Quantum Machine Learning, Intrusion Detection Systems, attack characterization, and threat intelligence pipelines. Built as a research-driven system exploring next-generation cyber defense.",
    categories: ["AI & Machine Learning"],
    featured: true,
    tags: ["Quantum Computing", "Cybersecurity", "Machine Learning", "Research"],
    techStack: ["Python", "Qiskit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/archangel2006/Quantinel",
    image: "/projects/quantinel.jpg"
  },

  {
    id: "learnscape",
    title: "Learnscape",
    description: "AI-powered visual learning platform that transforms real-world objects into interactive STEM lessons using multimodal AI, computer vision, educational overlays, and voice interaction.",
    categories: ["AI & Machine Learning"],
    featured: true,
    tags: ["Multimodal AI", "Computer Vision", "Education Technology", "Agentic AI"],
    techStack: ["Next.js", "TypeScript", "Genkit", "Gemini", "Canvas API", "Web Speech API"],
    githubUrl: "https://github.com/archangel2006/learnscape",
    image: "/projects/learnscape.jpg"
  },

  {
    id: "ambucast",
    title: "AmbuCast",
    description: "Predictive ambulance intelligence system that forecasts emergency hotspots, analyzes risk levels, and recommends optimal ambulance deployment using machine learning and decision optimization.",
    categories: ["AI & Machine Learning", "Social Impact"],
    featured: true,
    tags: ["Predictive Analytics", "Healthcare AI", "Machine Learning", "Optimization"],
    techStack: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Pandas", "NumPy"],
    githubUrl: "https://github.com/archangel2006/ambucast-dispatch",
    image: "/projects/ambucast.jpg"
  },

  {
    id: "udyara",
    title: "Udyara",
    description: "Trustworthy Retrieval-Augmented Generation system helping women entrepreneurs navigate government startup policies through semantic search and source-backed explanations.",
    categories: ["AI & Machine Learning", "Social Impact"],
    featured: true,
    tags: ["Retrieval-Augmented Generation", "Trustworthy AI", "Policy Intelligence"],
    techStack: ["FastAPI", "LangChain", "FAISS", "Sentence Transformers", "Gemini", "React"],
    githubUrl: "https://github.com/archangel2006/Udyara",
    image: "/projects/udyara.jpg"
  },

  {
    id: "msis",
    title: "MSIS",
    description: "Market Shock Intelligence System that detects financial market regimes, analyzes volatility behavior, predicts drawdown risks, and evaluates strategy robustness across market conditions.",
    categories: ["AI & Machine Learning"],
    featured: true,
    tags: ["Financial Machine Learning", "Risk Modeling", "Explainable Analytics"],
    techStack: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Plotly", "Pandas"],
    githubUrl: "https://github.com/archangel2006/MSIS",
    image: "/projects/msis.jpg"
  },

  {
    id: "fridgemate",
    title: "FridgeMate",
    description: "AI-powered recipe generator that detects ingredients from fridge images using computer vision and generates personalized recipes using Large Language Models.",
    categories: ["AI & Machine Learning", "Full-Stack & Products"],
    featured: false,
    tags: ["Computer Vision", "Generative AI"],
    techStack: ["YOLOv8", "FastAPI", "React", "Gemini", "OpenCV"],
    githubUrl: "https://github.com/archangel2006/FridgeMate",
    demoUrl: "",
    image: "/projects/fridgemate.jpg"
  },

  {
    id: "agronomics",
    title: "AgroNomics",
    description: "Crop price forecasting platform providing state and district-level agricultural market predictions across India using Machine Learning and historical commodity datasets.",
    categories: ["AI & Machine Learning", "Social Impact"],
    featured: false,
    tags: ["Agritech", "Machine Learning"],
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/archangel2006/Agronomics",
    demoUrl: "",
    image: "/projects/agronomics.jpg"
  },

  {
    id: "resqtweet",
    title: "ResQTweet",
    description: "Disaster tweet intelligence system that classifies crisis-related tweets and generates concise alerts through Natural Language Processing and summarization pipelines.",
    categories: ["AI & Machine Learning", "Social Impact"],
    featured: false,
    tags: ["Natural Language Processing", "Crisis Intelligence"],
    techStack: ["Python", "Scikit-learn", "Transformers", "Hugging Face"],
    githubUrl: "https://github.com/archangel2006/ResQTweet",
    demoUrl: "",
    image: "/projects/resqtweet.jpg"
  },

  {
    id: "lawyerai",
    title: "LawyerAI",
    description: "Legal Retrieval-Augmented Generation assistant for document-aware legal question answering and intelligent policy interpretation.",
    categories: ["AI & Machine Learning"],
    featured: false,
    tags: ["Legal Technology", "RAG"],
    techStack: ["FastAPI", "LangChain", "FAISS", "Gemini"],
    githubUrl: "https://github.com/archangel2006/LawyerAI",
    demoUrl: "",
    image: "/projects/lawyerai.jpg"
  },

  {
    id: "virasya",
    title: "Virasya",
    description: "AI-powered artisan marketplace connecting traditional Indian artisans with global buyers through intelligent content generation, multilingual support, and marketplace workflows.",
    categories: ["Full-Stack & Products"],
    featured: false,
    tags: ["Marketplace", "Generative AI", "Social Commerce"],
    techStack: ["Next.js", "Firebase", "Genkit", "Gemini"],
    githubUrl: "https://github.com/archangel2006/virasya",
    demoUrl: "",
    image: "/projects/virasya.jpg"
  },

  {
    id: "waste2worth",
    title: "Waste2Worth",
    description: "AI-assisted food waste redistribution platform connecting donors, organizations, and volunteers through a multi-role ecosystem focused on sustainability and social impact.",
    categories: ["Full-Stack & Products", "Social Impact"],
    featured: false,
    tags: ["Sustainability", "Food Redistribution", "Social Impact"],
    techStack: ["Next.js", "Firebase", "Genkit", "Gemini"],
    githubUrl: "https://github.com/archangel2006/Waste2Worth",
    demoUrl: "",
    image: "/projects/waste2worth.jpg"
  },

  {
    id: "sugarsync",
    title: "SugarSync",
    description: "Healthcare-focused application designed to improve disease monitoring, patient engagement, and health tracking through intelligent digital workflows.",
    categories: ["Full-Stack & Products", "Social Impact"],
    featured: false,
    tags: ["Healthcare", "Patient Monitoring", "HealthTech"],
    techStack: ["React", "Firebase", "JavaScript"],
    githubUrl: "https://github.com/archangel2006/SugarSync",
    demoUrl: "",
    image: "/projects/sugarsync.jpg"
  },

  {
    id: "safehaven",
    title: "SafeHaven",
    description: "Comprehensive disaster management platform providing emergency alerts, preparedness resources, assistance coordination, and community-driven disaster response capabilities.",
    categories: ["Full-Stack & Products", "Social Impact"],
    featured: false,
    tags: ["Disaster Management", "Community Response", "Emergency Systems"],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/archangel2006/SafeHaven",
    demoUrl: "",
    image: "/projects/safehaven.jpg"
  },

  {
    id: "cryptopulse",
    title: "CryptoPulse",
    description: "Interactive cryptocurrency analytics dashboard delivering market intelligence, trend monitoring, API-driven insights, and financial data visualizations.",
    categories: ["Full-Stack & Products"],
    featured: false,
    tags: ["FinTech", "Analytics", "Data Visualization"],
    techStack: ["React", "REST APIs", "Charts"],
    githubUrl: "https://github.com/archangel2006/CryptoPulse",
    demoUrl: "",
    image: "/projects/cryptopulse.jpg"
  },

  {
    id: "planetquest",
    title: "PlanetQuest",
    description: "Interactive environmental learning platform combining sustainability education, quizzes, eco-challenges, and gamified learning experiences.",
    categories: ["Social Impact"],
    featured: false,
    tags: ["Education", "Sustainability", "Gamification"],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/archangel2006/PlanetQuest",
    demoUrl: "",
    image: "/projects/planetquest.jpg"
  },

  {
    id: "unstable-flappy",
    title: "Unstable Flappy",
    description: "Experimental physics-inspired recreation of Flappy Bird featuring intentionally chaotic mechanics and unpredictable gameplay.",
    categories: ["Fun & Experimental"],
    featured: false,
    tags: ["Game Development", "Physics Simulation"],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/archangel2006/unstable-flappy",
    demoUrl: "",
    image: "/projects/unstable-flappy.jpg"
  },

  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description: "Interactive implementation of the classic strategy game featuring responsive gameplay and clean user interface design.",
    categories: ["Fun & Experimental"],
    featured: false,
    tags: ["Game Development", "Frontend Development"],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/archangel2006/Tic-Tac-Toe",
    demoUrl: "",
    image: "/projects/tic-tac-toe.jpg"
  },

  {
    id: "pokedex",
    title: "Pokedex",
    description: "Pokémon encyclopedia application powered by public APIs with dynamic search, filtering, and interactive data exploration.",
    categories: ["Fun & Experimental"],
    featured: false,
    tags: ["API Integration", "Frontend Development"],
    techStack: ["HTML", "CSS", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/archangel2006/Pokedex",
    demoUrl: "",
    image: "/projects/pokedex.jpg"
  },

  {
    id: "word-game",
    title: "Word Guess Game",
    description: "Vocabulary and word-association game developed to explore frontend interaction patterns and user engagement mechanics.",
    categories: ["Fun & Experimental"],
    featured: false,
    tags: ["Interactive UI", "Frontend Development"],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/archangel2006/WordGuessGame",
    demoUrl: "",
    image: "/projects/word-game.jpg"
  },

  {
    id: "climate-cast",
    title: "ClimateCast",
    description: "Weather forecasting application utilizing real-time weather APIs to deliver location-based forecasts through a responsive interface.",
    categories: ["Fun & Experimental"],
    featured: false,
    tags: ["API Integration", "Weather Data"],
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    githubUrl: "https://github.com/archangel2006/ClimateCase",
    demoUrl: "",
    image: "/projects/climate-cast.jpg"
  }
];
