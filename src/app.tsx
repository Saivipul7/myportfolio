import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Education,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  CTA,
} from "./components";
import Footer from "./components/footer";

// App
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Education />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <CTA />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
