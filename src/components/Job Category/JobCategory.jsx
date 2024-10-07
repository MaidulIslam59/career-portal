import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold p-4">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5">
        {categories?.map((category) => {
          return (
            <div key={category?.id}>
              <Link to={`/category/${category?.category_name}`}>
                <p>{category?.category_name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobCategory;
