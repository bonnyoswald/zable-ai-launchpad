
import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

const CalComWidget = () => {
  useEffect(() => {
    // Initialize Cal.com embed API
    (async function () {
      try {
        const cal = await getCalApi({"namespace":"30min"});
        cal("ui", {
          "cssVarsPerTheme": {
            "light": {"cal-brand": "#1b2c68"},
            "dark": {"cal-brand": "#525f8f"}
          },
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
        console.log("Cal.com widget initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Cal.com widget:", error);
      }
    })();
    
    return () => {
      // Clean up if needed
    };
  }, []);
  
  return null; // This component doesn't render anything directly
};

export default CalComWidget;
