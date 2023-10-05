import React from 'react'
import Image from 'next/image'
import Heroimage from "@/assets/Heroimage.png";
import Logo from "@/assets/Logo.png";
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="h-screen">
        <Image src={Heroimage} alt="Cover Picture" fill={true} className='z-10 bg-cover bg-center h-fit hover:opacity-50 transition-opacity'/>
      <section className="justify-center content-center z-50"> 
        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:h-screen lg:items-center text-black dark:text-gray-100">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, type: 'spring', stiffness: 100, delay:0.5 }}
           viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center cursor-default z-50 pb-60"
          >
             <Image src={Logo} width={200} height={200} alt="Cover Picture" className='mx-auto' />
            <h1 className="select-none text-3xl font-extrabold sm:text-5xl z-50">
              Google Developer Student Club ABESIT </h1>
            </motion.div>
        </div>
          </section>
        </div>
  )
}
export default Hero