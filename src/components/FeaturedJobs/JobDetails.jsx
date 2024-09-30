import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  console.log(job);

  return (
    <div>
      <h2>JobDetails of : {id}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:grid col-span-3">
          <section>
            <p>
              <strong>Job Description: </strong> A UI/UX (User Interface/User
              Experience) designer is responsible for designing and creating
              engaging and effective interfaces for software and web
              applications. This includes designing the layout, visual design,
              and interactivity of the user interface.
            </p>
          </section>
          <section>
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
          <section>
            <h2>
              <strong>Educationar Requirements :</strong>
            </h2>
            <p>Bachelor degree to complete any reputational university.</p>
          </section>
          <section>
            <h2>
              <strong>Experiences :</strong>
            </h2>
            <p>2-3 Years in this field.</p>
          </section>
        </div>
        <div className="border">
          <h2 className="text-xl">Job Details</h2>
          <h2 className="text-xl">Contact Information</h2>
          <button className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
