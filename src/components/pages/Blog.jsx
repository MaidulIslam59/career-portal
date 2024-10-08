const Blog = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center m-10">Blog</h2>
      <h4 className="text-xl py-2">
        Kickstart Your Career in IT: A Comprehensive Guide
      </h4>
      <p className="py-2">
        The IT field is one of the fastest-growing and most dynamic industries
        today, offering a wide range of career opportunities for both beginners
        and experienced professionals. Whether you’re interested in software
        development, cybersecurity, cloud computing, or data analytics, there’s
        a path in IT for you. Here's a quick guide to help you get started and
        thrive in this exciting industry:
      </p>

      <ol className="list-decimal ml-10 mb-10">
        <li className="text-xl">Choose Your Path: Specializations in IT</li>
        <p className="p-2">
          The IT field is broad, with various specializations such as: <br />
          <strong>Software Development:</strong> Build applications and websites
          using programming languages like Python, Java, or JavaScript. <br />
          <strong>Cybersecurity:</strong> Protect organizations from digital
          threats and cyberattacks. <br />
          <strong>Data Science & Analytics:</strong> Analyze and interpret
          complex data to guide business decisions. <br />
          <strong>Cloud Computing:</strong> Manage and implement cloud-based
          services for businesses. <br />
          <strong> IT Support & Networking:</strong> Ensure seamless operations
          of computer systems and networks.
        </p>
        {/* <li className="text-xl">Skills You Need to Succeed</li>
        <li className="text-xl font-semibold">Get Certified</li>
        <li className="text-xl font-semibold">Build a Strong Portfolio</li>
        <li className="text-xl font-semibold">
          Networking & Continuous Learning
        </li>
        <li className="text-xl font-semibold">Explore Career Opportunities</li> */}
      </ol>
    </div>
  );
};

export default Blog;
