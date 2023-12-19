import React from "react";
import sifaskill from "../images/skills/sifaskill.png";
import techversity from "../images/skills/techversity.png";
import css from "../images/skills/css.png";
import js from "../images/skills/javascript.png";
import reactbs from "../images/skills/react-bootstrap.png";
import reactjs from "../images/skills/React-icon.png";
import next from "../images/skills/Nextjs-logo.png";
import { Link } from "react-scroll";

const Demo = () => {
  return (
    <div
      name="demo"
      className="min-h-screen  w-full flex flex-col justify-center items-center -z-50"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold mt-24 text-2xl border-b-4 py-4 dark:text-white dark:border-white border-black text-black dark:text:white">
          Demo Projects
        </h1>
        <p className="py-6 border-white dark:text-white dark:border-black text-black dark:text:white italic">
          This are some of projects for demo ...
        </p>
      </div>

      <div className=" mb-10 grid sm:grid-cols-2 md:grid-cols-3 gap-14">
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={sifaskill}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <div className="flex justify-between items-center">
            <a
              href="https://skill-train-solomonts-git.vercel.app/"
              className="rounded-lg p-4 m-4 text-black dark:text-white cursor-pointer bg-sky-400 dark:bg-sky-500 hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/solomonts-git/skill-train"
              className="rounded-lg px-6 py-4 m-4 text-black dark:text-white cursor-pointer bg-orange-400 dark:bg-orange-500 hover:scale-105"
            >
              Git
            </a>
          </div>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={techversity}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <div className="flex justify-between items-center">
            <a
              href="https://techversity-solomonts-git.vercel.app/"
              className="rounded-lg p-4 m-4 text-black dark:text-white cursor-pointer bg-sky-400 dark:bg-sky-500 hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/solomonts-git/techversity"
              className="rounded-lg px-6 py-4 m-4 text-black dark:text-white cursor-pointer bg-orange-400 dark:bg-orange-500 hover:scale-105"
            >
              Git
            </a>
          </div>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={sifaskill}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <div className="flex justify-between items-center">
            <a
              href="https://skill-train-solomonts-git.vercel.app/"
              className="rounded-lg p-4 m-4 text-black dark:text-white cursor-pointer bg-sky-400 dark:bg-sky-500 hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/solomonts-git/skill-train"
              className="rounded-lg px-6 py-4 m-4 text-black dark:text-white cursor-pointer bg-orange-400 dark:bg-orange-500 hover:scale-105"
            >
              Git
            </a>
          </div>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={sifaskill}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <div className="flex justify-between items-center">
            <a
              href="https://skill-train-solomonts-git.vercel.app/"
              className="rounded-lg p-4 m-4 text-black dark:text-white cursor-pointer bg-sky-400 dark:bg-sky-500 hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/solomonts-git/skill-train"
              className="rounded-lg px-6 py-4 m-4 text-black dark:text-white cursor-pointer bg-orange-400 dark:bg-orange-500 hover:scale-105"
            >
              Git
            </a>
          </div>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={sifaskill}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <div className="flex justify-between items-center">
            <a
              href="https://skill-train-solomonts-git.vercel.app/"
              className="rounded-lg p-4 m-4 text-black dark:text-white cursor-pointer bg-sky-400 dark:bg-sky-500 hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/solomonts-git/skill-train"
              className="rounded-lg px-6 py-4 m-4 text-black dark:text-white cursor-pointer bg-orange-400 dark:bg-orange-500 hover:scale-105"
            >
              Git
            </a>
          </div>
        </div>
        <div className="shadow-md dark:shadow-white p-4">
          <img
            src={sifaskill}
            alt=""
            className="h-60 w-60 hover:scale-110 rounded-md"
          />
          <div className="flex justify-between items-center">
            <a
              href="https://skill-train-solomonts-git.vercel.app/"
              className="rounded-lg p-4 m-4 text-black dark:text-white cursor-pointer bg-sky-400 dark:bg-sky-500 hover:scale-105"
            >
              Demo
            </a>
            <a
              href="https://github.com/solomonts-git/skill-train"
              className="rounded-lg px-6 py-4 m-4 text-black dark:text-white cursor-pointer bg-orange-400 dark:bg-orange-500 hover:scale-105"
            >
              Git
            </a>
          </div>
        </div>
      </div>
      <hr className="border-4 border-black dark:border-slate-100 w-1/2 shadow-md mx-auto rounded-md" />
    </div>
  );
};

export default Demo;
