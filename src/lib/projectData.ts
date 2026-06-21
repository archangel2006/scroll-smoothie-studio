
// import quantinelImg from "@/assets/projects/quantinel.jpg";     // TODO: add quantinel.jpg
import learnscapeImg from "@/assets/projects/learnscape2.png";   // TODO: add learnscape.jpg
import ambucastImg from "@/assets/projects/ambucast.png";       // TODO: add ambucast.jpg
import udyaraImg from "@/assets/projects/udyara.png";           // TODO: add udyara.jpg
// import msisImg from "@/assets/projects/msis.jpg";               // TODO: add msis.jpg
// import fridgemateImg from "@/assets/projects/fridgemate.jpg";   // TODO: add fridgemate.jpg
import agronomicsImg from "@/assets/projects/agronomics.png";   // TODO: add agronomics.jpg
import resqtweetImg from "@/assets/projects/resQtweet.png";     // TODO: add resqtweet.jpg
import lawyeraiImg from "@/assets/projects/lawyer-ai.png";       // TODO: add lawyerai.jpg
// import virasyaImg from "@/assets/projects/virasya.jpg";         // TODO: add virasya.jpg
import waste2worthImg from "@/assets/projects/waste2worth.png"; // TODO: add waste2worth.jpg
// import sugarsyncImg from "@/assets/projects/sugarsync.png";     // TODO: add sugarsync.jpg
import safehavenImg from "@/assets/projects/safe-haven.png";     // TODO: add safehaven.jpg
// import cryptopulseImg from "@/assets/projects/cryptopulse.png"; // TODO: add cryptopulse.jpg
import planetquestImg from "@/assets/projects/planet-quest.png"; // TODO: add planetquest.jpg
import unstableFlappyImg from "@/assets/projects/unstable-flappy.png"; // TODO: add unstable-flappy.jpg
import ticTacToeImg from "@/assets/projects/t3.png";   // TODO: add tic-tac-toe.jpg
// import pokedexImg from "@/assets/projects/pokedex.png";         // TODO: add pokedex.jpg
import wordGameImg from "@/assets/projects/word-guess.png";      // TODO: add word-game.jpg
import climatecastImg from "@/assets/projects/climate-cast.png"; // TODO: add climate-cast.jpg

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
    categories: ["AI & Machine Learning", "Quantum Computing"],
    featured: true,
    tags: ["Quantum Computing", "Cybersecurity", "Machine Learning", "Research"],
    techStack: ["Python", "Qiskit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/archangel2006/Quantinel",
    image: "" 
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
    image: learnscapeImg
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
    image: ambucastImg
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
    image: udyaraImg
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
    image: "" // TODO: replace with msisImg once msis.jpg is added
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
    image: "" // TODO: replace with fridgemateImg once fridgemate.jpg is added
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
    image: agronomicsImg
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
    image: resqtweetImg
  },

  {
    id: "lawyerai",
    title: "LawyerAI",
    description: "Legal Retrieval-Augmented Generation assistant for document-aware legal question answering and intelligent policy interpretation.",
    categories: ["AI & Machine Learning", "Social Impact"],
    featured: false,
    tags: ["Legal Technology", "RAG"],
    techStack: ["FastAPI", "LangChain", "FAISS", "Gemini"],
    githubUrl: "https://github.com/archangel2006/LawyerAI",
    demoUrl: "",
    image: lawyeraiImg
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
    image: "" 
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
    image: waste2worthImg
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
    image: "" 
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
    image: safehavenImg
  },

  {
    id: "cryptopulse",
    title: "CryptoPulse",
    description: "Interactive cryptocurrency analytics dashboard delivering market intelligence, trend monitoring, API-driven insights, and financial data visualizations.",
    categories: ["Full-Stack & Products", "FinTech"],
    featured: false,
    tags: ["FinTech", "Analytics", "Data Visualization"],
    techStack: ["React", "REST APIs", "Charts"],
    githubUrl: "https://github.com/archangel2006/CryptoPulse",
    demoUrl: "",
    image: "" // TODO: replace with cryptopulseImg once cryptopulse.jpg is added
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
    image: planetquestImg
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
    image: unstableFlappyImg
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
    image: ticTacToeImg
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
    image: "" // TODO: replace with pokedexImg once pokedex.jpg is added
  },

  {
    id: "word-guess",
    title: "Word Guess Game",
    description: "Vocabulary and word-association game developed to explore frontend interaction patterns and user engagement mechanics.",
    categories: ["Fun & Experimental"],
    featured: false,
    tags: ["Interactive UI", "Frontend Development"],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/archangel2006/WordGuessGame",
    demoUrl: "",
    image: wordGameImg
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
    image: climatecastImg
  }
];
