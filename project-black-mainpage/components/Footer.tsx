import React from 'react';
import { motion } from 'motion/react';
import { Youtube, Github, Instagram, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Navigation: ['Home', 'Dashboard', 'Videos', 'Source Codes'],
    Resources: ['Tutorials', 'Documentation', 'Blog', 'Newsletter'],
    Connect: ['YouTube', 'GitHub', 'Twitter', 'Instagram'],
  };

  const socialLinks = [
    { icon: Youtube, href: '#', color: 'var(--orange-accent)', label: 'YouTube' },
    { icon: Github, href: '#', color: 'var(--purple-accent)', label: 'GitHub' },
    { icon: Twitter, href: '#', color: 'var(--cyan-accent)', label: 'Twitter' },
    { icon: Instagram, href: '#', color: 'var(--orange-accent)', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="relative bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-4"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(244, 127, 22, 0.3)',
                    '0 0 30px rgba(244, 127, 22, 0.5)',
                    '0 0 20px rgba(244, 127, 22, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--orange-accent)] to-[var(--purple-accent)] flex items-center justify-center">
                  <span className="text-white">SR</span>
                </div>
              </motion.div>
              <span className="text-foreground">SMSRam</span>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering developers with AI, Machine Learning, and modern coding education.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-border hover:border-[var(--orange-accent)] flex items-center justify-center transition-colors"
                  style={{
                    ['--hover-color' as string]: social.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.color;
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) {
                      (icon as SVGElement).style.color = social.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) {
                      (icon as SVGElement).style.color = '';
                    }
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <div key={title}>
              <h4 className="mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIndex * 0.1 + index * 0.05 }}
                  >
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block group"
                    >
                      <span className="relative">
                        {link}
                        <motion.span
                          className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--orange-accent)]"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mb-8"
        >
          <div className="max-w-md mx-auto text-center">
            <Mail className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--purple-accent)' }} />
            <h4 className="mb-2">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get notified about new videos and projects
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[var(--orange-accent)]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full text-white"
                style={{ background: 'var(--orange-accent)' }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 SMSRam. All rights reserved.</p>
          <motion.div 
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="w-4 h-4 mx-1" style={{ color: 'var(--orange-accent)' }} /> by{' '}
            <span 
              className="relative inline-block px-3 py-1 rounded-full border-2"
              style={{
                borderColor: 'var(--orange-accent)',
                boxShadow: '0 0 10px rgba(244, 127, 22, 0.2)',
              }}
            >
              SMSRam
            </span>
          </motion.div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
