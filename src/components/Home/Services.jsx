import ServiceUi from "../UI/ServiceUi";
import Heading from "../UI/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Web Design"
  ];

  const toolBoxItems = [
    "HTML",
    "CSS",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "TailwindCSS",
    "GSAP"
  ];

  return (
    <section id="skills" className="my-[10%]" aria-label="services">
      <Heading title="Skills" />
      <div className="space-y-14">
        <ServiceUi
          title="my skills."
          description="I specialize in web design and development, aiming to create smooth digital experiences and elegant interfaces for users."
          items={expertiseItems}
        />
        <ServiceUi
          title="my tool box."
          description="These are my go-to stacks for project execution. As technology evolves, I'm continuously expanding my knowledge with new tools."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
