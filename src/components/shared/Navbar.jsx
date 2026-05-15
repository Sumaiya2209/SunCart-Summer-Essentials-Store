'use client'

import Link from "next/link"
import Logo from "@/assets/logo.png"
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session ? session.user : null;

  const menuItems = (
    <>
      <Link href="/products" className="font-medium text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg px-4 py-2">
        Products
      </Link>
      <Link href="/blogs" className="font-medium text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg px-4 py-2">
        Blogs
      </Link>
      <Link href="/wishlist" className="font-medium  text-orange-500  hover:bg-orange-500 hover:text-white rounded-lg px-4 py-2">
        Wishlist
      </Link>
      <Link href="/cart" className="font-medium  text-orange-500  hover:bg-orange-500 hover:text-white rounded-lg px-4 py-2">
        Cart
      </Link>
      <Link href="/contact" className="font-medium text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg px-4 py-2">
        Contact
      </Link>
    </>
  );



  return (
    <div className="navbar bg-base-100 shadow-sm" >
      <div className="w-11/12 mx-auto navbar">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
              {menuItems}
            </ul>
          </div>
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-50 h-20" loading="eager" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {menuItems}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {isPending ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : user ? (
            <>
              <h1>Welcome, {user.name}!</h1>
              <CgProfile size={24} />
              <Link className="font-medium text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg px-3 py-2" onClick={async () => await authClient.signOut()}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <CgProfile size={24} />
              <Link href="/login" className="font-medium text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg px-3 py-2">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;