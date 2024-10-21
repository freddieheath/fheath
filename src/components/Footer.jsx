import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between text-xs">
        <div className="flex items-center gap-x-1">
          <FaRegCopyright />
          <p>2024- Made with &#10084; using React and Tailwind</p>
        </div>
        <nav>
          <ul className="flex gap-x-2">
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Email</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
