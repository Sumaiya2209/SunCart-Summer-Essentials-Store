import React from 'react';
import banner from "@/assets/summer-sale-banner.jpg";
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      <Image src={banner} alt="Summer Sale Banner" className="w-full h-auto" />
    </div>
  );
};

export default HomePage;