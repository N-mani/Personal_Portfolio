import { useEffect, useState } from 'react'
import * as icon from 'react-icons/fa'
import { MdOpenInNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Projects = () => {
  const [projectNum, setProjectNum] = useState(0)

  const projects = [
    {
      title: 'Ecommerce',
      date: 'july 2023',
      description:
        ' The Ecommerce Platform is a comprehensive online marketplace that facilitates buying and selling of products or services over the internet. It encompasses features such as user registration, product catalog, shopping cart, secure payment processing, and order management. This platform allows sellers to list their products, set prices, and manage inventory, while buyers can browse, search, and make purchases. Additionally, it may include user reviews, ratings, and recommendation systems to enhance the shopping experience. The platform leverages modern technologies and best practices to ensure a seamless and secure online shopping environment for both buyers and sellers. This is just a beginner level project to improve React js skills.',
      styles: ['react', 'node js', 'tailwind css'],
      code: 'code',
      liveDemo: 'live demo',
      githubLink: 'https://github.com/N-mani/Ecommerce',
      liveDemoLink: 'https://my-ecommerce-ashy.vercel.app/',
    },
    {
      title: 'Personal portfolio',
      date: 'september 2023',
      description:
        ' The Personal Portfolio project is a showcase of my skills, achievements, and experiences in a visually appealing and user-friendly format. It includes sections such as an introduction, about me, project showcase, and contact information. The portfolio is designed to highlight my proficiency in various technologies like mongodb, express js, react, nodejs, and demonstrate my ability to undertake and complete projects effectively. It serves as a powerful tool for presenting my work to potential employers or clients, showcasing my capabilities and creativity in a professional manner. It is developed using react js, tailwind css as it is a front-end react project. It does not include as backend.',
      styles: ['react', 'gatsby', 'tailwind css'],
      code: 'code',
      liveDemo: 'live demo',
    },
    {
      title: 'Real time chat app',
      date: 'october 2023',
      description:
        ' This project is a dynamic and interactive chat application built using Node.js for the backend, React.js for the frontend, and Socket.io for real-time communication. It allows users to create accounts, log in, and engage in instant messaging with others in real time. The application supports multiple chat rooms or private conversations, providing a seamless and responsive user experience. Socket.io ensures that messages are delivered instantly, making it an ideal solution for applications requiring real-time communication. The combination of these technologies results in a robust and efficient chat platform suitable for a wide range of use cases, from casual messaging to collaborative work environments.',
      styles: ['react', 'socket io', 'node js'],
      code: 'code',
      liveDemo: 'live demo',
    },
  ]

  const handleClick = () => {
    window.open(projects[projectNum].githubLink, '_blank')
  }

  const liveDemoClick = () => {
    window.open(projects[projectNum].liveDemoLink, '_blank')
  }

  const { title, description, date, styles, code, liveDemo } =
    projects[projectNum]

  useEffect(() => {
    const lastProject = projects.length - 1
    if (projectNum < 0) {
      setProjectNum(lastProject)
    }
    if (projectNum > lastProject) {
      setProjectNum(0)
    }
  }, [projectNum])

  return (
    <section
      id="projects"
      className=" px-[15px] py-[30px]  bg-[#08131f] dark:duration-500 duration-500"
    >
      <div className="container mt-[80px]  mx-auto ">
        <div
          className="project-title-container
          px-[8px] py-[18px] flex flex-col items-center
        "
        >
          <h3 className="uppercase text-[20px] text-center underline text-blue-800 font-bold dark:text-blue-400 dark:duration-500 duration-500">
            portfolio
          </h3>
          <h1 className="text-[24px] py-[18px] leading-12 font-semibold uppercase tracking-wider text-center dark:text-gray-200 dark:duration-500 duration-500">
            each project is a unique piece of development📍
          </h1>
        </div>
        <div className="project-container flex flex-col px-[8px] py-[18px] md:max-w-5xl  mx-auto">
          <article
            key={projectNum}
            className="projects flex flex-col shadow-xl border-2 rounded-xl px-[8px] py-[18px] mb-[18px] items-center bg-white dark:bg-[#0c0c0d] dark:duration-500 duration-500 dark:border-[#222222] md:flex-row"
          >
            <div className="img-container w-2/3 h-[350px]  mx-10  rounded-xl shadow-lg flex dark:border-2 dark:border-[#030303] md:w-1/3">
              <h1 className="m-auto uppercase text-[20px] underline text-blue-800 font-bold   dark:text-blue-400 dark:duration-500 duration-500 ">
                coming soon
              </h1>
            </div>
            <div className="text-center md:w-2/3 ">
              <h1 className="text-[20px] py-[18px] px-[32px] leading-12 font-semibold uppercase dark:text-gray-200 dark:duration-500 duration-500">
                {title}
                <span className="text-[18px] text-gray-500 font-medium uppercase dark:text-gray-200 dark:duration-500 duration-500">
                  ( {date} )
                </span>
              </h1>
              <p className="text-[18px] text-gray-500 px-[32px] py-[18px] font-medium text-center dark:text-gray-200 dark:duration-500 duration-500">
                {description}
              </p>
              <div className="technology-used flex  gap-5 mx-auto">
                <h1 className="capitalize font-semibold text-[20px] shadow-md shadow-blue-300  rounded-lg px-2 dark:text-gray-200 dark:duration-500 duration-500 mx-auto mt-4">
                  {styles[0]}
                </h1>
                <h1 className="capitalize font-semibold text-[20px] shadow-md shadow-blue-300  rounded-lg px-2 dark:text-gray-200 dark:duration-500 duration-500 mx-auto mt-4">
                  {styles[1]}
                </h1>
                <h1 className="capitalize font-semibold text-[20px] shadow-md shadow-blue-300  rounded-lg px-2 dark:text-gray-200 dark:duration-500 duration-500 mx-auto mt-4">
                  {styles[2]}
                </h1>
              </div>
              <div
                className="project-links flex justify-center gap-8 px-[18px] py-[28px] mt-4"
                onClick={handleClick}
              >
                <div className="flex gap-2  items-center cursor-pointer ">
                  <h1 className="capitalize font-semibold text-[20px] shadow-md  rounded-md px-2 dark:text-gray-200 dark:duration-500 duration-500">
                    {code}
                  </h1>
                  <icon.FaGithub className="w-[25px] h-[25px] dark:text-gray-100 dark:duration-500 duration-500" />
                </div>
                <div
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={liveDemoClick}
                >
                  <h1 className="capitalize font-semibold text-[20px] shadow-md rounded-md px-2 dark:text-gray-200 dark:duration-500 duration-500">
                    {liveDemo}
                  </h1>
                  <MdOpenInNew className="w-[25px] h-[25px] dark:text-gray-100 dark:duration-500 duration-500" />
                </div>
              </div>
            </div>
          </article>

          <div className="sliderDiv flex mx-auto gap-2 my-[32px]">
            <div
              className="h-3 w-3 bg-gray-700 focus:bg-black rounded-full cursor-pointer"
              onClick={() => setProjectNum(0)}
            ></div>
            <div
              className="h-3 w-3 bg-gray-700 rounded-full cursor-pointer"
              onClick={() => setProjectNum(1)}
            ></div>
            <div
              className="h-3 w-3 bg-gray-700 rounded-full cursor-pointer"
              onClick={() => setProjectNum(2)}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
