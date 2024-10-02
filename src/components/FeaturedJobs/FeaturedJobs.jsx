import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto m-6">
      <div className="text-center ">
        <h2 className="text-5xl font-bold m-5">Featured Jobs</h2>
        <p className="mb-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 pt-5">
        {jobs?.slice(0, dataLength).map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </div>
      <div
        className={`flex justify-center mt-6 ${
          dataLength === jobs.length && "hidden"
        }`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn  text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
