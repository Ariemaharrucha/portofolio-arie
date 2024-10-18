import { FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const AboutSection = () => {
  return (
    
    <section className='py-20 bg-red-500'>
    <div className='container mx-auto'>
      <h3 className='text-center font-semibold text-white mb-10'>{'<About Me />'}</h3>
      <section className='flex items-center gap-32 mt-8'>
        <div className='w-1/2 text-pretty'>
          <p className='text-pretty text-xl text-white font-medium'>Hello! I am a student at Amikom Yogyakarta, majoring in Informatics. While I am still building my experience, I have developed a strong foundation in web development, particularly with the MERN Stack (MongoDB, Express.js, React, and Node.js). I am passionate about learning and continuously improving my skills in creating web applications. Although I have not yet worked on or completed any major projects, I am eager to apply my knowledge and grow through real-world challenges.</p>
        </div>
        
        <div className="w-2/6 shadow-xl rounded-xl  overflow-hidden bg-white border-4 border-orange-500">
            <h4 className='text-center font-semibold bg-white text-red-500 border-b-4 border-orange-500 py-4'>{'<Skillset />'}</h4>
            <div className="flex flex-wrap justify-center gap-10 px-4 py-8">
              <FaReact className='text-sky-700' size={40}/>
              <FaJsSquare className='text-yellow-300' size={40}/>
              <FaNodeJs className='text-emerald-800' size={40}/>
              <BiLogoTypescript className='text-sky-800' size={40}/>
              <SiExpress size={40}/>
              <RiTailwindCssFill className='text-blue-400' size={40}/>
              <FaHtml5 className='text-orange-400' size={40}/>
              <SiMongodb className='text-emerald-700' size={40}/>
              <FaCss3Alt className='text-blue-400' size={40}/>
            </div>
        </div>
        
      </section>
   </div>

  </section>
  )
}
