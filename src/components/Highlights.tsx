import React from 'react';
import { Flame, Wheat, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Flame, label: 'Bold Flavors' },
  { icon: Wheat, label: 'Traditional Roots' },
  { icon: Sparkles, label: 'Premium Quality' },
  { icon: Heart, label: 'Made in India' },
];

const Highlights: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 border-b border-gray-100">
      <div className="flex gap-8 md:gap-16 overflow-x-auto pb-4 justify-start md:justify-center scrollbar-hide">
        {highlights.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex flex-col items-center gap-4 min-w-30 cursor-pointer group"
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center border-[3px] border-brand-200 p-1 group-hover:border-brand-500 transition-colors duration-300">
               <div className="w-full h-full rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                  <item.icon size={32} className="text-gray-700 group-hover:text-brand-600 transition-colors" />
               </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-brand-700 transition-colors whitespace-nowrap">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
