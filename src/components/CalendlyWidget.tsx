
import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyWidget = () => {
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Add Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default CalendlyWidget;
