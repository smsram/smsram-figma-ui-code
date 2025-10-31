import { motion } from 'motion/react';
import { useState } from 'react';
import { Github, ExternalLink, Download, Star, GitFork, Search, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { projects, Project } from '../data/projectData';
import ProjectDetailView from './ProjectDetailView';

export default function SourceCodesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Source Codes & Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Browse {filteredProjects.length} open-source projects and code repositories
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search projects or technologies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/20 backdrop-blur-sm"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 h-full flex flex-col">
              <CardHeader>
                {/* Project Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} mb-4 flex items-center justify-center`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Github className="w-7 h-7 text-white" />
                </motion.div>

                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                  {project.description}
                </CardDescription>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.forks}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="mt-auto">
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => handleViewProject(project)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  {project.githubUrl ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  ) : project.downloadUrl ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.downloadUrl, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  ) : null}
                </div>
              </CardContent>
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
