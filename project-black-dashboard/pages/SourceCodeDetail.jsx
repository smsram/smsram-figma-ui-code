import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download, ExternalLink, Calendar, HardDrive, CheckCircle, ArrowLeft, Video } from 'lucide-react';
import { sourceCodesData, videosData } from '../data/mockData';

const SourceCodeDetail = () => {
  const { id } = useParams();
  const sourceCode = sourceCodesData.find(sc => sc.id === parseInt(id));

  if (!sourceCode) {
    return (
      <div className="sourcecode-detail-page">
        <div className="error-container">
          <h2>Source code not found</h2>
          <Link to="/source-codes" className="back-link">
            <ArrowLeft size={16} />
            Back to Source Codes
          </Link>
        </div>
      </div>
    );
  }

  const relatedVideo = videosData.find(v => v.id === sourceCode.videoId);

  return (
    <div className="sourcecode-detail-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/source-codes" className="back-link">
          <ArrowLeft size={16} />
          Back to Source Codes
        </Link>

        <div className="sourcecode-detail-container">
          <div className="sourcecode-detail-header">
            <h1 className="sourcecode-detail-title">{sourceCode.title}</h1>
            <p className="sourcecode-detail-description">{sourceCode.description}</p>

            <div className="sourcecode-detail-meta">
              <span className="meta-item">
                <Calendar size={18} />
                Last updated: {new Date(sourceCode.lastUpdated).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              {sourceCode.downloadAvailable && (
                <span className="meta-item">
                  <HardDrive size={18} />
                  Size: {sourceCode.downloadSize}
                </span>
              )}
            </div>

            <div className="sourcecode-actions-main">
              {sourceCode.downloadAvailable && (
                <button className="action-btn primary-btn">
                  <Download size={18} />
                  Download Source Code
                </button>
              )}
              {sourceCode.githubUrl && (
                <a 
                  href={sourceCode.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-btn secondary-btn"
                >
                  <ExternalLink size={18} />
                  View on GitHub
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="detail-section">
            <h2 className="section-title">Technologies Used</h2>
            <div className="tech-tags-large">
              {sourceCode.technologies.map((tech, index) => (
                <span key={index} className="tech-tag-large">{tech}</span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="detail-section">
            <h2 className="section-title">Features Included</h2>
            <div className="features-list">
              {sourceCode.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle size={20} className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Video */}
          {relatedVideo && (
            <motion.div 
              className="related-video-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="section-title">Related Video Tutorial</h2>
              <div className="related-video-card">
                <a 
                  href={relatedVideo.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-thumbnail-link"
                >
                  <div className="video-thumbnail">
                    <img src={relatedVideo.thumbnail} alt={relatedVideo.title} />
                    <div className="video-overlay">
                      <div className="play-button">▶</div>
                    </div>
                  </div>
                </a>

                <div className="video-info">
                  <Link to={`/video/${relatedVideo.id}`} className="video-title-link">
                    <h3 className="video-title">{relatedVideo.title}</h3>
                  </Link>
                  <p className="video-description">{relatedVideo.description}</p>

                  <div className="video-actions">
                    <Link to={`/video/${relatedVideo.id}`} className="action-btn view-btn">
                      <Video size={16} />
                      View Video Details
                    </Link>
                    <a 
                      href={relatedVideo.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn youtube-btn"
                    >
                      <ExternalLink size={16} />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SourceCodeDetail;
