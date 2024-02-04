import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import * as icon from 'react-icons/fa'
import * as md from 'react-icons/md'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <nav className="p-[10px] fixed top-1 md:top-5 left-0 w-full    ">
        <div className="flex justify-between font-bold text-[23px] border-2 border-slate-500 backdrop-blur-lg  p-3 md:text-[22px] max-w-xl shadow-lg rounded-3xl text-white dark:duration-500 duration-500  mx-auto bg-transparent">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className=""
          >
            Mani
          </motion.h1>

          <motion.ul
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="md:flex justify-around hidden"
          >
            <Link
              className="cursor-pointer mx-2 hover:text-red-500 duration-200"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass="active "
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer mx-2 hover:text-red-500 duration-200"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer mx-2 hover:text-red-500 duration-200"
            >
              Projects
            </Link>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer mx-2 hover:text-red-500 duration-200"
            >
              Contacts
            </Link>
            <button></button>
          </motion.ul>
          <button
            className="md:hidden"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? (
              <icon.FaWindowClose className="bg-white" />
            ) : (
              <icon.FaBars />
            )}
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div
          className="w-full top-auto  h-screen fixed  bg-[#08131f] text-white dark:duration-500 duration-500 animate-slideIn 
        "
        >
          <ul
            className="flex flex-col justify-evenly items-center  w-full p-2 text-[18px]
          font-medium bg-[#08131f] dark:text-white dark:duration-500 duration-500 h-screen"
          >
            <Link
              className="cursor-pointer hover:scale-110 duration-300 w-full text-center   text-[26px]"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Home
            </Link>
            <motion.Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:scale-110 duration-300 w-full text-center  py-2 text-[26px]"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
              whileHover={{ y: 20 }}
              transition={{ duration: 0.3 }}
            >
              About
            </motion.Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:scale-110 duration-300 w-full text-center   py-2 text-[26px]"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:scale-110 duration-300 w-full text-center   py-2 text-[26px]"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:scale-110 duration-300 w-full text-center   py-2 text-[26px]"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Contacts
            </Link>
          </ul>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Navbar
