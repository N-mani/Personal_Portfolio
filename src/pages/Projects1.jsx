import videoFile1 from './Edited2.mp4'
import videoFile2 from './Edited_Video_4.mp4'
const Projects1 = () => {
  return (
    <section className="bg-[#08131f] min-h-screen text-gray-200  py-[80px] flex flex-col justify-around items-center">
      <h1 className="capitalize text-[32px] font-semibold hover:text-red-400">
        Video Editing
      </h1>
      <div className="flex gap-12 flex-col md:flex-row">
        <div className="w-[150px] h-[150px] bg-red-400 ">Work1</div>
        <div className="w-[150px] h-[150px]">Work2</div>
      </div>
    </section>
  )
}

export default Projects1
