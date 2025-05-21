
import { Button } from "@/components/ui/button";

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
        <Button 
          className="bg-white text-zable-blue-dark hover:bg-opacity-90 px-8 py-6 text-lg font-medium rounded-full btn-genz animate-[fade-in_0.8s_ease-out_forwards]"
          style={{ animationDelay: '0.4s' }}
        >
          Book a Demo
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
