import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, []);

  const fadeInBottomVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto">
      <motion.div
        className="flex justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <img
            className="m-0 p-0 w-80 h-52"
            src="/assets/images/bg1.png"
            alt=""
          />
        </div>
        <h2 className="text-2xl font-bold text-center translate-y-28">
          Applied Jobs
        </h2>
        <div>
          <img
            className="m-0 p-0 w-80 h-52"
            src="/assets/images/bg2.png"
            alt=""
          />
        </div>
      </motion.div>

      <select
        onChange={(e) => handleJobsFilter(e.target.value)}
        className="select select-bordered w-full max-w-xs ml-auto mr-8 block mt-7"
      >
        <option disabled selected>
          Sort By
        </option>
        <option value={"all"}>All</option>
        <option value={"remote"}>Remote</option>
        <option value={"onsite"}>Onsite</option>
      </select>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {displayJobs.map((job) => (
          <motion.div
            key={job.id}
            variants={fadeInBottomVariant}
            transition={{ duration: 0.5 }}
          >
            <div className="shadow-xl m-6">
              <div className="flex justify-between p-6 gap-7 border rounded-md">
                <div className="flex gap-12">
                  <div className="bg-neutral-100 p-4 border rounded-md">
                    <img className="w-28 h-10 mt-10" src={job.logo} alt="" />
                  </div>
                  <div className="">
                    <h2 className="text-xl font-semibold pb-1">
                      {job.job_title}
                    </h2>
                    <p className="pb-1">{job.company_name}</p>
                    <div>
                      <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">
                        {job.remote_or_onsite}
                      </button>
                      <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">
                        {job.job_type}
                      </button>
                    </div>
                    <div className="flex mt-4">
                      <h2 className="flex mr-6">
                        <HiLocationMarker className="text-2xl mr-2" />
                        {job.location}
                      </h2>
                      <h2 className="flex">
                        <AiOutlineDollarCircle className="text-2xl mr-2" />
                        {job.salary}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-10 mr-10">
                  <Link to={`/job/${job.id}`}>
                    <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.ul>
    </div>
  );
};

export default AppliedJobs;
