import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eye, ThumbsUp, Code, ExternalLink, Video } from 'lucide-react';
import { videosData } from '../data/mockData';

const Dashboard = () => {
  const latestVideos = videosData.slice(0, 6);

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
    <div className="dashboard-page">
      {/* Header Section */}
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome to SMSRam - Your source for web development tutorials</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="stat-card stat-orange" variants={itemVariants}>
          <div className="stat-icon">
            <Video size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">48</div>
            <div className="stat-label">Total Videos</div>
          </div>
        </motion.div>

        <motion.div className="stat-card stat-purple" variants={itemVariants}>
          <div className="stat-icon">
            <Code size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">32</div>
            <div className="stat-label">Source Codes</div>
          </div>
        </motion.div>

        <motion.div className="stat-card stat-cyan" variants={itemVariants}>
          <div className="stat-icon">
            <Eye size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">1.2M</div>
            <div className="stat-label">Total Views</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Latest Videos Section */}
      <div className="section-header">
        <h2 className="section-title">Latest Videos</h2>
        <Link to="/videos" className="section-link">
          View All <ExternalLink size={16} />
        </Link>
      </div>

      <motion.div 
        className="videos-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {latestVideos.map((video) => (
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
    </div>
  );
};

export default Dashboard;
