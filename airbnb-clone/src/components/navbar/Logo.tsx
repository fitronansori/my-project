"use client";

import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  //   const router = useRouter();
  return (
    <Image
      src="/images/logo.png"
      alt="airbnb logo"
      width="100"
      height="100"
      priority={true}
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
