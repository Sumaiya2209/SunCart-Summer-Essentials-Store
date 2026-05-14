import Link from 'next/link';
import React from 'react';

const NavbarForLogin = () => {
  return (
    <div className='flex flex-2 items-center justify-center shadow-sm gap-4 p-4'>
      <Link href="/login" className='text-gray-700 hover:text-orange-500 font-medium'>
        Login
      </Link>
      <div className='border-l-2 h-6'></div>
      <Link href="/register" className='text-gray-700 hover:text-orange-500 font-medium'>
        Register
      </Link>
    </div>
  );
};

export default NavbarForLogin;