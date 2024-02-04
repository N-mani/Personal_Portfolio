import * as icon from 'react-icons/fa'
import { motion } from 'framer-motion'
import { MdOpenInNew } from 'react-icons/md'
import { useEffect, useState } from 'react'
const Projects2 = () => {
  const [currentProject, setCurrentProject] = useState(2)
  const projects = [
    {
      title: 'Ecommerce',
      date: 'july 2023',
      description:
        ' Minimalist Ecommerce application to improve frontend skills.',

      code: 'code',
      liveDemo: 'live demo',
      githubLink: 'https://github.com/N-mani/Ecommerce',
      liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
    },
    {
      title: 'Personal portfolio',
      date: 'september 2023',
      description: 'Personal Portfolio to show your skills',

      code: 'code',
      liveDemo: 'live demo',
    },
    {
      title: 'Real time chat app',
      date: 'october 2023',
      description:
        ' This project is a dynamic and interactive chat application built using Node.js for the backend, React.js for the frontend, and Socket.io for real-time communication. It allows users to create accounts, log in, and engage in instant messaging with others in real time. The application supports multiple chat rooms or private conversations, providing a seamless and responsive user experience. Socket.io ensures that messages are delivered instantly, making it an ideal solution for applications requiring real-time communication. The combination of these technologies results in a robust and efficient chat platform suitable for a wide range of use cases, from casual messaging to collaborative work environments.',

      code: 'code',
      liveDemo: 'live demo',
    },
  ]

  const projects1 = [
    [
      //javascript
      {
        title: 'color picker',
        date: 'july 2023',
        description:
          ' Minimalist Ecommerce application to improve frontend skills.',

        code: 'code',
        liveDemo: 'live demo',
        githubLink: 'https://github.com/N-mani/Ecommerce',
        liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
      },
    ],
    [
      //reactjs
      {
        title: 'expense tracker',
        date: 'july 2023',
        description:
          ' This is a basic budget tracker application with clean UI.',

        code: 'code',
        liveDemo: 'live demo',
        githubLink: 'https://github.com/N-mani/Ecommerce',
        liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
      },
      {
        title: 'todo app',
        date: 'july 2023',
        description:
          ' Task Management Application with cool features. [A MERN STACK APP].',

        code: 'code',
        liveDemo: 'live demo',
        githubLink: 'https://github.com/N-mani/Ecommerce',
        liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
      },
      {
        title: 'Ecommerce',
        date: 'july 2023',
        description:
          ' Minimalist Ecommerce application to improve frontend skills.',

        code: 'code',
        liveDemo: 'live demo',
        githubLink: 'https://github.com/N-mani/Ecommerce',
        liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
      },
    ],
    [
      //NodeJs
      {
        title: 'todo app',
        date: 'july 2023',
        description:
          ' Task Management Application with cool features. [A MERN STACK APP].',

        code: 'code',
        liveDemo: 'live demo',
        githubLink: 'https://github.com/N-mani/Ecommerce',
        liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
      },
      {
        title: 'Real Time Chat Application',
        date: 'july 2023',
        description:
          ' Real time chat app for communication. [A MERN STACK APP]',

        code: 'code',
        liveDemo: 'live demo',
        githubLink: 'https://github.com/N-mani/Ecommerce',
        liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
      },
    ],
    // [
    //   //Video Editing
    //   {
    //     title: '1st project',
    //     date: 'july 2023',
    //     description:
    //       ' Minimalist Ecommerce application to improve frontend skills.',

    //     code: 'code',
    //     liveDemo: 'live demo',
    //     githubLink: 'https://github.com/N-mani/Ecommerce',
    //     liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
    //   },
    //   {
    //     title: '2nd project',
    //     date: 'july 2023',
    //     description:
    //       ' Minimalist portfolio application to improve frontend skills.',

    //     code: 'code',
    //     liveDemo: 'live demo',
    //     githubLink: 'https://github.com/N-mani/Ecommerce',
    //     liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
    //   },
    // ],
  ]

  return (
    <section
      id="projects"
      className="bg-[#08131f] min-h-screen text-gray-200  py-[80px]"
    >
      <div className="main flex flex-col gap-8 px-[15px] py-[30px] md:flex md:flex-row  md:max-w-5xl mx-auto ">
        <motion.div
          className="left mx-auto   w-full md:max-w-[200px] h-[300px] "
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[32px] mb-5">Projects</h1>
          <motion.ul
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="px-5 flex flex-col gap-3 "
          >
            <li
              className="hover:bg-red-500 py-1 px-2 text-xl  rounded-lg duration-200 cursor-pointer max-w-[200px]"
              onClick={() => setCurrentProject(0)}
            >
              JavaScript
            </li>
            <li
              className="hover:bg-red-500 py-1 px-2 text-xl  rounded-lg duration-200 cursor-pointer max-w-[200px]"
              onClick={() => setCurrentProject(1)}
            >
              React
            </li>
            <li
              className="hover:bg-red-500 py-1 px-2 text-xl  rounded-lg duration-200 cursor-pointer max-w-[200px]"
              onClick={() => setCurrentProject(2)}
            >
              NodeJs
            </li>
            {/* <li
              className="hover:bg-red-500 py-1 px-2 text-xl  rounded-lg duration-200 cursor-pointer max-w-[200px]"
              onClick={() => setCurrentProject(3)}
            >
              Video Editing
            </li> */}
          </motion.ul>
        </motion.div>
        <div className="right grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects1[currentProject].map((p, index) => (
            <motion.article
              key={index}
              className="projects flex flex-col shadow-xl   rounded-xl px-[8px] py-[18px] mb-[18px] items-center   duration-200  hover:border-l-4 hover:border-b-4 hover:border-red-400"
              initial={{ y: 50, opacity: 0, scale: 0 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="img-container w-full h-[250px]  mx-10  rounded-xl shadow-lg flex dark:border-2 dark:border-[#030303] ">
                <h1 className="m-auto uppercase text-[20px] underline text-red-500 font-bold   0  duration-500 ">
                  coming soon
                </h1>
              </div>
              <div className="text-start">
                <h1 className="text-[20px] px-[3px] py-[3px] leading-12 font-semibold uppercase  duration-500">
                  {p.title}
                </h1>
                <p className="text-[18px] text-gray-500 px-[3px] py-[3px] font-medium text-center dark:text-gray-200 dark:duration-500 duration-500">
                  {p.description}
                </p>

                <div className="project-links flex justify-center gap-8 px-[3px] py-[3px]">
                  <div className="flex gap-2  items-center cursor-pointer ">
                    <h1 className="capitalize font-semibold text-[20px] shadow-md  rounded-md px-2 dark:text-gray-200 dark:duration-500 duration-500">
                      {p.code}
                    </h1>
                    <icon.FaGithub className="w-[25px] h-[25px] dark:text-gray-100 dark:duration-500 duration-500" />
                  </div>
                  <div className="flex gap-2 items-center cursor-pointer">
                    <h1 className="capitalize font-semibold text-[20px] shadow-md rounded-md px-2 dark:text-gray-200 dark:duration-500 duration-500">
                      {p.liveDemo}
                    </h1>
                    <MdOpenInNew className="w-[25px] h-[25px] dark:text-gray-100 dark:duration-500 duration-500" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects2
