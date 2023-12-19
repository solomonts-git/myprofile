import React from "react";
import mypic from "../images/mypic.jpeg";
import Typical from "react-typical";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="flex flex-col md:flex-row mx-auto  justify-center items-center w-full h-full -z-50">
        <div className="flex flex-col justify-center items-center  h-full box-border">
          <h1 className="pb-4 text-2xl text-black font-mono dark:text-white mt-4">
            Hello I'm
            <span className="font-bold text-2xl font-mono mx-2 dark:text-white">
              Solomon
            </span>
          </h1>
          <h1>
            <Typical
              steps={[
                "Full Stack Web Developer!",
                1000,
                "Instructor!",
                1000,
                "Life long learner!",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
              className="pb-10 font-semibold font-mono text-xl md:text-4xl dark:text-white"
            />
          </h1>

          <div className="w-full py-6 text-2xl sm:text-xl">
            <p className="mx-2 px-0 font-mono font-thin sm:px-20 text-balck dark:text-white box-border">
              I Love to write computer programs which simplifies our way of
              Life.
            </p>
          </div>
        </div>
        <div className="flex  justify-center items-center w-full   mt-2 box-border ">
          <img
            src={mypic}
            alt="my profile pic"
            className="w-40 h-40 sm:w-80 sm:h-80 border-y-4 border-violet-800 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
