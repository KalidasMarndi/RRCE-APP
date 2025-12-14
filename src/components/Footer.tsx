import { Facebook, Twitter, Instagram, Globe, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About RRCE
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#innovation" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Innovation Lab
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="text-lg mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#facebook" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#twitter" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Make Designs with Us */}
          <div>
            <h3 className="text-lg mb-4">Make Designs with Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#government" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Government Press Notes
                </a>
              </li>
              <li>
                <a href="#tourism" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Tourism Updates
                </a>
              </li>
              <li>
                <a href="#emergency" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Emergency Alerts
                </a>
              </li>
              <li>
                <a href="#custom" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Custom Templates
                </a>
              </li>
              <li>
                <a href="#api" className="text-gray-300 hover:text-white transition-colors text-sm">
                  API Access
                </a>
              </li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <a href="#account" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Help
                </a>
              </li>
              <li>
                <a href="#downloads" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English</span>
              </button>
              <button className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                <span className="text-sm">🇮🇳 India</span>
              </button>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2025 RRCE. All rights reserved. Powered by Adobe Express.
            </div>
          </div>
        </div>

        {/* Partner Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-400">
            <div>
              <p className="mb-1">Adobe Express</p>
              <p>Design Platform</p>
            </div>
            <div>
              <p className="mb-1">AI Technology</p>
              <p>Powered by OpenAI</p>
            </div>
            <div>
              <p className="mb-1">Government Solutions</p>
              <p>Trusted by Agencies</p>
            </div>
            <div>
              <p className="mb-1">Support</p>
              <p>24/7 Available</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
