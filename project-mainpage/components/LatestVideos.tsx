import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Play, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const videos = [
  {
    id: 1,
    title: "Complete Python Tutorial for Beginners 2024",
    description: "Learn Python from scratch with this comprehensive tutorial covering all fundamentals.",
    thumbnail: "https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB0dXRvcmlhbCUyMHNjcmVlbnxlbnwxfHx8fDE3NjE4ODg3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "12K",
    duration: "45:20",
  },
  {
    id: 2,
    title: "Building AI Apps with Machine Learning",
    description: "Deep dive into creating practical AI applications using modern ML frameworks.",
    thumbnail: "https://images.unsplash.com/photo-1695144244472-a4543101ef35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY29uY2VwdHxlbnwxfHx8fDE3NjE4MDg1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "8.5K",
    duration: "32:15",
  },
  {
    id: 3,
    title: "Modern Web Development with React & Next.js",
    description: "Create stunning web applications with React and Next.js best practices.",
    thumbnail: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYxODQzODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "15K",
    duration: "52:40",
  },
  {
    id: 4,
    title: "Advanced Data Structures & Algorithms",
    description: "Master DSA concepts with practical coding examples and interview prep.",
    thumbnail: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlJTIwY29kaW5nfGVufDF8fHx8MTc2MTg4ODcxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    views: "10K",
    duration: "38:30",
  },
  {
    id: 5,
    title: "Building RESTful APIs with Node.js",
    description: "Learn to create scalable backend services with Node.js and Express.",
    thumbnail: "https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc2MTgzMTgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    views: "7.2K",
    duration: "28:45",
  },
  {
    id: 6,
    title: "Creative Coding with p5.js",
    description: "Explore generative art and creative coding techniques with p5.js.",
    thumbnail: "https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB0dXRvcmlhbCUyMHNjcmVlbnxlbnwxfHx8fDE3NjE4ODg3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "5.8K",
    duration: "41:15",
  },
];

export function LatestVideos() {
  return (
    <section id="videos" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest Videos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Check out my recent tutorials and tech content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span>{video.views} views</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Watch
                    </Button>
                  </div>
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
            View All Videos
            <Play className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
