import { Design } from "../data";
import { WebDev } from "../data";
import { Misc } from "../data";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div className={``}>
      <h2 className={`mb-4 border-b-2 pb-2 text-xl`}>My Skills</h2>
      <h2 className={`pb-4 text-xl`}>Design</h2>
      <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3`}>
        {Design.map((data) => (
          <div
            className={`bg-light-grey flex items-center gap-x-2 rounded-md border px-2 py-5`}
            key={data.id}
          >
            <>{data.icon}</>
            <p>{data.id}</p>
          </div>
        ))}
      </div>
      <h2 className={`pb-4 text-xl`}>Web Dev</h2>
      <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3`}>
        {WebDev.map((data) => (
          <div
            className={`bg-light-grey flex items-center gap-x-2 rounded-md border px-2 py-5`}
            key={data.id}
          >
            <>{data.icon}</>
            <p>{data.id}</p>
          </div>
        ))}
      </div>
      <h2 className={`pb-4 text-xl`}>Misc</h2>
      <div className={`mb-6 grid grid-cols-2 gap-x-4 gap-y-3`}>
        {Misc.map((data) => (
          <div
            className={`bg-light-grey flex items-center gap-x-2 rounded-md border px-2 py-5`}
            key={data.id}
          >
            <>{data.icon}</>
            <p>{data.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
