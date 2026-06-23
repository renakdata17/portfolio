import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import TechStack from "./components/TechStack";
import SystemArchitecture from "./components/SystemArchitecture";
import AIApproach from "./components/AIApproach";
import Timeline from "./components/Timeline";
import CaseStudies from "./components/CaseStudies";
import Projects from "./components/Projects";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import { useLenis } from "./hooks/useLenis";

function App() {
  useLenis();

  return (
    <>
      <Loader />
      <CustomCursor />
      <CursorGlow />
      <Header />
      <SocialSidebar />
      <main className="relative z-[1] lg:pl-[88px]">
        <Hero />
        <About />
        <WhatIDo />
        <TechStack />
        <SystemArchitecture />
        <AIApproach />
        <Timeline />
        <div id="work">
          <CaseStudies />
          <Projects />
        </div>
        <CallToAction />
        <Contact />
      </main>
    </>
  );
}

export default App;
