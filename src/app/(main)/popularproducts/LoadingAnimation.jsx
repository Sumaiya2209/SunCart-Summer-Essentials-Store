"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/assets/Lottie/Sandy Loading.json";

export default function LoadingAnimation() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-[180px] md:w-[240px]">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
}