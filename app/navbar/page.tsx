// import React from 'react';

function Navbar() {
  return (
    <div className='flex justify-between items-center w-full px-8 py-4 md:px-12 lg:px-16'>
      {/* Logo Section */}
      <div className='font-sans text-[1.5rem] md:text-[2rem] font-extrabold'>
        <h1 className='text-blue-800 underline pl-[1rem] md:pl-[2rem] lg:pl-[3rem]'>
          PORTFOLIO
        </h1>
      </div>

      {/* Menu Section */}
      <ul className='hidden sm:flex gap-10 md:gap-16 lg:gap-20 py-[1rem] font-sans font-bold mr-[1rem] md:mr-[4rem] lg:mr-[6rem]'>
        <li><a href="#navbar">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#portfolio">SERVICES</a></li>
        <li><a href="#services">BLOG</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <div className='sm:hidden'>
        <button className='text-blue-800 font-bold'>
          ☰
        </button>
      </div>
    </div>
  );
}

export default Navbar;
