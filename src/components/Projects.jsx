import { ProjectData } from "../data";
import { Link } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-6">
      <h1
        className={`border-b pb-2 text-xl font-light ${darkMode ? `text-white` : `text-black`}`}
      >
        Projects
      </h1>
      <div>
        <div className="my-6" data-aos="fade-right">
          {ProjectData.map((data) => (
            <Link to={data.link} key={data.id}>
              <div
                className={`flex items-center gap-y-2 rounded-md transition-all 2xl:gap-x-4 2xl:px-6 2xl:py-8 ${
                  darkMode
                    ? `bg-secondary-grey text-white hover:bg-noir-hover`
                    : `bg-light-grey text-black hover:bg-o-w-hover`
                }`}
              >
                <div className="hidden 2xl:block">
                  <h1
                    className={`font-light ${darkMode ? `text-white` : `text-black`}`}
                  >
                    {data.title}
                  </h1>
                  <h1
                    className={`text-sm font-medium ${darkMode ? `text-white` : `text-black`}`}
                  >
                    {data.date}
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
                  ></span>
                </div>
                <div className="flex justify-center shadow-md 2xl:w-4/5 2xl:shadow-none">
                  <img
                    alt="Project"
                    className="rounded-md"
                    src={data.coverimage}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
