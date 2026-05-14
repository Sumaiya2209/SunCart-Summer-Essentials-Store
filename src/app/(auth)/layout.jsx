import Navbar from '@/components/shared/Navbar';
import NavbarForLogin from '@/components/shared/NavbarForLogin';
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <NavbarForLogin />
      {children}
    </div>
  );
};

export default AuthLayout;