import React, { useState } from "react";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleChangeMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300">
      <ul>
        <li>
          <button onClick={handleChangeMode}>{isDarkMode ? "Dark mode" : "Light mode"}</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
