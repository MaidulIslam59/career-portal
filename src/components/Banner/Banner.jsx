import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#7E90FE0D]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col items-start justify-center order-2 md:order-1">
            <h1 className="text-7xl font-bold text-start">
              One Step <br /> Closer To Your <br />
              <strong className="text-[#7E90FE] 0%">Dream Job</strong>
            </h1>
            <p className=" mt-6 text-start">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn mr-auto  block  text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  my-7 ">
              Get Started
            </button>
          </div>
          <div className="flex items-center justify-center order-1  md:order-2 ">
            <div>
              <img
                className="w-full h-full object-cover"
                src="/assets/images/user.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
