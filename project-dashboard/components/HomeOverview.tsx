import { motion } from 'motion/react';
import { Video, Code2, BookOpen, TrendingUp, Eye, Heart, ArrowRight, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { videos, projects } from '../data/projectData';

interface HomeOverviewProps {
  setActiveTab: (tab: string) => void;
}

const stats = [
  { icon: Video, label: 'Total Videos', value: videos.length.toString(), color: 'from-red-500 to-orange-500' },
  { icon: Code2, label: 'Projects', value: projects.length.toString(), color: 'from-blue-500 to-cyan-500' },
  { icon: BookOpen, label: 'Blog Posts', value: '89', color: 'from-purple-500 to-pink-500' },
  { icon: TrendingUp, label: 'Total Views', value: '2.4M', color: 'from-green-500 to-emerald-500' },
];

const recentVideos = videos.slice(0, 3);
const latestProjects = projects.slice(0, 3);

export default function HomeOverview({ setActiveTab }: HomeOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
          Hey, I'm Meher Siva Ram 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to my content studio! Explore coding tutorials, AI projects, and insightful blogs.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                      <h3 className="mt-2">{stat.value}</h3>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Videos Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2>Recent Videos</h2>
          <Button
            variant="ghost"
            className="text-blue-500 hover:text-blue-600"
            onClick={() => setActiveTab('videos')}
          >
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              whileHover={{ y: -8 }}
            >
              <Card 
                className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 overflow-hidden group cursor-pointer"
                onClick={() => window.open(video.youtubeUrl, '_blank')}
              >
                <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-8 h-8 text-white fill-white" />
                    </motion.div>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm border-0">
                    {video.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{video.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {video.likes}
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Latest Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2>Latest Projects</h2>
          <Button
            variant="ghost"
            className="text-blue-500 hover:text-blue-600"
            onClick={() => setActiveTab('codes')}
          >
            Explore Codes <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} mb-3`} />
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 mt-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      onClick={() => setActiveTab('codes')}
                    >
                      View
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        GitHub
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
