import { motion } from "framer-motion";

const Blog = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="container mx-auto">
      <motion.h2
        className="text-2xl font-bold text-center m-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        Blog
      </motion.h2>

      <motion.h4
        className="text-xl py-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        Kickstart Your Career in IT: A Comprehensive Guide
      </motion.h4>

      <motion.p
        className="py-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        The IT field is one of the fastest-growing and most dynamic industries
        today, offering a wide range of career opportunities for both beginners
        and experienced professionals. Whether you’re interested in software
        development, cybersecurity, cloud computing, or data analytics, there’s
        a path in IT for you. Here's a quick guide to help you get started and
        thrive in this exciting industry:
      </motion.p>

      <motion.ol
        className="list-decimal ml-10 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <li className="text-xl">Choose Your Path: Specializations in IT</li>
        <motion.p
          className="p-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          The IT field is broad, with various specializations such as: <br />
          <strong>Software Development:</strong> Build applications and websites
          using programming languages like Python, Java, or JavaScript. <br />
          <strong>Cybersecurity:</strong> Protect organizations from digital
          threats and cyberattacks. <br />
          <strong>Data Science & Analytics:</strong> Analyze and interpret
          complex data to guide business decisions. <br />
          <strong>Cloud Computing:</strong> Manage and implement cloud-based
          services for businesses. <br />
          <strong>IT Support & Networking:</strong> Ensure seamless operations
          of computer systems and networks.
        </motion.p>
      </motion.ol>
    </div>
  );
};

export default Blog;

/* <li className="text-xl">Skills You Need to Succeed</li>
        <li className="text-xl font-semibold">Get Certified</li>
        <li className="text-xl font-semibold">Build a Strong Portfolio</li>
        <li className="text-xl font-semibold">
          Networking & Continuous Learning
        </li>
        <li className="text-xl font-semibold">Explore Career Opportunities</li> */
