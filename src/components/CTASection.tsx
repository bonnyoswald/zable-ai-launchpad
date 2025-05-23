
import { Linkedin, Phone, Calendar } from "lucide-react";
import { useEffect } from "react";

const CTASection = () => {
  return (
    <section className="bg-blue-gradient text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white blur-xl" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-[fade-in_0.8s_ease-out_forwards]">
          ZABLE AI – Smart Agents. <span className="underline decoration-wavy decoration-2 underline-offset-4">Real Results.</span>
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-[fade-in_0.8s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
          Ready to transform your business with AI? Let's talk about your specific needs.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-[fade-in_0.8s_ease-out_forwards]" style={{ animationDelay: '0.4s' }}>
          <button 
            data-cal-namespace="30min"
            data-cal-link="zack-seal-zukqud/30min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-white text-zable-blue-dark hover:bg-opacity-90 px-8 py-6 text-lg font-medium rounded-full btn-genz flex items-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule a Demo
          </button>
          
          <div className="flex items-center gap-4">
            <a href="tel:0769139875" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 group">
              <Phone className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/company/107052012" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 group">
              <Linkedin className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
