import { DirectoryData } from "../data";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Directory() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`py-6`}>
        <h1
          className={`border-b pb-2 text-xl ${darkMode ? `text-white` : `text-black`}`}
        >
          Pages
        </h1>
        <div
          className={`flex flex-col gap-y-4 py-4 md:grid md:grid-cols-2 md:gap-x-4 ${darkMode ? `` : ``}`}
        >
          {DirectoryData.map((data) => (
            <Link
              to={data.link}
              className={`flex flex-col gap-y-1 rounded-md px-4 py-4 transition-all ${darkMode ? `bg-secondary-grey hover:bg-noir-hover text-white` : `hover:bg-o-w-hover bg-light-grey`}`}
              key={data.id}
            >
              <p
                className={`font-medium ${darkMode ? `text-white` : `text-black`}`}
              >
                {data.id}
              </p>
              <p
                className={`font-light ${darkMode ? `text-grey` : `text-black`}`}
              >
                {data.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
