import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import standard from '../components/images/roompriceImg/standard.jpg'
import Deluxe from '../components/images/roompriceImg/Deluxe.jpg'
import family from '../components/images/roompriceImg/Family room.jpg'


import {
  Wifi,
  Tv,
  Zap,
  ConciergeBell,
  Wind,
  Clock, // Code
  MessageCircle,
  CheckCircle,
  Crown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const WA_LINK =
  'https://wa.me/919942081357?text=Hello%2C%20I%20want%20to%20book%20a%20room%20at%20Hotel%20Amritwan.';

const features = [
  { icon: Wind, label: 'Air Conditioned' },
  { icon: Tv, label: 'Smart Entertainment' },
  { icon: Zap, label: '24×7 Power Backup' },
  { icon: ConciergeBell, label: 'Premium Room Service' },
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: ShieldCheck, label: 'Hygienic & Secure' },
];

const rooms = [
  {
    title: 'Standard Room',
    price: '₹800',
    image: standard,
    tag: 'Budget Comfort',
    tagColor: 'from-blue-500 to-cyan-500',
    features: [
      'Comfortable Bed',
      'Attached Washroom',
      'LED TV & WiFi',
      'Ideal for Solo Travelers',
    ],
  },

  {
    title: 'Deluxe AC Room',
    price: '₹1,200',
    image: Deluxe,
    tag: 'Most Popular',
    tagColor: 'from-amber-400 to-yellow-500',
    popular: true,
    features: [
      'Premium Interior Design',
      'Luxury Bedding Setup',
      'Air Conditioning',
      'Couple & Family Friendly',
    ],
  },

  {
    title: 'Family Suite',
    price: '₹1,800',
    image: family,
    tag: 'Luxury Suite',
    tagColor: 'from-amber-500 to-orange-500',
    features: [
      'Spacious Family Space',
      'Private Lounge Area',
      'Priority Services',
      'Perfect for Long Stay',
    ],
  },
];

export default function Rooms() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="rooms"
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl mb-8">
            <Sparkles size={14} className="text-amber-300" />

            <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold">
              Premium Accommodation
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Luxury Rooms
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
              Designed For Comfort
            </span>
          </h2>

          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 mb-8" />

          <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed">
            Elegant interiors, premium comfort, modern facilities and warm
            hospitality — every room is crafted to deliver a luxurious stay
            experience.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className={`group relative overflow-hidden rounded-[32px] border transition-all duration-500 hover:-translate-y-3 ${
                room.popular
                  ? 'border-amber-400/40 bg-white/[0.08]'
                  : 'border-white/10 bg-white/[0.04]'
              } backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]`}
            >
              {/* Glossy Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none" />

              {/* Popular Badge */}
              {room.popular && (
                <div className="absolute top-5 left-5 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold shadow-xl">
                  <Crown size={14} />
                  Guest Favorite
                </div>
              )}

              {/* Room Image */}
              <div className="relative overflow-hidden h-[320px]">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Tag */}
                <div
                  className={`absolute top-5 right-5 bg-gradient-to-r ${room.tagColor} px-4 py-2 rounded-full text-xs font-bold text-black shadow-lg`}
                >
                  {room.tag}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-4">
                  {room.title}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl font-bold text-amber-300">
                    {room.price}
                  </span>

                  <span className="text-white/50 mb-1">
                    /night
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {room.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-400/15 flex items-center justify-center">
                        <CheckCircle
                          size={14}
                          className="text-amber-300"
                        />
                      </div>

                      <span className="text-white/75 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn relative overflow-hidden flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    room.popular
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-[0_10px_30px_rgba(251,191,36,0.35)]'
                      : 'bg-white/10 border border-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <MessageCircle size={18} />

                  Book This Room

                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />

                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative overflow-hidden mt-24 rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-10 lg:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
        >
          {/* Glossy Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Heading */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <h3 className="text-4xl font-bold text-white mb-3">
                  Premium In-Room Amenities
                </h3>

                <p className="text-white/60 max-w-2xl">
                  Every room includes thoughtfully designed modern facilities
                  to ensure a relaxing and luxurious guest experience.
                </p>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-300 text-sm font-medium">
                Luxury Comfort Included
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-14">
              {features.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 text-center hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-yellow-500/0 group-hover:from-amber-400/10 group-hover:to-yellow-500/10 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center mb-4 shadow-lg">
                      <Icon size={24} className="text-black" />
                    </div>

                    <p className="text-white/75 text-sm font-medium">
                      {label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-10">
              
              {/* Check-in */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/15 flex items-center justify-center">
                    <Clock size={22} className="text-amber-300" />
                  </div>

                  <h4 className="text-2xl font-semibold text-white">
                    Check-In Details
                  </h4>
                </div>

                <div className="space-y-3 text-white/70">
                  <p>
                    <span className="text-white font-semibold">
                      Check-In:
                    </span>{' '}
                    12:00 PM
                  </p>

                  <p>
                    <span className="text-white font-semibold">
                      Check-Out:
                    </span>{' '}
                    11:00 AM
                  </p>

                  <p className="text-sm text-white/50 pt-2">
                    Early check-in & late check-out available on request.
                  </p>
                </div>
              </div>

              {/* Offers */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/15 flex items-center justify-center">
                    <Sparkles size={22} className="text-amber-300" />
                  </div>

                  <h4 className="text-2xl font-semibold text-white">
                    Exclusive Offers
                  </h4>
                </div>

                <div className="space-y-3 text-white/70">
                  <p>✓ Long Stay Discount Packages</p>

                  <p>✓ Group Booking Special Rates</p>

                  <p>✓ Corporate & Business Pricing</p>

                  <p>✓ Wedding Guest Accommodation Deals</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}