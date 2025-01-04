import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const Statistics = () => {
  const data = [
    { name: "Software Dev", Jobs: 8000 },
    { name: "Cybersecurity", Jobs: 6000 },
    { name: "Data Science", Jobs: 7000 },
    { name: "Cloud Computing", Jobs: 6500 },
    { name: "IT Support", Jobs: 5000 },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="container mx-auto p-5"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-2xl font-bold text-center mb-10"
        initial="hidden"
        animate="visible"
        variants={slideIn}
      >
        Job Market Analysis
      </motion.h2>

      {/* Animated Chart */}
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <ResponsiveContainer width="90%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Jobs" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};

export default Statistics;
