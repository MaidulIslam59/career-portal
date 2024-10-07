import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Jobs from "../FeaturedJobs/Jobs";

const CategoriesJob = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const category = id;

  const filteredJobs = data.filter(
    (element) => element.category_name === category
  );

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 pt-5">
        {filteredJobs?.map((job) => (
          <Jobs key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesJob;
