import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    // <div className="bg-[#7E90FE0D]">
    //   <div className="container mx-auto text-center">
    //     <div className="grid md:grid-cols-2">
    //       <div className="flex flex-col items-start justify-center order-2 md:order-1">
    //         <h1 className="text-7xl font-bold text-start">
    //           One Step <br /> Closer To Your <br />
    //           <strong className="text-[#7E90FE] 0%">Dream Job</strong>
    //         </h1>
    //         <p className=" mt-6 text-start">
    //           Explore thousands of job opportunities with all the information
    //           you need. Its your future. Come find it. Manage all your job
    //           application from start to finish.
    //         </p>
    //         <button className="btn mr-auto  block  text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  my-7 ">
    //           Get Started
    //         </button>
    //       </div>
    //       <div className="flex items-center justify-center order-1  md:order-2 ">
    //         <div>
    //           <img
    //             className="w-full h-full object-cover"
    //             src="/assets/images/cover.png"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-[#7E90FE0D]">
      <div className="container mx-auto text-center">
        <motion.div
          className="grid md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col items-start justify-center order-2 md:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl font-bold text-start">
              One Step <br /> Closer To Your <br />
              <strong className="text-[#7E90FE] 0%">Dream Job</strong>
            </h1>
            <motion.p
              className="mt-6 text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </motion.p>
            <motion.button
              className="btn mr-auto block text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-7"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="flex items-center justify-center order-1 md:order-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
              <motion.img
                className="w-full h-full object-cover"
                src="/assets/images/cover.png"
                alt=""
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
