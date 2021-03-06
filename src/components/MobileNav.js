import React from "react";

function MobileNav({ onHamClick }) {
  return (
    <div className="bg-gray-800 text-gray-300 pt-16 -mb-12">
      <li className="flex flex-col text-center items-center">
        <ul className="cursor-pointer py-1 px-3 text-gray-200 bg-gray-900 rounded-lg">
          <a href="#hero" onClick={onHamClick}>
            Home
          </a>
        </ul>
        <ul className="cursor-pointer py-1 px-3">
          <a href="#skillset" onClick={onHamClick}>
            SkillSet
          </a>
        </ul>
        <ul className="cursor-pointer py-1 px-3">
          <a href="#projects" onClick={onHamClick}>Experience</a>
        </ul>
      </li>
    </div>
  );
}

export default MobileNav;
