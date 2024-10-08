import { useLoaderData, useParams } from "react-router-dom";
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
  // console.log(job);
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

  const handleAppliedJobs = () => {
    saveJobApplication(intId);
    toast("You have applied successfully");
  };

  return (
    //   className="w-full mx-0"
    <div className="max-w-6xl mx-auto">
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
          Job Details
        </h2>
        <div>
          <img
            className="m-0 p-0 w-80 h-52 "
            src="/assets/images/bg2.png"
            alt=""
          />
        </div>
      </div>

      <div className="container mx-auto grid gap-4 md:grid-cols-4 mt-32">
        <div className=" md:grid col-span-3 ">
          <section className="mb-6">
            <img className="mb-4" src={logo} alt="logo" />
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
              <strong>Educationar Requirements :</strong>
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
        <div className="">
          <h2 className="text-xl mb-5 font-bold">Job Details</h2>
          <hr />
          <p className="flex mt-5">
            <AiOutlineDollarCircle className="text-2xl mr-2" />
            <strong className="mr-2 text-nowrap">Salary : </strong> {salary}
          </p>
          <p className="flex mt-4">
            <ImBriefcase className="text-2xl mr-2" />
            <strong className="mr-2 text-nowrap">Job Title : </strong>{" "}
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
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
