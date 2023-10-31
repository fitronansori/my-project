import { navlinks } from "../../constants/navLinks.js";

const NavLinks = () => {
  return (
    <>
      {navlinks.map((link) => (
        <ul key={link.id} className="flex items-center gap-x-5 text-blue-dark">
          <li>
            <a
              href="/"
              className="hover:text-blue transition-all duration-300 ease-in-out"
            >
              {link.name}
            </a>
          </li>
        </ul>
      ))}
    </>
  );
};

export default NavLinks;
