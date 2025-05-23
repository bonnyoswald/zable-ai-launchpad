
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 animate-[fade-in_0.8s_ease-out_forwards]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let AI <span className="text-gradient">Handle It.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              Custom voice agents, smart chatbots & bookings built for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg btn-genz animate-[fade-in_0.8s_ease-out_forwards]" style={{ animationDelay: '0.3s' }}>
                See How It Works
              </Button>
              <button 
                data-cal-namespace="30min"
                data-cal-link="zack-seal-zukqud/30min"
                data-cal-config='{"layout":"month_view"}'
                className="bg-transparent border border-input text-lg btn-genz animate-[fade-in_0.8s_ease-out_forwards] py-2 px-4 rounded-md inline-flex items-center justify-center"
                style={{ animationDelay: '0.5s' }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Demo
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-[fade-in_0.8s_ease-out_forwards]" style={{ animationDelay: '0.4s' }}>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-zable-blue-accent/30 to-zable-blue-light/10 z-10"></div>
              <div className="aspect-video bg-zable-gray rounded-xl flex items-center justify-center p-6 relative">
                <div className="grid grid-cols-2 gap-4 w-full relative z-20">
                  <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center floating-animation" style={{ animationDelay: '0.1s' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-zable-blue-accent rounded-full mx-auto mb-3 flex items-center justify-center shine-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zable-blue-dark">
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                          <line x1="12" x2="12" y1="19" y2="22"></line>
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Voice Agent</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center floating-animation" style={{ animationDelay: '0.3s' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-zable-blue-accent rounded-full mx-auto mb-3 flex items-center justify-center shine-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zable-blue-dark">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Chatbot</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center floating-animation" style={{ animationDelay: '0.5s' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-zable-blue-accent rounded-full mx-auto mb-3 flex items-center justify-center shine-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zable-blue-dark">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Email</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center floating-animation" style={{ animationDelay: '0.7s' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-zable-blue-accent rounded-full mx-auto mb-3 flex items-center justify-center shine-animation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zable-blue-dark">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" x2="16" y1="2" y2="6"></line>
                          <line x1="8" x2="8" y1="2" y2="6"></line>
                          <line x1="3" x2="21" y1="10" y2="10"></line>
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Booking</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-gradient rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-gradient rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
