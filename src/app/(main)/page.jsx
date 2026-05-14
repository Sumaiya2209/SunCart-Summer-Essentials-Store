import React from 'react';
import banner from "@/assets/summer-sale-banner.jpg";
import Image from 'next/image';
import PopularProducts from './popularproducts/page';
import SummerTips from '@/components/home/Tips';
import TopBrands from '@/components/home/Brands';


const HomePage = () => {
  return (
    <div>
      <Image src={banner} alt="Summer Sale Banner" className="w-full h-auto" loading="eager"/>
      <PopularProducts />
      <SummerTips />
      <TopBrands />
    </div>
  );
};

export default HomePage;