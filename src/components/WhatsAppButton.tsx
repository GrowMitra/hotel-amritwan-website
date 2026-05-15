import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919942081357?text=Hello%20Hotel%20Amritwan%20Team,%20I%20would%20like%20to%20inquire%20about%20room%20or%20marriage%20hall%20booking.%20Please%20share%20the%20details.%20Thank%20you!';
export default function WhatsAppButton() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1.2,
        type: 'spring',
        stiffness: 180,
        damping: 12,
      }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl scale-150" />

      {/* Main Button */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 border border-white/20 shadow-[0_15px_45px_rgba(34,197,94,0.45)] overflow-hidden">
        
        {/* Gloss Effect */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/30 blur-md rounded-full" />

        {/* WhatsApp Icon */}
        <FaWhatsapp
          size={30}
          className="relative text-white drop-shadow-lg"
        />
      </div>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-xl text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-white/10">
        Chat With Us
      </div>
    </motion.a>
  );
}