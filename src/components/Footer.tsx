import React from 'react';
import { Instagram, Mail, Phone, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left: Contact Info */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center border border-brand-500">
                <span className="text-lg font-bold text-brand-700">H</span>
              </div>
              <span className="text-xl font-bold text-brand-900">HUMBLO</span>
            </div>
            
            <p className="text-gray-600 max-w-sm">
              Crafting the crunchiest, boldest snacks for the modern palate. Stay hungry, stay humble.
            </p>

            <div className="flex flex-col gap-3 text-gray-600">
              <a href="mailto:contact@humblofoods.com" className="flex items-center gap-3 hover:text-brand-600 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                  <Mail size={16} />
                </div>
                contact@humblofoods.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-brand-600 transition-colors group">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                  <Phone size={16} />
                </div>
                +91 98765 43210
              </a>
            </div>

            <div className="flex gap-4 mt-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-500 hover:text-brand-600 hover:bg-brand-50 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Stay in the loop</h3>
            <p className="text-gray-600 mb-6">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
              />
              <button className="w-full bg-brand-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 HUMBLO Snacks. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with crunch in India <span className="text-lg">🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
