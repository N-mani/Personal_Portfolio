import * as icons from 'react-icons/fa6'
const Contacts = () => {
  return (
    <>
      <section
        id="contact"
        className="px-[15px] py-[40px]  dark:bg-[#030303] dark:duration-500 duration-700"
      >
        <div className="container mt-[50px] md:flex md:flex-row-reverse  md:justify-evenly mx-auto md:max-w-6xl md:my-[80px] shrink ">
          <div
            className="about-container
          px-[8px] py-[18px] flex flex-col items-center
        "
          >
            <h3 className="uppercase text-[20px] text-center underline text-blue-800 font-bold dark:text-blue-400 dark:duration-500 duration-500">
              Contact Me <span className="w-[40px] h-[30px]">👇</span>
            </h3>
            <h1 className="text-[24px] py-[18px] leading-12 font-semibold dark:text-gray-200 dark:duration-500 duration-500">
              Don't be shy! Hit me up!📍
            </h1>

            <div className="location-block flex flex-col items-center py-[18px]">
              <icons.FaLocationPin className="w-[30px] h-[30px] dark:text-gray-200 dark:duration-500 duration-500 " />
              <h1 className="text-gray-600 text-[22px] py-[8px] dark:text-gray-200 dark:duration-500 duration-500">
                Vizag, Andhra Pradesh
              </h1>
            </div>
            <div className="mail-block flex flex-col items-center py-[18px] dark:text-gray-200 dark:duration-500 duration-500">
              <icons.FaMailchimp className="w-[30px] h-[30px] dark:text-gray-200 dark:duration-500 duration-500" />
              <h1 className="text-gray-600 text-[22px] py-[8px] dark:text-gray-200 dark:duration-500 duration-500">
                nmanikanta6649@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#121212] py-[28px] px-[15px] flex flex-col items-center text-white dark:bg-[#030303] dark:duration-500 duration-700">
        <h1 className="capitalize text-[18px] py-[4px] text-center">
          Copyright @2023. All rights are reserved
        </h1>
        <h2 className="capitalize text-[22px]  py-[4px] text-center">
          Desined and developed by Manikanta
        </h2>
        <div className="social-links flex gap-8 justify-center">
          <icons.FaGithub className="w-[30px] h-[30px]" />
          <icons.FaLinkedin className="w-[30px] h-[30px]" />
        </div>
      </footer>
    </>
  )
}

export default Contacts
