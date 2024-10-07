import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineDollarCircle } from "react-icons/ai";
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
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <div>
          {/* <div
          className="bg-no-repeat bg-left"
          style="background-image: url();"
        ></div> */}
          <img
            className="m-0 p-0 w-80 h-52 "
            src="/assets/images/bg1.png"
            alt=""
          />
        </div>
        {/* -translate-y-32 */}
        <h2 className="text-2xl font-bold text-center translate-y-28 ">
          Applied Jobs
        </h2>
        <div>
          <img
            className="m-0 p-0 w-80 h-52 "
            src="/assets/images/bg2.png"
            alt=""
          />
        </div>
      </div>

      <details className="dropdown w-56 ml-auto mr-20 block mt-7 ">
        <summary className="btn m-1">Sort By</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow ">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>onsite</a>
          </li>
        </ul>
      </details>

      <ul>
        {displayJobs.map((job) => (
          <div key={job.id}>
            {/* card card-compact */}
            <div className="mx-72  shadow-xl m-6 ">
              <div className="flex justify-start p-4 gap-7 border rounded-md">
                <div className=" bg-neutral-100 p-4 border rounded-md">
                  <img className="w-28 h-10 mt-10" src={job.logo} alt="" />
                </div>
                {/* <figure>
                  <img src={job.logo} alt="logo" />
                </figure> */}

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
                  <div className="flex mt-4 ">
                    <h2 className="flex mr-6">
                      <HiLocationMarker className="text-2xl mr-2" />{" "}
                      {job.location}
                    </h2>
                    <h2 className="flex ">
                      <AiOutlineDollarCircle className="text-2xl mr-2" />{" "}
                      {job.salary}
                    </h2>
                  </div>
                </div>
                <div className="ml-20 mt-10">
                  <Link to={`/job/${job.id}`}>
                    <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      View Details
                    </button>
                  </Link>
                </div>
                {/* <div className="">
                  <h2 className="">{job.job_title}</h2>
                  <p>{job.company_name}</p>
                  <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">
                      {job.remote_or_onsite}
                    </button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">
                      {job.job_type}
                    </button>
                  </div>
                  <div className="flex mt-4 ">
                    <h2 className="flex mr-6">
                      <HiLocationMarker className="text-2xl mr-2" />{" "}
                      {job.location}
                    </h2>
                    <h2 className="flex ">
                      <AiOutlineDollarCircle className="text-2xl mr-2" />{" "}
                      {job.salary}
                    </h2>
                  </div>
                </div> */}
                {/* <div className="">
                  <Link to={`/job/${id}`}>
                    <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      View Details
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
