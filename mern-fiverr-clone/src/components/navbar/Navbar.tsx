import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// components
import MobileMenu from "./MobileMenu";

// ui
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

//icons
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

enum AuthPath {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
}

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { pathname } = useLocation();

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

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  const currentUsers = {
    id: 1,
    name: "John Doe",
    isSeller: true,
  };

  const user = true;

  return (
    <header
      className={`${
        active ||
        (pathname !== "/" &&
          pathname !== AuthPath.LOGIN &&
          pathname !== AuthPath.REGISTER)
          ? "bg-background text-foreground"
          : "bg-primary text-primary-foreground"
      }
      transition-all duration-300 ease-in-out sticky top-0 left-0 w-full z-50 shadow-md
      `}
    >
      <div className="relative container py-4 flex items-center justify-between">
        <div className="text-3xl md:text-4xl font-bold">
          <Link to={"/"}>
            <span>fiverr</span>
            <span className="text-[#1dbf73]">.</span>
          </Link>
        </div>

        <div className="sm:hidden">
          {!mobileOpen ? (
            <RiMenu3Fill
              className="font-bold w-6 h-6 cursor-pointer"
              onClick={handleMobileOpen}
            />
          ) : (
            <IoClose
              className="font-bold w-8 h-8 cursor-pointer"
              onClick={handleMobileOpen}
            />
          )}
        </div>

        {mobileOpen && (
          <div className="bg-background h-screen w-5/6 absolute top-[68px] right-0 shadow-md">
            <MobileMenu
              user={user}
              currentUsers={currentUsers}
              open={open}
              handleOpen={handleOpen}
              handleMobileOpen={handleMobileOpen}
            />
          </div>
        )}

        <nav className="hidden lg:block">
          <div className="flex items-center gap-6 font-montserrat cursor-pointer">
            <Link to={"/"}>Fiverr Business</Link>
            <Link to={"/"}>Explore</Link>
            <Link to={"/"}>English</Link>
            {!user && <Link to={"/auth/login"}>Sign in</Link>}
            {!currentUsers?.isSeller && <Link to={"/"}>Become a Seller</Link>}
            {!currentUsers && (
              <div>
                {active ? (
                  <Button variant={"default"}>Join</Button>
                ) : (
                  <Button variant={"outline"}>Join</Button>
                )}
              </div>
            )}

            {currentUsers && (
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
                        <Link
                          to={"/mygigs"}
                          className="hover:opacity-80"
                          onClick={handleOpen}
                        >
                          Gigs
                        </Link>
                        <Link
                          to={"/addgig"}
                          className="hover:opacity-80"
                          onClick={handleOpen}
                        >
                          Add New Gigs
                        </Link>
                      </>
                    )}
                    <Link
                      to={"/orders"}
                      className="hover:opacity-80"
                      onClick={handleOpen}
                    >
                      Orders
                    </Link>
                    <Link
                      to={"/messages"}
                      className="hover:opacity-80"
                      onClick={handleOpen}
                    >
                      Messages
                    </Link>
                    <Link
                      to={"/"}
                      className="hover:opacity-80"
                      onClick={handleOpen}
                    >
                      Logout
                    </Link>
                  </ul>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="hidden lg:block">
        {(active ||
          (pathname !== "/" &&
            pathname !== AuthPath.LOGIN &&
            pathname !== AuthPath.REGISTER)) && (
          <>
            <Separator />
            <div className="container py-[6px] flex justify-between font-montserrat text-gray-400">
              <Link className="hover:text-foreground" to="/">
                Graphics & Design
              </Link>
              <Link className="hover:text-foreground" to="/">
                Video & Animation
              </Link>
              <Link className="hover:text-foreground" to="/">
                Writing & Translation
              </Link>
              <Link className="hover:text-foreground" to="/">
                AI Services
              </Link>
              <Link className="hover:text-foreground" to="/">
                Digital Marketing
              </Link>
              <Link className="hover:text-foreground" to="/">
                Music & Audio
              </Link>
              <Link className="hover:text-foreground" to="/">
                Programming & Tech
              </Link>
              <Link className="hover:text-foreground" to="/">
                Business
              </Link>
              <Link className="hover:text-foreground" to="/">
                Lifestyle
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
export default Navbar;
