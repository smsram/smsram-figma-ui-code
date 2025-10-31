import { motion } from 'motion/react';
import { Home, Video, Code2, BookOpen, User, Mail, Menu, X, Youtube, Github, Instagram } from 'lucide-react';
import { Switch } from './ui/switch';
import logoImage from 'figma:asset/7473377eaa26b152e6e05fd6d2425c20524f6a26.png';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'home', label: 'Home Overview', icon: Home },
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'codes', label: 'Source Codes', icon: Code2 },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ activeTab, setActiveTab, darkMode, setDarkMode, collapsed, setCollapsed }: SidebarProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-lg"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: collapsed ? -320 : 0,
          width: collapsed ? 0 : 280
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed lg:relative h-screen bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-r border-white/20 dark:border-gray-700/20 z-40 overflow-hidden"
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img src={logoImage} alt="SMSRam Logo" className="w-12 h-12 rounded-lg" />
            <div>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                SMSRam
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Content Studio</p>
            </div>
          </motion.div>

          {/* Navigation Menu */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (window.innerWidth < 1024) {
                      setCollapsed(true);
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'hover:bg-white/50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300'
                  }`}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="space-y-4 border-t border-white/20 dark:border-gray-700/20 pt-4">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between px-4">
              <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-500/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-500/20 text-gray-700 dark:text-gray-300 hover:bg-gray-500/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-pink-500/20 text-pink-600 dark:text-pink-400 hover:bg-pink-500/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
