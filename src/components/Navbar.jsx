import Darkmode from "../context/Darkmode";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="flex h-16 items-center justify-between py-6">
        <Link to="/">
          <span
            className={`title-font cursor-pointer text-2xl font-extrabold transition-all md:mb-0 ${
              darkMode ? `text-white` : `text-gray-800`
            }`}
          >
            <h1
              className={`transform rounded-lg px-3 transition-transform duration-300 ease-in-out hover:-rotate-6 hover:scale-105 ${darkMode ? `bg-white text-noir` : `bg-black text-white`}`}
            >
              F
            </h1>
          </span>
        </Link>
        <div
          className={`flex items-center gap-x-6 ${darkMode ? `text-white` : `text-black`}`}
        >
          <Darkmode
            className={`cursor-pointer text-2xl ${darkMode ? `rounded-full bg-secondary-grey` : `text-black`}`}
          />
        </div>
      </div>
    </>
  );
}
