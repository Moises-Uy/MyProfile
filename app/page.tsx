import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative flex content-center justify-between mt-12 ml-auto-container container-page">
        <div className="flex flex-col items-start text-color-custom z-10 content-page">
          <h1 className="text-7xl font-black mb-9 titleAbout">
            Moises Andrei G. Uy
          </h1>
          <p className="text-3xl mb-16 text-color-custom">
            I possess a foundational understanding of web
            programming,particularly in the realm of front-end development. I'm
            familiar with concepts such as responsive design, accessibility, and
            browser compatibility, ensuring that websites function seamlessly
            across various devices and platforms.
          </p>
          <a
            href="mailto:it.moisesuy@gmail.com"
            target="_blank"
            className="bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-700 text-color-custom font-bold py-2 px-4 rounded mb-9"
          >
            Contact Me via Email
          </a>
        </div>
        <Image
          src="/img/hero.png"
          width={500}
          height={500}
          alt="Hero png"
          className="customImage rounded-full animate-float"
        />
      </section>
    </>
  );
}
