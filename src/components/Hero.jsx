import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function HeroCarousel() {
  const slides = [
    {
      id: 1,
      title: "Premium Comfort For Every Home",
      description:
        "Experience luxury mattresses and furniture crafted for better sleep and modern living.",
      image: "/images/hero-img.jpg",
    },
    {
      id: 2,
      title: "Sleep Better Every Night",
      description:
        "We are dedicated to providing Nigerians with the best night sleep.",
      image: "/images/hero-img7.png",
    },
    {
      id: 3,
      title: "Elegant Furniture/Building Collections",
      description:
        "Upgrade your space with stylish beds, sofas, and premium interior designs.",
      image: "/images/hero-img4.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen w-[100%] overflow-hidden bg-black">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-w-full h-screen">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ duration: 1 }}
              className="relative z-10 flex h-full items-center px-6 md:px-16 lg:px-24"
            >
              <div className="max-w-2xl text-white">
                <p className="mb-4 text-sm uppercase tracking-[6px] text-yellow-400">
                  Quality products only.
                </p>

                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>

                <p className="mb-8 text-base text-gray-200 md:text-lg lg:text-xl">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="rounded-full bg-yellow-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-yellow-400">
                    Shop Now
                  </button>

                  <button className="rounded-full border border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
                    Explore More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur-md transition hover:bg-white hover:text-black"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur-md transition hover:bg-white hover:text-black"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-10 bg-yellow-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
