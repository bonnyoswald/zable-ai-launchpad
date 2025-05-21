
import { Card, CardContent } from "@/components/ui/card";
import { Mic, MessageSquare, Mail, Calendar } from 'lucide-react';

const services = [
  {
    title: "AI Voice Agents",
    description: "Intelligent voice assistants that handle calls, answer questions, and route important inquiries to your team.",
    icon: Mic
  },
  {
    title: "Website Chatbots",
    description: "24/7 customer service chatbots that engage visitors, answer FAQs, and capture qualified leads.",
    icon: MessageSquare
  },
  {
    title: "Email & Calendar Automations",
    description: "Smart email responders that follow up with leads and schedule meetings based on your availability.",
    icon: Mail
  },
  {
    title: "Smart Booking Engines",
    description: "Frictionless scheduling tools that integrate with your calendar and optimize your availability.",
    icon: Calendar
  }
];

const ServicesSection = () => {
  return (
    <section id="what-we-offer" className="section-padding bg-zable-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What We Offer</h2>
        <p className="section-subtitle text-center">
          Comprehensive AI solutions designed to transform how service businesses interact with customers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-zable-blue-accent flex items-center justify-center mb-4">
                  {<service.icon size={24} className="text-zable-blue-dark" />}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zable-blue-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
