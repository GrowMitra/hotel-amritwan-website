import { motion } from 'framer-motion'; 
import {
  Phone,
  MessageCircle,
  ChevronDown,
  MapPin,
  Star,
  Sparkles,
  ShieldCheck,
  UtensilsCrossed,
  Hotel,
} from 'lucide-react';
import HotelFrontImg from "../components/images/HotelFrontImg.jpg"

const WA_LINK =
  'https://wa.me/919942081357?text=Hello%2C%20I%20want%20to%20book%20a%20room%20or%20marriage%20hall%20at%20Hotel%20Amritwan.';

export default function Hero() {
  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HotelFrontImg}
          alt="Hotel Amritwan"
          className="h-full w-full object-cover scale-105"
        />

        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        {/* Golden Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/10 blur-[160px]" />
      </div>

      {/* Floating Blur Elements */}
      <div className="absolute top-32 left-10 w-40 h-40 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-yellow-500/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/30 bg-white/5 backdrop-blur-md mb-8">
              <Sparkles size={15} className="text-amber-400" />
              <span className="text-xs tracking-[0.25em] text-amber-200 font-medium uppercase">
                Luxury Stay & Celebration Venue
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-tight text-white">
              Hotel
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                Amritwan
              </span>
            </h1>

            {/* Divider */}
            <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent my-8 mx-auto lg:mx-0" />

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
              Experience premium comfort, elegant rooms, delicious dining,
              and the perfect marriage hall venue — all at one destination.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-white/70">
              <MapPin size={18} className="text-amber-400" />
              <span className="tracking-wide">
                Opposite Barhi Thana, NH2, Hazaribagh
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold text-amber-400">₹800</h3>
                <p className="text-white/70 text-sm mt-1">Starting Rooms</p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold text-amber-400">250+</h3>
                <p className="text-white/70 text-sm mt-1">Hall Capacity</p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold text-amber-400">24×7</h3>
                <p className="text-white/70 text-sm mt-1">Hospitality</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <a
                href="tel:+919942081357"
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone size={18} />
                Call Now
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-all duration-300" />
              </a>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp Booking
              </a>
            </div>
          </motion.div>

          {/* Right Floating Luxury Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <div className="relative bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-[0_0_60px_rgba(251,191,36,0.12)]">
              
              {/* Top Image */}
              <div className="overflow-hidden rounded-3xl mb-8">
                <img
                  src={HotelFrontImg}
                  alt="Luxury Hotel"
                  className="w-full h-[260px] object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Features */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300">
                    <Hotel size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Comfortable Rooms
                    </h4>
                    <p className="text-white/60 text-sm">
                      Deluxe & affordable stay experience
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300">
                    <UtensilsCrossed size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Multi Cuisine Restaurant
                    </h4>
                    <p className="text-white/60 text-sm">
                      Veg & Non-Veg dining available
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Trusted Venue Since 2014
                    </h4>
                    <p className="text-white/60 text-sm">
                      Safe, reliable & guest-friendly service
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed">
                  “Perfect destination for family stay, weddings, events and
                  comfortable highway travel.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-amber-400 transition"
      >
        <ChevronDown size={42} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}

