import PropTypes from "prop-types";
import Footer from "./Footer/Footer";
import Header from "./Navbar/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
