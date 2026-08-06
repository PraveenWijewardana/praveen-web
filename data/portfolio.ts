/**
 * Portfolio content — edit this file to update names, copy, links, and media.
 * UI components read from here so you don't need to hunt through JSX.
 */

export const site = {
  fullName: "Praveen Wijewardana",
  brand: "PRAVEEN",
  year: 2026,
  url: "https://praveenwijewardana.com",
  metaTitle: "Praveen Wijewardana — Creative Full-Stack Developer",
  metaDescription:
    "Praveen Wijewardana is a Creative Full-Stack Developer crafting immersive, high-performance digital experiences with Next.js, React, TypeScript, and AI-powered workflows.",
  keywords: [
    "Praveen Wijewardana",
    "Full-Stack Developer",
    "Creative Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Frontend Engineer",
    "AI-powered development",
  ],
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
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
  role: "Creative Full-Stack Developer",
  bio: "I craft immersive, high-performance digital experiences using Next.js, React, TypeScript, Node.js, GSAP, Three.js, Tailwind CSS, and AI-powered workflows—combining cinematic design, seamless interactions, and scalable engineering.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
  resumeHref: "#",
  hireHref: "#contact",
  video: "/assets/hero-video.mp4",
  portrait: "/assets/portrait.png",
};

export const about = {
  heading: "Hello!",
  body:
    "I'm PRAVEEN WIJEWARDANA, a Creative Full-Stack Developer passionate about crafting immersive, high-performance digital experiences. I specialize in building modern web applications with Next.js, React, TypeScript, Node.js, Three.js, GSAP, Tailwind CSS, and AI-powered workflows, blending creativity with scalable engineering.",
  highlightName: "PRAVEEN WIJEWARDANA",
  techIcons: [
    { name: "React", src: "/assets/react.png" },
    { name: "Node.js", src: "/assets/node.png" },
    { name: "MongoDB", src: "/assets/mongodb.png" },
  ],
};

