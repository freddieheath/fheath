import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full ${
        darkMode
          ? `bg-dark-bg bg-dark-pattern bg-dark-size`
          : `bg-light-bg bg-light-pattern bg-light-size`
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;
