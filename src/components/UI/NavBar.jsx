import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="https://farizul.vercel.app/" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="90"
          height="45"
          viewBox="0 0 121 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.56,1.96v7.66c-3.04,0-5.06,0.82-5.25,4.39h5.25v7.23H9.3v16.87H0.96V14.49C0.96,7.07,5.83,1.96,14.56,1.96z"/>
          <path d="M14.32,26.06c0-6.94,4.77-12.53,11.57-12.53c2.41,0,4.24,0.72,5.64,1.98v-1.49h7.86v24.1h-7.86v-1.49 c-1.4,1.25-3.23,1.98-5.64,1.98C19.09,38.59,14.32,33,14.32,26.06z M26.94,31.65c2.22,0,4.58-1.59,4.58-5.59s-2.36-5.59-4.58-5.59 c-2.36,0-4.48,1.93-4.48,5.59C22.46,29.72,24.58,31.65,26.94,31.65z"/>
          <path d="M41.31,14.01h8.34v4.15c1.16-2.6,4.77-4.63,9.45-4.63v8.19c-3.37,0-9.45,0.24-9.45,10.12v6.27h-8.34V14.01z"/>
          <path d="M64.68,2.92c3.08,0,5.11,2.17,5.11,4.92s-2.02,4.92-5.11,4.92c-3.08,0-5.11-2.17-5.11-4.92S61.6,2.92,64.68,2.92z M60.54,14.01h8.34v24.1h-8.34V14.01z"/>
          <path d="M80.06,21.24H70.9v-7.23h22.8L83.24,30.88h10.12v7.23H70.28L80.06,21.24z"/>
          <path d="M121.61,1.96h8.34v36.15h-8.34V1.96z"/>
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>About</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-gradient-to-r from-red-500 to-purple-500 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#skills" className="group relative hidden md:inline-block">
          <span>Skills</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-gradient-to-r from-red-500 to-purple-500 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-gradient-to-r from-red-500 to-purple-500 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-0 h-[0.15em] w-0 bg-gradient-to-r from-red-500 to-purple-500 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span className="text">Hit Me Up</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
