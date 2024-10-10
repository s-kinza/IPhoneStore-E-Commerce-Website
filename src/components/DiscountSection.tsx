import Image from 'next/image';

const DiscountProduct = () => {
  return (
    <div className="bg-black py-8">
      {/* Discount Heading */}
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-400">
        Discounts up to -50%
      </h2>

      {/* Product Row */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Product Card 1 */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md text-white">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/images/goldenphone.jpg" 
              alt="Apple iPhone 14 Pro Max"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">Apple iPhone 14 Pro 512GB Gold (MQ233)</h3>
          <p className="text-gray-300">$1437</p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Buy Now
          </button>
        </div>

        {/* Product Card 2 */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md text-white">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/images/airpods.jpg" // Replace with your image path
              alt="Blackmagic Pocket Cinema Camera 6k"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">AirPods Max Silver
          Starlight Aluminium </h3>
          <p className="text-gray-300">$549</p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Buy Now
          </button>
        </div>

        {/* Product Card 3 */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md text-white">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/images/watch.jpg"
              alt="Apple Watch Series 9"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">Apple Watch GPS 41mm Starlight Aluminium </h3>
          <p className="text-gray-300">$399</p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Buy Now
          </button>
        </div>

        {/* Product Card 4 */}
        <div className="bg-purple-900 p-4 rounded-lg shadow-md text-white">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/images/silverphone.jpg"
              alt="AirPods Max"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold">Apple iPhone 14 Pro 1TB Gold (MQ2V3)</h3>
          <p className="text-gray-300">$1499</p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
