import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Hero() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="h-hero flex flex-col-reverse items-center justify-center lg:flex-row">
        <div className="text-center lg:w-8/12 lg:text-left">
          <h1
            className={`text-3xl font-medium md:text-4xl ${darkMode ? `text-white` : `font-white`}`}
          >
            Freddie Heath
          </h1>
          <h2
            className={`text-2xl font-normal ${darkMode ? `text-white` : `font-white`}`}
          >
            Account Executive at Magnite
          </h2>
          <p
            className={`py-6 text-xl lg:w-9/12 ${darkMode ? `text-light-grey` : `font-white`}`}
          >
            Formerly a Media Communications undergraduate of UAL&apos;s London
            College of Communication.
          </p>
        </div>
        <div>
          <img
            src="/assets/memoji.png"
            className="h-64 rounded-full"
            alt="Memoji"
          />
        </div>
      </div>
    </>
  );
}
