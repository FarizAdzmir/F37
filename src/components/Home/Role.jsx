export default function Role({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="about"
      className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change"
      aria-label=""
    >
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text md:leading-[1.08em] py-4">
          A guy who loves creating digital experiences through coding and design.
        </h1>
      </div>
    </section>
  );
}
