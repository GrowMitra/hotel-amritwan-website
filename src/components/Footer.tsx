import {
  Hotel,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from "../components/images/hotel-logo.png"

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Marriage Hall', href: '#hall' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/hotel.amritwan/',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61570990221905',
    label: 'Facebook',
  },
  {
    icon: Youtube,
    href: 'https://youtube.com/',
    label: 'YouTube',
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/919942081357',
    label: 'WhatsApp',
  },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="absolute -top-32 left-0 w-80 h-80 bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs tracking-[0.25em] uppercase mb-6">
                  Luxury Stay Experience
                </div>

                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Experience Comfort, Luxury &
                  <span className="block text-amber-400">
                    Warm Hospitality
                  </span>
                </h2>

                <p className="text-white/65 leading-relaxed text-lg">
                  Stay at Hotel Amritwan and enjoy premium rooms,
                  delicious dining, elegant marriage hall facilities,
                  and personalized hospitality on NH2, Hazaribagh.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href="tel:+919942081357"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-[0_20px_60px_rgba(245,158,11,0.35)] hover:scale-[1.03] transition-all duration-300"
                >
                  <Phone size={18} />
                  Call Now
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>

                <button
                  onClick={() => handleNav('#rooms')}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300"
                >
                  Explore Rooms
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-14 pb-16 border-b border-white/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* <div className="flex items-center gap-4 mb-7">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_10px_30px_rgba(245,158,11,0.35)]">
                <Hotel size={28} className="text-white" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wide">
                  Hotel Amritwan
                </h3>
                <p className="text-amber-400 text-sm tracking-[0.2em] uppercase">
                  Premium Hospitality
                </p>
              </div>
            </div> */}
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

            <p className="text-white/60 leading-relaxed max-w-md mb-8">
              A luxury-inspired hotel experience offering elegant rooms,
              family-friendly hospitality, delicious dining, and spacious
              event venues in Barhi, Hazaribagh.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_30px_rgba(245,158,11,0.35)]"
                >
                  <Icon
                    size={20}
                    className="text-white/70 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
              
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  3+
                </div>
                <div className="text-sm text-white/60">
                  Years of Trusted Hospitality
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  500+
                </div>
                <div className="text-sm text-white/60">
                  Happy Guests & Families
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <h4 className="text-lg font-semibold tracking-wide">
                  Quick Links
                </h4>
              </div>

              <div className="w-14 h-px bg-gradient-to-r from-amber-400 to-transparent mt-3" />
            </div>

            <div className="space-y-3">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => handleNav(l.href)}
                  className="group flex items-center gap-2 text-white/60 hover:text-amber-400 transition-all duration-300"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  <span className="text-sm tracking-wide">
                    {l.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <h4 className="text-lg font-semibold tracking-wide">
                  Contact Us
                </h4>
              </div>

              <div className="w-14 h-px bg-gradient-to-r from-amber-400 to-transparent mt-3" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  <MapPin size={18} className="text-amber-400" />
                </div>

                <div>
                  <p className="text-white font-medium mb-1">
                    Hotel Address
                  </p>

                  <p className="text-white/60 text-sm leading-relaxed">
                    Opposite Barhi Thana,
                    <br />
                    NH2, Dhanbad Road,
                    <br />
                    Barhi, Hazaribagh, Jharkhand
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-5">
                <p className="text-white/70 text-sm mb-2">
                  Reservation Hotline
                </p>

                <a
                  href="tel:+919942081357"
                  className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  +91 9942081357
                </a>

                <p className="text-white/50 text-xs mt-2">
                  Available 24/7 for bookings & support
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hotel Amritwan. All Rights Reserved.
          </p>

          
        </motion.div>
      </div>
    </footer>
  );
}