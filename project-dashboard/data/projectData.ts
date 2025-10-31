export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  category: string;
  stars?: number;
  forks?: number;
  color: string;
  githubUrl?: string;
  downloadUrl?: string;
  youtubeUrl?: string;
  youtubeId?: string;
}

export interface Video {
  id: string;
  title: string;
  category: string;
  views: string;
  likes: string;
  duration: string;
  youtubeUrl: string;
  youtubeId: string;
  hasSourceCode: boolean;
  sourceCodeId?: string;
}

export const projects: Project[] = [
  {
    id: 'src-01',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, cart management, and admin dashboard.',
    fullDescription: 'A complete e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and a comprehensive admin dashboard for managing products, orders, and customers.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Coding',
    stars: 234,
    forks: 45,
    color: 'from-blue-500 to-cyan-500',
    githubUrl: 'https://github.com/smsram/ecommerce-platform',
    youtubeUrl: 'https://youtube.com/watch?v=ecommerce-demo',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'src-02',
    title: 'AI Image Generator',
    description: 'Generate stunning images using AI. Built with Stable Diffusion and custom training models.',
    fullDescription: 'An AI-powered image generation tool using Stable Diffusion. This project includes a custom-trained model, a Flask backend API, and a React frontend. Users can generate images from text prompts, adjust parameters, and save their creations.',
    tech: ['Python', 'TensorFlow', 'Flask', 'React'],
    category: 'AI',
    stars: 512,
    forks: 89,
    color: 'from-purple-500 to-pink-500',
    githubUrl: 'https://github.com/smsram/ai-image-generator',
    youtubeUrl: 'https://youtube.com/watch?v=ai-image-gen',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'src-03',
    title: 'Real-time Chat Application',
    description: 'Scalable chat app with WebSocket support, file sharing, and message encryption.',
    fullDescription: 'A real-time chat application with end-to-end encryption, file sharing, typing indicators, and read receipts. Built with Next.js, Socket.io, and Redis for session management. Supports group chats and direct messages.',
    tech: ['Next.js', 'Socket.io', 'Redis', 'PostgreSQL'],
    category: 'Coding',
    stars: 189,
    forks: 34,
    color: 'from-green-500 to-emerald-500',
    githubUrl: 'https://github.com/smsram/realtime-chat',
    youtubeUrl: 'https://youtube.com/watch?v=chat-app-demo',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'src-04',
    title: 'Task Management System',
    description: 'Kanban-style project management tool with team collaboration features.',
    fullDescription: 'A comprehensive task management system with Kanban boards, drag-and-drop functionality, team collaboration, real-time updates, and project analytics. Perfect for agile teams.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
    category: 'Coding',
    stars: 156,
    forks: 28,
    color: 'from-orange-500 to-red-500',
    downloadUrl: '/downloads/task-management.zip',
  },
  {
    id: 'src-05',
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts, maps, and historical data visualization.',
    fullDescription: 'An elegant weather dashboard that displays current conditions, 7-day forecasts, interactive weather maps, and historical data charts. Integrated with OpenWeather API.',
    tech: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    category: 'Coding',
    stars: 98,
    forks: 19,
    color: 'from-sky-500 to-blue-500',
    downloadUrl: '/downloads/weather-dashboard.zip',
  },
  {
    id: 'src-06',
    title: 'Social Media Analytics',
    description: 'Track and analyze social media metrics across multiple platforms.',
    fullDescription: 'A powerful analytics tool for tracking social media performance across Twitter, Instagram, and Facebook. Features include engagement metrics, follower growth, post performance, and custom reports.',
    tech: ['React', 'D3.js', 'Express', 'MongoDB'],
    category: 'Coding',
    stars: 276,
    forks: 52,
    color: 'from-violet-500 to-purple-500',
    githubUrl: 'https://github.com/smsram/social-analytics',
  },
];

export const videos: Video[] = [
  {
    id: 'yt-01',
    title: 'Build a Full Stack E-Commerce App with Next.js 14',
    category: 'Coding',
    views: '45K',
    likes: '2.3K',
    duration: '42:15',
    youtubeUrl: 'https://youtube.com/watch?v=ecommerce-tutorial',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: true,
    sourceCodeId: 'src-01',
  },
  {
    id: 'yt-02',
    title: 'AI Image Generator with Stable Diffusion & Python',
    category: 'AI',
    views: '38K',
    likes: '1.9K',
    duration: '35:20',
    youtubeUrl: 'https://youtube.com/watch?v=ai-tutorial',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: true,
    sourceCodeId: 'src-02',
  },
  {
    id: 'yt-03',
    title: 'React Best Practices 2024',
    category: 'Coding',
    views: '52K',
    likes: '3.1K',
    duration: '28:45',
    youtubeUrl: 'https://youtube.com/watch?v=react-best-practices',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: false,
  },
  {
    id: 'yt-04',
    title: 'Real-time Chat App with Socket.io',
    category: 'Coding',
    views: '41K',
    likes: '2.2K',
    duration: '38:25',
    youtubeUrl: 'https://youtube.com/watch?v=chat-tutorial',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: true,
    sourceCodeId: 'src-03',
  },
  {
    id: 'yt-05',
    title: 'Creating Music with AI Tools',
    category: 'Music',
    views: '29K',
    likes: '1.5K',
    duration: '18:30',
    youtubeUrl: 'https://youtube.com/watch?v=ai-music',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: false,
  },
  {
    id: 'yt-06',
    title: 'Machine Learning Basics - Neural Networks Explained',
    category: 'AI',
    views: '61K',
    likes: '3.8K',
    duration: '55:10',
    youtubeUrl: 'https://youtube.com/watch?v=ml-basics',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: false,
  },
  {
    id: 'yt-07',
    title: 'TypeScript Advanced Patterns',
    category: 'Tutorial',
    views: '41K',
    likes: '2.2K',
    duration: '38:25',
    youtubeUrl: 'https://youtube.com/watch?v=ts-patterns',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: false,
  },
  {
    id: 'yt-08',
    title: 'Building REST APIs with Node.js',
    category: 'Coding',
    views: '47K',
    likes: '2.6K',
    duration: '44:50',
    youtubeUrl: 'https://youtube.com/watch?v=rest-api',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: false,
  },
  {
    id: 'yt-09',
    title: 'Music Production Tips & Tricks',
    category: 'Music',
    views: '33K',
    likes: '1.7K',
    duration: '22:40',
    youtubeUrl: 'https://youtube.com/watch?v=music-tips',
    youtubeId: 'dQw4w9WgXcQ',
    hasSourceCode: false,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getVideoById(id: string): Video | undefined {
  return videos.find(v => v.id === id);
}
