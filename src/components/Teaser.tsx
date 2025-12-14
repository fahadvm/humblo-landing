import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';

interface TeaserProps {
  onNotify: (email: string) => Promise<void>;
}

const Teaser: React.FC<TeaserProps> = ({ onNotify }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    await onNotify(email);
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="w-full bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 py-24 px-6 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          We’re almost ready to crunch.
        </h2>
        <p className="text-brand-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
          Join the exclusive list to get early access and a special launch discount.
        </p>

        {/* Optional Countdown Placeholder */}
        <div className="flex justify-center gap-4 mb-12 text-white">
           {['05', '12', '45', '30'].map((num, i) => (
             <div key={i} className="flex flex-col items-center">
               <div className="text-3xl md:text-4xl font-bold bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px] border border-white/20">{num}</div>
               <span className="text-xs text-brand-200 mt-2 uppercase tracking-wider">{['Days', 'Hours', 'Mins', 'Secs'][i]}</span>
             </div>
           ))}
        </div>

        {status === 'success' ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center text-green-400 gap-2 bg-white/10 p-6 rounded-2xl backdrop-blur-md inline-flex"
          >
            <CheckCircle size={32} />
            <span className="font-medium text-lg text-white">You're on the list!</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white/10 text-white placeholder-brand-200 backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-brand-900 font-bold py-4 px-8 rounded-xl hover:bg-brand-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-brand-900/50"
            >
              {status === 'loading' && <Loader2 className="animate-spin" size={18} />}
              Get Early Access
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Teaser;
