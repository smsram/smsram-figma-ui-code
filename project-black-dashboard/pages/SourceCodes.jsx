import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download, ExternalLink, Search, Calendar, HardDrive } from 'lucide-react';
import { sourceCodesData } from '../data/mockData';

const SourceCodes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCodes = sourceCodesData.filter(code =>
    code.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    code.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
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
    <div className="sourcecodes-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Source Codes</h1>
        <p className="page-subtitle">Download complete source code for our video tutorials</p>
      </motion.div>

      {/* Search Bar */}
      <motion.div 
        className="search-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search by title or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </motion.div>

      {/* Source Codes Grid */}
      <motion.div 
        className="sourcecodes-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredCodes.map((code) => (
          <motion.div 
            key={code.id} 
            className="sourcecode-card"
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            <div className="sourcecode-header">
              <Link to={`/source-code/${code.id}`} className="sourcecode-title-link">
                <h3 className="sourcecode-title">{code.title}</h3>
              </Link>
              <p className="sourcecode-description">{code.description}</p>
            </div>

            <div className="sourcecode-tech">
              {code.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="sourcecode-meta">
              <span className="meta-item">
                <Calendar size={14} />
                Updated {new Date(code.lastUpdated).toLocaleDateString()}
              </span>
              {code.downloadAvailable && (
                <span className="meta-item">
                  <HardDrive size={14} />
                  {code.downloadSize}
                </span>
              )}
            </div>

            <div className="sourcecode-actions">
              {code.downloadAvailable && (
                <button className="action-btn download-btn">
                  <Download size={16} />
                  Download
                </button>
              )}
              {code.githubUrl && (
                <a 
                  href={code.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-btn github-btn"
                >
                  <ExternalLink size={16} />
                  View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredCodes.length === 0 && (
        <motion.div 
          className="empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No source codes found matching "{searchTerm}"</p>
        </motion.div>
      )}
    </div>
  );
};

export default SourceCodes;
