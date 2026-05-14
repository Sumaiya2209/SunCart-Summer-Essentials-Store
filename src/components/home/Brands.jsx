import Image from "next/image";
import React from "react";
import nikeLogo from "@/assets/nike-logo.webp";
import adidasLogo from "@/assets/adidas-logo.jpg";
import pumaLogo from "@/assets/Puma.webp";
import zaraLogo from "@/assets/Zara-logo.webp";

const brands = [
  {
    name: "Nike",
    description: "Premium summer fashion & sportswear collection.",
    logo: nikeLogo,
  },
  {
    name: "Adidas",
    description: "Comfortable and trendy essentials for hot days.",
    logo: adidasLogo,
  },
  {
    name: "Puma",
    description: "Stylish footwear and lightweight outfits.",
    logo: pumaLogo,
  },
  {
    name: "Zara",
    description: "Modern summer outfits with elegant designs.",
    logo: zaraLogo,
  },
];

const TopBrands = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
            <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
          Trusted Brands
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Top Brands
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Discover premium brands offering stylish and comfortable summer essentials.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="group bg-linear-to-br from-orange-50 to-white border border-orange-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-5 shadow-md">
                <Image src={brand.logo} alt={`${brand.name} Logo`} width={60} height={50} className="object-contain" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {brand.description}
            </p>
            <button className="mt-6 px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition duration-300">
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;