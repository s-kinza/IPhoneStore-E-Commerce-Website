// import React from 'react'
// import { BsSmartwatch } from 'react-icons/bs'
// import { FaCamera } from 'react-icons/fa'
// import { FaHeadphonesSimple } from 'react-icons/fa6'
// import { GiSmartphone } from 'react-icons/gi'
// import { LuGamepad } from 'react-icons/lu'
// import { RiComputerFill } from 'react-icons/ri'

// const Category = () => {
//   return (
//  <section  className="container mx-auto mt-8 shadow-xl bg-slate-100 rounded-md">
//     <div className='flex justify-between items-center mb-4'>
//         <h2 className='text-xl font-bold'>Browse By Category</h2>
//         <button className='bg-white p-2 rounded-full'>&lt;   &gt;</button>
//     </div>

   
//     <div className="flex space-x-6 py-8">
//   {/* First Item */}
//   <div className="bg-slate-200 w-20 h-20 rounded-md flex flex-col items-center justify-center">
//     <GiSmartphone className="text-3xl" />
//     <span className="text-sm mt-2">Phones</span>
//   </div>

//   {/* Second Item */}
//   <div className="bg-slate-200 w-20 h-20 rounded-md flex flex-col items-center justify-center">
//   <BsSmartwatch className="text-3xl" />
//     <span className="text-sm mt-2">Watches</span>
//   </div>

//   {/* Third Item */}
//   <div className="bg-slate-200 w-20 h-20 rounded-md flex flex-col items-center justify-center">
//   <FaCamera className="text-3xl" />
//     <span className="text-sm mt-2">Cameras</span>
//   </div>

//   {/* Fourth Item */}
//   <div className="bg-slate-200 w-20 h-20 rounded-md flex flex-col items-center justify-center">
//   <FaHeadphonesSimple className="text-3xl" />
//     <span className="text-sm mt-2">Headphones</span>
//   </div>

//   {/* Fifth Item */}
//   <div className="bg-slate-200 w-20 h-20 rounded-md flex flex-col items-center justify-center">
//   <RiComputerFill className="text-3xl" />
//     <span className="text-sm mt-2">Computers</span>
//   </div>

//   {/* Sixth Item */}
//   <div className="bg-slate-200 w-20 h-20 rounded-md flex flex-col items-center justify-center">
//   <LuGamepad className="text-3xl" />
//     <span className="text-sm mt-2">Gaming</span>
//   </div>
// </div>



//  </section>
//   )
// }

// export default Category

// import React from 'react';
import { BsSmartwatch } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { GiSmartphone } from 'react-icons/gi';
import { LuGamepad } from 'react-icons/lu';
import { RiComputerFill } from 'react-icons/ri';

const Category = () => {
  return (
    <section className="container mx-auto mt-4 bg-black rounded-lg p-2 shadow-md max-w-5xl">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-md font-semibold text-white">Browse By Category</h2>
        <button className="bg-purple-700 p-1 rounded-full text-white shadow-sm hover:bg-purple-600 transition duration-300">
          &lt; &gt;
        </button>
      </div>

      {/* Category Items Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 py-2">
        {/* Phone Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <GiSmartphone className="text-lg sm:text-xl text-white" />
          <span className="text-xs mt-1 text-gray-300">Phones</span>
        </div>

        {/* Watch Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <BsSmartwatch className="text-lg sm:text-xl text-white" />
          <span className="text-xs mt-1 text-gray-300">Watches</span>
        </div>

        {/* Camera Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <FaCamera className="text-lg sm:text-xl text-white" />
          <span className="text-xs mt-1 text-gray-300">Cameras</span>
        </div>

        {/* Headphones Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <FaHeadphonesSimple className="text-lg sm:text-xl text-white" />
          <span className="text-xs mt-1 text-gray-300">Headphones</span>
        </div>

        {/* Computer Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <RiComputerFill className="text-lg sm:text-xl text-white" />
          <span className="text-xs mt-1 text-gray-300">Computers</span>
        </div>

        {/* Gaming Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <LuGamepad className="text-lg sm:text-xl text-white" />
          <span className="text-xs mt-1 text-gray-300">Gaming</span>
        </div>
      </div>
    </section>
  );
};

export default Category;
