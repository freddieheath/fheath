import { JobsData } from "../data";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Jobs() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="my-10">
        <h1
          className={`border-b pb-2 text-xl font-light ${darkMode ? `text-white` : `text-black`}`}
        >
          Work History
        </h1>
        <div
          className={`grid grid-cols-1 gap-x-4 gap-y-4 pt-6 lg:grid-cols-4${darkMode ? `text-white` : `text-black`}`}
        >
          {JobsData.map((data) => (
            <div
              className={`rounded-md px-4 py-4 transition-all ${darkMode ? `bg-secondary-grey text-white` : `bg-light-grey`}`}
              key={data.id}
            >
              <div
                className={`justify-between rounded-md transition-all md:flex ${darkMode ? `text-white` : `text-black`}`}
              >
                <div>
                  <p
                    className={`font- ${darkMode ? `text-white` : `text-black`}`}
                  >
                    {data.id}
                  </p>
                  <p className={` ${darkMode ? `text-white` : `text-black`}`}>
                    {data.jobtitle}
                  </p>
                </div>

                <p className={` ${darkMode ? `text-white` : `text-black`}`}>
                  {data.yearstart} - {data.yearend}
                </p>
              </div>
              <div>
                <p
                  className={`font- py-4 ${darkMode ? `text-white` : `text-black`}`}
                >
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
