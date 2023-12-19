import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex flex-col justify-center items-center   text-black dark:text-white -z-50"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="font-bold text-2xl border-b-4 w-fit py-2  mt-28 text-center  dark:text-white dark:border-white border-black text-black dark:text:white">
          Contact Me
        </h1>
        <h1 className="pt-4">Tell me what do you think!</h1>
      </div>
      <div className="w-full sm:w-3/4 mt-2">
        <form
          action="https://getform.io/f/91e7b728-2b26-4a64-9664-b8907b6b6e77"
          method="post"
          className="mx-auto text-center"
        >
          <div className="w-full mt-2 mb-2">
            <label htmlfor="fullname" className="font-bold">
              Full Name:
            </label>
          </div>
          <div className="w-full mb-2">
            <input
              type="text"
              name="fullname"
              className="rounded-lg py-3 px-0 sm:px-2 w-full sm:w-1/2  focus:outline-none dark:bg-slate-100 dark:text-black"
              placeholder="Your Full Name ..."
              required
            />
          </div>
          <div className="w-full mb-2">
            <label htmlfor="email" className="font-bold">
              Email Address:
            </label>
          </div>
          <div className="w-full mb-2">
            <input
              type="email"
              name="email"
              className="rounded-lg py-3 px-0 sm:px-2 w-full sm:w-1/2  focus:outline-none dark:bg-slate-100 dark:text-black"
              placeholder="Your Email address"
              required
            />
          </div>
          <div className="w-full mb-2">
            <label htmlfor="message" className="font-bold">
              Message:
            </label>
          </div>
          <div className="w-full mb-2">
            <textarea
              rows="6"
              name="message"
              className="rounded-lg py-3 px-0 sm:px-2 w-full sm:w-1/2 focus:outline-none dark:bg-slate-100 dark:text-black"
              placeholder="Enter your messages here"
            ></textarea>
          </div>
          <div className="w-full mb-2">
            <button className="py-4 px-0 sm:px-4 w-full sm:w-1/2 text-black dark:text-white bg-blue-400 hover:bg-blue-500 hover:scale-105 rounded-lg shadow-md">
              Send
            </button>
          </div>
        </form>
      </div>
      <hr className="border-4 border-black dark:border-slate-100 w-1/2 shadow-md mx-auto rounded-md mb-4" />
    </div>
  );
};

export default Contact;
