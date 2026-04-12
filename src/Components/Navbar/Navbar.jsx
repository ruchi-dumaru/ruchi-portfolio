import { useState } from "react";
import { RiMenu2Fill, RiCloseLine } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-white px-6 pt-6 md:px-20 z-50 backdrop-blur-lg border-b border-white/20">
      {/* Logo */}
      <span className="text-xl font-bold  tracking-wider">Portfolio .</span>

      {/* Menu Links */}
      <ul
        className={`
  absolute top-16 right-6
  w-56 rounded-xl
  backdrop-blur-md bg-[#011c32ba]
  border 
  shadow-lg shadow-cyan-500/30
  text-center
  md:text-lg
  flex flex-col gap-6 py-6
  transition-all duration-300
  md:mb-2
  md:static md:flex md:flex-row md:gap-9 md:w-auto md:bg-transparent md:backdrop-blur-0 md:shadow-none md:border-0 md:py-0
  ${menuOpen ? "block" : "hidden"} md:flex
`}
      >
        <li className="relative cursor-pointer text-white  group">
          <a href="#Home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          {/* Sliding Gradient Line */}
          <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#7a9ae6] via-[#ededed] to-[#a0beec] rounded-full transition-all duration-500 group-hover:w-full"></span>
        </li>

        <li className="relative cursor-pointer text-white  group">
          <a href="#About" onClick={() => setMenuOpen(false)}>
            About
          </a>
          {/* Sliding  Line */}
          <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#7a9ae6] via-[#ededed] to-[#a0beec] rounded-full transition-all duration-500 group-hover:w-full"></span>
        </li>

        <li className="relative cursor-pointer text-white  group">
          <a href="#Skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#7a9ae6] via-[#ededed] to-[#a0beec] rounded-full transition-all duration-500 group-hover:w-full"></span>
        </li>

        <li className="relative cursor-pointer text-white  group">
          <a href="#Projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#7a9ae6] via-[#ededed] to-[#a0beec] rounded-full transition-all duration-500 group-hover:w-full"></span>
        </li>
        <li className="relative cursor-pointer text-white  group">
          <a href="#Footer" onClick={() => setMenuOpen(false)}>
            Contacts
          </a>

          <span className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-[#7a9ae6] via-[#ededed] to-[#a0beec] rounded-full transition-all duration-500 group-hover:w-full"></span>
        </li>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <RiMenu2Fill
            size={30}
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
