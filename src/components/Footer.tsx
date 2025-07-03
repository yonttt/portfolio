import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-cyan-400 mr-2" />
            <span className="text-white font-bold">
              Yonttt
            </span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <span>Made by Yonathan Marcello © 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;