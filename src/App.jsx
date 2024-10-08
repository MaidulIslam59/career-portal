import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/pages/Statistics.jsx";
import AppliedJobs from "./components/pages/AppliedJobs.jsx";
import Blog from "./components/pages/Blog.jsx";
import JobDetails from "./components/FeaturedJobs/JobDetails.jsx";
import CategoriesJob from "./components/Job Category/CategoriesJob.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/applied-jobs",
          element: <AppliedJobs />,
          loader: () => fetch("/jobs.json"),
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/job/:id",
          element: <JobDetails />,
          loader: () => fetch("/jobs.json"),
        },
        {
          path: "/job/:id",
          element: <JobDetails />,
          loader: () => fetch("/jobs.json"),
        },
        {
          path: "/category/:id",
          element: <CategoriesJob />,
          loader: () => fetch("/jobs.json"),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
