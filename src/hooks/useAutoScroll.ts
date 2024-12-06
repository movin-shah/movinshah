import { useState, useEffect, useCallback } from 'react';

const SECTION_TIMING = {
  HERO: 3000,
  PORTFOLIO: 5000,
  VIDEO: 15000,
  ABOUT: 8000,
  CONTACT: 5000,
};

export const useAutoScroll = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const sections = [
    { id: 'hero', duration: SECTION_TIMING.HERO },
    { id: 'work', duration: SECTION_TIMING.PORTFOLIO },
    { id: 'video-gallery', duration: SECTION_TIMING.VIDEO },
    { id: 'about', duration: SECTION_TIMING.ABOUT },
    { id: 'contact', duration: SECTION_TIMING.CONTACT }
  ];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const stopAutoScroll = useCallback(() => {
    setIsAutoScrolling(false);
    setCurrentSectionIndex(0);
  }, []);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const handleUserInteraction = (e: Event) => {
      if ((e.target as HTMLElement)?.closest('#auto-scroll-toggle')) {
        return;
      }
      stopAutoScroll();
    };

    const events = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    events.forEach(event => window.addEventListener(event, handleUserInteraction));

    return () => {
      events.forEach(event => window.removeEventListener(event, handleUserInteraction));
    };
  }, [isAutoScrolling, stopAutoScroll]);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const section = sections[currentSectionIndex];
    if (!section) {
      stopAutoScroll();
      return;
    }

    scrollToSection(section.id);

    const timer = setTimeout(() => {
      if (currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex(prev => prev + 1);
      } else {
        stopAutoScroll();
      }
    }, section.duration);

    return () => clearTimeout(timer);
  }, [isAutoScrolling, currentSectionIndex, sections, scrollToSection, stopAutoScroll]);

  const toggleAutoScroll = useCallback(() => {
    setIsAutoScrolling(prev => {
      if (!prev) {
        setCurrentSectionIndex(0);
        return true;
      }
      return false;
    });
  }, []);

  return {
    isAutoScrolling,
    toggleAutoScroll,
    currentSection: sections[currentSectionIndex]?.id
  };
};