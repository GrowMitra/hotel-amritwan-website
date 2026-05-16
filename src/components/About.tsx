import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../components/images/AboutImage.png'
import {
  MapPin,
  Users,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronRight,
  Hotel,
} from 'lucide-react';

const highlights = [
  {
    icon: MapPin,
    title: 'Prime NH2 Location',
    desc: 'Perfectly located opposite Barhi Thana with smooth highway connectivity.',
  },
  {
    icon: Users,
    title: 'Perfect for Families & Events',
    desc: 'Comfortable stay experience for families, travelers, weddings & celebrations.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Hospitality',
    desc: 'Delivering reliable service, comfort and guest satisfaction since 2023.',
  },
];

const stats = [
  {
    number: '3+',
    label: 'Years of Excellence',
    icon: Award,
  },
  {
    number: '350+',
    label: 'Marriage Hall Capacity',
    icon: Users,
  },
  {
    number: '24×7',
    label: 'Guest Support',
    icon: Hotel,
  },
];

export default function About() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 bg-[#0a0a0a]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/10 blur-[160px]" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <img
                src={aboutImg}
                alt="Hotel Amritwan Lobby"
                className="w-full h-[620px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            {/* Floating Luxury Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -right-6 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 w-[280px] shadow-2xl hidden lg:block"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center">
                  <Sparkles size={26} className="text-black" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    Premium Hospitality
                  </h4>

                  <p className="text-white/60 text-sm">
                    Luxury comfort with warm service
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10 my-5" />

              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold text-amber-300">
                  3+
                </span>

                <span className="text-white/70 text-sm mb-1">
                  Years of Trusted Experience
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            {/* Small Heading */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-amber-400/20 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400" />

              <span className="text-amber-300 text-xs font-semibold tracking-[0.25em] uppercase">
                About Hotel Amritwan
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                Stay Destination
              </span>
            </h2>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-amber-400 to-transparent rounded-full mt-8 mb-10" />

            {/* Description */}
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              Since 2023, Hotel Amritwan has been offering guests a premium
              blend of comfort, convenience, and warm hospitality. Located on
              NH2 near Barhi Thana, we provide the perfect destination for
              travelers, families, business visitors, and celebrations.
            </p>

            <p className="text-white/60 leading-relaxed mb-12">
              From elegant rooms and delicious dining to spacious marriage hall
              facilities, every experience is designed to make your stay
              memorable and relaxing.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {highlights.map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.1,
                  }}
                  className="group flex items-start gap-5"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-400/20 transition-all duration-300">
                    <Icon
                      size={28}
                      className="text-amber-300"
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {title}
                    </h3>

                    <p className="text-white/60 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="group mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(251,191,36,0.3)]"
            >
              Explore More

              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-28"
        >
          {stats.map(({ number, label, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.1,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center group hover:-translate-y-2 transition-all duration-500"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/0 to-yellow-500/0 group-hover:from-amber-400/10 group-hover:to-yellow-500/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-black" />
                </div>

                <h3 className="text-5xl font-bold text-white mb-3">
                  {number}
                </h3>

                <p className="text-white/60 tracking-wide">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}