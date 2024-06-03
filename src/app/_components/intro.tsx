export function Intro() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center mt-16 mb-16 bg-cover bg-center relative rounded-lg"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-black/70 to-transparent overflow-hidden"></div>
      <div className="relative z-10 p-5">
      <div className="text-3xl font-bold text-white tracking-tighter">Jason's</div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight text-white">
          Fantasy Logbook
        </h1>
        <h4 className="text-2xl mt-5 text-white">
          Journeys in Creativity: Exploring New Ideas in Technology and Fantasy
        </h4>
      </div>
    </section>
  );
}
