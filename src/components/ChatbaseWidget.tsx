
import { useEffect } from 'react';

declare global {
  interface Window {
    chatbase: any;
  }
}

const ChatbaseWidget = () => {
  useEffect(() => {
    // Initialize Chatbase
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
    document.body.appendChild(script);

    return () => {
      // Attempt to clean up if possible
      try {
        if (document.querySelector('script[id="XyqwgxkX9oS1CtvN1hkkB"]')) {
          const chatbotScript = document.querySelector('script[id="XyqwgxkX9oS1CtvN1hkkB"]');
          if (chatbotScript && chatbotScript.parentNode) {
            chatbotScript.parentNode.removeChild(chatbotScript);
          }
        }
        
        if (document.querySelector('script:contains("chatbase")')) {
          document.body.removeChild(script);
        }
      } catch (e) {
        console.error("Failed to clean up Chatbase script:", e);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatbaseWidget;
