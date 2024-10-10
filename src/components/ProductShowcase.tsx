import Image from "next/image";
import React from "react";

const ProductShowcase = () => {
  return (
    <section className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gray-900 rounded-lg shadow-lg p-6">
        
        {/* Left Section: Playstation 5 */}
        <div className="lg:col-span-2 flex flex-col space-y-8 bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row items-center">
            <Image
              src="/images/playstation.png"
              alt="Playstation 5"
              width={350}
              height={400}
              className="object-cover rounded-lg"
            />
            <div className="lg:ml-6 space-y-2">
              <h2 className="text-3xl font-bold text-purple-300">Playstation 5</h2>
              <p className="text-gray-300 max-w-md">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          {/* Bottom Section: Apple AirPods Max and Apple Vision Pro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Apple AirPods Max */}
            <div className="flex items-center bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 shadow-md">
              <Image
                src="/images/airpods-max.png"
                alt="Apple AirPods Max"
                width={100}
                height={100}
                className="object-cover rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-purple-300">Apple AirPods Max</h3>
                <p className="text-gray-300">
                  Computational audio. Listen, it&apos;s powerful.
                </p>
              </div>
            </div>

            {/* Apple Vision Pro */}
            <div className="flex items-center bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 shadow-md">
              <Image
                src="/images/vision-pro.jpg"
                alt="Apple Vision Pro"
                width={100}
                height={100}
                className="object-cover rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-purple-300">Apple Vision Pro</h3>
                <p className="text-gray-300">
                  An immersive way to experience entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: MacBook Air */}
        <div className="lg:col-span-1 flex flex-col justify-center items-center bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-300 mb-4">
              MacBook <span className="text-gray-400">Air</span>
            </h2>
            <p className="text-gray-300 mb-4">
              The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
            </p>
            <button className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-500 transition duration-300">
              Shop Now
            </button>
          </div>
          <Image
            src="/images/macbook.jpg"
            alt="MacBook"
            width={300}
            height={100}
            className="mt-6 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

