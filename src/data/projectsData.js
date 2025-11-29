// Projects Database
// Each project has: highlight (for homepage), projectType (web/mobile)

export const projects = [
  // ============ HIGHLIGHTED PROJECTS ============
  {
    id: "flowbook",
    title: "FlowBook",
    tagline: "A BJJ sparring tracker that doesn't suck.",
    projectType: "mobile",
    highlight: true,
    image:
      "https://ih1.redbubble.net/image.2036961673.7005/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    description:
      "A React Native app for Brazilian Jiu Jitsu athletes to log sparring sessions in 30 seconds through swipeable questionnaires, track performance trends, and get AI-powered insights.",
    technologies: {
      framework: ["React Native"],
      navigation: ["React Navigation"],
      backend: ["Firebase Realtime DB"],
      stateManagement: ["Context API"],
      ai: ["GPT API Integration"],
      crossPlatform: ["iOS", "Android"], // ← NEW!

      implementation: [
        "Horizontal carousel questionnaire system where each question is a full-screen slide. Question types (slider, MCQ, numerical) render dynamically from JSON metadata. Auto-submit after 8 questions if interrupted. Win streak algorithm with O(n log n) sort + O(n) scan."
      ]
    },
    projectDetails: {
      backstory:
        "BJJ progress is maddeningly vague—you can't point to a number that proves improvement. Most people plateau for months without knowing why. I built FlowBook to give grapplers a mirror: not advice, but patterns they're blind to. Like discovering you've been playing defense 80% of the time when you thought you were aggressive.",
      howItWorks: [
        "Tap → Pick result (WIN/DRAW/LOSS) → Swipe through 14 quick questions (sliders & buttons) → Done in 30 seconds",
        "Questions adapt based on outcome. Auto-submits partial data if you get pulled into another roll.",
        "Dashboard shows win streaks, FIFA-style spider graphs of strengths/weaknesses, and trend analysis (last 7 days vs previous 7).",
        "Generates shareable 'Pokémon card' style grappler profiles for Instagram."
      ],
      keyFeatures: [
        "30-second logging with gamified timer",
        "Swipeable questionnaire (not boring forms)",
        "Auto-submit respects your time",
        "Spider graph visualization of grappling style",
        "Shareable profile cards (Spotify Wrapped for BJJ)",
        "AI-powered insights coming (GPT integration)"
      ],
      whyItsDifferent: [
        "Designed for fatigued athletes—every decision asks 'would someone who just got armbarred 3 times use this?'",
        "Sliders instead of text, progress bars, auto-submit—friction reduced to near zero",
        "Gives you a mirror, not advice. BJJ is too situational for an app to say 'do this move'"
      ]
    },
    links: {
      live: "https://github.com/AaradhyaGitHub/AaradhyaGitHub/blob/main/FlowBook-About.md",
      github:
        "https://github.com/AaradhyaGitHub/AaradhyaGitHub/blob/main/FlowBook-About.md",
      demo: "https://res.cloudinary.com/de3cxnkuw/video/upload/v1764224702/FlowBook-v4-demo_xjcbnw.mp4"
    }
  },
  {
    id: "moospots",
    title: "mooSpots",
    tagline: "Find bike parking at UC Davis. Fast.",
    projectType: "web",
    highlight: true,
    image:
      "https://res.cloudinary.com/de3cxnkuw/image/upload/v1751776801/Screenshot_2025-07-05_at_9.36.29_PM_u2gfdn.jpg",
    description:
      "A location-based web app that helps UC Davis students find the closest available bike parking spots using real-time geolocation and navigation integration.",
    technologies: {
      stateManagement: ["Context API"],
      algorithms: ["Haversine Formula"],
      integration: ["Google Maps API", "Geolocation API"],
      implementation: [
        "Built with React.js for component-based architecture, Context API manages global state for bike rack data, Haversine Formula calculates distances between user location and parking spots, Google Maps integration provides turn-by-turn navigation from current location to selected parking spot."
      ]
    },
    projectDetails: {
      backstory:
        "With 20,000 bikes on campus daily, parking is a daily frustration at UC Davis. I built mooSpots after discovering a public dataset of all bike racks—aiming to save students time when every minute before class counts.",
      howItWorks: [
        "Users see their current location and the 6 closest bike racks sorted by distance.",
        "Haversine Formula calculates precise distances from a database of all UC Davis bike racks.",
        "One-click navigation opens Google Maps with turn-by-turn directions."
      ],
      keyFeatures: [
        "Real-time geolocation tracking",
        "Distance-based sorting of parking spots",
        "One-click navigation to Google Maps",
        "Custom UI components with intuitive iconography"
      ]
    },
    links: {
      live: "https://moospots.vercel.app/",
      github: "https://github.com/AaradhyaGitHub/mooSpots",
      demo: null
    }
  },
  {
    id: "fullstackfactory",
    title: "FullStackFactory",
    tagline: "Learn by teaching. Build by writing.",
    projectType: "web",
    highlight: true,
    image:
      "https://res.cloudinary.com/de3cxnkuw/image/upload/v1751777335/IMG_3920_zhoxul.jpg",
    description:
      "An educational platform where early tech learners reinforce knowledge by writing and sharing technical articles with real-world code implementations.",
    technologies: {
      frontend: ["React.js", "HTML/CSS/JS"],
      routing: ["React Router"],
      stateManagement: ["Context API"],
      architecture: ["Single Page Application (SPA)"],
      implementation: [
        "Built with React.js using reusable components including a navbar that doubles as a sidebar. Implements SPA architecture for seamless navigation. Dynamic React forms handle article creation and rendering, replicating Khan Academy's workflow for content organization."
      ]
    },
    projectDetails: {
      backstory:
        "While self-learning React, I noticed most web apps share common patterns—forms, maps, dynamic rendering. FullStackFactory simplifies those ideas into reusable pieces learners can combine to build real apps, inspired by React's modular, Lego-like approach.",
      howItWorks: [
        "Platform mirrors Khan Academy's structure: categories → units → lessons → articles.",
        "Users choose or create categories, write articles with real code examples.",
        "Dynamic React forms enable publishing with organized sections.",
        "All features built as isolated components demonstrating modular web development."
      ],
      keyFeatures: [
        "Dynamic article creation forms",
        "Khan Academy-style content organization",
        "Real-world code implementation examples",
        "Modular component architecture",
        "Educational content sharing"
      ]
    },
    links: {
      github: "https://github.com/AaradhyaGitHub/Full-Stack-Factory"
    }
  },

  // ============ OTHER PROJECTS ============
  {
    id: "photographer-portfolio",
    title: "Photographer Portfolio",
    tagline: "Pinterest-style gallery with smart layouts.",
    projectType: "web",
    highlight: false,
    image:
      "https://res.cloudinary.com/de3cxnkuw/image/upload/v1751776801/Screenshot_2025-07-05_at_9.37.11_PM_uohgd2.jpg",
    description:
      "A dynamic photography portfolio featuring Pinterest-style masonry layouts, intelligent image orientation detection, and CDN optimization for fast loading.",
    technologies: {
      frontend: ["React.js"],
      routing: ["React Router"],
      dataFlow: ["Props passing"],
      cdn: ["Cloudinary CDN"],
      implementation: [
        "Built with React Router for dynamic navigation, props-based data flow for component communication. Cloudinary CDN integration reduces loading times and optimizes image delivery. Custom algorithms analyze image dimensions to determine optimal masonry grid placement."
      ]
    },
    projectDetails: {
      backstory:
        "Developed as a portfolio showcase for a photographer friend who needed a professional platform to display their work with optimal image presentation.",
      howItWorks: [
        "Pinterest-style masonry grid automatically analyzes each photo's dimensions and orientation to prevent incorrect cropping.",
        "Gallery slideshow dynamically creates presentations based on image composition.",
        "Dynamic gallery pages use useParams to filter and load genre-specific images."
      ],
      keyFeatures: [
        "Pinterest-style masonry grid layout",
        "Automatic image dimension analysis",
        "Dynamic slideshow generation",
        "Genre-based image filtering",
        "CDN-optimized image delivery",
        "Responsive design for all devices"
      ]
    },
    links: {
      live: "http://khy.vercel.app",
      github: "https://github.com/AaradhyaGitHub"
    }
  },
  {
    id: "pickzickle",
    title: "PickZickle",
    tagline: "Your personal photo location diary.",
    projectType: "mobile",
    highlight: false,
    image:
      "https://c8.alamy.com/comp/KE05D3/dog-taking-pictures-with-a-fancy-photo-camera-KE05D3.jpg",
    description:
      "A photography-centered mobile app that allows photographers to discover, document, and share prime photo locations with precise geolocation mapping.",
    technologies: {
      framework: ["React Native"],
      navigation: ["React Navigation"],
      apis: ["Google Maps Static API"],
      permissions: ["Camera", "Location", "Storage"],
      storage: ["Local Storage"],
      implementation: [
        "Built with React Native for native mobile features, Google Maps Static API for location mapping, integrated native permissions for camera, location, and storage access. Local storage maintains user data and photo location history."
      ]
    },
    projectDetails: {
      backstory:
        "Designed to help photographers build a personal database of prime shooting locations, addressing the common challenge of remembering and returning to great photo spots.",
      howItWorks: [
        "Capture or select photos, choose orientation (square, landscape, portrait), mark exact locations via GPS or manual map pin.",
        "Creates a personalized feed showing all saved locations with photos and precise coordinates."
      ],
      keyFeatures: [
        "Camera integration with photo selection",
        "Multiple orientation support",
        "GPS location capture",
        "Manual map pin placement",
        "Personal location diary",
        "Photo-location association"
      ]
    },
    links: {
      live: "https://github.com",
      github: "https://github.com/AaradhyaGitHub",
      demo: "https://res.cloudinary.com/de3cxnkuw/video/upload/v1764451764/PickZickleDemo_1_1_1_csushr.mp4"
    }
  },
  {
    id: "barber-portfolio",
    title: "Barber Portfolio",
    tagline: "Clean cuts deserve clean websites.",
    projectType: "web",
    highlight: false,
    image: null,
    description: "COMING SOON",
    technologies: {
      frontend: ["React.js", "HTML/CSS/JS"],
      routing: ["React Router"],
      styling: ["CSS Modules"],
      implementation: [
        "Built with React.js featuring smooth animations, service galleries, and contact integration. Responsive design optimized for mobile-first viewing."
      ]
    },
    projectDetails: {
      backstory:
        "Created for a local barber who needed an online presence to showcase their portfolio and make it easy for clients to book appointments.",
      howItWorks: [
        "Gallery showcases haircut styles and transformations.",
        "Services section with pricing and descriptions.",
        "Easy contact and booking integration."
      ],
      keyFeatures: [
        "Portfolio gallery with before/after shots",
        "Service menu with pricing",
        "Mobile-responsive design",
        "Contact integration",
        "Smooth page transitions"
      ]
    },
    links: {
      live: null,
      github: "https://github.com/AaradhyaGitHub",
      demo: null
    }
  }
];

// Helper function to get highlighted projects
export const getHighlightedProjects = () => {
  return projects.filter((project) => project.highlight);
};

// Helper function to get projects by type
export const getProjectsByType = (type) => {
  return projects.filter((project) => project.projectType === type);
};

// Helper function to get web projects
export const getWebProjects = () => getProjectsByType("web");

// Helper function to get mobile projects
export const getMobileProjects = () => getProjectsByType("mobile");

// For backward compatibility - these mirror the old structure
export const webProjects = projects.filter((p) => p.projectType === "web");
export const mobileProjects = projects.filter(
  (p) => p.projectType === "mobile"
);
export const highlightedProjects = projects.filter((p) => p.highlight);
