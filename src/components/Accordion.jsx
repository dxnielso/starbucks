import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const Accordion = ({ title, links }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <li
      className="relative cursor-pointer my-1 w-full"
      onClick={() => setToggled(!toggled)}
    >
      <span className="px-4 py-2 tracking-tight flex flex-row justify-between items-center">
        <p className="text-xl font-semibold text-gray-500">{title}</p>
        <FiChevronDown
          className={`text-gray-700 text-2xl duration-300 ${
            toggled ? "rotate-180" : undefined
          }`}
        />
      </span>
      <div
        className={`top-[100%] bg-white z-30 text-gray-500 text-md px-4 py-3 duration-500 flex flex-col space-y-4 ${
          toggled
            ? "[clip-path:inset(0%_0%_0%_0%)] relative"
            : "[clip-path:inset(0%_0%_100%_0%)] absolute"
        }`}
      >
        {
          links.map((link, e) => (
            <a href={link.link} key={e} className="w-fit text-lg text-gray-500">{link.text}</a>
          ))
        }
      </div>
    </li>
  );
};
export default Accordion;
