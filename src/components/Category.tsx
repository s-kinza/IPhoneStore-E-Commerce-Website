
import { BsSmartwatch } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { GiSmartphone } from 'react-icons/gi';
import { LuGamepad } from 'react-icons/lu';
import { RiComputerFill } from 'react-icons/ri';

const Category = () => {
  return (
    <section className="container mx-auto mt-4 bg-black rounded-lg p-4 sm:p-6 shadow-md max-w-5xl">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm sm:text-md font-semibold text-white">Browse By Category</h2>
        <button className="bg-purple-700 p-1 rounded-full text-white shadow-sm hover:bg-purple-600 transition duration-300">
          &lt; &gt;
        </button>
      </div>

      {/* Category Items Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 py-3">
        {/* Phone Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <GiSmartphone className="text-base sm:text-lg lg:text-xl text-white" />
          <span className="text-xs lg:text-sm mt-1 text-gray-300">Phones</span>
        </div>

        {/* Watch Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <BsSmartwatch className="text-base sm:text-lg lg:text-xl text-white" />
          <span className="text-xs lg:text-sm mt-1 text-gray-300">Watches</span>
        </div>

        {/* Camera Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <FaCamera className="text-base sm:text-lg lg:text-xl text-white" />
          <span className="text-xs lg:text-sm mt-1 text-gray-300">Cameras</span>
        </div>

        {/* Headphones Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <FaHeadphonesSimple className="text-base sm:text-lg lg:text-xl text-white" />
          <span className="text-xs lg:text-sm mt-1 text-gray-300">Headphones</span>
        </div>

        {/* Computer Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <RiComputerFill className="text-base sm:text-lg lg:text-xl text-white" />
          <span className="text-xs lg:text-sm mt-1 text-gray-300">Computers</span>
        </div>

        {/* Gaming Category */}
        <div className="bg-purple-900 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-purple-700">
          <LuGamepad className="text-base sm:text-lg lg:text-xl text-white" />
          <span className="text-xs lg:text-sm mt-1 text-gray-300">Gaming</span>
        </div>
      </div>
    </section>
  );
};

export default Category;
