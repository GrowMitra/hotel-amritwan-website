import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 40 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="fixed bottom-28 right-6 z-50 group"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl scale-[1.8] opacity-70 group-hover:opacity-100 transition-all duration-500" />

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full border border-amber-400/20 animate-ping opacity-30" />

          {/* Main Button */}
          <div className="relative w-[62px] h-[62px] rounded-full overflow-hidden border border-white/10 bg-gradient-to-br from-[#151515] via-[#1F1F1F] to-[#0B0B0B] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] flex items-center justify-center">

            {/* Gloss Overlay */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/20 blur-md rounded-full" />

            {/* Inner Gradient */}
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-white/[0.05] to-transparent" />

            {/* Icon */}
            <ChevronUp
              size={26}
              strokeWidth={2.2}
              className="text-amber-400 relative z-10 drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}