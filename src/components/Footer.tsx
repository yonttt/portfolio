import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-cyan-400 mr-2" />
            <span className="text-white font-bold">
              Alex<span className="text-cyan-400">.</span>dev
            </span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2 fill-current" />
            <span>by Alex Chen © 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;