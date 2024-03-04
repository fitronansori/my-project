import { Link } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa";

type MobileMenuProps = {
  user: boolean;
  currentUsers: {
    id: number;
    name: string;
    isSeller: boolean;
  } | null;
  open: boolean;
  handleOpen: () => void;
  handleMobileOpen: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  user,
  currentUsers,
  open,
  handleOpen,
  handleMobileOpen,
}) => {
  return (
    <div className="text-foreground p-5">
      <div className="flex flex-col gap-4">
        <Link to={"/"}>Fiverr Business</Link>
        <Link to={"/"}>Explore</Link>
        <Link to={"/"}>English</Link>
        {!user && <Link to={"/auth/login"}>Sign in</Link>}
        {!currentUsers?.isSeller && <Link to={"/"}>Become a Seller</Link>}

        {currentUsers && (
          <div className="relative">
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={handleOpen}
            >
              <FaAngleDown />
              <span className="select-none">{currentUsers?.name}</span>
            </div>

            {open && (
              <ul className="w-[150px] absolute left-0 flex flex-col gap-3 p-5 shadow-md bg-white text-foreground cursor-pointer">
                {currentUsers?.isSeller && (
                  <>
                    <Link
                      to={"/mygigs"}
                      className="hover:opacity-80"
                      onClick={handleMobileOpen}
                    >
                      Gigs
                    </Link>
                    <Link
                      to={"/addgig"}
                      className="hover:opacity-80"
                      onClick={handleMobileOpen}
                    >
                      Add New Gigs
                    </Link>
                  </>
                )}
                <Link
                  to={"/orders"}
                  className="hover:opacity-80"
                  onClick={handleMobileOpen}
                >
                  Orders
                </Link>
                <Link
                  to={"/messages"}
                  className="hover:opacity-80"
                  onClick={handleMobileOpen}
                >
                  Messages
                </Link>
              </ul>
            )}
          </div>
        )}
        <Link to={"/"} className="hover:opacity-80" onClick={handleMobileOpen}>
          Logout
        </Link>
      </div>
    </div>
  );
};
export default MobileMenu;
