import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code2, Brain, Palette, Rocket } from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Express"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Keras"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "MongoDB", "PostgreSQL", "AWS"],
  },
];

const timeline = [
  {
    year: "2025",
    title: "AI & ML Student",
    description: "Pursuing advanced studies in Artificial Intelligence and Machine Learning",
    icon: Brain,
  },
  {
    year: "2024",
    title: "YouTube Creator",
    description: "Started SMSRam channel sharing coding tutorials and tech content",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    description: "Building modern web applications and open source projects",
    icon: Code2,
  },
  {
    year: "2022",
    title: "Creative Journey",
    description: "Exploring the intersection of technology and creative content",
    icon: Palette,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Developer, Content Creator, AI Enthusiast
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-50" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjE4MTg4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Meher Siva Ram"
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800"
                  />
                </div>
                <h3 className="text-2xl mb-2 text-gray-900 dark:text-gray-100">
                  Meher Siva Ram
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">
                  AI & ML Student | YouTuber | Developer
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Hey there! I'm Meher Siva Ram, a passionate developer and content creator
                focused on making technology accessible to everyone. Through my YouTube
                channel SMSRam, I share coding tutorials, AI projects, and tech insights.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm currently pursuing studies in Artificial Intelligence and Machine Learning,
                while building open-source projects and exploring the creative side of
                technology. My goal is to inspire and help others learn to code and build
                amazing things.
              </p>
            </Card>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-blue-600 dark:text-blue-400">
                            {item.year}
                          </span>
                          <h4 className="text-gray-900 dark:text-gray-100">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl text-center mb-8 text-gray-900 dark:text-gray-100">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-lg transition-shadow">
                  <h4 className="mb-4 text-blue-600 dark:text-blue-400">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
