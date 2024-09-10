// import React from 'react'
// import Image from 'next/image'

// function Works() {
//   return (
//     <>
//     <div className='mt-[5rem] flex justify-center'>
//       <h1 className='text-[4rem] font-bold'>MY WORKS</h1>
//     </div >
//     <div className='grid grid-cols-3  gap-6 ml-[20rem] mr-[20rem] mt-[2rem]'>
//     <Image
//     src="/82965088_2272198836420939_6518384054532833280_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/83017144_122266485697474_9184026709039513600_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/83077041_2892158674163332_2712059731874152448_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/82965088_2272198836420939_6518384054532833280_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/83017144_122266485697474_9184026709039513600_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/83077041_2892158674163332_2712059731874152448_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//      <Image
//     src="/82965088_2272198836420939_6518384054532833280_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/83017144_122266485697474_9184026709039513600_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/83077041_2892158674163332_2712059731874152448_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/82965088_2272198836420939_6518384054532833280_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/83017144_122266485697474_9184026709039513600_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
//     <Image
//     src="/83077041_2892158674163332_2712059731874152448_n.jpg"
//     width={200}
//     height={200}
//     alt='pics'
//     />
   
//     </div>
//     </>
//   );
// }

// export default Works;
import React from 'react';
import Image from 'next/image';

function Works() {
  return (
    <>
      {/* Title Section */}
      <div className="mt-20 flex justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">MY WORKS</h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12 lg:px-32 mt-8 justify-items-center">
        <Image
          src="/82965088_2272198836420939_6518384054532833280_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/83017144_122266485697474_9184026709039513600_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/83077041_2892158674163332_2712059731874152448_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/82965088_2272198836420939_6518384054532833280_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/83017144_122266485697474_9184026709039513600_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/83077041_2892158674163332_2712059731874152448_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/82965088_2272198836420939_6518384054532833280_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/83017144_122266485697474_9184026709039513600_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/83077041_2892158674163332_2712059731874152448_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/82965088_2272198836420939_6518384054532833280_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/83017144_122266485697474_9184026709039513600_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
        <Image
          src="/83077041_2892158674163332_2712059731874152448_n.jpg"
          width={200}
          height={200}
          alt="pics"
        />
      </div>
    </>
  );
}

export default Works;
