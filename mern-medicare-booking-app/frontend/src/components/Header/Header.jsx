import { useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";

// File Import
import Logo from "../../assets/images/logo.png";
import navLinks from "../../constants/navbar";

import { useSelector } from "react-redux";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const { user, role } = useSelector((state) => state.auth);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    // Remove Event Listener
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <img src={Logo} alt="logo" />
          </div>

          {/* Nav Menu */}
          <nav className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16x] leading-7 font[500] hover:text-primaryColor"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center gap-2">
                <Link
                  to={`/${
                    role === "doctor"
                      ? "dashboard/doctor/profile/me"
                      : "dashboard/user/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full">
                    <img
                      src={user?.photo}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                </Link>
              </div>

              {/* Mobile Menu */}
              <div className="mobile-menu md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-primaryColor text-white py-2 px-6 font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
