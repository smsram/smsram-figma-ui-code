import React from 'react';
import { motion } from 'motion/react';
import { Users, Eye, FolderGit2, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'YouTube Subscribers',
    color: 'var(--orange-accent)',
  },
  {
    icon: Eye,
    value: '2.5M+',
    label: 'Total Views',
    color: 'var(--purple-accent)',
  },
  {
    icon: FolderGit2,
    value: '30+',
    label: 'Projects Shared',
    color: 'var(--cyan-accent)',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Positive Feedback',
    color: 'var(--orange-accent)',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              About <span style={{ color: 'var(--orange-accent)' }}>SMSRam</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi, I'm <strong className="text-foreground">Meher Siva Ram</strong>, a passionate educator and developer specializing in Artificial Intelligence, Machine Learning, and modern web development.
              </p>
              <p>
                Through my YouTube channel, I aim to make complex technical concepts accessible and practical. I believe in learning by doing, which is why I share complete source code and hands-on tutorials for every project.
              </p>
              <p>
                Whether you're a beginner taking your first steps in programming or an experienced developer looking to expand your skills in AI and ML, you'll find content tailored to your journey.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {['AI & ML', 'Web Development', 'Python', 'JavaScript', 'React', 'TensorFlow'].map(
                (skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 rounded-full border-2"
                    style={{
                      borderColor:
                        index % 3 === 0
                          ? 'var(--orange-accent)'
                          : index % 3 === 1
                          ? 'var(--purple-accent)'
                          : 'var(--cyan-accent)',
                      color:
                        index % 3 === 0
                          ? 'var(--orange-accent)'
                          : index % 3 === 1
                          ? 'var(--purple-accent)'
                          : 'var(--cyan-accent)',
                    }}
                  >
                    {skill}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="border-2 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    style={{
                      borderColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = stat.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                        style={{
                          background: `${stat.color}20`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                      </motion.div>
                      <h3 className="mb-1" style={{ color: stat.color }}>
                        {stat.value}
                      </h3>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
