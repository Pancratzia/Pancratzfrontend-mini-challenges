import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  }

  useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar  bg-primary text-primary-content px-4">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          By Pancratzia
        </a>
      </div>
      <div className="flex-none">
        <Checkbox handleToggle={handleToggle} />
      </div>
    </div>
  );
}

export default Navbar;
