import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send, Youtube, Github, Instagram, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    rows={6}
                    required
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <Card className="p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900 dark:text-gray-100">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    smsram@example.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900 dark:text-gray-100">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Remote / Available Worldwide
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-900 dark:text-gray-100">
                    Open for Collaborations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sponsorships, partnerships, and project collaborations welcome
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50">
              <h3 className="mb-4 text-gray-900 dark:text-gray-100">
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  href="https://youtube.com/@smsram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-red-100 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                  <span className="text-sm">YouTube</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  href="https://github.com/smsram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span className="text-sm">GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  href="https://instagram.com/smsram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-pink-100 dark:bg-pink-900/20 rounded-lg text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-900/30 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="text-sm">Instagram</span>
                </motion.a>
              </div>
            </Card>

            {/* Newsletter/Discord Banner */}
            <Card className="p-6 border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-purple-600">
              <h3 className="text-xl mb-2 text-white">
                Join the Community
              </h3>
              <p className="text-white/90 mb-4">
                Subscribe to get the latest tutorials and updates
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Button className="bg-white text-blue-600 hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
