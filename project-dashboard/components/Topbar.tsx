import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface TopbarProps {
  darkMode: boolean;
}

export default function Topbar({ darkMode }: TopbarProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 p-4"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search videos, projects, or blogs..."
            className="pl-10 bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/20 backdrop-blur-sm"
          />
        </div>
      </div>
    </motion.header>
  );
}
