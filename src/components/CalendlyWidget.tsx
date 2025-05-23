
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay loading the widget to improve initial page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    // Add Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Add Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    // Initialize Calendly properly once script is loaded
    script.onload = () => {
      // Signal that Calendly is loaded and ready
      console.log("Calendly script loaded successfully");
    };
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(link);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, [isVisible]);
  
  return null; // This component doesn't render anything
};

export default CalendlyWidget;
