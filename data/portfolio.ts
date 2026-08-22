/**
 * Portfolio content — edit this file to update names, copy, links, and media.
 * UI components read from here so you don't need to hunt through JSX.
 */

export const site = {
  fullName: "Praveen Wijewardana",
  givenName: "Praveen",
  familyName: "Wijewardana",
  brand: "PRAVEEN",
  year: 2026,
  url: "https://praveenwijewardana.com",
  metaTitle:
    "Praveen Wijewardana | Software Engineer (SE) & Full-Stack Developer",
  metaDescription:
    "Praveen Wijewardana (Praveen / Wijewardana / praveenwijewardana) is a Software Engineer (SE) and Creative Full-Stack Developer building high-performance web apps with Next.js, React, TypeScript, and AI-powered workflows.",
  alternateNames: [
    "Praveen",
    "Wijewardana",
    "PraveenWijewardana",
    "praveen wijewardana",
    "praveenwijewardana",
  ],
  keywords: [
    "Praveen",
    "Praveen Wijewardana",
    "praveen wijewardana",
    "PraveenWijewardana",
    "praveenwijewardana",
    "Wijewardana",
    "Software Engineer",
    "Software Engineer SE",
    "SE",
    "SE Intern",
    "Full-Stack Developer",
    "Full Stack Software Engineer",
    "Creative Developer",
    "Web Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Sri Lanka Software Engineer",
    "Praveen Wijewardana portfolio",
  ],
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/PraveenWijewardana",
  },
  {
    label: "LinkedIn",
    href: "https://lk.linkedin.com/in/praveen-wijewardana",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/prave________en",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+94706940521",
  },
];

export const contact = {
  email: "praveenwijewardana1@gmail.com",
  phone: "+94 70 694 0521",
  phoneHref: "tel:+94706940521",
  whatsappHref: "https://wa.me/+94706940521",
  availability: "Worldwide Available",
};

export const hero = {
  greeting: "Hi, I'm Praveen",
  role: "Software Engineer & Full-Stack Developer",
  bio: "I'm Praveen Wijewardana — a Software Engineer (SE) crafting immersive, high-performance digital experiences with Next.js, React, TypeScript, Node.js, GSAP, Three.js, Tailwind CSS, and AI-powered workflows.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
  resumeHref: "#",
  hireHref: "#contact",
  video: "/assets/hero-video.mp4",
  portrait: "/assets/portrait.png",
  ogImage: "/assets/og.jpg",
};

export const about = {
  heading: "Hello!",
  body:
    "I'm PRAVEEN WIJEWARDANA, a Software Engineer (SE) and Creative Full-Stack Developer passionate about crafting immersive, high-performance digital experiences. I specialize in building modern web applications with Next.js, React, TypeScript, Node.js, Three.js, GSAP, Tailwind CSS, and AI-powered workflows, blending creativity with scalable engineering.",
  highlightName: "PRAVEEN WIJEWARDANA",
  techIcons: [
    { name: "JavaScript", src: "/assets/skills/javascript.svg" },
    { name: "TypeScript", src: "/assets/skills/typescript.svg" },
    { name: "Python", src: "/assets/skills/python.svg" },
    { name: "Java", src: "/assets/skills/java.svg" },
    { name: "HTML5", src: "/assets/skills/html5.svg" },
    { name: "CSS3", src: "/assets/skills/css3.svg" },
    { name: "SQL", src: "/assets/skills/sql.svg" },
    { name: "Next.js", src: "/assets/skills/nextjs.svg" },
    { name: "React", src: "/assets/react.png" },
    { name: "Node.js", src: "/assets/node.png" },
    { name: "Tailwind", src: "/assets/skills/tailwind.svg" },
    { name: "MongoDB", src: "/assets/mongodb.png" },
    { name: "Docker", src: "/assets/skills/docker.svg" },
    { name: "AWS", src: "/assets/skills/aws.svg" },
    { name: "Git", src: "/assets/skills/git.svg" },
    { name: "Vercel", src: "/assets/skills/vercel.svg" },
  ],
};

