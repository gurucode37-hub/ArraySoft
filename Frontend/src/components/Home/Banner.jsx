import { useEffect, useState } from "react";

const slides = [
  {
    title1: "Become The Change",
    title2: "Innovate Ahead",
    desc: "ArraySoft Technology Pvt. Ltd",
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title1: "Build Smart",
    title2: "Web Solutions",
    desc: "ArraySoft Technology Pvt. Ltd",
    bg: "https://images.unsplash.com/photo-1527430253228-e93688616381",
  },
  {
    title1: "Powerful",
    title2: "Android Apps",
    desc: "ArraySoft Technology Pvt. Ltd",
    bg: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title1: "Learn & Grow",
    title2: "With Internship",
    desc: "ArraySoft Technology Pvt. Ltd",
    bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === slides.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 700);
    } else {
      setAnimate(true);
    }
  }, [index]);

  const prevSlide = () => {
    if (index === 0) {
      setAnimate(false);
      setIndex(slides.length);
      setTimeout(() => {
        setAnimate(true);
        setIndex(slides.length - 1);
      }, 20);
    } else {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    setIndex(index + 1);
  };

  const scrollToSection = () => {
    let targetId = "";

    if (index === 0 || index === 1) targetId = "web-development";
    else if (index === 2) targetId = "android-development";
    else if (index === 3) targetId = "internship";

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <div
        className={`flex h-full ${
          animate ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {extendedSlides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Overlay */}
            <div
              className="
              w-full h-full flex flex-col items-center justify-center
              text-center px-6
              bg-gradient-to-b from-black/70 via-black/50 to-black/70
              "
            >
              <p className="text-gray-300 text-xs md:text-sm tracking-[0.35em] uppercase mb-6">
                {slide.desc}
              </p>

              <h1 className="text-orange-500 text-4xl md:text-6xl font-extrabold leading-tight">
                {slide.title1}
              </h1>

              <h2 className="text-white text-4xl md:text-6xl font-extrabold mt-2">
                {slide.title2}
              </h2>

              <button
                onClick={scrollToSection}
                className="
                mt-10 px-10 py-3
                bg-orange-500 text-black
                font-semibold rounded-lg
                hover:bg-orange-600 hover:scale-105
                transition-all duration-300
                "
              >
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="
        absolute left-6 top-1/2 -translate-y-1/2
        text-white text-4xl
        bg-black/40 px-3 py-1 rounded
        hover:bg-orange-500 transition
        "
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="
        absolute right-6 top-1/2 -translate-y-1/2
        text-white text-4xl
        bg-black/40 px-3 py-1 rounded
        hover:bg-orange-500 transition
        "
      >
        ›
      </button>
    </section>
  );
};

export default Banner;
