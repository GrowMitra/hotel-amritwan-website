import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import marriage from '../components/images/Maragehall.jpg'

import {
  Users,
  Flower2,
  CalendarCheck,
  BadgeIndianRupee,
  MessageCircle,
  Sparkles,
  Crown,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const WA_LINK =
  'https://wa.me/919942081357?text=Hello%2C%20I%20want%20to%20book%20the%20marriage%20hall%20at%20Hotel%20Amritwan.';

const details = [
  {
    icon: Users,
    label: 'Guest Capacity',
    value: '200 – 250 Guests',
  },

  {
    icon: BadgeIndianRupee,
    label: 'Hall Charges',
    value: '₹2,000 / Day',
  },

  {
    icon: Flower2,
    label: 'Decoration',
    value: 'Custom Decoration Available',
  },

  {
    icon: CalendarCheck,
    label: 'Advance Booking',
    value: 'Available Throughout The Year',
  },
];

export default function MarriageHall() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="hall"
      className="relative overflow-hidden py-28 bg-[#070707]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-500/10 blur-[180px]" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles size={14} className="text-amber-300" />

              <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold">
                Weddings & Celebrations
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Grand Marriage Hall
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                For Memorable Events
              </span>
            </h2>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-amber-400 to-transparent rounded-full mt-8 mb-8" />

            {/* Description */}
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Celebrate your wedding, reception, engagement, birthday,
              anniversary or special family occasion in a luxurious and elegant
              atmosphere at Hotel Amritwan.
            </p>

            <p className="text-white/55 leading-relaxed mb-12">
              Our spacious banquet hall is designed to host memorable events
              with comfort, convenience and affordability — making every
              celebration truly unforgettable.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {details.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Glossy Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center shadow-lg mb-5">
                      <Icon size={24} className="text-black" />
                    </div>

                    <p className="text-white/50 text-xs uppercase tracking-[0.18em] mb-2">
                      {label}
                    </p>

                    <h4 className="text-white font-semibold text-lg leading-snug">
                      {value}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold shadow-[0_10px_35px_rgba(251,191,36,0.35)] hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={20} />

              Book Your Event

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />

              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-all duration-300" />
            </a>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Image */}
              <div className="relative overflow-hidden h-[650px]">
                <img
                  src={marriage}
                  alt="Marriage Hall"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Floating Luxury Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-6 left-6 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center">
                  <Crown size={22} className="text-black" />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Premium Celebration Venue
                  </p>

                  <p className="text-white/60 text-sm">
                    Elegant • Spacious • Affordable
                  </p>
                </div>
              </motion.div>

              {/* Bottom Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/15 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck
                      size={28}
                      className="text-amber-300"
                    />
                  </div>

                  <div>
                    <h4 className="text-white text-xl font-semibold mb-2">
                      Celebrate Your Special Moments
                    </h4>

                    <p className="text-white/65 leading-relaxed text-sm">
                      From weddings and receptions to birthdays and family
                      gatherings — create unforgettable memories with elegant
                      ambiance and seamless arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}