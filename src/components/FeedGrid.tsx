import React from 'react';
import PostCard from './PostCard';

interface FeedGridProps {
  posts: Array<{
    image: string;
    title: string;
    description: string;
    likes: string;
  }>;
}

const FeedGrid: React.FC<FeedGridProps> = ({ posts }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-sm">#</span>
          Latest Drops
        </h2>
        <button className="text-brand-600 font-medium hover:text-brand-700 transition-colors text-sm">View All Posts</button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <PostCard 
            key={index}
            index={index}
            {...post}
          />
        ))}
      </div>
    </section>
  );
};

export default FeedGrid;
