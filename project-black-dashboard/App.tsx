import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Videos from './pages/Videos';
import SourceCodes from './pages/SourceCodes';
import VideoDetail from './pages/VideoDetail';
import SourceCodeDetail from './pages/SourceCodeDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/main.css';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/source-codes" element={<SourceCodes />} />
            <Route path="/source-code/:id" element={<SourceCodeDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
