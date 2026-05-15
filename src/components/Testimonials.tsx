import { useRef } from 'react';

import {
  motion,
  useInView,
} from 'framer-motion';

import {
  Star,
  Quote,
  Sparkles,
  Crown,
  ShieldCheck,
  UserCircle2,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Traveler',

    content:
      'Stayed here during my work trip on NH2 Barhi and honestly had a very smooth experience. Room was clean, AC worked perfectly and staff behavior was polite. If you are looking for a budget hotel in Barhi Hazaribagh with comfortable rooms and easy highway access, Hotel Amritwan is a really good option.',

    rating: 5,
  },

  {
    name: 'Priya Sharma',
    role: 'Event Organizer',

    content:
      "Booked the marriage hall for my daughter's engagement function and everything was managed properly. Decoration setup, seating arrangement and guest space were good for our family event. One of the best affordable marriage halls near Barhi Thana with supportive staff and decent ambiance.",

    rating: 5,
  },

  {
    name: 'Vikram Patel',
    role: 'Family Vacationer',

    content:
      'We stayed here with family while travelling through Hazaribagh and the experience was comfortable. Rooms were spacious, food tasted fresh and parking was available which made things easier. Good family hotel near NH2 Barhi for short stays, food and comfortable accommodation.',

    rating: 5,
  },
];

const stats = [
  {
    value: '4.8★',
    label: 'Guest Rating',
  },

  {
    value: '500+',
    label: 'Happy Guests',
  },

  {
    value: '98%',
    label: 'Recommended',
  },

  {
    value: '24×7',
    label: 'Guest Support',
  },
];

export default function Testimonials() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-32 bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-500/10 blur-[180px]" />

      {/* Luxury Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-32 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(251,191,36,0.08)]">
            <Sparkles size={14} className="text-amber-300" />

            <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold">
              Guest Experiences
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            What Our Guests
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
              Say About Us
            </span>
          </h2>

          {/* Divider */}
          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 mb-8" />

          {/* Description */}
          <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed">
            Trusted by travelers, families and event organizers for premium
            hospitality, elegant comfort and memorable experiences at Hotel
            Amritwan Barhi.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-8 hover:-translate-y-3 transition-all duration-500 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
            >
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none" />

              {/* Golden Glow */}
              <div className="absolute -top-24 -right-24 w-52 h-52 bg-amber-400/10 blur-3xl rounded-full group-hover:bg-amber-400/20 transition-all duration-500" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-400/10 to-yellow-500/5" />

              {/* Border Shine */}
              <div className="absolute inset-[1px] rounded-[33px] border border-white/5 pointer-events-none" />

              <div className="relative z-10">
                {/* Top */}
                <div className="flex items-center justify-between mb-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.08)]">
                    <Quote
                      size={20}
                      className="text-amber-300"
                    />
                  </div>
                </div>

                {/* Review */}
                <p className="text-white/70 leading-relaxed text-[15px] mb-8">
                  “{testimonial.content}”
                </p>

                {/* User */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  
                  {/* Human Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full" />

                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/15 to-yellow-500/10 border border-white/10 flex items-center justify-center">
                      <UserCircle2
                        size={34}
                        className="text-amber-300"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>

                    <p className="text-amber-300 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl p-10 md:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            
            {/* Premium Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none" />

            <div className="absolute -top-40 right-0 w-[320px] h-[320px] bg-amber-400/10 blur-[120px]" />

            {/* Top Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/10 mb-5">
                  <Crown size={14} className="text-amber-300" />

                  <span className="text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">
                    Trusted Hospitality
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Premium Comfort
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                    Loved By Guests
                  </span>
                </h3>
              </div>

              {/* Verified Box */}
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(251,191,36,0.08)]">
                <ShieldCheck
                  size={26}
                  className="text-amber-300"
                />

                <div>
                  <div className="text-white font-semibold">
                    Verified Guest Reviews
                  </div>

                  <div className="text-white/50 text-sm">
                    Real experiences from our valued guests
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20 p-8 text-center hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />

                  {/* Glow */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-400/10 blur-3xl rounded-full group-hover:bg-amber-400/20 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-3">
                      {item.value}
                    </div>

                    <div className="text-white/60 text-sm uppercase tracking-[0.15em]">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}