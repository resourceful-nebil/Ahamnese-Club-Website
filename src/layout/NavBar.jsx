import React,{useState} from 'react';
import Logo from "../assets/svg/logoSpace.svg";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";



const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] z-50 flex justify-between items-center px-4 bg-transparent text-gray-300">
      <div className="md:ml-16 mt-4">
        <img src={Logo} alt="" className="w-20" />
      </div>
      


      {/* menu */}
      <ul className="hidden md:flex uppercase text-sm">
        <li className="hover:text-secondary">
          <Link to="/" smooth={true} duration={500}>
            EVENTS
          </Link>
        </li>
        <li className="hover:text-secondary">
          <Link to="/about" smooth={true} duration={500}>
            ABOUT US
          </Link>
        </li>
        <li className="hover:text-secondary">
          <Link to="/astro" smooth={true} duration={500}>
            GALLEY & MEDIA
          </Link>
        </li>
        <li className="hover:text-secondary">
          <Link to="/club" smooth={true} duration={500}>
            CLUB WEBSITES
          </Link>
        </li>
        <li className="hover:text-secondary">
          <Link to="/team" smooth={true} duration={500}>
            TEAM
          </Link>
        </li>
      </ul>
      <div className="bg-[#FB5352] w-32 flex items-center justify-center px-2 py-1 rounded-2xl">
        Explore
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>



       {/* Mobile menu */}
       <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="events" smooth={true} duration={500}>
            Events
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="club" smooth={true} duration={500}>
            Club
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="team" smooth={true} duration={500}>
            Team
          </Link>
        </li>
      </ul>
      
      
    </div>
  )
}

export default NavBar
