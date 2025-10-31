import { motion } from 'motion/react';
import { Youtube, Github, Instagram, Mail, Code2, Cpu, Palette, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback } from './ui/avatar';

const skills = [
  { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
  { name: 'Node.js & Express', level: 85, color: 'from-green-500 to-emerald-500' },
  { name: 'Python & AI/ML', level: 80, color: 'from-purple-500 to-pink-500' },
  { name: 'UI/UX Design', level: 75, color: 'from-orange-500 to-red-500' },
  { name: 'Database Systems', level: 88, color: 'from-violet-500 to-purple-500' },
];

const techStack = [
  { name: 'Frontend', icon: Code2, techs: ['React', 'Next.js', 'Vue', 'Tailwind CSS'] },
  { name: 'AI/ML', icon: Cpu, techs: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI'] },
  { name: 'Design', icon: Palette, techs: ['Figma', 'Adobe XD', 'Framer', 'Photoshop'] },
  { name: 'Backend', icon: Database, techs: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'] },
];

const timeline = [
  { year: '2024', event: 'Reached 100K+ subscribers on YouTube', highlight: true },
  { year: '2023', event: 'Published 50+ coding tutorials and projects' },
  { year: '2022', event: 'Started SMSRam YouTube channel' },
  { year: '2021', event: 'Launched first AI-powered web application' },
];

export default function AboutSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Full-stack developer, content creator, and AI enthusiast
        </p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="w-32 h-32 border-4 border-gradient-to-r from-blue-500 to-purple-600">
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-4xl">
                    MS
                  </AvatarFallback>
                </Avatar>
              </motion.div>

              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-2">Meher Siva Ram</h2>
                <p className="text-blue-600 dark:text-blue-400 mb-4">
                  Full-Stack Developer & Content Creator
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
                  Hey! I'm Meher Siva Ram, the creator behind SMSRam. I'm passionate about building innovative web applications, 
                  exploring AI technologies, and sharing my knowledge through coding tutorials. With expertise in modern web 
                  frameworks and a love for clean, efficient code, I create content that helps developers level up their skills.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button className="bg-red-500 hover:bg-red-600">
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="mb-4">Skills & Expertise</h2>
        <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
          <CardContent className="p-6">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-base">{category.name}</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="mb-4">Journey Timeline</h2>
        <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
          <CardContent className="p-6">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <p className={item.highlight ? '' : 'text-gray-600 dark:text-gray-400'}>
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
