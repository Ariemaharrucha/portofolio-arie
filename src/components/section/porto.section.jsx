import { Card } from "../ui/card.jsx";
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
      stack: [
        { icon: FaReact, style: "text-sky-700" },
        { icon: FaJsSquare, style: "text-yellow-300" },
        { icon: RiTailwindCssFill, style: "text-blue-400" },
      ],
    },
    project2: {
      stack: [
        { icon: FaHtml5, style: "text-orange-500" },
        { icon: FaJsSquare, style: "text-yellow-300" },
        { icon: FaBootstrap, style: "text-violet-700" },
      ],
    },
  };

  return (
    <section className="container mx-auto  py-20">
      <div className="mb-8">
        <h3 className="text-center text-red-500 font-semibold">Portofolio</h3>
      </div>
      <div className="flex gap-6  justify-center flex-wrap ">
      {Object.values(project).map((porto, index) => {
          return (
            <Card
              title={porto.title}
              key={index}
              url="https://i.pinimg.com/564x/3d/cc/48/3dcc48424393c6c5056f62ac29a9fe8b.jpg"
              stack={porto.stack}
              desc={"Lorem ipsum dolor sit amet."} 
            />
          );
        })}
      </div>
    </section>
  );
};
