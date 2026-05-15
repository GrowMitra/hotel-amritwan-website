// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Wifi, ParkingCircle, Wind, Tv, Zap, ConciergeBell, ShieldCheck } from 'lucide-react';

// const amenities = [
//   { icon: Wifi, label: 'Free WiFi', desc: 'High-speed internet throughout the property' },
//   { icon: ParkingCircle, label: 'Free Parking', desc: 'Ample secure parking space' },
//   { icon: Wind, label: 'AC Rooms', desc: 'Climate-controlled rooms for your comfort' },
//   { icon: Tv, label: 'Television', desc: 'LED TV with multiple channels' },
//   { icon: Zap, label: 'Power Backup', desc: '24/7 power backup, never in the dark' },
//   { icon: ConciergeBell, label: 'Room Service', desc: 'Attentive in-room dining service' },
//   { icon: ShieldCheck, label: 'CCTV Security', desc: 'Round-the-clock surveillance cameras' },
// ];

// export default function Amenities() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-80px' });

//   return (
//     <section id="amenities" className="py-24 bg-amber-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
//             What We Offer
//           </span>
//           <h2 className="mt-3 font-serif text-4xl font-bold text-gray-900">Hotel Amenities</h2>
//           <div className="w-14 h-0.5 bg-amber-400 mx-auto mt-4 mb-6" />
//           <p className="text-gray-500 max-w-lg mx-auto">
//             Everything you need for a comfortable and worry-free stay.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {amenities.map(({ icon: Icon, label, desc }, i) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 24 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
//             >
//               <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-colors">
//                 <Icon size={24} className="text-amber-500" />
//               </div>
//               <h3 className="font-semibold text-gray-900 text-sm mb-1">{label}</h3>
//               <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
//             </motion.div>
//           ))}

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: amenities.length * 0.08 }}
//             className="bg-amber-500 rounded-2xl p-6 text-center shadow-md flex flex-col items-center justify-center"
//           >
//             <p className="text-white font-semibold text-sm mb-3 leading-snug">
//               Experience comfort at its best
//             </p>
//             <a
//               href="tel:+919942081357"
//               className="text-xs font-bold text-amber-900 bg-white rounded-full px-4 py-2 hover:bg-amber-50 transition-colors"
//             >
//               Call to Book
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import {
  Wifi,
  ParkingCircle,
  Wind,
  Tv,
  Zap,
  ConciergeBell,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Crown,
  CheckCircle2,
} from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    label: 'High-Speed WiFi',
    desc: 'Seamless internet connectivity available across the property.',
  },

  {
    icon: ParkingCircle,
    label: 'Free Secure Parking',
    desc: 'Spacious and secure parking area for all guests.',
  },

  {
    icon: Wind,
    label: 'Air Conditioned Rooms',
    desc: 'Comfortable climate-controlled luxury accommodations.',
  },

  {
    icon: Tv,
    label: 'Smart Entertainment',
    desc: 'LED television with premium entertainment channels.',
  },

  {
    icon: Zap,
    label: '24×7 Power Backup',
    desc: 'Uninterrupted electricity and backup support at all times.',
  },

  {
    icon: ConciergeBell,
    label: 'Premium Room Service',
    desc: 'Quick and attentive room service for maximum comfort.',
  },

  {
    icon: ShieldCheck,
    label: 'CCTV Security',
    desc: '24-hour surveillance and guest safety monitoring.',
  },
];

export default function Amenities() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="amenities"
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
              Premium Facilities
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Luxury Amenities
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
              Crafted For Comfort
            </span>
          </h2>

          {/* Divider */}
          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 mb-8" />

          {/* Description */}
          <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed">
            Experience a premium stay with thoughtfully designed modern
            amenities, elegant comfort and seamless hospitality services.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {amenities.map(({ icon: Icon, label, desc }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-7 hover:-translate-y-3 transition-all duration-500 shadow-[0_15px_60px_rgba(0,0,0,0.35)]"
            >
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-400/10 to-yellow-500/5" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center shadow-xl mb-6">
                  <Icon size={28} className="text-black" />
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-3 leading-snug">
                  {label}
                </h3>

                {/* Desc */}
                <p className="text-white/55 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Premium CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: amenities.length * 0.08,
            }}
            className="relative overflow-hidden rounded-[32px] border border-amber-400/20 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 p-8 flex flex-col justify-between shadow-[0_20px_80px_rgba(251,191,36,0.25)]"
          >
            {/* Glossy Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-70 pointer-events-none" />

            <div className="relative z-10">
              {/* Crown */}
              <div className="w-16 h-16 rounded-2xl bg-black/10 backdrop-blur-xl flex items-center justify-center mb-6">
                <Crown size={30} className="text-black" />
              </div>

              {/* Text */}
              <h3 className="text-3xl font-bold text-black leading-tight mb-4">
                Experience Luxury
              </h3>

              <p className="text-black/75 leading-relaxed mb-8">
                Enjoy premium hospitality, modern comfort and a relaxing stay
                experience at Hotel Amritwan.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-10">
                {[
                  'Elegant Rooms',
                  'Premium Service',
                  'Family Friendly',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-black"
                    />

                    <span className="text-black/80 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="tel:+919942081357"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Call To Book

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}