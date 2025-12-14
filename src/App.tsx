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
      image: "p6.png",
      title: "Mixture Ripe",
      description: "A colorful bowl of ripe seasonal fruits, packed with freshness, nutrients, and natural sweetness.",
      likes: "1,240"
    },
    {
      image: "p5.png",
      title: "Ripe Mango",
      description:"Naturally ripened mangoes, fresh, juicy, and packed with vitamins and goodness.",
      likes: "856"
    },
    {
      image: "p4.jpg",
      title: "Ripe Banana",
      description:"Fresh, ripe bananas rich in energy, crispy, golden, nutrients, and natural sweetness.",
      likes: "2,103"
    },
    {
      image: "p1.jpg",
      title: " Masala Chips",
      description: "Light, crispy coconut chips made from fresh coconut, perfectly roasted for crunch.",
      likes: "1,240"
    },
    {
      image: "p3.jpg",
      title: "Ripe Jackfruit",
      description: "Sweet, juicy ripe jackfruit with a rich tropical aroma and soft, golden texture.",
      likes: "856"
    },
    {
      image: "p2.jpg",
      title: "Coconut Masala Chips",
      description: "Crunchy coconut chips tossed in aromatic spices for a bold and flavorful snack..",
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
