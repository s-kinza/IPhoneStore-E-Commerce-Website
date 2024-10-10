import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
   <section className='bg-black text-white h-screen flex items-center justify-between px-12'>

    {/* Left Section --- Create button and text */}

    <div className='gap-4'>
        <p className='text-gray-500'>Pro. Beyond.</p>
        <h1 className='text-6xl font-bold'>IPhone 14 <span className='text-purple-500'>Pro</span></h1>
        <p className='text-gray-400'>Created to change everything for the better. For everyone.</p>

        <button className='mt-4 bg-purple-600 text-#ffffff px-6 py-3 rounded-md text-lg hover:bg-white text-black'>Shop Now</button>

    </div>

    {/* Right section --- Banner Image */}

    <div>
        <Image src="/images/banner.jpg" alt='iphone 14 pro' width={300} height={300} />
    </div>
    

   </section>
  )
}

export default HeroSection
