import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      data-aos-duration="500"
      className={`sticky flex justify-center font-quicksand font-light md:px-8 ${
        darkMode
          ? `bg-noir bg-dark-pattern bg-dark-size`
          : `bg-o-w bg-light-pattern bg-light-size`
      }`}
    >
      <div className={`h-max w-full px-8 font-quicksand font-light md:w-3/4`}>
        {children}
      </div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
