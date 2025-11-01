import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Github, Youtube, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com/@smsram', color: 'orange' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/smsram', color: 'purple' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/smsram', color: 'cyan' }
  ];

  return (
    <div className="contact-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">We'd love to hear from you</p>
      </motion.div>

      <div className="contact-container">
        {/* Contact Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <h3>Email Us</h3>
            <p>contact@smsram.com</p>
            <p className="contact-description">
              Send us an email anytime, we usually respond within 24 hours.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <MessageSquare size={24} />
            </div>
            <h3>Community</h3>
            <p>Join our Discord</p>
            <p className="contact-description">
              Connect with other learners and get help from the community.
            </p>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link social-${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
