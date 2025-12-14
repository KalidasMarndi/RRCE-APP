import { Zap, Menu, User, CreditCard, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigateToGenerator: () => void;
  onNavigateToLogin: () => void;
  isLoggedIn: boolean;
}

export function Navbar({ onNavigateToGenerator, onNavigateToLogin, isLoggedIn }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-2 rounded-lg shadow-md">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl">RRCE</h1>
              <p className="text-xs text-gray-500">Adobe Express Add-on</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-amber-600 transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </a>
            <button
              onClick={onNavigateToGenerator}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn && (
              <button className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors">
                <CreditCard className="w-5 h-5" />
                <span className="text-sm">Credits: 50</span>
              </button>
            )}
            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-2 border-2 border-slate-200 hover:border-amber-600 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all transform hover:scale-105"
            >
              <User className="w-4 h-4" />
              <span className="text-sm">{isLoggedIn ? 'Profile' : 'Login'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-amber-600 transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
                About
              </a>
              {isLoggedIn && (
                <div className="flex items-center gap-2 text-gray-700">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-sm">Credits: 50</span>
                </div>
              )}
              <button 
                onClick={onNavigateToLogin}
                className="flex items-center gap-2 border-2 border-slate-200 hover:border-amber-600 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all w-full justify-center"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">{isLoggedIn ? 'Profile' : 'Login'}</span>
              </button>
              <button
                onClick={onNavigateToGenerator}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}