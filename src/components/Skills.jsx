import { Design } from "../data";
import { WebDev } from "../data";
import { Misc } from "../data";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={``}>
      <h2
        className={`mb-4 border-b pb-2 text-xl ${darkMode ? `text-white` : `text-black`}`}
      >
        My Skills
      </h2>
      <div data-aos="fade-right">
        <h2
          className={`text-lg pb-4 ${darkMode ? `text-white` : `text-black`}`}
        >
          Design
        </h2>
        <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-4`}>
          {Design.map((data) => (
            <div
              className={`flex items-center gap-x-3 rounded-md px-2 py-5 ${darkMode ? `bg-secondary-grey text-white` : `bg-light-grey text-black`}`}
              key={data.id}
            >
              <div>
                <img className="ml-2 h-4 w-4" src={data.icon} alt="Alt" />
              </div>
              <p>{data.id}</p>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-right">
        <h2
          className={`text-lg pb-4 ${darkMode ? `text-white` : `text-black`}`}
        >
          Web Dev
        </h2>
        <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-4`}>
          {WebDev.map((data) => (
            <div
              className={`flex items-center gap-x-3 rounded-md px-2 py-5 ${darkMode ? `bg-secondary-grey text-white` : `bg-light-grey text-black`}`}
              key={data.id}
            >
              <div>
                <img className="ml-2 h-4 w-4" src={data.icon} alt="Alt" />
              </div>
              <p>{data.id}</p>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-right">
        <h2
          className={`text-lg pb-4 ${darkMode ? `text-white` : `text-black`}`}
        >
          Misc
        </h2>
        <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-4`}>
          {Misc.map((data) => (
            <div
              className={`flex items-center gap-x-3 rounded-md px-2 py-5 ${darkMode ? `bg-secondary-grey text-white` : `bg-light-grey text-black`}`}
              key={data.id}
            >
              <div>
                <img className="ml-2 h-4 w-4" src={data.icon} alt="Alt" />
              </div>
              <p className={`${darkMode ? `text-white` : `text-black`}`}>
                {data.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
