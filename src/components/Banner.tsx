import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-black py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-purple-400">Special Products</h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Hissa 1 */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md text-white">
          <div className="relative w-full h-48 sm:h-64 mb-4">
            <Image 
              src="/images/product-1.jpg" 
              alt="product-1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">Popular Products</h3>
          <p className="text-gray-300">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <button className="mt-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-purple-700 text-sm md:text-base">
            Shop Now
          </button>
        </div>

        {/* Hissa 2 */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md text-white">
          <div className="relative w-full h-48 sm:h-64 mb-4">
            <Image 
              src="/images/product-2.jpg"
              alt="product-2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">Ipad Pro</h3>
          <p className="text-gray-300">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <button className="mt-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-purple-700 text-sm md:text-base">
            Shop Now
          </button>
        </div>

        {/* Hissa 3 */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md text-white">
          <div className="relative w-full h-48 sm:h-64 mb-4">
            <Image 
              src="/images/product-3.jpg"
              alt="product-3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">Samsung Galaxy</h3>
          <p className="text-gray-300">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <button className="mt-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-purple-700 text-sm md:text-base">
            Shop Now
          </button>
        </div>

        {/* Hissa 4 */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md text-white">
          <div className="relative w-full h-48 sm:h-64 mb-4">
            <Image 
              src="/images/product-4.jpg"
              alt="product-4"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">Macbook Pro</h3>
          <p className="text-gray-300">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <button className="mt-2 bg-black text-white px-3 py-2 rounded-lg hover:bg-purple-700 text-sm md:text-base">
            Shop Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
