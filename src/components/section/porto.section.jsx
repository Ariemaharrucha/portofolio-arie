import { Card } from "../ui/card.jsx";
import porto1 from '../../assets/porto.png';
import porto2 from '../../assets/recipe.png';
import porto3 from '../../assets/al-quran.png';

import { BiLogoTypescript } from "react-icons/bi";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const PortofolioSection = () => {
  const project = {
    project1: {
      title: "Simple portofolio",
      image: porto1,
      stack: [
        { icon: FaHtml5, style: "text-orange-500" },
        { icon: FaReact, style: "text-sky-700" },
        { icon: FaJsSquare, style: "text-yellow-300" },
        { icon: RiTailwindCssFill, style: "text-blue-400" },
      ],
      description: ` portofolio pribadi yang menampilkan proyek-proyek saya sebagai pengembang web`,
      url: `#`
    },
    project2: {
      title: 'Catat resep makanan ',
      image: porto2,
      stack: [
        { icon: FaHtml5, style: "text-orange-500" },
        { icon: BiLogoTypescript, style: "text-sky-600" },
        { icon: FaCss3Alt, style: "text-sky-700" },
      ],
      description: `Aplikasi web untuk mencatat dan menyimpan resep masakan`,
      url: `https://resep-makanan-five.vercel.app/`
    },
    project3: {
      title: `Al-qur'an apps`,
      image: porto3,
      stack: [
        { icon: FaHtml5, style: "text-orange-500" },
        { icon: FaJsSquare, style: "text-yellow-300" },
        { icon: FaBootstrap, style: "text-violet-700" },
      ],
      description: `Aplikasi digital Al-Qur'an yang menyediakan teks dan terjemahan untuk setiap surat dan ayat`,
      url: `https://al-quran-gilt.vercel.app/`
    },
  };


  return (
    <section className="container mx-auto  py-20" id="Project">
      <div className="mb-8">
        <h3 className="text-center text-red-500 font-semibold">Portofolio</h3>
      </div>
      <div className="flex gap-6  justify-center flex-wrap ">
      {Object.values(project).map((porto, index) => {
          return (
            <Card
              title={porto.title}
              key={index}
              image={porto.image}
              stack={porto.stack}
              desc={porto.description}
              url={porto.url}
            />
          );
        })}
      </div>
    </section>
  );
};
