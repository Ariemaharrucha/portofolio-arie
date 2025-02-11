import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const AboutSection = () => {
  return (
    <section className="md:py-20 py-10 bg-red-500" id="about">
      <div className="container mx-auto">
        <h3 className="text-center font-semibold text-white md:mb-10">
          {"<About Me />"}
        </h3>
        <section className="px-8 md:flex items-center md:gap-32 mt-8">
          <div className="md:w-1/2 w-full text-pretty" data-aos="fade-right">
            <p className="text-pretty md:text-xl text-lg text-white font-medium">
              Hello! I am a student at Amikom Yogyakarta, majoring in
              Informatics. While I am still building my experience, I have
              developed a strong foundation in web development, particularly
              with the MERN Stack (MongoDB, Express.js, React, and Node.js). I
              am passionate about learning and continuously improving my skills
              in creating web applications. Although I have not yet worked on or
              completed any major projects, I am eager to apply my knowledge and
              grow through real-world challenges.
            </p>
          </div>

          <div
            className="md:w-2/6 mt-5 md:mt-0 shadow-xl rounded-xl overflow-hidden bg-white border-4 border-orange-500"
            data-aos="fade-left"
          >
            <h4 className="text-center font-semibold bg-white text-red-500 border-b-4 border-orange-500 py-4">
              {"<Skillset />"}
            </h4>
            <div className="flex flex-wrap justify-center md:gap-10 gap-5 px-4 md:py-8 py-4">
              <FaReact className="text-sky-700" size={40} />
              <FaJsSquare className="text-yellow-300" size={40} />
              <FaNodeJs className="text-emerald-800" size={40} />
              <BiLogoTypescript className="text-sky-800" size={40} />
              <SiExpress size={40} />
              <RiTailwindCssFill className="text-blue-400" size={40} />
              <FaHtml5 className="text-orange-400" size={40} />
              <SiMongodb className="text-emerald-700" size={40} />
              <FaCss3Alt className="text-blue-400" size={40} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
