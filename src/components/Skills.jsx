import { Design } from "../data";
import { WebDev } from "../data";
import { Misc } from "../data";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Skills() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={``}>
      <h2
        className={`mb-4 border-b pb-2 text-xl ${darkMode ? `text-white` : `text-black`}`}
      >
        My Skills
      </h2>
      <h2 className={`pb-4 text-xl ${darkMode ? `text-white` : `text-black`}`}>
        Design
      </h2>
      <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4`}>
        {Design.map((data) => (
          <div
            className={`flex items-center gap-x-2 rounded-md px-2 py-5 ${darkMode ? `bg-secondary-grey text-white` : `bg-light-grey text-black`}`}
            key={data.id}
          >
            <div>
              <img className="h-4 w-4" src={data.icon} alt="Alt" />
            </div>
            <p>{data.id}</p>
          </div>
        ))}
      </div>
      <h2 className={`pb-4 text-xl ${darkMode ? `text-white` : `text-black`}`}>
        Web Dev
      </h2>
      <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4`}>
        {WebDev.map((data) => (
          <div
            className={`flex items-center gap-x-2 rounded-md bg-light-grey px-2 py-5 ${darkMode ? `bg-secondary-grey text-white` : `bg-light-grey text-black`}`}
            key={data.id}
          >
            <div>
              <img className="h-4 w-4" src={data.icon} alt="Alt" />
            </div>
            <p>{data.id}</p>
          </div>
        ))}
      </div>
      <h2 className={`pb-4 text-xl ${darkMode ? `text-white` : `text-black`}`}>
        Misc
      </h2>
      <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4`}>
        {Misc.map((data) => (
          <div
            className={`flex items-center gap-x-2 rounded-md px-2 py-5 ${darkMode ? `bg-secondary-grey text-white` : `bg-light-grey text-black`}`}
            key={data.id}
          >
            <div>
              <img className="h-4 w-4" src={data.icon} alt="Alt" />
            </div>
            <p className={`${darkMode ? `text-white` : `text-black`}`}>
              {data.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
