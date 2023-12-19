import React, { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import html5 from "../images/skills/html5.png";

const Footer = () => {
  const [year, setCurrentYear] = useState(null);

  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    setCurrentYear(year);
  }, [year]);

  return (
    <div className="flex  flex-col w-full justify-center items-center text-black dark:text-white border-t-2 dark:border-slate-50 border-black mt-5">
      <div className="flex flex-col sm:flex-row w-full py-6 justify-evenly text-center flex-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <div className=" hidden sm:flex  justify-center items-center w-ful">
            Solomon Tsegaye
          </div>
          <div>
            <ul className=" flex flex-col  justify-center items-center  w-full ">
              <li className="px-3 pb-2  cursor-pointer">Home</li>
              <li className="px-3 pb-2   cursor-pointer">About</li>
              <li className="px-3 pb-2   cursor-pointer">Skills</li>
            </ul>
          </div>
          <div className="p-10">
            <ul className=" flex flex-col  justify-center items-center  w-full ">
              <li className="px-3 pb-2   cursor-pointer">Demo</li>
              <li className="px-3 pb-2   cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <a href="https://www.facebook.com/solomonts2023">
            <AiFillFacebook
              size={30}
              className="text-blue-700 hover:text-blue-600 cursor-pointer rounded-md"
            />
          </a>
          <a href="https://twitter.com/solomontseth">
            <AiFillTwitterSquare
              size={30}
              className="text-sky-400 hover:text-sky-300 cursor-pointer rounded-md"
            />
          </a>
          <a href="https://github.com/solomonts-git">
            <AiFillGithub
              size={30}
              className="text-gray-800 hover:text-gray-100 cursor-pointer rounded-md"
            />
          </a>
        </div>
      </div>
      <hr className="border-4 border-black dark:border-slate-100 w-1/2 shadow-md mx-auto rounded-md" />
      <div className="py-4">
        &copy;
        <span className="pr-2">{year}</span>
        Solomon Tsegaye. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
