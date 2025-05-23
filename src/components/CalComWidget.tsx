
import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { toast } from "@/components/ui/use-toast";

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
        
        // Make sure all Cal.com buttons are initialized
        cal("on", {
          action: "bookingSuccessful",
          callback: () => {
            toast({
              title: "Booking successful!",
              description: "We'll be in touch with you shortly.",
            });
          },
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
