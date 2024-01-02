"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 text-red-500 flex items-center justify-between border-t-2 border-red-500">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p>&copy; ALL RIGHT RESERVED</p>
    </div>
  );
};
export default Footer;
