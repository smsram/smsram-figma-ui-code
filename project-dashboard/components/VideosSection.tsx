import { motion } from 'motion/react';
import { useState } from 'react';
import { Play, Eye, Heart, Clock, Filter, Code2, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { videos as videoData, getProjectById } from '../data/projectData';
import ProjectDetailView from './ProjectDetailView';

const categories = ['All', 'Coding', 'AI', 'Music', 'Tutorial'];

export default function VideosSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredVideos = selectedCategory === 'All' 
    ? videoData 
    : videoData.filter(video => video.category === selectedCategory);

  const handleSourceCodeClick = (sourceCodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const project = getProjectById(sourceCodeId);
    if (project) {
      setSelectedProject(project);
      setIsDetailOpen(true);
    }
  };

  const handleVideoClick = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Video Tutorials
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Explore {filteredVideos.length} coding tutorials and tech content
          </p>
        </div>
        <Button variant="outline" className="w-fit">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/20">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ y: -8 }}
          >
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 overflow-hidden group h-full flex flex-col">
              {/* Video Thumbnail */}
              <div 
                className="relative aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 cursor-pointer"
                onClick={() => handleVideoClick(video.youtubeUrl)}
              >
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Play className="w-8 h-8 text-white fill-white" />
                  </motion.div>
                </div>
                
                {/* Category Badge */}
                <Badge className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm border-0">
                  {video.category}
                </Badge>

                {/* Source Code Available Badge */}
                {video.hasSourceCode && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 border-0 flex items-center gap-1">
                    <Code2 className="w-3 h-3" />
                    Code
                  </Badge>
                )}

                {/* Duration Badge */}
                <Badge className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm border-0 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </Badge>
              </div>

              {/* Video Info */}
              <CardHeader className="flex-1">
                <CardTitle 
                  className="text-base line-clamp-2 group-hover:text-blue-500 transition-colors cursor-pointer"
                  onClick={() => handleVideoClick(video.youtubeUrl)}
                >
                  {video.title}
                </CardTitle>
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

              {/* Action Buttons */}
              {video.hasSourceCode && video.sourceCodeId && (
                <CardContent className="pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={(e) => handleSourceCodeClick(video.sourceCodeId!, e)}
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Detail View Modal */}
      <ProjectDetailView 
        project={selectedProject}
        isOpen={isDetailOpen}
        onClose={() => {
          setIsDetailOpen(false);
          setSelectedProject(null);
        }}
      />
    </div>
  );
}
