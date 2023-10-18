import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-full shadow-md bg-white z-10">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex felx-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <UserMenu />
            </div>
          </Container>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;