import { motion, useAnimate } from "framer-motion";
import Grid from "../UI/Grid";
import video from "../../assets/videos/vid.mp4";
import { useEffect } from "react";

export default function Hero() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const enterAnimation = async () => {
      const heroImage = document.getElementById("hero-image");
      const text = document.getElementById("text");

      const screenWidth = window.innerWidth;
      let height;

      if (screenWidth >= 1920) {
        height = "auto"; // For large screens
      } else if (screenWidth >= 1024) {
        height = "auto"; // For medium screens
      } else if (screenWidth >= 932) {
        height = "auto"; // For small screens
      }

      await animate(
        heroImage,
        { height: height },
        { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
      );

      await animate(
        text,
        { opacity: "100%" },
        { duration: 0.3, ease: "linear" }
      );
    };

    enterAnimation();
  }, []);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div ref={scope} className="relative">
      <Grid />
      <section className="h-screen lg:mt-8 flex flex-col p-4 md:p-14 bg-transparent justify-center">
        <div
          id="hero-image"
          className="relative overflow-hidden rounded-[18px]"
        >
          <svg
            className="hidden md:block absolute"
            width="180"
            height="222"
            viewBox="0 0 180 222"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M131 17.9833C131.009 8.04984 139.064 2.34191e-05 149 2.40733e-05L181 2.80874e-05V3.29188e-06L131 0V6.78741e-05H0V203.336L4.01251e-06 221.319C0.00904117 211.399 8.04229 203.358 17.959 203.336L18 203.336L50 203.336L113 203.336C122.941 203.336 131 195.277 131 185.336V17.9833Z"
              fill="#FAFAF9"
            />
          </svg>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-transparent">
            <p className="absolute flex gap-x-1 items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <svg
                className="hidden md:block"
                width="20"
                height="20"
                viewBox="0 0 34 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-purple-700"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.1023 25.0871C28.5733 23.3892 28.3249 20.7378 29.3396 18.7146C30.1988 17.0014 30.6805 15.0798 30.6805 13.05C30.6805 5.84269 24.6082 0 17.1175 0C9.62686 0 3.55448 5.84269 3.55448 13.05C3.55448 15.034 4.01461 16.9145 4.83779 18.5983C5.83163 20.6311 5.55614 23.2801 4.01005 24.9635C2.09214 27.0518 0.709708 29.606 0.0695814 32.4272C-0.371172 34.3696 1.34594 36 3.41232 36H30.5876C32.654 36 34.3712 34.3697 33.9304 32.4272C33.3028 29.6615 31.9618 27.1521 30.1023 25.0871Z"
                  fill="none"
                />
              </svg>
              <span className="uppercase font-semibold text-lg hidden md:block">
                Fariz{" "}
              </span>
            </p>
            <svg
              className="hidden md:block"
              width="205"
              height="107"
              viewBox="0 0 211 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M211 0C211 9.94113 202.941 18 193 18L211 18V0ZM211 18V89L211 107C211 97.0642 202.95 89.0086 193.016 89L193 89H18C8.05888 89 -4.3454e-07 80.9411 0 71L2.3167e-06 36C2.3167e-06 26.0589 8.05888 18 18 18L211 18Z"
                fill="#FAFAF9"
              />
            </svg>
          </div>
          <video loop muted preload="auto" autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div
          id="text"
          className="flex mt-10 gap-x-4 md:gap-x-10 items-center px-2 opacity-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-neutral-800">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-red-700 to-purple-700 bg-clip-text text-transparent">
              {" "}
              Fariz.
            </span>
          </h1>
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl xl:max-w-4xl text-neutral-600">
              A passionate Web Developer based in Kuala Lumpur, Malaysia.
            </p>
            <div className="flex items-center gap-x-4 md:gap-x-6">
              <a
                className="flex items-center text-white group relative text-sm sm:text-base md:text-lg"
                href="#works"
              >
                <motion.span
                  transition={spring}
                  className="group-hover:invisible group-hover:scale-0 block p-4 transition-all rounded-lg bg-gradient-to-tr from-accent-400 to-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A31E5F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7l9.2 9.2M17 7v10H7" />
                  </svg>
                </motion.span>
                <span className="relative block p-4 md:p-4 group-hover:-translate-x-14 rounded-lg bg-gradient-to-tr transition-all text-xl from-accent-400 to-accent-400">
                  My Project
                </span>
                <motion.span
                  transition={spring}
                  className="group-hover:scale-100 scale-0 -translate-x-14 transition-all absolute p-4 rounded-lg bg-gradient-to-tr from-red-700 to-purple-700 -right-14 top-0 bottom-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7l9.2 9.2M17 7v10H7" />
                  </svg>
                </motion.span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
