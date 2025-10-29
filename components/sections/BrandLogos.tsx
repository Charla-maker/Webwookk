export const BrandLogos = () => {
  const brands = [
    { src: "https://c.animaapp.com/mh5qprntqjweLB/assets/toyota.png", alt: "Toyota" },
    { src: "https://c.animaapp.com/mh5qprntqjweLB/assets/ford.png", alt: "Ford" },
    { src: "https://c.animaapp.com/mh5qprntqjweLB/assets/holden.png", alt: "Holden" },
    { src: "https://c.animaapp.com/mh5qprntqjweLB/assets/nissan.png", alt: "Nissan" },
    { src: "https://c.animaapp.com/mh5qprntqjweLB/assets/suzuki.png", alt: "Suzuki" },
    { src: "https://c.animaapp.com/mh5qprntqjweLB/assets/subaru.png", alt: "Subaru" },
    { src: "https://c.animaapp.com/mh5qprntqjweLB/assets/kia.png", alt: "Kia" },
    { src: "https://c.animaapp.com/mh5qprntqjweLB/assets/brand-logo.png", alt: "Mazda" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-2">
            We Buy All Major Brands
          </h2>
          <p className="text-gray-600">
            From Japanese to European, American to Australian - we buy them all
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
