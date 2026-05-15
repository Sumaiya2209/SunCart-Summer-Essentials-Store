'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarForLogin = () => {

  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-center border-b border-gray-200 bg-white">
      <div className="flex items-center gap-14">
        <Link
          href="/login"
          className={`relative py-4 text-sm md:text-base font-semibold transition-all duration-300
          ${pathname === "/login"
              ? "text-orange-500"
              : "text-gray-600 hover:text-orange-500"
            }`}>Login
          {pathname === "/login" && (
            <span className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-orange-500"></span>
          )}
        </Link>
        <Link
          href="/register"
          className={`relative py-4 text-sm md:text-base font-semibold transition-all duration-300
          ${pathname === "/register"
              ? "text-orange-500"
              : "text-gray-600 hover:text-orange-500"
            }`}>Registration
          {pathname === "/register" && (
            <span className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-orange-500"></span>
          )}</Link>
      </div>
    </div>
  );
};

export default NavbarForLogin;