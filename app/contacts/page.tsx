// import React from 'react';
// import { BiLogoGmail } from "react-icons/bi";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

// function Contacts
// () {
//   return (
//     <div className='mb-[5rem] mt-[5rem]' >
//         <div className='text-[3rem] mb-[3rem] font-bold flex justify-center '>
//           <h1>CONTACT ME</h1>
//         </div>
        
//         <div className='grid grid-cols-2 gap-7 ml-[7rem] mr-[7rem]'>
//         <div className='flex justify-center items-center '>
//         <BiLogoGmail className='text-[4rem]'/>
//         <a className='pt-[1.3rem] ' href="#"><span >smilan8899@gmail.com </span></a>
//         </div>
//         <div  className='flex  justify-center items-center'>
//         <FaFacebook className='text-[4rem]' />
//         <a  className='pt-[1.3rem]' href="https://www.facebook.com/milan.shrestha.733076"><span>Milan Shrestha</span></a>
//         </div>
//         <div  className='flex justify-center items-center'>
//         <FaInstagramSquare className='text-[4rem]' />
//         <a  className='pt-[1.3rem]' href="https://www.instagram.com/milan_sama_/"><span>Milan Shrestha</span></a>
//         </div>
//         <div  className='flex justify-center items-center'>
//         <FaLinkedin className='text-[4rem]' />
//         <a  className='pt-[1.3rem]' href="https://www.facebook.com/milan.shrestha.733076"><span>Milan Shrestha</span></a>
//         </div>
//         </div>
//     </div>
//   );
// }

// export default Contacts
// ;
import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Contacts() {
  return (
    <div className='mb-20 mt-20'>
      {/* Title Section */}
      <div className='text-3xl md:text-4xl font-bold flex justify-center mb-12'>
        <h1>CONTACT ME</h1>
      </div>
      
      {/* Contact Information Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 px-6 md:px-20 lg:px-40'>
        <div className='flex justify-center items-center space-x-4'>
          <BiLogoGmail className='text-4xl md:text-5xl'/>
          <a className='text-lg md:text-xl' href="mailto:smilan8899@gmail.com">
            <span>smilan8899@gmail.com</span>
          </a>
        </div>
        <div className='flex justify-center items-center space-x-4'>
          <FaFacebook className='text-4xl md:text-5xl'/>
          <a className='text-lg md:text-xl' href="https://www.facebook.com/milan.shrestha.733076">
            <span>Milan Shrestha</span>
          </a>
        </div>
        <div className='flex justify-center items-center space-x-4'>
          <FaInstagramSquare className='text-4xl md:text-5xl'/>
          <a className='text-lg md:text-xl' href="https://www.instagram.com/milan_sama_/">
            <span>Milan Shrestha</span>
          </a>
        </div>
        <div className='flex justify-center items-center space-x-4'>
          <FaLinkedin className='text-4xl md:text-5xl'/>
          <a className='text-lg md:text-xl' href="https://www.linkedin.com/in/milan-shrestha/">
            <span>Milan Shrestha</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
