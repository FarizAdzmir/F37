import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";

import PreLoader from "./components/UI/Preloader";
import NavBar from "./components/UI/NavBar";
import Hero from "./components/Home/Hero";
import Role from "./components/Home/Role";
import About from "./components/Home/About";
import Services from "./components/Home/Services";
import Works from "./components/Home/Works";
import Contact from "./components/Home/Contact";
import Footer from "./components/UI/Footer";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRefs = useRef([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");
      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
      });
    });
  }, [sectionRefs.current]); // Update dependency array

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="bg-secondary-100">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <NavBar sectionRefs={sectionRefs.current} />
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
        <About />
        <Services />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
