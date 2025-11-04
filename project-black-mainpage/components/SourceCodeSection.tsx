import React from 'react';
import { motion } from 'motion/react';
import { Github, Download, ExternalLink, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const projects = [
  {
    id: 1,
    title: 'AI Image Generator',
    description: 'Full-stack AI image generation app using DALL-E API, React, and Node.js',
    techStack: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    stars: 245,
    downloads: 1200,
    accentColor: 'var(--orange-accent)',
  },
  {
    id: 2,
    title: 'ML Model Trainer',
    description: 'Python-based machine learning model training platform with visualization',
    techStack: ['Python', 'TensorFlow', 'Flask', 'NumPy'],
    stars: 189,
    downloads: 850,
    accentColor: 'var(--purple-accent)',
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    description: 'WebSocket-powered chat application with authentication and file sharing',
    techStack: ['TypeScript', 'Socket.io', 'Redis', 'PostgreSQL'],
    stars: 312,
    downloads: 1500,
    accentColor: 'var(--cyan-accent)',
  },
];

export function SourceCodeSection() {
  return (
    <section id="source-codes" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            Source <span style={{ color: 'var(--cyan-accent)' }}>Code Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download complete source code for my projects and learn by building
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card 
                className="h-full border-2 hover:shadow-lg transition-all duration-300 group"
                style={{
                  borderColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = project.accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${project.accentColor}20`,
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Code2 className="w-6 h-6" style={{ color: project.accentColor }} />
                    </motion.div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Github className="w-4 h-4" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {project.downloads}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      className="flex-1"
                      style={{
                        background: project.accentColor,
                        color: 'white',
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      style={{
                        borderColor: project.accentColor,
                        color: project.accentColor,
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-2"
            style={{
              borderColor: 'var(--cyan-accent)',
              color: 'var(--cyan-accent)',
            }}
          >
            Browse All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
