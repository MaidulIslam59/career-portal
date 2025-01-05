import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { AiOutlineDollarCircle } from "react-icons/ai";
import { ImBriefcase } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);

  const {
    logo,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleAppliedJobs = () => {
    saveJobApplication(intId);
    toast("You have applied successfully");
  };

  // Framer Motion animation variants
  const fadeInBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInBottom}
      className="container mx-auto"
    >
      {/* Header Section */}
      <div className="flex justify-between">
        <div>
          <img
            className="m-0 p-0 w-80 h-52"
            src="/assets/images/bg1.png"
            alt="Background 1"
          />
        </div>
        <h2 className="text-2xl font-bold text-center translate-y-28">
          Job Details
        </h2>
        <div>
          <img
            className="m-0 p-0 w-80 h-52"
            src="/assets/images/bg2.png"
            alt="Background 2"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto grid gap-4 md:grid-cols-4 mt-32">
        <div className="md:grid col-span-3">
          {/* Job Details */}
          <section className="mb-6">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInBottom}
              className="mb-4"
              src={logo}
              alt="logo"
            />
            <h2 className="font-bold text-2xl py-2">Job Title : {job_title}</h2>
            <p>
              <strong>Job Description: </strong>
              {job_description}
            </p>
          </section>
          <section className="mb-6">
            <p>
              <strong>Job Responsibility: </strong> {job_responsibility}
            </p>
          </section>
          <section className="mb-6">
            <h2>
              <strong>Educational Requirements :</strong>
            </h2>
            <p>{educational_requirements}</p>
          </section>
          <section className="mb-6">
            <h2>
              <strong>Experiences :</strong>
            </h2>
            <p>{experiences}</p>
          </section>
        </div>

        {/* Sidebar Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInBottom}
          className=""
        >
          <h2 className="text-xl mb-5 font-bold">Job Details</h2>
          <hr />
          <p className="flex mt-5">
            <AiOutlineDollarCircle className="text-2xl mr-2" />
            <strong className="mr-2 text-nowrap">Salary: </strong> {salary}
          </p>
          <p className="flex mt-4">
            <ImBriefcase className="text-2xl mr-2" />
            <strong className="mr-2 text-nowrap">Job Title: </strong>{" "}
            {job_title}
          </p>
          <h2 className="text-xl font-bold mt-8 mb-6">Contact Information</h2>
          <hr />
          <p className="flex mt-5">
            <FaPhoneAlt className="text-2xl mr-2" />
            <strong className="mr-2 text-nowrap">Phone: </strong>{" "}
            {contact_information.phone}
          </p>
          <p className="flex mt-5">
            <MdOutlineEmail className="text-2xl mr-2" />
            <strong className="mr-2 text-nowrap">Email: </strong>{" "}
            {contact_information.email}
          </p>
          <p className="flex mt-5">
            <HiLocationMarker className="text-2xl mr-2" />
            <strong className="mr-2 text-nowrap">Address: </strong>{" "}
            {contact_information.address}
          </p>

          <button
            onClick={handleAppliedJobs}
            className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full my-7"
          >
            Apply Now
          </button>
          <ToastContainer />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JobDetails;
