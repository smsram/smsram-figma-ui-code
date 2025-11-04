import React from 'react';
import { motion } from 'motion/react';
import { Play, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function NowPlayingWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-24 right-4 z-40 hidden xl:block"
    >
      <Card className="w-80 border-2 border-[var(--orange-accent)] shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[var(--orange-accent)]" />
            </motion.div>
            <span className="text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" style={{ color: 'var(--orange-accent)' }} />
              Latest Upload
            </span>
          </div>

          <div className="flex gap-3">
            <div className="relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=120&h=80&fit=crop"
                alt="Latest video"
                className="w-24 h-16 rounded object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[var(--orange-accent)] flex items-center justify-center">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm mb-1 line-clamp-2">Building AI Chatbots with GPT-4</h4>
              <p className="text-xs text-muted-foreground">2 hours ago • 1.2K views</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-3 py-2 rounded-full text-white text-sm"
            style={{ background: 'var(--orange-accent)' }}
          >
            Watch Now
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
