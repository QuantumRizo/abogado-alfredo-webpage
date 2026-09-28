import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { InstagramFeed } from '@/components/InstagramFeed';
import { Footer } from '@/components/Footer';
import FloatingButtons from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <div id="servicios">
          <Services />
        </div>
        <div id="sobre-mi">
          <About />
        </div>
        <div id="instagram">
          <InstagramFeed />
        </div>
        <div id="contacto">
          <Footer />
        </div>
      </main>
      <FloatingButtons />
    </div>
  );
};

export default Index;
