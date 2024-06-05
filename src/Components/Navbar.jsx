import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 ">
      <div className="">
        <img className="object-cover w-full" src={logo} alt="Logo" />
      </div>
      <div className="m-4 md:m-6 flex justify-center items-center gap-4 text-2xl">
        <FaLinkedin className="cursor-pointer hover:text-white transform hover:scale-150 transition-all" />
        <FaGithub className="cursor-pointer hover:text-white transform hover:scale-150 transition-all" />
        <FaSquareXTwitter className="cursor-pointer hover:text-white transform hover:scale-150 transition-all" />
        <FaInstagram className="cursor-pointer hover:text-white transform hover:scale-150 transition-all" />
      </div>
    </nav>
  );
};

export default Navbar;
