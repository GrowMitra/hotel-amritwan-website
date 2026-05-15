// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { MapPin, Phone, Clock, MessageCircle, Mail, Navigation } from 'lucide-react';

// const WA_LINK =
//   'https://wa.me/919942081357?text=Hello%2C%20I%20want%20to%20book%20a%20room%20or%20marriage%20hall%20at%20Hotel%20Amritwan.';

// export default function Contact() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-80px' });

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: 'Address',
//       content: 'Opposite Barhi Thana, NH2, Dhanbad Road, Barhi, Hazaribagh, Jharkhand',
//       href: 'https://maps.google.com/maps?q=Barhi+Thana+NH2+Hazaribagh',
//       linkText: 'Get Directions',
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       content: '+91 9942081357',
//       href: 'tel:+919942081357',
//       linkText: 'Call Now',
//     },
//     {
//       icon: Clock,
//       title: 'Reception',
//       content: 'Open 24/7 for guest services',
//       secondary: 'Always available for your needs',
//     },
//   ];

//   return (
//     <section id="contact" className="py-32 bg-gradient-to-b from-amber-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6">
//             <span className="w-2 h-2 bg-amber-500 rounded-full" />
//             <span className="text-amber-700 text-sm font-semibold">GET IN TOUCH</span>
//           </div>
//           <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">Contact & Location</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             We're here to help. Reach out for bookings, inquiries, or just to say hello!
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             {contactInfo.map(({ icon: Icon, title, content, secondary, href, linkText }, i) => (
//               <motion.div
//                 key={title}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 className="group"
//               >
//                 <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200">
//                   <div className="flex items-start gap-5">
//                     <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center group-hover:from-amber-100 group-hover:to-amber-200 transition-all">
//                       <Icon size={24} className="text-amber-600" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
//                       <p className="text-gray-700 font-medium mb-3">{content}</p>
//                       {secondary && <p className="text-gray-600 text-sm">{secondary}</p>}
//                       {href && (
//                         <a
//                           href={href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm mt-3"
//                         >
//                           {linkText}
//                           <Navigation size={14} />
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}

//             {/* CTA Buttons */}
//             <div className="grid grid-cols-2 gap-4 pt-4">
//               <a
//                 href={WA_LINK}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center gap-2 py-4 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
//               >
//                 <MessageCircle size={18} />
//                 <span className="hidden sm:inline">WhatsApp</span>
//               </a>
//               <a
//                 href="tel:+919942081357"
//                 className="flex items-center justify-center gap-2 py-4 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
//               >
//                 <Phone size={18} />
//                 <span className="hidden sm:inline">Call</span>
//               </a>
//             </div>
//           </motion.div>

//           {/* Map */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="rounded-3xl overflow-hidden shadow-xl h-[500px] lg:h-full min-h-[420px]"
//           >
//             <iframe
//               title="Hotel Amritwan Location"
//               src="https://maps.google.com/maps?q=Barhi+Thana+NH2+Hazaribagh+Jharkhand&output=embed"
//               width="100%"
//               height="100%"
//               loading="lazy"
//               className="w-full h-full border-0"
//               allowFullScreen
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </motion.div>
//         </div>

//         {/* Email Contact */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mt-16 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl text-white text-center"
//         >
//           <Mail size={32} className="mx-auto mb-4 text-amber-400" />
//           <h3 className="text-2xl font-bold mb-2">For Bulk Bookings & Events</h3>
//           <p className="text-gray-300 mb-6">Get in touch for corporate rates and event planning</p>
//           <a
//             href="tel:+919942081357"
//             className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all duration-300"
//           >
//             <Phone size={18} />
//             Contact Our Events Team
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import { useRef } from 'react';

import {
  motion,
  useInView,
} from 'framer-motion';

import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Mail,
  Navigation,
  Sparkles,
  ArrowUpRight,
  Crown,
  ShieldCheck,
} from 'lucide-react';

const WA_LINK =
  'https://wa.me/919942081357?text=Hello%2C%20I%20want%20to%20book%20a%20room%20or%20marriage%20hall%20at%20Hotel%20Amritwan.';

const contactInfo = [
  {
    icon: MapPin,

    title: 'Hotel Address',

    content:
      'Opposite Barhi Thana, NH2, Dhanbad Road, Barhi, Hazaribagh, Jharkhand',

    href: 'https://maps.google.com/maps?q=Barhi+Thana+NH2+Hazaribagh',

    linkText: 'Get Directions',
  },

  {
    icon: Phone,

    title: 'Reservations',

    content: '+91 9942081357',

    secondary: 'Available for bookings & inquiries',

    href: 'tel:+919942081357',

    linkText: 'Call Now',
  },

  {
    icon: Clock,

    title: 'Reception Desk',

    content: 'Open 24×7 For Guest Assistance',

    secondary:
      'Dedicated support for reservations, stays and events.',
  },
];

export default function Contact() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[950px] bg-amber-500/10 blur-[180px]" />

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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/20 bg-white/5 backdrop-blur-xl mb-8">
            <Sparkles size={14} className="text-amber-300" />

            <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold">
              Contact & Location
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Let’s Plan Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
              Perfect Stay
            </span>
          </h2>

          {/* Divider */}
          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 mb-8" />

          {/* Desc */}
          <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed">
            Reach out for room reservations, marriage hall bookings or event
            planning assistance. Our team is always ready to help you.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map(
              (
                {
                  icon: Icon,
                  title,
                  content,
                  secondary,
                  href,
                  linkText,
                },
                index
              ) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
                >
                  {/* Glossy Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-400/10 to-yellow-500/5" />

                  <div className="relative z-10 flex gap-5">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center shadow-xl flex-shrink-0">
                      <Icon size={28} className="text-black" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white text-2xl font-semibold mb-3">
                        {title}
                      </h3>

                      <p className="text-white/70 leading-relaxed mb-3">
                        {content}
                      </p>

                      {secondary && (
                        <p className="text-white/45 text-sm mb-4">
                          {secondary}
                        </p>
                      )}

                      {href && (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
                        >
                          {linkText}

                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="grid grid-cols-2 gap-5 pt-3"
            >
              {/* WhatsApp */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[24px] bg-gradient-to-r from-green-500 to-green-600 p-[1px] shadow-[0_15px_50px_rgba(34,197,94,0.25)]"
              >
                <div className="relative flex items-center justify-center gap-3 rounded-[24px] bg-green-500 py-5 font-semibold text-white transition-all duration-300 group-hover:bg-green-600">
                  <MessageCircle size={20} />

                  <span>WhatsApp</span>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:+919942081357"
                className="group relative overflow-hidden rounded-[24px] bg-gradient-to-r from-amber-300 to-yellow-500 p-[1px] shadow-[0_15px_50px_rgba(251,191,36,0.25)]"
              >
                <div className="relative flex items-center justify-center gap-3 rounded-[24px] bg-black py-5 font-semibold text-white transition-all duration-300 group-hover:bg-[#111]">
                  <Phone size={20} />

                  <span>Call Now</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.45)] min-h-[650px]"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 pointer-events-none z-10" />

            {/* Map */}
         <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="rounded-[32px] overflow-hidden shadow-2xl border border-white/10 h-[500px] lg:h-full min-h-[420px]"
>
  <iframe
    title="Hotel Amritwan Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.6227880893946!2d85.42584918488649!3d24.30103301538571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f36f9112ae9ab1%3A0xe02ffed30300ab8d!2sHotel%20Amritwan!5e0!3m2!1sen!2sin!4v1778666100885!5m2!1sen!2sin"
    width="100%"
    height="100%"
    loading="lazy"
    className="w-full h-full border-0 grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</motion.div>

            {/* Floating Card */}
            <div className="absolute left-6 right-6 bottom-6 z-20 rounded-[28px] border border-white/10 bg-black/55 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-4">
                    <Navigation
                      size={14}
                      className="text-amber-300"
                    />

                    <span className="text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">
                      Prime Location
                    </span>
                  </div>

                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Hotel Amritwan
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    Located conveniently on NH2, opposite Barhi Thana,
                    offering easy connectivity and premium comfort.
                  </p>
                </div>

                <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 items-center justify-center shadow-xl">
                  <MapPin
                    size={26}
                    className="text-black"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Luxury CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-[38px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 p-[1px] shadow-[0_20px_80px_rgba(251,191,36,0.25)]">
            <div className="relative overflow-hidden rounded-[38px] bg-[#0b0b0b] px-8 py-12 md:px-14 md:py-16">
              {/* Gloss */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left */}
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/10 mb-6">
                    <Crown size={14} className="text-amber-300" />

                    <span className="text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">
                      Luxury Hospitality
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                    Book Your Premium
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                      Stay Experience
                    </span>
                  </h3>

                  <p className="text-white/60 text-lg leading-relaxed">
                    Comfortable rooms, elegant event spaces and premium
                    hospitality — all crafted for unforgettable experiences.
                  </p>
                </div>

                {/* Right */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 shadow-xl"
                  >
                    <MessageCircle size={20} />

                    WhatsApp Booking
                  </a>

                  <a
                    href="tel:+919942081357"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-300 to-yellow-500 text-black font-bold transition-all duration-300 shadow-xl hover:scale-105"
                  >
                    <Phone size={20} />

                    Call Reception
                  </a>
                </div>
              </div>

              {/* Bottom Trust */}
              <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck
                    size={16}
                    className="text-amber-300"
                  />

                  Secure Reservations
                </div>

                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />

                <div>24×7 Guest Support</div>

                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />

                <div>Premium Hospitality Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
