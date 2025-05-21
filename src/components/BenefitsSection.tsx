
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  return (
    <section id="why-zable" className="section-padding bg-zable-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Why ZABLE AI?</h2>
        <p className="section-subtitle text-center">
          Measurable results that transform how you do business.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover border-none">
                <CardContent className="p-6 bg-blue-gradient text-white flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold mb-2">+40%</h3>
                  <p>Lead conversion</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-none">
                <CardContent className="p-6 bg-blue-gradient text-white flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold mb-2">−60%</h3>
                  <p>Time on support</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-none">
                <CardContent className="p-6 bg-blue-gradient text-white flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold mb-2">+24/7</h3>
                  <p>Instant response</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-none">
                <CardContent className="p-6 bg-blue-gradient text-white flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold mb-2">100%</h3>
                  <p>Customer satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="text-3xl text-gray-400 mb-4">"</div>
              <p className="text-xl mb-6 text-gray-700">
                ZABLE AI transformed our business. Our team now focuses on closing deals while the AI handles inquiries 24/7. Lead conversion is up 40% and our team is happier than ever.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-zable-blue-accent rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">CEO, Apex Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
