import { useRef } from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import FeedGrid from './components/FeedGrid';
import Teaser from './components/Teaser';
import Footer from './components/Footer';

function App() {
  const teaserRef = useRef<HTMLDivElement>(null);

  const scrollToTeaser = () => {
    teaserRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNotify = async (email: string) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Email registered:', email);
        localStorage.setItem('humblo_notify_email', email);
        resolve();
      }, 1500);
    });
  };

  const posts = [
    {
      image: "https://images.unsplash.com/photo-1694101493190-acc6c4418ad7?auto=format&fit=crop&w=800&q=80",
      title: "Potato Chips",
      description: "Crispy, golden, and seasoned to perfection. The classic crunch you crave.",
      likes: "1,240"
    },
    {
      image: "https://images.unsplash.com/photo-1680359939304-7e27ee183e7a?auto=format&fit=crop&w=800&q=80",
      title: "Murukku Magic",
      description: "Twisted tradition in every bite. Authentic spices, handmade love.",
      likes: "856"
    },
    {
      image: "https://images.unsplash.com/photo-1565715279542-9104a91324ff?auto=format&fit=crop&w=800&q=80",
      title: "Spicy Mixture",
      description: "A bold mix of flavors for the brave snacker. Warning: Highly addictive.",
      likes: "2,103"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Hero onNotifyClick={scrollToTeaser} />

      <Highlights />

      <FeedGrid posts={posts} />

      <div ref={teaserRef}>
        <Teaser onNotify={handleNotify} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
