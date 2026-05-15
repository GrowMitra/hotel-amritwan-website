import { useRef, useState } from 'react';

import {
  motion,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import image1 from '../components/images/gallery/standard.jpg'
import image2 from '../components/images/gallery/Deluxe.jpg'
import image3 from '../components/images/gallery/ marriageHall.jpg'
import image4 from '../components/images/gallery/Restaurant.jpg'
import image5 from '../components/images/gallery/Family room.jpg'
import image6 from '../components/images/gallery/Seating.jpg'
import image7 from '../components/images/gallery/room1.png'


import {
  X,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

const images = [
  {
    src: image1,
    label: 'Standard Room',
    category: 'Luxury Stay',
    span: 'md:col-span-1 md:row-span-1',
  },

  {
    src: image2,
    label: 'Deluxe Room',
    category: 'Premium Comfort',
    span: 'md:col-span-1 md:row-span-1',
  },

  {
    src: image3,
    label: 'Marriage Hall',
    category: 'Grand Celebrations',
    span: 'md:col-span-1 md:row-span-2',
  },

  {
    src: image4,
    label: 'Restaurant Area',
    category: 'Fine Dining',
    span: 'md:col-span-1 md:row-span-1',
  },

  {
    src: image5,
    label: 'Family Suite',
    category: 'Luxury Suite',
    span: 'md:col-span-1 md:row-span-1',
  },

  {
    src: image6,
    label: 'Hotel Lobby',
    category: 'Elegant Interior',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    src: image7,
    label: 'Classic Room',
    category: 'Luxury Suite',
    span: 'md:col-span-1 md:row-span-1',
  },
];

export default function Gallery() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-28 bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-500/10 blur-[180px]" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl mb-8">
            <Sparkles size={14} className="text-amber-300" />

            <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold">
              Luxury Showcase
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Explore The Beauty
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
              Of Hotel Amritwan
            </span>
          </h2>

          {/* Divider */}
          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 mb-8" />

          {/* Desc */}
          <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed">
            Discover elegant interiors, premium accommodations, fine dining and
            grand celebration spaces designed to create unforgettable
            experiences.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[260px] gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              onClick={() => setSelected(image.src)}
              className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl cursor-pointer shadow-[0_20px_70px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-500 ${image.span}`}
            >
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 z-10 pointer-events-none" />

              {/* Image */}
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-amber-300 text-xs uppercase tracking-[0.2em] mb-2">
                      {image.category}
                    </p>

                    <h3 className="text-white text-2xl font-semibold">
                      {image.label}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight
                      size={20}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-5"
            onClick={() => setSelected(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-14 h-14 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-all"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <motion.img
              src={selected}
              alt=""
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-full max-h-[90vh] rounded-[32px] border border-white/10 shadow-[0_25px_100px_rgba(0,0,0,0.65)] object-cover"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Bottom Text */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl text-white/70 text-sm">
              Hotel Amritwan • Luxury Hospitality Experience
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}