import Darkmode from "../context/Darkmode";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <span
          className={`title-font cursor-pointer text-2xl font-medium transition-all md:mb-0 ${
            darkMode ? `text-white` : `text-gray-800`
          }`}
        >
          <h1> F </h1>
        </span>
        <Darkmode />
      </div>
    </>
  );
}
