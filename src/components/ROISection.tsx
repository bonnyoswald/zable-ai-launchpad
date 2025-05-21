
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ROISection = () => {
  return (
    <section id="real-roi" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Real ROI</h2>
        <p className="section-subtitle text-center">
          Our AI solutions deliver measurable results from day one.
        </p>
        
        <Card className="mt-12 overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            <div className="bg-blue-gradient text-white p-4">
              <h3 className="text-xl font-semibold">ZABLE AI Dashboard</h3>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-medium">Today's AI Activity</h4>
                <div className="flex items-center">
                  <div className="w-6 h-4 bg-red relative mr-2">
                    <div 
                      className="absolute inset-0" 
                      style={{ 
                        backgroundImage: "url('https://flagcdn.com/w20/ke.png')", 
                        backgroundSize: "cover", 
                        backgroundPosition: "center" 
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">Kenya</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zable-gray rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <h5 className="font-medium">Voice Calls Handled</h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-zable-blue-dark">24</span>
                    <div className="text-green-500 text-sm font-medium">+12% ↑</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">6</span> transferred to team
                  </div>
                </div>
                
                <div className="bg-zable-gray rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <h5 className="font-medium">Emails Managed</h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-zable-blue-dark">57</span>
                    <div className="text-green-500 text-sm font-medium">+18% ↑</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">42</span> auto-responded
                  </div>
                </div>
                
                <div className="bg-zable-gray rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    <h5 className="font-medium">Bookings Confirmed</h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-zable-blue-dark">19</span>
                    <div className="text-green-500 text-sm font-medium">+35% ↑</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">$4,750</span> in new revenue
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ROISection;
