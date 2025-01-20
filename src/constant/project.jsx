import porto1 from '../assets/porto.png';
import porto2 from '../assets/recipe.png';
import porto3 from '../assets/al-quran.png';
import porto4 from '../assets/itinerary.jpg';
import porto5 from '../assets/uggasku-id-1.png';
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from 'react-icons/si';

export const project = {
    project1: {
      title: "Simple portofolio",
      image: porto1,
      stack: [
        { icon: FaHtml5, style: "text-orange-500" },
        { icon: FaReact, style: "text-sky-700" },
        { icon: FaJsSquare, style: "text-yellow-300" },
        { icon: RiTailwindCssFill, style: "text-blue-400" },
      ],
      description: `portofolio pribadi yang menampilkan proyek-proyek saya sebagai pengembang web`,
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
    project4: {
      title: `Itinerary-Ai`,
      image: porto4,
      stack: [
        { icon: FaReact, style: "text-sky-700" },
        { icon: BiLogoTypescript, style: "text-sky-600" },
        { icon: RiTailwindCssFill, style: "text-blue-400" },
      ],
      description: `aplikasi berbasis AI yang bisa membuat rencana perjalanan yang dipersonalisasi berdasarkan preferensi pengguna, tujuan, waktu dan anggaran yang tersedia`,
      url: `https://github.com/Ariemaharrucha/Itinerary-ai`
    },
    project5: {
      title: `Unggasku-id`,
      image: porto5,
      stack: [
        { icon: FaReact, style: "text-sky-700" },
        { icon: FaJsSquare, style: "text-yellow-300" },
        { icon: RiTailwindCssFill, style: "text-blue-400" },
        { icon: SiExpress, style: "" },
        { icon: FaNodeJs, style: "" },
      ],
      description: `aplikasi yang digunakan untuk membantu peternak unggas mengelola operasi mereka secara efisien, untuk konsultasi dan artikel pendidikan`,
      url: `https://github.com/Ariemaharrucha/unggasku-id`
    },
  };