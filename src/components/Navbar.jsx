import Darkmode from "../context/Darkmode";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="flex items-center justify-between py-6">
        <span
          className={`title-font cursor-pointer text-2xl font-extrabold transition-all md:mb-0 ${
            darkMode ? `text-white` : `text-gray-800`
          }`}
        >
          <h1
            className={`rounded-lg px-3 ${darkMode ? `bg-white text-noir` : `bg-black text-white`}`}
          >
            F
          </h1>
        </span>
        <div
          className={`flex items-center gap-x-6 ${darkMode ? `text-white` : `text-black`}`}
        >
          <Darkmode
            className={`cursor-pointer text-2xl ${darkMode ? `bg-secondary-grey rounded-full p-1` : `text-black`}`}
          />
          <RxHamburgerMenu
            className={`cursor-pointer text-2xl ${darkMode ? `bg-secondary-grey rounded-full p-1` : `text-black`}`}
          />
        </div>
      </div>
    </>
  );
}
