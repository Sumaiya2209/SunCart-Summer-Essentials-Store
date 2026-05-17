import Navbar from '@/components/shared/Navbar';
import NavbarForLogin from '@/components/shared/NavbarForLogin';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const AuthLayout = async ({ children }) => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <Navbar />
      { !session && <NavbarForLogin /> }
      {children}
    </div>
  );
};

export default AuthLayout;