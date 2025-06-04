// components/Navbar.jsx
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo or Brand */}
        <div className="text-xl font-semibold text-primary">
          AI Resume Enhancer
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm text-text-secondary">
          <a href="#features" className="hover:text-primary transition-colors">
            Features
          </a>
          <a href="#templates" className="hover:text-primary transition-colors">
            Templates
          </a>
          <a href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-2">
          <button className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
          {/* Mobile menu icon (optional) */}
          <button className="md:hidden text-primary">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
