import { useEffect } from 'react';

export const useScrollRestoration = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Disable default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };

    // Restore scroll position on load
    const handleLoad = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition !== null) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, []);
}; 