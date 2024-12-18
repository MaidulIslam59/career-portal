import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md";
import { PiBrainLight } from "react-icons/pi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdOutlineEngineering } from "react-icons/md";
import { motion } from "framer-motion";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="container mx-auto block my-8 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInFromBottom}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold p-4">
          Job Category List
        </h2>
        <p className="text-base md:text-lg pb-8">
          Explore thousands of job opportunities with all the information you
          need.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {categories?.map((category, index) => {
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInFromBottom}
              className="w-full sm:w-[47%] md:w-64 lg:w-64 h-44 border bg-[#7E90FE0D] p-4 rounded-lg"
            >
              <Link to={`/category/${category?.category_name}`}>
                <div className="w-16 h-16 flex items-center justify-center mb-4 text-3xl text-blue-500">
                  {
                    [
                      <MdAccountBalance />,
                      <PiBrainLight />,
                      <SiGooglemarketingplatform />,
                      <MdOutlineEngineering />,
                    ][index]
                  }
                </div>
                <div>
                  <p className="text-lg md:text-xl font-semibold text-gray-800">
                    {category?.category_name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {category?.availability}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default JobCategory;
