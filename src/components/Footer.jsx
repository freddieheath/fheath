import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between pb-4 pt-2 text-xs">
        <div className="flex items-center gap-x-1">
          <FaRegCopyright />
          <p> 2024 - Freddie Heath</p>
        </div>
        <p>Made with &#10084; using React and Tailwind</p>
      </div>
    </>
  );
}
