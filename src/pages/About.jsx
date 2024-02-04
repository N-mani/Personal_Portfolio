import img from '../images/IMG_1360.png'
import resume from '../images/Manikanta_Resume.pdf'
import * as icon from 'react-icons/fa'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <section
      id="about"
      className=" px-[15px] py-[30px]  bg-[#08131f] text-white dark:duration-500 duration-700"
    >
      <div className="container my-[80px] md:flex    md:justify-evenly mx-auto md:max-w-6xl  shrink  md:my-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="img-container rounded-3xl   mx-auto overflow-hidden md:my-auto shrink   object-cover  max-w-md"
        >
          <img src={img} alt="" className="" />
        </motion.div>
        <div
          className="about-container
          px-[8px] py-[18px] flex flex-col items-center
          md:max-w-lg
        "
        >
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="uppercase text-[20px] text-center underline text-red-500 font-bold md:text-start  w-full   duration-500 "
          >
            about me
          </motion.h3>

          <motion.p
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duation: 0.5 }}
            className="text-[18px] text-gray-300 font-medium text-center md:text-start dark:text-gray-200 dark:duration-500 duration-500"
          >
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[18px] text-red-500 font-bold cursor-pointer py-[18px] m-5 px-3  text-center md:text-start  duration-500 flex gap-3 border-2 border-red-500 rounded-2xl "
            onClick={(e) => {
              e.preventDefault()
              window.open(resume)
            }}
          >
            Resume
            <button>
              <icon.FaDownload />
            </button>
          </motion.h1>
        </div>
      </div>
    </section>
  )
}

export default About
