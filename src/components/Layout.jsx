import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`font-urbanist h-max w-full px-8 font-light ${
        darkMode
          ? `bg-dark-bg bg-dark-pattern bg-dark-size`
          : `bg-light-bg bg-light-pattern bg-light-size`
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
