import React from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../Job Category/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <JobCategory />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
