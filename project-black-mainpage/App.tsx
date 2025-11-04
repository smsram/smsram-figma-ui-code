import React, { useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VideosSection } from './components/VideosSection';
import { SourceCodeSection } from './components/SourceCodeSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { NowPlayingWidget } from './components/NowPlayingWidget';

function AppContent() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(
          (this as HTMLAnchorElement).getAttribute('href') || ''
        );
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <NowPlayingWidget />
      <main>
        <HeroSection />
        <VideosSection />
        <SourceCodeSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
