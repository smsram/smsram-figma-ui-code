import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Eye, ThumbsUp, Calendar, ExternalLink, Code, ArrowLeft } from 'lucide-react';
import { videosData, sourceCodesData } from '../data/mockData';

const VideoDetail = () => {
  const { id } = useParams();
  const video = videosData.find(v => v.id === parseInt(id));

  if (!video) {
    return (
      <div className="video-detail-page">
        <div className="error-container">
          <h2>Video not found</h2>
          <Link to="/videos" className="back-link">
            <ArrowLeft size={16} />
            Back to Videos
          </Link>
        </div>
      </div>
    );
  }

  const relatedSourceCode = video.hasSourceCode 
    ? sourceCodesData.find(sc => sc.id === video.sourceCodeId) 
    : null;

  return (
    <div className="video-detail-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/videos" className="back-link">
          <ArrowLeft size={16} />
          Back to Videos
        </Link>

        <div className="video-detail-container">
          {/* Video Player Area */}
          <div className="video-player-section">
            <div className="video-player">
              <img src={video.thumbnail} alt={video.title} />
              <a 
                href={video.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="play-overlay"
              >
                <div className="play-button-large">▶</div>
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>

          {/* Video Info */}
          <div className="video-detail-info">
            <h1 className="video-detail-title">{video.title}</h1>

            <div className="video-detail-meta">
              <span className="meta-item">
                <Eye size={18} />
                {video.views} views
              </span>
              <span className="meta-item">
                <ThumbsUp size={18} />
                {video.likes} likes
              </span>
              <span className="meta-item">
                <Calendar size={18} />
                {new Date(video.uploadDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>

            <div className="video-description-section">
              <h3>Description</h3>
              <p className="video-description">{video.description}</p>
            </div>

            <div className="video-actions">
              <a 
                href={video.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn primary-btn"
              >
                <ExternalLink size={18} />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Related Source Code */}
        {relatedSourceCode && (
          <motion.div 
            className="related-source-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="section-title">Source Code</h2>
            <div className="related-source-card">
              <div className="sourcecode-header">
                <h3 className="sourcecode-title">{relatedSourceCode.title}</h3>
                <p className="sourcecode-description">{relatedSourceCode.description}</p>
              </div>

              <div className="sourcecode-tech">
                {relatedSourceCode.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="sourcecode-actions">
                <Link to={`/source-code/${relatedSourceCode.id}`} className="action-btn view-btn">
                  <Code size={16} />
                  View Details
                </Link>
                {relatedSourceCode.githubUrl && (
                  <a 
                    href={relatedSourceCode.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn github-btn"
                  >
                    <ExternalLink size={16} />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default VideoDetail;
