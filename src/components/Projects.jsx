import { ProjectData } from "../data";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Projects() {
  return (
    <div className="py-6">
      <h1 className="mb-4 border-b-2 pb-2 text-xl">Projects</h1>
      <div className="ext-center">
        <div className="mb-10">
          {ProjectData.map((data) => (
            <div key={data.id} className="flex flex-col gap-y-2">
              <h1 className="mt-4 text-lg">{data.title}</h1>
              <h2 className="my-2 text-sm">Made with: {data.tags}</h2>
              <h3 className="my-1 text-base">{data.description}</h3>
              <Link to={data.link}>
                <span className="inline-flex items-center justify-center gap-x-1 rounded-md border border-black px-1">
                  <HiOutlineExternalLink />
                  <h3>Link</h3>
                </span>
              </Link>
              <div className="mt-6 flex justify-center rounded-xl shadow-2xl">
                <img alt="Project" className="" src={data.coverimage} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
