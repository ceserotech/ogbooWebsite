const Brands = () => {
  const brands = [
    {
      name: "Vitafoam",
      logo: "/images/martafoam.png",
    },
    {
      name: "Mouka",
      logo: "/images/moukafoam.svg",
    },
    {
      name: "Royal",
      logo: "/images/Royal-Foam-Products-Nigeria-Limited-Redesigned-Logo-2@2x.png",
    },
    {
      name: "Vitafoam",
      logo: "/images/vitafoam-logo-1.svg",
    },
    {
      name: "Winco",
      logo: "/images/winco_web-logo.png",
    },
   
  ];
  return (
    <div className="bg-black overflow-hidden">
      <div className="animate-marquee flex w-max gap-8">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="group flex min-w-[200px] items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-white/20"
          >
            <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-white p-3">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                {brand.name}
              </h2>

              <p className="text-sm text-neutral-400">
                Comfort • Quality • Luxury
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
