import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eye, ThumbsUp, Code, Search } from 'lucide-react';
import { videosData } from '../data/mockData';

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videosData.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="videos-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">All Videos</h1>
        <p className="page-subtitle">Browse through all our video tutorials</p>
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
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </motion.div>

      {/* Videos Grid */}
      <motion.div 
        className="videos-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredVideos.map((video) => (
          <motion.div 
            key={video.id} 
            className="video-card"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <a 
              href={video.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-thumbnail-link"
            >
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
            </a>

            <div className="video-info">
              <Link to={`/video/${video.id}`} className="video-title-link">
                <h3 className="video-title">{video.title}</h3>
              </Link>

              <div className="video-meta">
                <span className="meta-item">
                  <Eye size={14} />
                  {video.views} views
                </span>
                <span className="meta-item">
                  <ThumbsUp size={14} />
                  {video.likes} likes
                </span>
              </div>

              {video.hasSourceCode && (
                <Link to={`/source-code/${video.sourceCodeId}`} className="source-code-btn">
                  <Code size={16} />
                  Source Code
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredVideos.length === 0 && (
        <motion.div 
          className="empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No videos found matching "{searchTerm}"</p>
        </motion.div>
      )}
    </div>
  );
};

export default Videos;