export const expertise = {
  badge: "My Expertise",
  heading: "Building Modern Digital Solutions with Code & AI",
  description:
    "Combining full-stack development, artificial intelligence, and cloud technologies to create scalable and impactful digital experiences.",
  cards: [
    {
      number: "01",
      title: "Frontend Development",
      text: "Building immersive, high-performance web experiences with Next.js, React, TypeScript, JavaScript, Tailwind CSS, GSAP, Framer Motion, Three.js, React Three Fiber, and Lenis. Focused on responsive design, cinematic animations, interactive 3D experiences, and pixel-perfect interfaces that combine storytelling, performance, and exceptional user experience.",
      variant: "white" as const,
    },
    {
      number: "02",
      title: "Backend Development",
      text: "Engineering robust backend architectures using Next.js, Node.js, Supabase, PostgreSQL, REST APIs, Authentication, Cloudinary, and Edge Functions. Focused on secure data management, optimized server-side logic, seamless media handling, and scalable infrastructure that powers fast, reliable digital products.",
      variant: "white" as const,
    },
    {
      number: "03",
      title: "AI-Powered Development",
      text: "Leveraging Claude, ChatGPT, GitHub Copilot, Cursor, Codex, Gemini, Midjourney, Figma AI, and OpenCode to accelerate ideation, architecture, UI engineering, debugging, code generation, and creative workflows while maintaining high standards for performance, scalability, and code quality.",
      variant: "white" as const,
    },
    {
      number: "04",
      title: "Quality Assurance & Testing",
      text: "Designing test cases, conducting manual & automated testing using Selenium WebDriver & TestNG, and tracking defects in JIRA to ensure software reliability.",
      variant: "red" as const,
    },
    {
      number: "05",
      title: "Cloud & Deployment",
      text: "Deploying and maintaining modern web applications with Vercel, Cloudflare Workers, GitHub, Supabase, Cloudinary, and custom domains. Focused on fast global delivery, scalable infrastructure, secure hosting, media optimization, and seamless deployment workflows",
      variant: "white" as const,
    },
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
      category: "Motion & Creative Development",
      description:
        "Creating cinematic interactions, smooth animations, and immersive storytelling experiences that elevate modern web applications.",
      skills: [
        "GSAP",
        "Framer Motion",
        "Three.js",
        "React Three Fiber",
        "Lenis",
        "ScrollTrigger",
        "WebGL",
        "Motion Design",
        "Performance Optimization",
      ],
      bg: "bg-rose-50/60",
      border: "border-rose-100",
    },
    {
      number: "06",
      category: "Quality Assurance & Testing",
      description:
        "Ensuring software quality through manual and automated testing, defect tracking, and structured test execution to deliver reliable, user-focused applications.",
      skills: [
        "Manual Testing",
        "Selenium WebDriver",
        "TestNG",
        "Java",
        "JUnit",
        "API Testing",
        "Postman",
        "JIRA",
        "Test Case Design",
        "Bug Reporting",
        "SDLC / STLC",
        "Agile Methodology",
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
    "A showcase of my recent full-stack applications, highlighting performance, design, and complex integrations.",
};

export const projects = [
  {
    title: "AN Spare's & Accessories",
    subtitle: "Full-Stack Automotive E-Commerce Platform",
    description:
      "Designed and developed a scalable full-stack e-commerce platform for bike spare parts, car accessories, lubricants, garage tools, and automotive products. The platform includes a powerful admin dashboard for managing products, categories, orders, customers, and website content.",
    image: "/assets/project-1.png",
    link: "https://www.anspares.com",
    features: [
      "Advanced Admin Dashboard for Inventory & Order Management",
      "Product Search & Smart Filtering",
      "Razorpay Payment Integration",
      "Responsive Mobile-First Design & SEO Optimized",
    ],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "shadcn/ui",
      "Razorpay",
    ],
  },
  {
    title: "Mahi Fashion Jewellery",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Designed and developed a modern, high-performance e-commerce platform for a fashion jewellery brand. The application delivers a seamless shopping experience with responsive design, fast page loads, secure backend services, and an intuitive admin workflow.",
    image: "/assets/project-2.png",
    link: "https://www.mahifashionjewellery.com",
    features: [
      "Live metal rates integration",
      "Responsive UI optimized for mobile, tablet, and desktop",
      "Product catalog with category-based browsing",
      "Advanced search and filtering",
      "Secure backend with real-time database integration",
    ],
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Ronan Media Service",
    subtitle: "Premium Media Agency Website",
    description:
      "Designed and developed a premium digital media agency website showcasing creative services, brand identity, portfolio, and client engagement. The website emphasizes modern aesthetics, smooth animations, responsive layouts, and high performance.",
    image: "/assets/project-3.png",
    link: "https://ronanmediaservice.vercel.app",
    features: [
      "Premium agency-style landing page with modern UI/UX",
      "Interactive animations & smooth page transitions",
      "Creative service showcase & portfolio case studies",
      "High-performance architecture using Next.js & Framer Motion",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Zod",
      "Antigravity AI",
    ],
  },
  {
    title: "BMW Interactive Showcase",
    subtitle: "Premium Automotive Landing Page",
    description:
      "A premium automotive landing page inspired by BMW's modern design language, featuring cinematic animations, smooth scrolling, immersive storytelling, and responsive interactions that deliver a luxury digital experience.",
    image: "/assets/project-4.png",
    link: "https://bmw-shan23.vercel.app/",
    features: [
      "Cinematic scroll animations & smooth page transitions",
      "Premium luxury automotive UI/UX design",
      "Interactive storytelling & dynamic model showcase",
      "Responsive design & performance optimization",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Lenis",
    ],
  },
  {
    title: "Luxury Bespoke Tailoring",
    subtitle: "Luxury Bespoke Tailoring Experience",
    description:
      "An immersive scrollytelling experience inspired by Savile Row craftsmanship, featuring a synchronized 241-frame canvas animation, cinematic transitions, premium motion design, and editorial storytelling. Designed to blend luxury branding with cutting-edge web technologies for an unforgettable digital experience.",
    image: "/assets/project-5.png",
    link: "https://suit-psi.vercel.app/",
    features: [
      "241-Frame Scroll Animation Engine",
      "Cinematic Storytelling & HTML5 Retina Canvas Rendering",
      "Luxury Editorial UI/UX & Interactive Chapter Navigation",
      "Lenis Smooth Scrolling & High-Performance Motion Architecture",
    ],
    techStack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "HTML5 Canvas",
      "Vercel",
    ],
  },
  {
    title: "Apple Vision Pro",
    subtitle: "Interactive Storytelling Landing Page",
    description:
      "A cinematic recreation of Apple's Vision Pro website featuring smooth scrolling, immersive storytelling, premium animations, and modern frontend engineering.",
    image: "/assets/project-6.png",
    link: "https://apple-vision-pro-psi.vercel.app/",
    features: [
      "Cinematic recreation of Apple's Vision Pro web experience",
      "Smooth scrolling & scroll-triggered motion animations",
      "Immersive spatial UI aesthetic & interactive storytelling",
      "High-performance frontend architecture",
    ],
    techStack: [
      "Next.js",
      "React",
      "GSAP",
      "Tailwind CSS",
      "Lenis",
      "Framer Motion",
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
      role: "SE Intern",
      company: "DaleX Consultancy",
      period: "Present",
      location: "Sri Lanka",
      description:
        "Software Engineering Intern contributing to full-stack application development, feature delivery, and day-to-day engineering workflows across modern web technologies.",
      highlights: [
        "Building and iterating on production-facing features with the engineering team",
        "Working across frontend and backend to deliver reliable, user-focused solutions",
        "Collaborating on code quality, debugging, and continuous improvement",
      ],
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
