import React from "react";
import 'tailwindcss/tailwind.css';
import 'fontsource-alfa-slab-one';

const Header = () => {
  return (
    <div class="text-center flex align-center justify-center">
      <h1 class="ml-[100px] mr-[100px] pl-5 pr-5 font-bold text-white pt-[200px] text-[75px]">
        This is Our Team Here at Ahamenes Space Club
      </h1>
    </div>
    // <div className="flex items-center justify-center">
    //   <div className="max-w-[500px] md:max-w-[1000px] text-white">
    //     <span className="text-[40px] md:text-[70px] font-bold ">
    //       This is Our Team Here at <span> Ahamenes</span> Space Club
    //     </span>
    //   </div>
    // </div>
  );
};

export default Header;
