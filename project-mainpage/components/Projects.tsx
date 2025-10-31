import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink, Download } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Web Dev", "Python", "AI/ML", "Full Stack"];

const projects = [
  {
    id: 1,
    title: "AI-Powered Chat Application",
    description: "Real-time chat app with AI assistant integration using OpenAI API and WebSockets.",
    category: "AI/ML",
    tech: ["React", "Node.js", "OpenAI", "WebSocket"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    category: "Full Stack",
    tech: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Machine Learning Model Trainer",
    description: "Visual tool for training and deploying ML models with no-code interface.",
    category: "AI/ML",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Portfolio Template Generator",
    description: "Dynamic portfolio generator with customizable themes and components.",
    category: "Web Dev",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Task Automation Scripts",
    description: "Collection of Python scripts for automating daily development tasks.",
    category: "Python",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for visualizing real-time data with beautiful charts.",
    category: "Web Dev",
    tech: ["React", "D3.js", "WebSocket", "Node.js"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="source-codes" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Source Codes & Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Open source projects and tutorials source code
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <Card className="p-6 h-full flex flex-col group hover:shadow-xl transition-shadow duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
                <div className="mb-4">
                  <Badge className="mb-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
