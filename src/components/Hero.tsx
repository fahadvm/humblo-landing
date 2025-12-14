import React from 'react';
import { Instagram, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNotifyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNotifyClick }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
      {/* Left Column */}
      <div className="flex flex-col items-start text-left space-y-8 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center border-2 border-brand-500">
            <span className="text-xl font-bold text-brand-700 tracking-tighter">H</span>
          </div>
          <span className="text-2xl font-bold text-brand-900 tracking-tight">HUMBLO</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
        >
          Crunching Soon. <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-600 to-brand-400">
            Violet Attitude.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 max-w-lg leading-relaxed"
        >
          Bold snacks for the bold generation. We are crafting a new wave of crunch that blends tradition with a modern violet vibe.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={onNotifyClick}
            className="bg-brand-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-brand-200 hover:shadow-brand-300 hover:bg-brand-700 transition-all transform hover:-translate-y-1 flex items-center gap-3 text-lg"
          >
            <Bell size={20} />
            Notify Me
          </button>
          <button className="bg-white text-brand-900 border-2 border-brand-100 font-semibold py-4 px-8 rounded-2xl hover:bg-brand-50 hover:border-brand-200 transition-all flex items-center gap-3 text-lg">
            <Instagram size={20} />
            Follow Us
          </button>
        </motion.div>
      </div>

      {/* Right Column - Stacked Cards Preview */}
      <div className="relative h-125 hidden lg:block">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Stacked Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ delay: 0.6 }}
          className="absolute top-10 right-10 w-72 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10 transform hover:scale-105 transition-transform duration-500"
        >
          <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1694101493190-acc6c4418ad7?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Chips" />
          </div>
          <div className="h-2 w-2/3 bg-gray-200 rounded mb-2"></div>
          <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ delay: 0.7 }}
          className="absolute top-20 right-40 w-72 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 transform hover:scale-105 transition-transform duration-500"
        >
           <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1586981114766-708f09a71e20?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Murukku" />
          </div>
          <div className="h-2 w-2/3 bg-gray-200 rounded mb-2"></div>
          <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ delay: 0.8 }}
          className="absolute top-40 right-20 w-72 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-30 transform hover:scale-105 transition-transform duration-500"
        >
           <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1565715279542-9104a91324ff?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Mixture" />
          </div>
          <div className="flex items-center gap-2 mb-2">
             <div className="w-6 h-6 rounded-full bg-brand-100"></div>
             <div className="h-2 w-20 bg-gray-200 rounded"></div>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
          <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
