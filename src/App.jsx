import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import CaseStudies from "./components/CaseStudies";
import Projects from "./components/Projects";
import SystemArchitecture from "./components/SystemArchitecture";
import StackTabs from "./components/StackTabs";
import AIApproach from "./components/AIApproach";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="relative z-[1]">
        <Hero />
        <TrustStrip />
        <CaseStudies />
        <Projects />
        <SystemArchitecture />
        <StackTabs />
        <AIApproach />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
