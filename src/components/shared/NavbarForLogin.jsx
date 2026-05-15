import Link from 'next/link';
import React from 'react';

const NavbarForLogin = () => {
  return (
    <div className="w-full flex items-center justify-center border-b border-gray-200 bg-white">
  
  <div className="flex items-center gap-14">
    <Link
      href="/login"
      className="relative py-4 text-sm md:text-base font-semibold text-orange-500 transition-all duration-300">Login
      <span className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-orange-500"> </span>
    </Link>
    <Link
      href="/register"
      className="py-4 text-sm md:text-base font-semibold text-gray-600 hover:text-orange-500 transition-all duration-300">Registration</Link>
  </div>
</div>
  );
};

export default NavbarForLogin;