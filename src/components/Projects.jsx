import { ProjectData } from "../data";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Projects() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="py-6">
      <h1
        className={`mb-4 border-b-2 pb-2 text-xl font-semibold ${darkMode ? `text-white` : `text-black`}`}
      >
        Projects
      </h1>
      <div className="ext-center">
        <div className="mb-10">
          {ProjectData.map((data) => (
            <div key={data.id} className="flex flex-col gap-y-2">
              <h1
                className={`font-medium ${darkMode ? `text-white` : `text-black`}`}
              >
                {data.title}
              </h1>
              <h2
                className={`my-2 text-sm font-normal ${darkMode ? `text-white` : `text-black`}`}
              >
                Made with: {data.tags}
              </h2>
              <h3
                className={`my-1 text-base ${darkMode ? `text-light-grey` : `text-black`}`}
              >
                {data.description}
              </h3>
              <span
                className={`left-0 cursor-default items-center justify-center gap-x-1 rounded-md px-1 py-2 ${darkMode ? `text-white` : `border-black text-black`}`}
              >
                <Link to={data.link}>
                  <div className="inline-flex items-center transition-transform duration-300 ease-in-out hover:scale-105">
                    <HiOutlineExternalLink />
                    <h3>Link</h3>
                  </div>
                </Link>
              </span>
              <div className="mt-6 flex justify-center shadow-2xl">
                <img
                  alt="Project"
                  className="rounded-md"
                  src={data.coverimage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
