import { FaRegCopyright } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex justify-between pb-4 pt-10 text-xs ${darkMode ? `text-light-grey` : `text-black`}`}
      >
        <div className="flex items-center gap-x-1">
          <FaRegCopyright />
          <p> 2024 - Freddie Heath</p>
        </div>
        <p>Made with &#10084; using React and Tailwind</p>
      </div>
    </>
  );
}
