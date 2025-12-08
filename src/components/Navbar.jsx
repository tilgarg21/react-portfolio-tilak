import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-end">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/tilak-garg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer hover:text-blue-500" />
        </a>
        <a
          href="https://github.com/tilgarg21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer hover:text-gray-400" />
        </a>
        <a
          href="https://www.instagram.com/tilak_garg.08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </a>
        <a
          href="https://twitter.com/tilgarg21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="cursor-pointer hover:text-black" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
