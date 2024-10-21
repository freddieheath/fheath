import { DirectoryData } from "../data";
import { Link } from "react-router-dom";

export default function Directory() {
  return (
    <>
      <div className={`py-6`}>
        <h1 className={`border-b-2 pb-2 text-xl`}>Pages</h1>
        <div className={`flex flex-col gap-y-4 py-4`}>
          {DirectoryData.map((data) => (
            <Link
              to={data.link}
              className={`flex flex-col gap-y-1 rounded-md border bg-light-grey px-4 py-4`}
              key={data.id}
            >
              <p>{data.id}</p>
              <p>{data.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
