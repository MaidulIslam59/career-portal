import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";
import { motion } from "framer-motion";
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-6xl mx-auto m-6">
      {/* Title Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInFromBottom}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold m-5">Featured Jobs</h2>
        <p className="mb-3 text-base md:text-lg">
          Explore thousands of job opportunities with all the information you
          need. It’s your future.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInFromBottom}
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 pt-5"
      >
        {jobs?.slice(0, dataLength).map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInFromBottom}
        className={`flex justify-center mt-6 ${
          dataLength === jobs.length && "hidden"
        }`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
        >
          See All Jobs
        </button>
      </motion.div>
    </div>
  );
};

export default FeaturedJobs;
