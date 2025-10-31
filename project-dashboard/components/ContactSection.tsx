import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Youtube, Github, Instagram, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'contact@smsram.com', color: 'from-blue-500 to-cyan-500' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'from-green-500 to-emerald-500' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', color: 'from-purple-500 to-pink-500' },
];

const socialLinks = [
  { icon: Youtube, label: 'YouTube', handle: '@SMSRam', color: 'bg-red-500', url: 'https://youtube.com' },
  { icon: Github, label: 'GitHub', handle: '@smsram', color: 'bg-gray-700', url: 'https://github.com' },
  { icon: Instagram, label: 'Instagram', handle: '@smsram', color: 'bg-pink-500', url: 'https://instagram.com' },
];

export default function ContactSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Get in Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Have a question or want to collaborate? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me more..."
                    rows={6}
                    className="bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/20 resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info & Social */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Contact Methods */}
          <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{method.label}</p>
                      <p className="text-sm">{method.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
            <CardHeader>
              <CardTitle>Follow Me</CardTitle>
              <CardDescription>
                Connect with me on social media
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${social.color}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{social.label}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{social.handle}</p>
                    </div>
                  </motion.a>
                );
              })}
            </CardContent>
          </Card>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-white mb-2">Quick Response</h3>
                <p className="text-sm text-white/80">
                  I typically respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}
