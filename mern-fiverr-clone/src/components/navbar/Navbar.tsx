import { useEffect, useState } from "react";

// ui
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface User {
  id: number;
  name: string;
  isSeller: boolean;
}

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    window.addEventListener("scroll", isActive);

    return () => window.removeEventListener("scroll", isActive);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const currentUsers: User = {
    id: 1,
    name: "John Doe",
    isSeller: true,
  };

  const user = true;

  return (
    <header
      className={`${active ? "bg-background text-foreground" : "bg-primary"}
      transition-all duration-300 ease-in-out sticky top-0 left-0 w-full z-50 shadow-md
      `}
    >
      <div className="container py-4 flex items-center justify-between">
        <div className="text-4xl font-bold">
          <span>fiverr</span>
          <span className="text-[#1dbf73]">.</span>
        </div>

        <nav>
          <ul className="flex items-center gap-6 font-montserrat cursor-pointer">
            <li>Fiverr Business</li>
            <li>Explore</li>
            <li>English</li>
            {!user && <li>Sign in</li>}
            {!currentUsers?.isSeller && <li>Become a Seller</li>}
            {!currentUsers ? (
              <li>
                {active ? (
                  <Button variant={"default"}>Join</Button>
                ) : (
                  <Button variant={"outline"}>Join</Button>
                )}
              </li>
            ) : (
              <div className="relative">
                <div
                  className="flex items-center gap-[10px]"
                  onClick={handleOpen}
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/69096896?v=4"
                    alt=""
                    className="w-9 h-9 rounded-full object-cover cursor-pointer"
                  />

                  <span className="">{currentUsers?.name}</span>
                </div>

                {open && (
                  <ul className="w-[150px] absolute top-[55px] right-0 flex flex-col gap-3 p-5 shadow-md bg-white text-foreground cursor-pointer">
                    {currentUsers?.isSeller && (
                      <>
                        <li className="hover:opacity-80">Gigs</li>
                        <li className="hover:opacity-80">Add New Gigs</li>
                      </>
                    )}
                    <li className="hover:opacity-80">Orders</li>
                    <li className="hover:opacity-80">Messages</li>
                    <li className="hover:opacity-80">Logout</li>
                  </ul>
                )}
              </div>
            )}
          </ul>
        </nav>
      </div>

      <div>
        {active && (
          <>
            <Separator />
            <div className="container py-[6px] flex justify-between font-montserrat text-gray-400">
              <span>1212</span>
              <span>1212</span>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
export default Navbar;
