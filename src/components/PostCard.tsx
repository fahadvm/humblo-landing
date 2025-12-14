import React from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

interface PostCardProps {
  image: string;
  title: string;
  description: string;
  likes: string;
  index: number;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, description, likes, index }) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-brand-100 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-3 flex items-center gap-3">
        <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center border border-brand-200">
          <span className="text-xs font-bold text-brand-600">H</span>
        </div>
        <span className="font-semibold text-sm text-gray-900">humblo.snacks</span>
      </div>
      
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-300"></div>
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-3">
          <div className="flex gap-4">
            <Heart className="text-gray-800 hover:text-red-500 cursor-pointer transition-colors hover:scale-110" size={24} />
            <MessageCircle className="text-gray-800 hover:text-brand-600 cursor-pointer transition-colors hover:scale-110" size={24} />
            <Send className="text-gray-800 hover:text-brand-600 cursor-pointer transition-colors hover:scale-110" size={24} />
          </div>
          <Bookmark className="text-gray-800 hover:text-brand-600 cursor-pointer transition-colors hover:scale-110" size={24} />
        </div>
        
        <div className="font-semibold text-sm mb-1 text-gray-900">{likes} likes</div>
        
        <div className="text-sm text-gray-600">
          <span className="font-semibold mr-2 text-gray-900">humblo.snacks</span>
          {description} <span className="text-brand-600 font-medium">#{title.replace(/\s+/g, '')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
