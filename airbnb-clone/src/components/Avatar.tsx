"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/images/placeholder.jpg"
      alt="avatar"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
};

export default Avatar;
