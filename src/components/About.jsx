import React from "react";
import mypic from "../images/mypic.jpeg";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div name="about" className="min-h-screen mt-20 -z-50">
      <div className="mx-auto flex flex-col-reverse sm:flex-row  justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full sm:h-main box-border mt-5 sm:mt-0">
          <h1 className="font-bold text-2xl text-black dark:text-white border-b-4 border-black dark:border-slate-100 mb-4">
            Who am I?
          </h1>
          <p className="text-black dark:text-white w-3/4 pb-4">
            Hello, I am Solomon Tsegaye a passinate Web Developer and Instructor
            in Information Technology. I do have more than six years of
            exprience in teaching web development and other programming courses.
          </p>
          <p className="text-black dark:text-white w-3/4 pb-4">
            I can speak/work with the following technologies:-
            <ul className="ml-9">
              <li className="flex justify-start">
                <BsArrowRight className="mr-2" />
                <span>HTML</span>
              </li>
              <li className="flex justify-start">
                <BsArrowRight className="mr-2" />
                <span>CSS(Bootstrap,Tailwind,React Bootstrap)</span>
              </li>
              <li className="flex justify-start">
                <BsArrowRight className="mr-2" />
                <span>JavaScript(ReactJs, Next JS,NodeJS)</span>
              </li>
              <li className="flex justify-start">
                <BsArrowRight className="mr-2" />
                <span>SQL(MySQL, PL/SQL)</span>
              </li>
              <li className="flex justify-start">
                <BsArrowRight className="mr-2" />
                <span>MongoDB</span>
              </li>
              <li className="flex justify-start">
                <BsArrowRight className="mr-2" />
                <span>PHP</span>
              </li>
            </ul>
          </p>
        </div>
        <div className="flex justify-center items-center w-full sm:h-main box-border mt-28 sm:mt-4 ">
          <img
            src={mypic}
            alt="my profile pic"
            className="w-40 h-40 sm:w-80 sm:h-80  border-4 border-black dark:border-white  border-dashed rounded-md"
          />
        </div>
      </div>
      <hr className="border-4 border-black dark:border-slate-100 w-1/2 shadow-md mx-auto rounded-md" />
    </div>
  );
};

export default About;
