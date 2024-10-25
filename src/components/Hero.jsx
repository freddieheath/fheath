import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Hero() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="py-12">
        <h1
          className={`text-2xl font-medium ${darkMode ? `text-white` : `font-white`}`}
        >
          Freddie Heath
        </h1>
        <h2
          className={`text-xl font-normal ${darkMode ? `text-white` : `font-white`}`}
        >
          Media Communications (BA) Graduate
        </h2>
        <p
          className={`text-lg py-6 md:w-8/12 ${darkMode ? `text-light-grey` : `font-white`}`}
        >
          A London College of Communication looking for entry level roles in
          advertising and marketing.
        </p>
      </div>
    </>
  );
}