export const skills = {
  badge: "Technical Stack",
  headingBefore: "Tools of the ",
  headingAccent: "Trade",
  description:
    "A curated selection of modern technologies and frameworks I use to build scalable, high-performance digital solutions.",
  categories: [
    {
      number: "01",
      category: "Frontend Development",
      description:
        "Building immersive, responsive, and high-performance user interfaces with modern web technologies, motion, and interactive experiences.",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "GSAP",
        "Framer Motion",
        "Three.js",
        "React Three Fiber",
        "Lenis",
      ],
      bg: "bg-red-50/60",
      border: "border-red-100",
    },
    {
      number: "02",
      category: "Backend Development",
      description:
        "Developing scalable backend systems, secure APIs, authentication, and cloud-powered architectures for modern web applications.",
      skills: [
        "Node.js",
        "Next.js Server Actions",
        "REST APIs",
        "Supabase",
        "PostgreSQL",
        "Authentication",
        "Cloudinary",
        "Edge Functions",
      ],
      bg: "bg-blue-50/60",
      border: "border-blue-100",
    },
    {
      number: "03",
      category: "AI-Powered Development",
      description:
        "Leveraging AI to accelerate design, development, debugging, architecture, and creative workflows while maintaining production-quality code.",
      skills: [
        "ChatGPT",
        "Claude",
        "Cursor",
        "GitHub Copilot",
        "Codex",
        "Gemini",
        "OpenCode",
        "Midjourney",
        "Figma AI",
      ],
      bg: "bg-purple-50/60",
      border: "border-purple-100",
    },
    {
      number: "04",
      category: "Cloud & Deployment",
      description:
        "Deploying scalable applications with edge infrastructure, cloud services, and modern deployment workflows for maximum performance.",
      skills: [
        "Vercel",
        "Cloudflare Workers",
        "GitHub",
        "Git",
        "Supabase",
        "Cloudinary",
        "Linux",
        "Postman",
        "Custom Domains",
      ],
      bg: "bg-green-50/60",
      border: "border-green-100",
    },
    {
      number: "05",
      category: "Databases",
      description:
        "Designing and working with relational and cloud databases for reliable data modeling, queries, and application persistence.",
      skills: [
        "PostgreSQL",
        "Supabase",
        "MongoDB",
        "SQL",
        "Prisma",
        "Redis",
        "Database Design",
        "Data Modeling",
      ],
      bg: "bg-rose-50/60",
      border: "border-rose-100",
    },
    {
      number: "06",
      category: "DevOps",
      description:
        "Shipping and operating applications with CI/CD, cloud hosting, containers, and monitoring for reliable production delivery.",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "Vercel",
        "Cloudflare Workers",
        "Docker",
        "Linux",
        "CI/CD",
        "Custom Domains",
        "Monitoring",
      ],
      bg: "bg-amber-50/60",
      border: "border-amber-100",
    },
  ],
};

export const projectsSection = {
  badge: "Selected Works",
  headingBefore: "Featured ",
  headingAccent: "Projects.",
  description:
    "Enterprise systems and AI builds — RAG pipelines, ERP platforms, and production-grade business software.",
};

