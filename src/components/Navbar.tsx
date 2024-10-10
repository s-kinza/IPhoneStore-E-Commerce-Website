// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { CiHeart } from 'react-icons/ci'
// import { FiUser } from 'react-icons/fi'
// import { RiShoppingCart2Line } from 'react-icons/ri'

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-200 shadow-md ">
//       {/* Empty box create */}
    
//       <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className='flex justify-between h-16 items-center'>
//           {/* Left Side Logo Section */}
//         <div className='flex-shrink-0'>
//             <Image src="/images/logo.png" alt='Cyber Logo'  width={60}   
//                 height={5} />
//         </div>

//         {/* Center Section - Search Bar*/}

//         <div className='justify-between'>
//           <input className="bg-gray-100 px-5 py-2  rounded-md text-sm w-80" type="text" placeholder='Search'  />
//         </div>

//         {/* Right Section - Navigation and link section */}

//         <div className='flex items-center gap-10'>
//           <Link href="/" className="text-gray-500 hover:text-black">Home</Link>
//           <Link href="/about" className="text-gray-500 hover:text-black">About</Link>
//           <Link href="/contact" className="text-gray-500 hover:text-black">Contact Us</Link>
//           <Link href="/blog" className="text-gray-500 hover:text-black">Blog</Link>
//         </div>
//         <hr />


//         {/* Icons Create */}

//         <div className='text-gray-500 hover:text-black flex gap-5'>
//         <CiHeart  />
//         <RiShoppingCart2Line />
//         <FiUser />
//         </div>
//         </div>
//       </div>
     
//         </nav>
//   )
// }

// export default Navbar


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { RiShoppingCart2Line } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Side Logo Section */}
          <div className="flex-shrink-0">
            <Image src="/images/logo.png" alt="Cyber Logo" width={60} height={60} />
          </div>

          {/* Center Section - Search Bar */}
          <div className="flex-grow flex justify-center">
            <input className="bg-gray-800 text-white px-5 py-2 rounded-md text-sm w-80" type="text" placeholder="Search" />
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition duration-200">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition duration-200">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition duration-200">Contact Us</Link>
            <Link href="/blog" className="text-gray-300 hover:text-purple-400 transition duration-200">Blog</Link>
          </div>

          {/* Icons Section */}
          <div className="text-gray-300 hover:text-purple-400 flex gap-5">
            <CiHeart className="cursor-pointer transition duration-200" />
            <RiShoppingCart2Line className="cursor-pointer transition duration-200" />
            <FiUser className="cursor-pointer transition duration-200" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
