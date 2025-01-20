import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const downloadCv = () => {
    const fileURL = "/cv_arie.pdf";
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "cv-arie.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-white sticky top-0 w-full z-10 shadow">
      <nav className="flex justify-between items-center py-4 px-4 md:px-8 container mx-auto">
        {/* Logo */}
        <div>
          <span className="font-semibold text-lg text-orange-500 hover:text-orange-600 cursor-pointer">{`</>`}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Nav title="#">Home</Nav>
          <Nav title="#about">About</Nav>
          <Nav title="#contact">Contact</Nav>
          <Nav title="#Project">Project</Nav>
          <button
            className="px-5 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
            onClick={downloadCv}
          >
            Download CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <CiMenuBurger
            size={30}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-white py-4 space-y-3 md:hidden text-lg">
          <Nav title="#">Home</Nav>
          <Nav title="#about">About</Nav>
          <Nav title="#contact">Contact</Nav>
          <Nav title="#Project">Project</Nav>
          <button
            className="px-5 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition mt-2"
            onClick={downloadCv}
          >
            Download CV
          </button>
        </div>
      )}
    </header>
  );
};

const Nav = (props) => {
  const { title, children } = props;
  return (
    <a
      href={title}
      className="text-md font-medium text-gray-700 hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition"
    >
      {children}
    </a>
  );
};
