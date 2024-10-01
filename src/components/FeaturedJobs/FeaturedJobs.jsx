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
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs : {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
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
