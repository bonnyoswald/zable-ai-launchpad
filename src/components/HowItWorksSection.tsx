
import { Card, CardContent } from "@/components/ui/card";
import { ChartArea, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "We analyze your workflow",
    description: "Our team studies your business processes to identify where AI can create the most value.",
    icon: ChartArea
  },
  {
    title: "We install your AI system",
    description: "Custom configuration and seamless integration with your existing tools and platforms.",
    icon: Settings
  },
  {
    title: "You start saving time and closing more leads",
    description: "Watch as your team focuses on high-value tasks while AI handles the routine interactions.",
    icon: TrendingUp
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">How It Works</h2>
        <p className="section-subtitle text-center">
          A simple, proven process to transform your customer interactions with AI.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {steps.map((step, index) => (
            <Card key={index} className="flex-1 card-hover border-none shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-zable-blue-accent flex items-center justify-center mb-4">
                    <step.icon size={24} className="text-zable-blue-dark" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-gradient flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zable-blue-dark">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
