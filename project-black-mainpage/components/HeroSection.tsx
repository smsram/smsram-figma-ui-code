import React from 'react';
import { motion } from 'motion/react';
import { Play, Code2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const floatingIcons = [
    { Icon: Code2, delay: 0, color: 'var(--orange-accent)' },
    { Icon: Play, delay: 0.5, color: 'var(--purple-accent)' },
    { Icon: Sparkles, delay: 1, color: 'var(--cyan-accent)' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            <item.Icon 
              className="w-16 h-16 lg:w-24 lg:h-24" 
              style={{ color: item.color, filter: 'blur(1px)' }}
            />
          </motion.div>
        ))}

        {/* Floating code lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-[var(--orange-accent)] to-transparent"
            style={{
              width: `${100 + i * 50}px`,
              left: `${i * 20}%`,
              top: `${20 + i * 15}%`,
              opacity: 0.1,
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-block mb-6"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(115, 6, 151, 0.3)',
                  '0 0 40px rgba(115, 6, 151, 0.5)',
                  '0 0 20px rgba(115, 6, 151, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="px-4 py-2 rounded-full border border-[var(--purple-accent)] text-[var(--purple-accent)] bg-[var(--purple-accent)]/10">
                AI • Machine Learning • Coding
              </span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-[var(--orange-accent)] via-[var(--purple-accent)] to-[var(--cyan-accent)] bg-clip-text text-transparent">
                SMSRam
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Watch tutorials, explore source codes, and learn hands-on development in AI, Machine Learning, and modern coding practices.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="rounded-full px-8 group relative overflow-hidden"
                  style={{
                    background: 'var(--orange-accent)',
                    color: 'white',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.2 }}
                  />
                  <span className="relative flex items-center gap-2">
                    View Dashboard
                    <Code2 className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-2 group"
                  style={{
                    borderColor: 'var(--purple-accent)',
                    color: 'var(--purple-accent)',
                  }}
                >
                  <span className="flex items-center gap-2">
                    Subscribe on YouTube
                    <Play className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            {[
              { value: '50K+', label: 'Subscribers', color: 'var(--orange-accent)' },
              { value: '100+', label: 'Videos', color: 'var(--purple-accent)' },
              { value: '30+', label: 'Projects', color: 'var(--cyan-accent)' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <h3 style={{ color: stat.color }}>{stat.value}</h3>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
