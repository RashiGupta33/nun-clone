import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroBackground from "./components/HeroBackground";
import DashboardPreview from "./components/DashboardPreview";
import HowItWorks from "./components/HowItWorks";
import EverythingInOnePlace from "./components/EverythingInOnePlace";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0A0918] text-white">
      <HeroBackground />

      <Navbar />
      <Hero />
      <DashboardPreview />
      <HowItWorks />
      <EverythingInOnePlace />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;