import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md";
import { PiBrainLight } from "react-icons/pi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdOutlineEngineering } from "react-icons/md";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto block my-2">
      <div className="text-center">
        <h2 className="text-5xl font-bold p-4">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 flex-wrap max-w-6xl mx-auto">
        {categories?.map((category, index) => {
          return (
            <Link to={`/category/${category?.category_name}`}>
              <div key={index} className="w-64 h-44 border bg-[#7E90FE0D] p-4">
                {
                  [
                    <MdAccountBalance />,
                    <PiBrainLight />,
                    <SiGooglemarketingplatform />,
                    <MdOutlineEngineering />,
                  ][index]
                }

                <p className="text-xl font-semibold">
                  {category?.category_name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default JobCategory;
