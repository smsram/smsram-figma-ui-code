// Mock data for videos and source codes
export const videosData = [
  {
    id: 1,
    title: "Build a Full Stack Chat App with React & Node.js",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    views: "125K",
    likes: "5.2K",
    youtubeUrl: "https://youtube.com/watch?v=example1",
    hasSourceCode: true,
    sourceCodeId: 1,
    uploadDate: "2025-10-15",
    description: "Learn how to build a real-time chat application using React, Node.js, Socket.io, and MongoDB. Complete tutorial with authentication and modern UI."
  },
  {
    id: 2,
    title: "Next.js 14 Tutorial - Server Components Deep Dive",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    views: "89K",
    likes: "3.8K",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    hasSourceCode: true,
    sourceCodeId: 2,
    uploadDate: "2025-10-10",
    description: "Master Next.js 14 server components, data fetching, and streaming. Build a complete blog application from scratch."
  },
  {
    id: 3,
    title: "CSS Animations & Transitions Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    views: "67K",
    likes: "2.9K",
    youtubeUrl: "https://youtube.com/watch?v=example3",
    hasSourceCode: false,
    uploadDate: "2025-10-05",
    description: "Learn professional CSS animations and transitions to make your websites stand out. No libraries needed!"
  },
  {
    id: 4,
    title: "Python Django REST API Complete Guide",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=450&fit=crop",
    views: "102K",
    likes: "4.5K",
    youtubeUrl: "https://youtube.com/watch?v=example4",
    hasSourceCode: true,
    sourceCodeId: 3,
    uploadDate: "2025-09-28",
    description: "Build a production-ready REST API with Django REST Framework. Includes authentication, permissions, and best practices."
  },
  {
    id: 5,
    title: "React Custom Hooks - Build Your Own Library",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=450&fit=crop",
    views: "54K",
    likes: "2.3K",
    youtubeUrl: "https://youtube.com/watch?v=example5",
    hasSourceCode: true,
    sourceCodeId: 4,
    uploadDate: "2025-09-20",
    description: "Create your own custom React hooks library. Learn patterns and best practices for reusable hook development."
  },
  {
    id: 6,
    title: "MongoDB Aggregation Pipeline Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=450&fit=crop",
    views: "43K",
    likes: "1.8K",
    youtubeUrl: "https://youtube.com/watch?v=example6",
    hasSourceCode: true,
    sourceCodeId: 5,
    uploadDate: "2025-09-15",
    description: "Master MongoDB aggregation pipelines with practical examples. From basics to advanced data transformations."
  }
];

export const sourceCodesData = [
  {
    id: 1,
    videoId: 1,
    title: "Full Stack Chat App - Complete Source Code",
    description: "Complete source code for the real-time chat application built with React, Node.js, Socket.io, and MongoDB. Includes setup instructions and deployment guide.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/smsram/chat-app-fullstack",
    downloadAvailable: true,
    downloadSize: "2.4 MB",
    lastUpdated: "2025-10-16",
    features: [
      "Real-time messaging with Socket.io",
      "User authentication & authorization",
      "File sharing support",
      "Online/offline status tracking",
      "Message read receipts",
      "Responsive design"
    ]
  },
  {
    id: 2,
    videoId: 2,
    title: "Next.js 14 Blog Application",
    description: "Modern blog application showcasing Next.js 14 server components, streaming, and optimized data fetching patterns.",
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/smsram/nextjs14-blog",
    downloadAvailable: true,
    downloadSize: "1.8 MB",
    lastUpdated: "2025-10-11",
    features: [
      "Server-side rendering with RSC",
      "Incremental static regeneration",
      "MDX support for blog posts",
      "SEO optimized",
      "Dark mode support",
      "Search functionality"
    ]
  },
  {
    id: 3,
    videoId: 4,
    title: "Django REST API Boilerplate",
    description: "Production-ready Django REST API boilerplate with authentication, permissions, pagination, and comprehensive documentation.",
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/smsram/django-rest-api",
    downloadAvailable: true,
    downloadSize: "3.1 MB",
    lastUpdated: "2025-09-29",
    features: [
      "JWT authentication",
      "Role-based permissions",
      "API documentation with Swagger",
      "Custom user model",
      "Redis caching",
      "Docker deployment ready"
    ]
  },
  {
    id: 4,
    videoId: 5,
    title: "React Custom Hooks Library",
    description: "Collection of 20+ production-ready custom React hooks for common use cases. TypeScript support included.",
    technologies: ["React", "TypeScript", "Jest", "React Testing Library"],
    githubUrl: "https://github.com/smsram/react-hooks-library",
    downloadAvailable: true,
    downloadSize: "512 KB",
    lastUpdated: "2025-09-21",
    features: [
      "useLocalStorage - persist state",
      "useFetch - API calls made easy",
      "useDebounce - optimize performance",
      "useMediaQuery - responsive hooks",
      "useIntersectionObserver - lazy loading",
      "Full TypeScript support"
    ]
  },
  {
    id: 5,
    videoId: 6,
    title: "MongoDB Aggregation Examples",
    description: "Comprehensive collection of MongoDB aggregation pipeline examples covering real-world use cases and patterns.",
    technologies: ["MongoDB", "Node.js", "Express", "Mongoose"],
    githubUrl: "https://github.com/smsram/mongodb-aggregation",
    downloadAvailable: true,
    downloadSize: "890 KB",
    lastUpdated: "2025-09-16",
    features: [
      "50+ aggregation examples",
      "Performance optimization tips",
      "Data transformation patterns",
      "Complex joins and lookups",
      "Analytics queries",
      "Best practices guide"
    ]
  }
];
