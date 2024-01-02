"use client";

import { useState } from "react";
import Image from "next/image";

// links
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer transition"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer transition"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="flex flex-col justify-center items-center gap-8 bg-red-500 text-white text-3xl absolute left-0 top-24 w-full h-[calc(100vh-6rem)] z-10 animate-fade-down animate-duration-[500ms]">
          {navLinks.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <>
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link href="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}

          <CartIcon />
        </div>
      )}
    </div>
  );
};
export default Menu;
