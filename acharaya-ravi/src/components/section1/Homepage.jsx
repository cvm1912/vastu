import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./hero";
import WhatIsVastu from "./vastu";
import History from "./history";
import Form from "./form";

const Homepage = () => {
  return (
    // DO NOT add h-screen here. Locomotive needs natural height for scrolling.
    <div data-scroll-container>
      {/* OPTIONAL: If your navbar is fixed, REMOVE it from locomotive scroll */}
      <Navbar />

      {/* HERO SECTION */}
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="-1">
          <HeroSection />
        </div>
      </section>

      {/* WHAT IS VASTU */}
      <section data-scroll-section className="bg-white">
        <div data-scroll data-scroll-speed="-1">
          <WhatIsVastu />
        </div>
      </section>

      {/* HISTORY SECTION */}
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="-1">
          <History />
        </div>
      </section>

      {/* FORM SECTION */}
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="0.6">
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
