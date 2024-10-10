import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
      {/* Left Section --- Create button and text */}
      <div className="md:gap-4 text-center md:text-left mt-6 md:mt-0">
        <p className="text-gray-500 text-sm md:text-base">Pro. Beyond.</p>
        <h1 className="text-4xl md:text-6xl font-bold">
          IPhone 14 <span className="text-purple-500">Pro</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Created to change everything for the better. For everyone.
        </p>

        <button className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-md text-sm md:text-lg hover:bg-white hover:text-black transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Section --- Banner Image */}
      <div className="mb-6 md:mb-0">
        <Image src="/images/banner.jpg" alt="iphone 14 pro" width={300} height={300} />
      </div>
    </section>
  );
};

export default HeroSection;

