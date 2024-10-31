import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-red-500 rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-3.5 font-medium flex items-center justify-between">
        <div className="text-base text-white  ">
          © 2024{" "}
          <a
            href="https://github.com/Ariemaharrucha"
            target="_blank"
            className="hover:underline"
          >
            Arie maharrucha zakka
          </a>
          .
        </div>
        <div className="flex items-center font-medium text-white">
          <a
            href="https://github.com/Ariemaharrucha"
            target="_blank"
            className="hover:underline me-6 flex gap-2 items-center"
          >
            <FaGithub size={30} /> Github
          </a>
          <a href="#" className="hover:underline me-6">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline me-6">
            Licensing
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
