import Hero from '../components/Hero';
import CapabilityStrip from '../components/CapabilityStrip';
import FeaturedWork from '../components/FeaturedWork';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import About from '../components/About';
import Technology from '../components/Technology';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <CapabilityStrip />
      <FeaturedWork />
      <Services />
      <Process />
      <WhyWorkWithMe />
      <About />
      <Technology />
      <Contact />
    </main>
  );
}
