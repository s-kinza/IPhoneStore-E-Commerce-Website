import Image from 'next/image';

export default function Banner() {
  return (
    <section className="bg-gray-900 py-10 md:py-20 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0 md:space-x-8">
        {/* Left images */}
        <div className="flex justify-center md:justify-start items-center space-x-4">
          {/* Tablet and Smartphone images */}
          <Image
            src="/images/A_minimalistic_light-themed_e-commerce_banner_with.png"
            alt="Tablet and Smartphone"
            width={200}
            height={150}
            className="md:w-auto"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Big Summer <span className="text-gray-600">Sale</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-500">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Shop Now
          </button>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end items-center space-x-4">
          {/* Smartwatch image */}
          <Image
            src="/images/A_minimalistic.png"
            alt="Smartwatch"
            width={150}
            height={150}
            className="md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
