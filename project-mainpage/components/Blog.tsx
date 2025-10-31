import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Machine Learning in 2025",
    excerpt: "A comprehensive guide to beginning your journey in machine learning with practical tips and resources.",
    image: "https://images.unsplash.com/photo-1695144244472-a4543101ef35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY29uY2VwdHxlbnwxfHx8fDE3NjE4MDg1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Oct 25, 2025",
    readTime: "8 min read",
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to architect and build production-ready web applications using Next.js and modern best practices.",
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYxODQzODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Oct 20, 2025",
    readTime: "12 min read",
    category: "Web Dev",
  },
  {
    id: 3,
    title: "Python Best Practices for Clean Code",
    excerpt: "Discover essential Python coding patterns and practices to write maintainable and efficient code.",
    image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlJTIwY29kaW5nfGVufDF8fHx8MTc2MTg4ODcxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Oct 15, 2025",
    readTime: "10 min read",
    category: "Python",
  },
  {
    id: 4,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how AI is transforming the way we build software and what it means for developers.",
    image: "https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc2MTgzMTgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Oct 10, 2025",
    readTime: "15 min read",
    category: "AI/ML",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog & Updates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thoughts, tutorials, and insights on tech and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer h-full flex flex-col border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
