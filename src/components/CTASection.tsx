
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-blue-gradient text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">ZABLE AI – Smart Agents. Real Results.</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Ready to transform your business with AI? Let's talk about your specific needs.
        </p>
        <Button className="bg-white text-zable-blue-dark hover:bg-opacity-90 px-8 py-6 text-lg font-medium rounded-full">
          Book a Demo
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
