// import React from 'react';

function About() {
  return (
    <>
      {/* Introduction Section */}
      <div className='mt-20 flex justify-center'>
        <div className="text-center">
          <p className='text-lg md:text-xl'>INTRODUCTION</p>
          <span className='text-3xl md:text-5xl font-bold'>Overview</span>
        </div>
      </div>

      {/* Description Section */}
      <div className='mt-10 px-6 md:px-20 lg:px-40 text-center md:text-left'>
        <p className='text-sm md:text-base lg:text-lg'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi blanditiis, 
          sequi doloribus nobis aliquam eaque ullam et a ipsa iste, debitis beatae ut quaerat. 
          Dolor ea aliquam impedit sapiente suscipit? Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Earum repudiandae eligendi praesentium soluta! Rem laboriosam corporis 
          error officiis reprehenderit optio incidunt aut recusandae sed, non qui praesentium aliquid 
          id placeat!
        </p>
      </div>
    </>
  );
}

export default About;
