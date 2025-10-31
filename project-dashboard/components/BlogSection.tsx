import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring emerging trends, frameworks, and best practices that will shape the future of web development.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['Web Dev', 'Trends', 'React'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Building Scalable AI Applications',
    excerpt: 'A comprehensive guide to architecting and deploying AI-powered applications at scale.',
    date: '2024-03-10',
    readTime: '12 min read',
    tags: ['AI', 'Machine Learning', 'Python'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Mastering TypeScript Generics',
    excerpt: 'Deep dive into TypeScript generics and how they can make your code more reusable and type-safe.',
    date: '2024-03-05',
    readTime: '10 min read',
    tags: ['TypeScript', 'Tutorial', 'Advanced'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Optimizing React Performance',
    excerpt: 'Learn essential techniques to optimize your React applications for better performance and user experience.',
    date: '2024-02-28',
    readTime: '7 min read',
    tags: ['React', 'Performance', 'Optimization'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Introduction to GraphQL',
    excerpt: 'Understanding the fundamentals of GraphQL and why it\'s becoming the go-to choice for modern APIs.',
    date: '2024-02-20',
    readTime: '9 min read',
    tags: ['GraphQL', 'API', 'Backend'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox',
    excerpt: 'A practical comparison of CSS Grid and Flexbox, and when to use each layout system.',
    date: '2024-02-15',
    readTime: '6 min read',
    tags: ['CSS', 'Layout', 'Design'],
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function BlogSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Blog & Articles
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Insights, tutorials, and thoughts on web development, AI, and technology
        </p>
      </div>

      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
      >
        <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Featured Image */}
            <div className={`bg-gradient-to-br ${blogPosts[0].gradient} aspect-video md:aspect-auto`} />

            {/* Content */}
            <div className="p-6 flex flex-col justify-center">
              <Badge className="w-fit mb-3 bg-blue-500/20 text-blue-600 dark:text-blue-400 border-0">
                Featured Post
              </Badge>
              <h2 className="mb-3">{blogPosts[0].title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {blogPosts[0].excerpt}
              </p>
              
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blogPosts[0].tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button className="w-fit bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * (index + 1) }}
            whileHover={{ y: -8 }}
          >
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 overflow-hidden h-full flex flex-col group cursor-pointer">
              {/* Thumbnail */}
              <div className={`aspect-video bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <ArrowRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              <CardHeader className="flex-1">
                <CardTitle className="text-base line-clamp-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                  {post.excerpt}
                </CardDescription>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mt-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
