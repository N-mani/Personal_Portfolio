import img from '../images/IMG_1360.png'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

import * as icons from 'react-skillicons'
import * as icon from 'react-icons/fa'
const Hero = () => {
  return (
    <section
      id="hero"
      className=" px-[15px] py-[30px]   text-white  bg-[#08131f] dark:duration-500 duration-500  "
    >
      <div className="container  mt-[50px] md:flex md:flex-row-reverse md:pl-14    md:max-w-6xl md:my-[130px] shrink mx-auto ">
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 3,
          }}
          className="image-container overflow-hidden border-4 border-[#08131f] rounded-[50%]   bouncing-ball    mx-auto shrink"
        >
          <img
            src={img}
            alt=""
            className="object-cover   w-[350px] h-[350px] animate-border shrink"
          />
        </motion.div>
        <div className="flex flex-col  items-center px-[8px] py-[18px] md:max-w-md">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
            }}
            className="text-[42px] text-center font-semibold capitalize  px-[28px]  my-[30px] md:text-[52px] md:text-start text-gray-200 w-full  h-[160px]"
          >
            <Typewriter
              words={[
                'Front End Developer',
                'Video Editor',
                'Content Creator',
                'Graphic Designer',
              ]}
              loop={10000000000000000}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
            {/* <span className="hover:text-red-500 duration-200">MERN</span>
            <span className="hover:text-red-500 duration-200">-</span>
            <span className="hover:text-red-500 duration-200">stack</span>
            <span className="hover:text-red-500 duration-200">developer</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="text-[20px] text-gray-200 font-medium text-center capitalize px-[28px] md:text-start dark:text-white dark:duration-500"
          >
            Hi, I'm Manikanta. A passionate mern-stack Developer in Vizag. 📍
          </motion.p>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="social-links py-[45px]  flex gap-8   md:text-start md:w-full px-[28px] text-center"
          >
            <motion.button
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.open('https://github.com/n-mani')
              }}
            >
              <icons.Github_Dark className="w-[35px] h-[35px] " />
            </motion.button>
            <motion.button
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.open(
                  'https://www.linkedin.com/in/nimma-manikanta-4b3879237/'
                )
              }}
            >
              <icon.FaLinkedin className="w-[35px] h-[35px] dark:bg-white dark:duration-500 duration-500" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
        className="flex  flex-col justify-center items-center text-[25px]   gap-8 md:flex-row "
      >
        <h1 className="font-sans underline capitalize dark:text-white dark:duration-500">
          tech-stack
        </h1>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 p-3">
          <motion.div
            whileHover={{ y: -12 }}
            transition={{ duration: 0.1 }}
            className="flex hover:top-2 duration-300 gap-2"
          >
            <icons.HTML className="w-[50px]" />
            <icons.CSS className="w-[50px]" />
          </motion.div>
          <motion.div
            whileHover={{ y: -12 }}
            transition={{ duration: 0.1 }}
            className="flex gap-2"
          >
            <icons.JavaScript className="w-[50px]" />
            <icons.React_Dark className="w-[50px]" />
          </motion.div>
          <motion.div
            whileHover={{ y: -12 }}
            transition={{ duration: 0.1 }}
            className="flex gap-2"
          >
            <icons.NodeJS_Dark className="w-[50px]" />
            <icons.ExpressJS_Dark className="w-[50px]" />
          </motion.div>
          <motion.div
            whileHover={{ y: -12 }}
            transition={{ duration: 0.1 }}
            className="flex gap-2"
          >
            <icons.Git className="w-[50px]" />
            <icons.GitLab_Dark className="w-[50px]" />
          </motion.div>
        </ul>
      </motion.div>
    </section>
  )
}

export default Hero
