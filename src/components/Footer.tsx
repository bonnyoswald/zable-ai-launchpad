
const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-blue-gradient bg-clip-text text-transparent">ZABLE AI</span>
            <p className="text-gray-600 mt-2">Smart Agents. Real Results.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">AI Voice Agents</a></li>
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">Chatbots</a></li>
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">Email Automation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">Booking Engine</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-zable-blue-dark">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ZABLE AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-zable-blue-dark">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-zable-blue-dark">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-zable-blue-dark">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
