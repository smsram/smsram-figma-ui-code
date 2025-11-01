import React from 'react';
import { motion } from 'motion/react';
import { Code, Video, BookOpen, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Video,
      title: 'Quality Tutorials',
      description: 'In-depth video tutorials covering modern web development technologies and best practices.',
      color: 'orange'
    },
    {
      icon: Code,
      title: 'Complete Source Code',
      description: 'Access to full source code for all projects, with detailed documentation and setup guides.',
      color: 'purple'
    },
    {
      icon: BookOpen,
      title: 'Real-World Projects',
      description: 'Learn by building real applications that you can add to your portfolio.',
      color: 'cyan'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join our growing community of developers learning and building together.',
      color: 'orange'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="about-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">About SMSRam</h1>
        <p className="page-subtitle">Empowering developers through quality education</p>
      </motion.div>

      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="about-intro">
          <h2>Welcome to SMSRam</h2>
          <p>
            SMSRam is a platform dedicated to helping developers master modern web development 
            through comprehensive video tutorials and hands-on projects. Our mission is to make 
            quality programming education accessible to everyone.
          </p>
          <p>
            Whether you're just starting your coding journey or looking to level up your skills, 
            we provide the resources and guidance you need to succeed. All our tutorials come with 
            complete source code, detailed documentation, and real-world applications.
          </p>
        </div>

        <h2 className="section-title">What We Offer</h2>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className={`feature-card feature-${feature.color}`}
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <div className="feature-icon-wrapper">
                  <Icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            We believe that everyone should have access to quality programming education. 
            That's why we create detailed, easy-to-follow tutorials that cover everything 
            from the basics to advanced topics. Our goal is to help you build real projects 
            that you can use in your portfolio and learn skills that are in demand in the 
            industry.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
