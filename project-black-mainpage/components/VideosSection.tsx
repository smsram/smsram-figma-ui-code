import React from 'react';
import { motion } from 'motion/react';
import { Play, ExternalLink, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const latestVideos = [
  {
    id: 1,
    title: 'Building AI Chatbots with OpenAI GPT-4',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    duration: '15:32',
    views: '12K',
    hasSourceCode: true,
  },
  {
    id: 2,
    title: 'Machine Learning with Python & TensorFlow',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop',
    duration: '22:18',
    views: '8.5K',
    hasSourceCode: true,
  },
  {
    id: 3,
    title: 'React Advanced Patterns & Best Practices',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    duration: '18:45',
    views: '15K',
    hasSourceCode: false,
  },
  {
    id: 4,
    title: 'Neural Networks from Scratch',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop',
    duration: '28:12',
    views: '10K',
    hasSourceCode: true,
  },
  {
    id: 5,
    title: 'API Development with Node.js & Express',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    duration: '20:05',
    views: '9.2K',
    hasSourceCode: true,
  },
  {
    id: 6,
    title: 'Data Visualization with D3.js',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    duration: '16:30',
    views: '7.8K',
    hasSourceCode: false,
  },
];

export function VideosSection() {
  return (
    <section id="videos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            Latest <span style={{ color: 'var(--purple-accent)' }}>Videos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest tutorials on AI, Machine Learning, and cutting-edge web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-border hover:border-[var(--orange-accent)] transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[var(--orange-accent)] flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  {video.hasSourceCode && (
                    <div className="absolute top-2 left-2">
                      <Badge
                        className="bg-[var(--cyan-accent)] text-white border-0"
                      >
                        <Code className="w-3 h-3 mr-1" />
                        Source Code
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h4 className="mb-2 line-clamp-2 min-h-[3rem]">{video.title}</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{video.views} views</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group/btn"
                    style={{
                      borderColor: 'var(--orange-accent)',
                      color: 'var(--orange-accent)',
                    }}
                  >
                    <span className="flex items-center gap-2">
                      Watch on YouTube
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
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
              borderColor: 'var(--purple-accent)',
              color: 'var(--purple-accent)',
            }}
          >
            View All Videos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
