import { Card } from '../ui/card.jsx';
import { FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const PortofolioSection = () => {
  const project1 = [
    { icon: FaReact, style: "text-sky-700" },
    { icon: FaJsSquare, style: "text-yellow-300" },
    { icon: RiTailwindCssFill, style: "text-blue-400" }
  ];

  return (
    <section className='container mx-auto  py-20'>
      <div className='mb-8'>
        <h3 className='text-center text-red-500 font-semibold'>Portofolio</h3>
      </div>
      <div className='flex gap-6  justify-center flex-wrap '>
        <Card url="https://i.pinimg.com/564x/3d/cc/48/3dcc48424393c6c5056f62ac29a9fe8b.jpg" stack={project1} desc={'lorem adasdasdad'}></Card>
        <Card url="https://i.pinimg.com/564x/3d/cc/48/3dcc48424393c6c5056f62ac29a9fe8b.jpg" desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corporis, praesentium porro amet explicabo ipsa rerum in rem repellendus esse voluptatibus incidunt nisi provident eos sapiente placeat. Deserunt, totam aliquid.'}></Card>
        <Card url="https://i.pinimg.com/564x/3d/cc/48/3dcc48424393c6c5056f62ac29a9fe8b.jpg"></Card>
      </div>
    </section>
  );
}
