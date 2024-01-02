"use client";

import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex justify-between items-center h-12 p-4 text-red-400 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>

      {/* Mobile Nav Links */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex items-center justify-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute md:w-36 top-3 right-2 lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 123 123</span>
        </div>

        {!user ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <div>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
