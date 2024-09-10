// import Image from "next/image";
// import React from "react";

// function Main() {
//   return (
//     <>
//       <div className="mt-[4rem] ml-[10rem] inline-block">
//         <span className="font-sans text-[3rem] font-semibold"> MY NAME IS</span>
//         <br />
//         <span className="font-bold text-[3.5rem] text-blue-900">
//           {" "}
//           MILAN SHRESTHA
//         </span>
//         <br />
//         <span className="bg-yellow-300 font-bold text-[1.8rem] mb-[1rem]">
//           {" "}
//           I'M A GRAPHIC DESIGNER
//         </span>
//         <br />
//         <button className=' mt-[1.5rem] bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded"'>
//         <a href="images/Curriculum vitae.pdf" download >
//   Download CV
// </a>

//         </button>
//       </div>
//       <div className="inline-block pl-[4rem] pt-[3rem]">
//         <Image
//           className="rounded-lg"
//           src="/425492960_3925377067690766_6842210585589637443_n.jpg"
//           alt="pp"
//           height={400}
//           width={400}
//         />
//       </div>
//     </>
//   );
// }

// export default Main;
import Image from "next/image";
import React from "react";

function Main() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-16">
      {/* Text Section */}
      <div className="text-center md:text-left md:ml-20">
        <span className="font-sans text-2xl md:text-3xl font-semibold block">
          MY NAME IS
        </span>
        <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-blue-900 block mt-2">
          MILAN SHRESTHA
        </span>
        <span className="bg-yellow-300 inline-block font-bold text-lg md:text-2xl mt-4 p-1">
          I'M A GRAPHIC DESIGNER
        </span>
        <br />
        <button className="mt-6 bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-500 hover:border-blue-400 rounded">
          <a href="images/Curriculum vitae.pdf" download>
            Download CV
          </a>
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0 md:ml-10">
        <Image
          className="rounded-lg"
          src="/425492960_3925377067690766_6842210585589637443_n.jpg"
          alt="pp"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}

export default Main;
