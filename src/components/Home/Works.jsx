import TheCrate from "/src/assets/images/The-Crate.webp";
import Kembara from "/src/assets/images/Kembara.webp";
import IQLAS from "/src/assets/images/IQLAS.webp";
import RECA from "/src/assets/images/RECA.webp";
import Brainwave from "/src/assets/images/Brainwave.webp";
import Projects from "../UI/Projects";
import Heading from "../UI/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://the-crate.payloadcms.app/"
            img={TheCrate}
            alt="The Crate"
            name="The Crate"
            type="E-Commerce • CMS • Frontend Development"
            year="2023"
            tools="NextJS • TypeScript • Stripe • PayloadCMS"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
              link="https://iqlas.vercel.app/"
              img={IQLAS}
              alt="IQLAS"
              name="IQLAS"
              type="E-Commerce • CMS • Backend Development"
              year="2021"
              tools="NextJS • Tailwind CSS • Stripe • Sanity"
            />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://reca-rentals.vercel.app/"
            img={RECA}
            alt="RECA Rentals"
            name="RECA Rentals"
            type="Web Design • Frontend Development"
            year="2024"
            tools="NextJS • TailwindCSS • Framer Motion"
          />
        </div>
        {/* Project #3 */}
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
        <Projects
            link="https://brainwave-app.vercel.app/"
            img={Brainwave}
            alt="Brainwave"
            name="Brainwave"
            type="Web Design • Frontend Development"
            year="2022"
            tools="NextJS • TailwindCSS"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://kembara.vercel.app/"
            img={Kembara}
            alt="Kembara"
            name="Kembara"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}

