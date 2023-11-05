import { User } from "@prisma/client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

type NavbarProps = {
  currentUser?: User | null;
};

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div>
      <nav className="fixed w-full shadow-md bg-white z-10">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex felx-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <UserMenu currentUser={currentUser} />
            </div>
          </Container>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
