
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    chatbase: any;
  }
}

const ChatbaseWidget = () => {
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
    
    // Initialize Chatbase only when visible
    const script = document.createElement('script');
    script.innerHTML = `
      (function(){
        if(!window.chatbase||window.chatbase("getState")!=="initialized"){
          window.chatbase=(...arguments)=>{
            if(!window.chatbase.q){window.chatbase.q=[]}
            window.chatbase.q.push(arguments)
          };
          window.chatbase=new Proxy(window.chatbase,{
            get(target,prop){
              if(prop==="q"){return target.q}
              return(...args)=>target(prop,...args)
            }
          })
        }
        
        const onLoad=function(){
          const script=document.createElement("script");
          script.src="https://www.chatbase.co/embed.min.js";
          script.id="XyqwgxkX9oS1CtvN1hkkB";
          script.domain="www.chatbase.co";
          script.defer = true;
          document.body.appendChild(script)
        };
        
        if(document.readyState==="complete"){
          onLoad()
        } else {
          window.addEventListener("load",onLoad)
        }
      })();
    `;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      try {
        if (document.querySelector('script[id="XyqwgxkX9oS1CtvN1hkkB"]')) {
          const chatbotScript = document.querySelector('script[id="XyqwgxkX9oS1CtvN1hkkB"]');
          if (chatbotScript && chatbotScript.parentNode) {
            chatbotScript.parentNode.removeChild(chatbotScript);
          }
        }
        
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      } catch (e) {
        console.error("Failed to clean up Chatbase script:", e);
      }
    };
  }, [isVisible]);

  return null; // This component doesn't render anything visible
};

export default ChatbaseWidget;
