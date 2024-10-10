import Image from 'next/image';

export default function Banner() {
  return (
    <section className="bg-gray-900 py-20 text-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left images */}
        <div className="flex items-center space-x-4">
          {/* Tablet and Smartphone images */}
          <Image src="/images/A_minimalistic_light-themed_e-commerce_banner_with.png" alt="Tablet and Smartphone" width={300} height={200} />
        </div>

        {/* Text Section */}
        <div className="max-w-md text-left">
          <h1 className="text-6xl font-bold text-black">
            Big Summer <span className="text-gray-600">Sale</span>
          </h1>
          <p className="mt-4 text-gray-500">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Shop Now
          </button>
        </div>

        {/* Right image */}
        <div className="flex items-center space-x-4">
          {/* Smartwatch image */}
          <Image src="/images/A_minimalistic.png" alt="Smartwatch" width={200} height={200} />
        </div>
      </div>
    </section>
  );
}

