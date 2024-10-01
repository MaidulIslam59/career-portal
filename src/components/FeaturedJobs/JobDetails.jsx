import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { ImBriefcase } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  console.log(job);

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
            src="/src/assets/images/bg1.png"
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
            src="/src/assets/images/bg2.png"
            alt=""
          />
        </div>
      </div>

      <div className="container mx-auto grid gap-4 md:grid-cols-4 mt-32">
        <div className=" md:grid col-span-3 ">
          <section className="mb-6">
            <p>
              <strong>Job Description: </strong> A UI/UX (User Interface/User
              Experience) designer is responsible for designing and creating
              engaging and effective interfaces for software and web
              applications. This includes designing the layout, visual design,
              and interactivity of the user interface.
            </p>
          </section>
          <section className="mb-6">
            <p>
              <strong>Job Responsibility: </strong> Collaborating with
              cross-functional teams: UI/UX designers often work closely with
              other teams, including product management, engineering, and
              marketing, to ensure that the user interface is aligned with
              business and technical requirements. You will need to be able to
              effectively communicate your design ideas and gather feedback from
              other team members.
            </p>
          </section>
          <section className="mb-6">
            <h2>
              <strong>Educationar Requirements :</strong>
            </h2>
            <p>Bachelor degree to complete any reputational university.</p>
          </section>
          <section className="mb-6">
            <h2>
              <strong>Experiences :</strong>
            </h2>
            <p>2-3 Years in this field.</p>
          </section>
        </div>
        <div className="">
          <h2 className="text-xl mb-5 font-bold">Job Details</h2>
          <hr />
          <p className="flex mt-5">
            <AiOutlineDollarCircle className="text-2xl mr-2" />
            <strong className="mr-2">Salary : </strong> 100K - 150K (Per Month)
          </p>
          <p className="flex mt-4">
            <ImBriefcase className="text-2xl mr-2" />
            <strong className="mr-2">Job Title : </strong> Product Designer
          </p>
          <h2 className="text-xl font-bold mt-8 mb-6">Contact Information</h2>
          <hr />
          <p className="flex mt-5">
            <FaPhoneAlt className="text-2xl mr-2" />
            <strong className="mr-2">Phone : </strong> 01750-00 00 00
          </p>
          <p className="flex mt-5">
            <MdOutlineEmail className="text-2xl mr-2" />
            <strong className="mr-2">Email : </strong> info@gmail.com
          </p>
          <p className="flex mt-5">
            <HiLocationMarker className="text-2xl mr-2" />
            <strong className="mr-2">Address: </strong> Dhanmondi 32, Sukrabad
            Dhaka, Bangladesh
          </p>

          <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full my-7">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
