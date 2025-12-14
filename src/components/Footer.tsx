import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 flex flex-col">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-brand-700">Humblo</h1>

        <div className="flex gap-4">
       

         
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-5xl font-extrabold text-brand-900 leading-tight">
            Delicious food.
            <br />
            Delivered with <span className="text-brand-600">love</span>.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Humblo brings you tasty, affordable meals straight to your door.
            Fresh, fast, and made for you.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/humbloeats/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-brand-900 border-2 border-brand-100 font-semibold py-4 px-8 rounded-2xl hover:bg-brand-50 hover:border-brand-200 transition-all text-lg"
            >
              <Instagram size={20} />
              Follow on Instagram
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917558019817?text=Hi%20Humblo%20Team!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 text-white font-semibold py-4 px-8 rounded-2xl hover:bg-green-600 transition-all text-lg"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Humblo Eats. All rights reserved.
      </footer>

      {/* FLOATING WHATSAPP */}
   
    </div>
  );
}
