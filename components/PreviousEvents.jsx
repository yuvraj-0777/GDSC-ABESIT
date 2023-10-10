import React from "react";
import { motion } from "framer-motion";

function PreviousEvents() {
  return (
    <div className="h-full text-black w-full py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 100,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="w-4/5 mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mt-6">Previous Events</h2>

        <div className="flex flex-wrap justify-evenly items-center mt-12"></div>
        <p>will be updated soon</p>
      </motion.div>
    </div>
  );
}

export default PreviousEvents;
