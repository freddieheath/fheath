import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-max w-full px-8 font-quicksand font-light ${
        darkMode
          ? `bg-noir bg-dark-pattern bg-dark-size`
          : `bg-o-w bg-light-pattern bg-light-size`
      }`}
    >
      {children}
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
