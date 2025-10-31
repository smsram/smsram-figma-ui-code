import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Github, ExternalLink, ArrowLeft, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Project } from '../data/projectData';

interface ProjectDetailViewProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailView({ project, isOpen, onClose }: ProjectDetailViewProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-white/20 dark:border-gray-700/20 p-0">
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <motion.h2
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2"
                    >
                      {project.title}
                    </motion.h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left: Video Player */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.youtubeId ? (
                      <Card className="overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${project.youtubeId}`}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      </Card>
                    ) : (
                      <Card className="overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                        <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                          <div className="text-center text-white">
                            <Play className="w-16 h-16 mx-auto mb-2 opacity-50" />
                            <p className="text-sm opacity-75">No video available</p>
                          </div>
                        </div>
                      </Card>
                    )}
                  </motion.div>

                  {/* Right: Project Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Description */}
                    <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                      <CardContent className="p-6">
                        <h3 className="mb-3">About This Project</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {project.fullDescription}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Stats */}
                    {(project.stars !== undefined || project.forks !== undefined) && (
                      <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                        <CardContent className="p-6">
                          <div className="grid grid-cols-2 gap-4">
                            {project.stars !== undefined && (
                              <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Stars</p>
                                <p className="text-2xl">{project.stars}</p>
                              </div>
                            )}
                            {project.forks !== undefined && (
                              <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Forks</p>
                                <p className="text-2xl">{project.forks}</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      {project.githubUrl && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View on GitHub
                          </Button>
                        </motion.div>
                      )}

                      {project.downloadUrl && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => window.open(project.downloadUrl, '_blank')}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Source Code
                          </Button>
                        </motion.div>
                      )}

                      {project.youtubeUrl && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => window.open(project.youtubeUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Watch on YouTube
                          </Button>
                        </motion.div>
                      )}
                    </div>

                    {/* Back Button */}
                    <motion.div whileHover={{ x: -5 }}>
                      <Button
                        variant="ghost"
                        onClick={onClose}
                        className="w-full"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Dashboard
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
