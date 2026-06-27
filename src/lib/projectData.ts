
import learnscapeImg from "@/assets/projects/learnscape1.png";
import ambucastImg from "@/assets/projects/ambucast2.png";
import udyaraImg from "@/assets/projects/udyara2.png";
import quantinelImg from "@/assets/projects/quantinel.png";
import msisImg from "@/assets/projects/msis.png";
import agronomicsImg from "@/assets/projects/agronomics2.png";
import resqtweetImg from "@/assets/projects/resQtweet.png";
import lawyeraiImg from "@/assets/projects/lawyerai2.png";
import fridgemateImg from "@/assets/projects/fridgemate.png";
import virasyaImg from "@/assets/projects/virasya.png";
import waste2worthImg from "@/assets/projects/waste2worth2.png";
import sugarsyncImg from "@/assets/projects/sugarsync.png";
import safehavenImg from "@/assets/projects/safe-haven.png";
import cryptopulseImg from "@/assets/projects/cryptopulse1.png";
import planetquestImg from "@/assets/projects/planet-quest.png";
import unstableFlappyImg from "@/assets/projects/unstable-flappy.png";
import ticTacToeImg from "@/assets/projects/tic-tac-toe.png";
import pokedexImg from "@/assets/projects/pokedex.png";
import wordGameImg from "@/assets/projects/word-guess.png";
import climatecastImg from "@/assets/projects/climate-cast.png";
import loretrailImg from "@/assets/projects/lore-trail.png";
import hiddenMileImg from "@/assets/projects/hidden-mile.png";
import appleCrateImg from "@/assets/projects/apple-crate2.png";
import dailyprophetImg from "@/assets/projects/daily-prophet.png";
import chartlabImg from "@/assets/projects/chart-lab2.png";
import webtoonImg from "@/assets/projects/webtoon2.png";

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
    description: "Hybrid quantum-classical cybersecurity system that detects network intrusions, characterizes attack behavior, and maps emerging threats to known attack families through similarity-based analysis.",
    categories: ["AI & Machine Learning", "Quantum Computing"],
    featured: true,
    tags: ["Quantum Computing", "Cybersecurity", "Machine Learning", "Research"],
    techStack: ["Python", "Qiskit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/archangel2006/Quantinel",
    demoUrl: "https://github.com/archangel2006/Quantinel",
    image: quantinelImg
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
    demoUrl: "https://github.com/archangel2006/learnscape",
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
    demoUrl: "https://github.com/archangel2006/ambucast-dispatch",
    image: ambucastImg
  },

  {
    id: "udyara",
    title: "Udyara",
    description: "Policy intelligence system that analyzes government startup incentives, evaluates eligibility requirements, and delivers trustworthy, source-backed guidance for women entrepreneurs.",
    categories: ["AI & Machine Learning", "Social Impact"],
    featured: true,
    tags: ["Retrieval-Augmented Generation", "Policy Intelligence"],
    techStack: ["FastAPI", "LangChain", "FAISS", "Sentence Transformers", "Gemini", "React"],
    githubUrl: "https://github.com/archangel2006/Udyara",
    demoUrl: "https://github.com/archangel2006/Udyara",
    image: udyaraImg
  },

  {
    id: "msis",
    title: "MSIS",
    description: "Market Shock Intelligence System that detects financial market regimes, analyzes volatility behavior, predicts drawdown risks, and evaluates strategy robustness across market conditions.",
    categories: ["AI & Machine Learning"],
    featured: true,
    tags: ["Financial ML", "Risk Modeling", "Explainable Analytics"],
    techStack: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Plotly", "Pandas"],
    githubUrl: "https://github.com/archangel2006/MSIS",
    demoUrl: "https://github.com/archangel2006/MSIS",
    image: msisImg
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
    demoUrl: "https://github.com/archangel2006/FridgeMate",
    image: fridgemateImg
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
    demoUrl: "https://github.com/archangel2006/Agronomics",
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
    demoUrl: "https://github.com/archangel2006/ResQTweet",
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
    demoUrl: "https://github.com/archangel2006/LawyerAI",
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
    demoUrl: "https://github.com/archangel2006/virasya",
    image: virasyaImg
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
    demoUrl: "https://github.com/archangel2006/Waste2Worth",
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
    demoUrl: "https://github.com/archangel2006/SugarSync",
    image: sugarsyncImg
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
    demoUrl: "https://github.com/archangel2006/SafeHaven",
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
    demoUrl: "https://crypto-pulse.streamlit.app/",
    image: cryptopulseImg
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
    demoUrl: "https://github.com/archangel2006/PlanetQuest",
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
    demoUrl: "https://github.com/archangel2006/unstable-flappy",
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
    demoUrl: "https://github.com/archangel2006/Tic-Tac-Toe",
    image: ticTacToeImg
  },

  {
    id: "pokedex",
    title: "Pokédex",
    description: "Pokémon encyclopedia application powered by public APIs with dynamic search, filtering, and interactive data exploration.",
    categories: ["Fun & Experimental"],
    featured: false,
    tags: ["API Integration", "Frontend Development"],
    techStack: ["HTML", "CSS", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/archangel2006/Pokedex",
    demoUrl: "https://github.com/archangel2006/Pokedex",
    image: pokedexImg
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
    demoUrl: "https://github.com/archangel2006/WordGuessGame",
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
    githubUrl: "https://github.com/archangel2006/ClimateCast",
    demoUrl: "https://climate-cast-hazel.vercel.app/",
    image: climatecastImg
  },

  {
    id: "loretrail",
    title: "Lore Trail",
    description: "A digital library preserving global folklore through interactive storytelling and community features.",
    categories: ["Design & UI/UX"],
    featured: false,
    tags: ["UI/UX", "Creative", "Web Design", "Storytelling"],
    techStack: ["Figma", "UI Design", "Prototyping", "Information Architecture"],
    githubUrl: "https://github.com/archangel2006/LoreTrail",
    demoUrl: "https://www.figma.com/proto/loretrail",
    image: loretrailImg
  },

  {
    id: "hidden-mile",
    title: "The Hidden Mile",
    description: "A visual platform for discovering lesser-known travel spots through community-driven stories.",
    categories: ["Design & UI/UX"],
    featured: false,
    tags: ["UI/UX", "Creative", "Web Design", "Storytelling"],
    techStack: ["Figma", "UI Design", "Prototyping", "User Experience"],
    githubUrl: "https://github.com/archangel2006/TheHiddenMile",
    demoUrl: "https://www.figma.com/proto/thehiddenmile",
    image: hiddenMileImg
  },

  {
    id: "apple-crate",
    title: "Apple Crate",
    description: "An iterative UI redesign case study based on deep usability testing and user feedback.",
    categories: ["Design & UI/UX"],
    featured: false,
    tags: ["UI/UX", "Technology", "Usability"],
    techStack: ["Figma", "Usability Testing", "Surveys", "Iterative Redesign"],
    githubUrl: "https://github.com/archangel2006/AppleCrate",
    demoUrl: "https://www.figma.com/proto/applecrate",
    image: appleCrateImg
  },

  {
    id: "daily-prophet",
    title: "The Daily Prophet",
    description: "A high-fidelity Harry Potter-themed news portal focusing on information hierarchy and editorial layouts.",
    categories: ["Design & UI/UX"],
    featured: false,
    tags: ["UI/UX", "Creative", "Web Design"],
    techStack: ["Figma", "Visual Design", "Typography", "Editorial Layouts"],
    githubUrl: "https://github.com/archangel2006/DailyProphetUI",
    demoUrl: "https://www.figma.com/proto/dailyprophet",
    image: dailyprophetImg
  },

  {
    id: "chart-lab",
    title: "Chart Lab Landing Page",
    description: "A modern SaaS landing page UI designed to showcase visual principles and component-based layouts.",
    categories: ["Design & UI/UX"],
    featured: false,
    tags: ["UI/UX", "Creative", "Web Design"],
    techStack: ["Figma", "Replication", "UI Components", "Layout Composition"],
    githubUrl: "https://github.com/archangel2006/ChartLabUI",
    demoUrl: "https://www.figma.com/proto/chartlab",
    image: chartlabImg
  },

  {
    id: "webtoon-wireframes",
    title: "Webtoon Wireframes",
    description: "Mid-fidelity wireframes for a WebToon platform emphasizing intuitive navigation and reader experience.",
    categories: ["Design & UI/UX"],
    featured: false,
    tags: ["UI/UX", "Creative", "Web Design", "Storytelling"],
    techStack: ["Figma", "Wireframing", "Interaction Flow", "Mobile Layouts"],
    githubUrl: "https://github.com/archangel2006/WebToonWireframes",
    demoUrl: "https://www.figma.com/proto/webtoon",
    image: webtoonImg
  }
];
