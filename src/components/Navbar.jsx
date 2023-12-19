import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState();

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <header className="w-full  h-[15vh] sticky top-0 shadow-sm shadow-gray-300 dark:shadow-slate-100 z-50 dark:bg-slate-800 bg-slate-200">
      <div className="flex justify-between items-center relative w-full h-full">
        {/* -------logo-------------- */}
        <div>
          <h1 className="font-bold dark:text-white text-black text-3xl md:text-2xl  px-6">
            Solomon Tsegaye
          </h1>
        </div>
        {/* -------------- widescreen menu ------------ */}
        <div className="flex justify-end items-center">
          <div className="hidden sm:flex px-3 box-border">
            <ul className="flex  justify-between items-center w-full">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="px-3 text-xl md:text-2xl text-black dark:text-white cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="px-3 text-xl md:text-2xl text-black dark:text-white cursor-pointer"
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="px-3 text-xl md:text-2xl text-black dark:text-white cursor-pointer"
              >
                Skills
              </Link>
              <Link
                to="demo"
                smooth={true}
                duration={500}
                className="px-3 text-xl md:text-2xl text-black dark:text-white cursor-pointer"
              >
                Demo
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-3 text-xl md:text-2xl text-black dark:text-white cursor-pointer"
              >
                Contact
              </Link>
            </ul>
          </div>
          {/* --------------- Toogle theme ----------- */}
          <div className="flex justify-center items-center md:mr-4 mr-0 box-border">
            {theme === "dark" ? (
              <BsFillSunFill
                size={30}
                className="text-white  cursor-pointer"
                onClick={handleTheme}
              />
            ) : (
              <BsFillMoonStarsFill
                size={30}
                className="cursor-pointer"
                onClick={handleTheme}
              />
            )}
          </div>

          {/* ------------- humbergur ----------- */}

          <div className="flex sm:hidden ml-2 mr-4 cursor-pointer">
            {!isOpen ? (
              <FaBars
                className="dark:text-white text-sky-600"
                style={{
                  width: "30px",
                  height: "30px",
                }}
                onClick={handleMobileMenu}
              />
            ) : (
              <FaTimes
                className="text-red-500"
                style={{
                  width: "30px",
                  height: "30px",
                }}
                onClick={handleMobileMenu}
              />
            )}
          </div>
        </div>
        {/* ---- Mobile Menu ---------------- */}
        {isOpen && (
          <ul className="sm:hidden flex flex-col justify-center items-center absolute w-full h-main text-black bg-gray-100 dark:bg-black dark:text-white top-[15vh] box-border z-50">
            <Link
              to="home"
              onClick={() => setIsOpen(!isOpen)}
              smooth={true}
              duration={500}
            >
              <li className="px-3 pb-4 text-2xl  cursor-pointer">Home</li>
            </Link>
            <Link
              to="about"
              onClick={() => setIsOpen(!isOpen)}
              smooth={true}
              duration={500}
            >
              <li className="px-3 pb-4 text-2xl  cursor-pointer">About</li>
            </Link>
            <Link
              to="skills"
              onClick={() => setIsOpen(!isOpen)}
              smooth={true}
              duration={500}
            >
              <li className="px-3 pb-4 text-2xl  cursor-pointer">Skills</li>
            </Link>
            <Link
              to="demo"
              onClick={() => setIsOpen(!isOpen)}
              smooth={true}
              duration={500}
            >
              <li className="px-3 pb-4 text-2xl  cursor-pointer">Demo</li>
            </Link>
            <Link
              to="contact"
              onClick={() => setIsOpen(!isOpen)}
              smooth={true}
              duration={500}
            >
              <li className="px-3 pb-4 text-2xl  cursor-pointer">Contact</li>
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Navbar;