export const projects = [
  {
    title: "DocuMind RAG Platform",
    subtitle: "AI Retrieval-Augmented Generation System",
    description:
      "Built an end-to-end RAG pipeline that ingests documents, generates vector embeddings, and delivers context-aware answers through semantic search. The system combines document chunking, ChromaDB vector storage, and LLM inference for accurate, source-grounded responses.",
    image: "/assets/project-rag.png",
    link: "https://github.com/PraveenWijewardana/Vector-Bd",
    features: [
      "Document ingestion, chunking & embedding pipeline",
      "ChromaDB vector store with semantic similarity search",
      "Context-aware LLM responses grounded in retrieved sources",
      "Modular TypeScript/Node.js architecture for easy extension",
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "ChromaDB",
      "OpenAI API",
      "RAG",
      "Vector Embeddings",
      "Python",
    ],
  },
  {
    title: "Health-Hub",
    subtitle: "Pharmacy ERP & Management System",
    description:
      "Developed a modular pharmacy ERP covering inventory, billing, supplier management, and operational reporting. Built with a layered Java architecture for scalability, maintainability, and real-world retail pharmacy workflows.",
    image: "/assets/project-health-hub.png",
    link: "https://github.com/PraveenWijewardana/Health-Hub",
    features: [
      "Real-time pharmacy dashboard & operational summaries",
      "Medicine inventory tracking with category management",
      "Integrated billing module with card payment support",
      "Supplier database, procurement history & business reports",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "JSP",
      "ERP",
      "REST APIs",
      "MVC Architecture",
    ],
  },
  {
    title: "InventoryHub",
    subtitle: "Smart Inventory & ERP Module",
    description:
      "A responsive inventory management system for tracking stock levels, product catalogs, and warehouse health in real time. Includes authentication, CRUD workflows, data visualization, and printable inventory reports for business operations.",
    image: "/assets/project-inventory-hub.png",
    link: "https://github.com/PraveenWijewardana/inventry-managment",
    features: [
      "Live dashboard with low-stock & out-of-stock alerts",
      "Interactive Chart.js analytics for restocking decisions",
      "Full CRUD for products, categories & stock levels",
      "Secure login portal & PDF inventory report generation",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Chart.js",
      "Local Storage",
      "ERP",
      "Responsive UI",
    ],
  },
  {
    title: "Clothify Store",
    subtitle: "Enterprise POS & Retail ERP",
    description:
      "An enterprise-grade Point of Sale system for clothing retail with RBAC, secure authentication, dynamic inventory control, and automated Jasper report generation. Designed with layered architecture and factory design patterns for extensibility.",
    image: "/assets/project-clothify.png",
    link: "https://github.com/PraveenWijewardana/Clothify-Store",
    features: [
      "Role-based access for admins, employees & suppliers",
      "Real-time stock tracking with low-stock visual indicators",
      "Professional invoice & sales report generation (PDF/Excel)",
      "Layered architecture with factory design patterns",
    ],
    techStack: [
      "Java",
      "JavaFX",
      "FXML",
      "Jasper Reports",
      "MySQL",
      "ERP",
      "RBAC",
    ],
  },
];

export const experience = {
  badge: "Career Path",
  headingBefore: "Work ",
  headingAccent: "Experience",
  description:
    "Professional roles where I’ve built real products, shipped features, and grown as an engineer.",
  items: [
    {
      role: "Software Engineer Intern (SE)",
      company: "DaleX Consultancy",
      period: "Present",
      location: "Sri Lanka",
      description:
        "Software Engineer (SE) Intern contributing to full-stack application development, feature delivery, and day-to-day engineering workflows across modern web technologies.",
      highlights: [
        "Building and iterating on production-facing features with the engineering team",
        "Working across frontend and backend to deliver reliable, user-focused solutions",
        "Collaborating on code quality, debugging, and continuous improvement",
      ],
    },
  ],
};

export const education = {
  badge: "Academic Path",
  headingBefore: "My ",
  headingAccent: "Education",
  description: "Degrees, diplomas, and certifications across software engineering and cyber security.",
  items: [
    {
      degree: "Higher National Diploma in Cyber Security",
      institution: "Kingston University",
      period: "Jul 2026 – Jan 2028",
      location: "United Kingdom",
      highlights: ["Cyber Security", "Network Security", "Risk Management"],
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "Birmingham City University",
      period: "Jan 2024 – Jun 2028",
      location: "United Kingdom",
      highlights: ["REST APIs", "JavaScript", "Computer Software Engineering" , "Java","PHP"],
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "Institute of Computer Engineering Technology (iCET)",
      period: "Jun 2025 – Jun 2026",
      location: "Sri Lanka",
      highlights: ["Java", "OOPC", "TypeScript", "REST APIs", "Angular", "React", "Node.js", "MongoDB", "SQL"],
    },
    {
      degree: "Diploma & Certificate in Information Technology",
      institution: "ESOFT Metro Campus",
      period: "Oct 2022 – Oct 2023",
      location: "Sri Lanka",
      highlights: ["Microsoft Office", "SQL", "Information Technology" ,"HTML", "CSS","Python"],
    },
    {
      degree: "ESL Language Instructor Certificate",
      institution: "British Council",
      period: "Completed",
      location: "Sri Lanka",
      highlights: ["Teaching English", "ESL", "Language Instruction"],
    },
    {
      degree: "GCE Ordinary Level (O/L)",
      institution: "St. Sebastian's College",
      period: "Jan 2012 – Apr 2024",
      location: "Sri Lanka",
      highlights: ["Secondary Education"],
    },
  ],
};

export const contactForm = {
  heading: "Contact",
  label: "Reach Us",
  fields: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    mobile: "Mobile No (10 digits)",
    message: "Type your message here",
  },
  consent: "I give permission to contact me at this email address.",
  submit: "Send",
};
