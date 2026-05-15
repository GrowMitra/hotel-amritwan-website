import { useState, useEffect } from 'react';
import logo from "../components/images/hotel-logo.png"
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Marriage Hall', href: '#hall' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            
            {/* Logo */}
            
          <button
            onClick={() => handleNav('#hero')}
            className="group flex items-center gap-4">
            {/* Logo Container */}
            <div className="relative flex items-center justify-center">
              
              {/* Soft Luxury Glow */}
              <div className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full scale-125 opacity-70 group-hover:opacity-100 transition-all duration-500" />

              {/* Logo */}
              <img
                src={logo}
                alt="Hotel Amritwan Logo"
                className="relative w-20 md:w-24 h-auto object-contain drop-shadow-[0_8px_25px_rgba(251,191,36,0.35)] transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </button>
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative text-sm font-medium tracking-wide text-white/80 hover:text-amber-300 transition-all duration-300 group"
                >
                  {link.label}

                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-300 to-yellow-500 transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}

              {/* CTA Button */}
              <a
                href="tel:+919942081357"
                className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Phone size={16} />

                <span>Book Now</span>

                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />

                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-all duration-300" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden relative z-50 text-white"
              aria-label="Toggle Menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-[#0c0c0c] border-l border-white/10 z-50 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full px-7 pt-24 pb-8">
                
                {/* Heading */}
                <div className="mb-10">
                  <h2 className="text-3xl font-serif text-white font-bold">
                    Hotel Amritwan
                  </h2>

                  <p className="text-amber-300 text-sm mt-2 tracking-wider uppercase">
                    Premium Stay Experience
                  </p>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-2">
                  {links.map((link, index) => (
                    <motion.button
                      key={link.href}
                      onClick={() => handleNav(link.href)}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="group flex items-center justify-between py-4 border-b border-white/5 text-left"
                    >
                      <span className="text-white/85 text-lg font-medium group-hover:text-amber-300 transition-colors">
                        {link.label}
                      </span>

                      <ChevronRight
                        size={18}
                        className="text-white/40 group-hover:text-amber-300 group-hover:translate-x-1 transition-all"
                      />
                    </motion.button>
                  ))}
                </nav>

                {/* Bottom CTA */}
                <div className="mt-auto">
                  <a
                    href="tel:+919942081357"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold shadow-xl"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>

                  <p className="text-center text-white/40 text-xs mt-4 tracking-wide">
                    Opposite Barhi Thana, NH2, Hazaribagh
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}