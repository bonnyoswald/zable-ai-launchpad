
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-blue-gradient bg-clip-text text-transparent">ZABLE AI</span>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#what-we-offer" className="text-gray-700 hover:text-zable-blue-dark">
            Services
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-zable-blue-dark">
            How It Works
          </a>
          <a href="#why-zable" className="text-gray-700 hover:text-zable-blue-dark">
            Benefits
          </a>
          <a href="#real-roi" className="text-gray-700 hover:text-zable-blue-dark">
            Results
          </a>
        </div>
        
        <div className="hidden md:block">
          <button 
            data-cal-namespace="30min"
            data-cal-link="zack-seal-zukqud/30min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book a Demo
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#what-we-offer" 
              className="text-gray-700 hover:text-zable-blue-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-zable-blue-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-zable" 
              className="text-gray-700 hover:text-zable-blue-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#real-roi" 
              className="text-gray-700 hover:text-zable-blue-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <button 
              data-cal-namespace="30min"
              data-cal-link="zack-seal-zukqud/30min"
              data-cal-config='{"layout":"month_view"}'
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
