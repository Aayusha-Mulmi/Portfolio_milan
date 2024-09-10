// import React from 'react';
import { FaCamera } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";
import { SiTaichigraphics } from "react-icons/si";

function Skills() {
  return (
    <div className="mt-20">
      <p className="text-center text-3xl md:text-4xl font-bold">MY SKILLS</p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20 mt-12">
        
        {/* Photography Skill */}
        <div className="bg-indigo-200 rounded-3xl p-6">
          <FaCamera className="text-4xl md:text-5xl mb-4" />
          <h2 className="font-bold text-xl md:text-2xl">PHOTOGRAPHY</h2>
          <p className="text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, corrupti quas temporibus odio, nostrum ullam dolore deleniti excepturi, adipisci sint et quos! Dolore vel sunt voluptates pariatur laborum soluta voluptatibus?
          </p>
        </div>

        {/* Logo Design Skill */}
        <div className="bg-indigo-200 rounded-3xl p-6">
          <ImFolderOpen className="text-4xl md:text-5xl mb-4" />
          <h2 className="font-bold text-xl md:text-2xl">LOGO DESIGN</h2>
          <p className="text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, corrupti quas temporibus odio, nostrum ullam dolore deleniti excepturi, adipisci sint et quos! Dolore vel sunt voluptates pariatur laborum soluta voluptatibus?
          </p>
        </div>

        {/* Graphic Design Skill */}
        <div className="bg-indigo-200 rounded-3xl p-6">
          <SiTaichigraphics className="text-4xl md:text-5xl mb-4" />
          <h2 className="font-bold text-xl md:text-2xl">GRAPHICAL DESIGNING</h2>
          <p className="text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, corrupti quas temporibus odio, nostrum ullam dolore deleniti excepturi, adipisci sint et quos! Dolore vel sunt voluptates pariatur laborum soluta voluptatibus?
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
