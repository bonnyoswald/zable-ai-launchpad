
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
    
    // Initialize Calendly Badge Widget
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({ 
          url: 'https://calendly.com/zacharyongeri121/30min', 
          text: 'Schedule time with me', 
          color: '#04295e', 
          textColor: '#ffffff' 
        });
      }
    };
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default CalendlyWidget;
