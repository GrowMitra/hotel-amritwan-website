import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import MarriageHall from './components/MarriageHall';
import Restaurant from './components/Restaurant';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <MarriageHall />
      <Restaurant />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
       <BackToTop />
    </div>
  );
}
