import React from 'react';
import banner from "@/assets/summer-sale-banner.jpg";
import Image from 'next/image';
import PopularProducts from './popularproducts/page';
import Tips from '@/components/home/Tips.jsx';


const HomePage = () => {
  return (
    <div>
      <Image src={banner} alt="Summer Sale Banner" className="w-full h-auto" loading="eager"/>
      <PopularProducts />
      <Tips />
    </div>
  );
};

export default HomePage;