import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroBackground from "./components/HeroBackground";
import DashboardPreview from "./components/DashboardPreview";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0A0918] text-white">
      <HeroBackground />

      <Navbar />
      <Hero />
      <DashboardPreview />
      <HowItWorks />
    </div>
  );
}

export default App;