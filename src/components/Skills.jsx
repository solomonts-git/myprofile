import React from "react";
import html5 from "../images/skills/html5.png";
import css from "../images/skills/css.png";
import js from "../images/skills/javascript.png";
import tailwind from "../images/skills/Tailwind_CSS.png";
import reactbs from "../images/skills/react-bootstrap.png";
import reactjs from "../images/skills/React-icon.png";
import next from "../images/skills/Nextjs-logo.png";
import reduxlogo from "../images/skills/redux.png";
import expss from "../images/skills/expressjs.png";
import mongodb from "../images/skills/mongodb.png";
import mysql from "../images/skills/mysql.png";
import node from "../images/skills/nodejs.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="min-h-screen flex flex-col justify-center items-center  -z-10"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl border-b-4 py-4 dark:text-white mt-24 dark:border-white border-black text-black dark:text:white">
          Technologies
        </h1>
        <p className="py-6 border-white dark:text-white dark:border-black text-black dark:text:white italic">
          This are technologies that I can work with...
        </p>
      </div>

      <div className=" mb-10 grid sm:grid-cols-2 md:grid-cols-3 gap-14">
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={html5}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            HTML5
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={css}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            CSS
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={js}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            JavaScript
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={reactjs}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            ReactJS
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={next}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            NextJS
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={reactbs}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            React Bootsrap
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={tailwind}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            Tailwind
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={node}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            NodeJS
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={expss}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            Express
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={reduxlogo}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            Redux
          </h1>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={mongodb}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            MongoDB
          </h1>
        </div>
        <div className="shadow-md  dark:shadow-white p-4">
          <img
            src={mysql}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <h1 className="font-bold text-center py-4 text-black dark:text-white">
            MySQL
          </h1>
        </div>
      </div>
      <hr className="border-4 border-black dark:border-slate-100 w-1/2 shadow-md mx-auto rounded-md" />
    </div>
  );
};

export default Skills;
