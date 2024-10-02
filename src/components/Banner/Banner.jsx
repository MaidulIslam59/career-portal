import React from "react";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto text-center bg-[#7E90FE0D]">
      <div className="grid grid-cols-2 ">
        <div>
          <div className="max-w-xl h-72 mt-24">
            <h1 className="text-7xl font-bold text-start">
              One Step <br /> Closer To Your <br />
              <strong className="text-[#7E90FE] 0%">Dream Job</strong>
            </h1>
            <p className=" mt-6 text-start">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  my-7 ">
              Get Started
            </button>
          </div>
        </div>
        <div className="max-w-3xl h-[744px]">
          <img className="" src="/src/assets/images/user.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
