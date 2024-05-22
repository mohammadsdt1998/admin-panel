import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center justify-between bg-primary p-1">
      <span className="cursor-pointer font-semibold text-gray-300 hover:text-gray-100">
        Mohammad Sadati
      </span>
      <a className="cursor-pointer" href="https://github.com/mohammadsdt1998">
        <FaGithub className="mr-4 h-6 w-6 cursor-pointer hover:text-gray-100" />
      </a>
    </div>
  );
}

export default Footer;
