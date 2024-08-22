import React, { useState } from "react";
import DarkIcon from "../assets/icons/DarkIcon";
import LightIcon from "../assets/icons/LightIcon";
import { getToday } from "../util/date";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleChangeMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="flex items-center justify-between bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300">
      <p>Paris2024</p>
      <ul className="flex items-center gap-2 p-2">
        <li>{getToday()}</li>
        <li>
          <button
            onClick={handleChangeMode}
            className="flex items-center p-2 border rounded border-neutral-400"
          >
            {isDarkMode ? <LightIcon size="size-5" /> : <DarkIcon size="size-5" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
