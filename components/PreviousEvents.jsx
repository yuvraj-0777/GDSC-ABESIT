import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InProgress from "@/assets/InProgress.jpg";
import { useTheme } from "next-themes";

function PreviousEvents() {

  const { resolvedTheme } = useTheme()
  let src


  // implement theme switcher by adding a image that fits the dark mode
  // check next-themes documentation
  // https://www.npmjs.com/package/next-themes#images

  // switch (resolvedTheme) {
  //   case 'light':
  //     src = {InProgress}
  //     break
  //   case 'dark':
  //     src = '/dark.png'
  //     break
  //   default:
  //     src = {InProgress}
  //     break
  // }


  return (
    <div className="h-full text-black dark:text-white w-full py-24 text-center">
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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <Image
            src={InProgress}
            width={400}
            height={400}
            className="flex flex-col mx-auto m-20 hover:scale-105 transition"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PreviousEvents;
