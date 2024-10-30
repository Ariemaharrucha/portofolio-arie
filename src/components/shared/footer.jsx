import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-red-500 rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-3.5 font-medium flex items-center justify-between">
        <span className="text-base text-white  ">
          © 2024{" "}
          <a href="https://github.com/Ariemaharrucha" target="_blank" className="hover:underline">
            Arie maharrucha zakka
          </a>.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-base font-medium text-white">
          <li>
            <a href="https://github.com/Ariemaharrucha" target="_blank" className="hover:underline me-6 flex gap-2 items-center">
              <FaGithub size={30}/> Github
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
