// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Clock, Leaf, UtensilsCrossed, Heart } from 'lucide-react';

// const items = [
//   { icon: Leaf, title: 'Veg & Non-Veg', desc: 'Wide menu catering to all preferences and tastes.' },
//   { icon: Clock, title: 'Open 6 AM – 10 PM', desc: 'Start your day with breakfast and end with dinner.' },
//   { icon: Heart, title: 'Fresh & Hygienic', desc: 'Food prepared with fresh ingredients every day.' },
//   { icon: UtensilsCrossed, title: 'Dine-in & Room Service', desc: 'Enjoy meals in the restaurant or your room.' },
// ];

// export default function Restaurant() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-80px' });

//   return (
//     <section id="restaurant" className="py-24 bg-gray-900 text-white relative overflow-hidden">
//       <div className="absolute inset-0 opacity-10">
//         <img
//           src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&q=60"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
//               alt="Restaurant"
//               className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.15 }}
//           >
//             <span className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase">
//               Dining Experience
//             </span>
//             <h2 className="mt-3 font-serif text-4xl font-bold leading-tight">
//               Fresh Food, Every Day
//             </h2>
//             <div className="w-14 h-0.5 bg-amber-400 mt-4 mb-6" />
//             <p className="text-gray-300 leading-relaxed mb-10">
//               Our in-house restaurant serves wholesome meals prepared with fresh ingredients. Whether you
//               prefer vegetarian delicacies or non-veg specialties, we have something for everyone — from
//               early morning breakfast to late evening dinner.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {items.map(({ icon: Icon, title, desc }, i) => (
//                 <motion.div
//                   key={title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
//                   className="flex gap-3"
//                 >
//                   <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
//                     <Icon size={18} className="text-amber-400" />
//                   </div>
//                   <div>
//                     <div className="font-semibold text-white text-sm">{title}</div>
//                     <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">{desc}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import {
  Clock,
  Leaf,
  UtensilsCrossed,
  Heart,
  Sparkles,
  ChefHat,
  ArrowRight,
  Star,
} from 'lucide-react';

const items = [
  {
    icon: Leaf,
    title: 'Veg & Non-Veg Delicacies',
    desc: 'Enjoy a wide variety of flavorful dishes crafted for every taste and preference.',
  },

  {
    icon: Clock,
    title: 'Open Daily: 6 AM – 10 PM',
    desc: 'From refreshing breakfast to satisfying dinner — we serve throughout the day.',
  },

  {
    icon: Heart,
    title: 'Fresh & Hygienic Preparation',
    desc: 'Prepared daily with fresh ingredients and high hygiene standards.',
  },

  {
    icon: UtensilsCrossed,
    title: 'Dine-In & Room Service',
    desc: 'Enjoy elegant dining ambiance or order directly to your room.',
  },
];

export default function Restaurant() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="restaurant"
      className="relative overflow-hidden py-28 bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-500/10 blur-[180px]" />

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.05]">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Image */}
              <div className="relative overflow-hidden h-[650px]">
                <img
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1400&q=80"
                  alt="Restaurant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-6 left-6 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center">
                  <ChefHat size={24} className="text-black" />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    Premium Dining Experience
                  </p>

                  <p className="text-white/60 text-sm">
                    Fresh • Hygienic • Delicious
                  </p>
                </div>
              </motion.div>

              {/* Bottom Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-1 text-amber-300">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-amber-300"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-white text-lg font-semibold mt-4">
                  Taste the perfect blend of comfort and flavor.
                </p>

                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  From breakfast to dinner, enjoy premium quality meals prepared
                  with care and served with warm hospitality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl mb-8">
              <Sparkles size={14} className="text-amber-300" />

              <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold">
                Fine Dining Restaurant
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Fresh Food
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                Crafted Daily
              </span>
            </h2>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-amber-400 to-transparent rounded-full mt-8 mb-8" />

            {/* Description */}
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Experience delicious dining at Hotel Amritwan with freshly
              prepared meals, elegant ambiance and warm hospitality.
            </p>

            <p className="text-white/55 leading-relaxed mb-12">
              Whether you prefer vegetarian delicacies or flavorful non-veg
              specialties, our restaurant offers a premium dining experience
              for families, travelers and guests throughout the day.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {items.map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Glossy Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center shadow-lg mb-5">
                      <Icon size={24} className="text-black" />
                    </div>

                    <h3 className="text-white text-lg font-semibold mb-3">
                      {title}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold shadow-[0_10px_35px_rgba(251,191,36,0.35)] hover:scale-105 transition-all duration-300"
            >
              Explore Dining

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />

              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-all duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}