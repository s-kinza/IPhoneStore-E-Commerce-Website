import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  isFavorite?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, isFavorite }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay before showing the card for the fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-4 ${
        isVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'
      }`}
    >
      <div className="relative mb-4">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="rounded-md object-cover h-48 w-full sm:h-56 md:h-64 lg:h-72"
        />
        <div className="absolute top-2 right-2">
          {isFavorite ? (
            <span className="text-red-500">&#10084;</span> // Filled heart
          ) : (
            <span className="text-gray-500">&#9825;</span> // Outline heart
          )}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-purple-300">{title}</h3>
      <p className="text-xl font-bold text-white">${price}</p>
      <button className="bg-purple-600 text-white mt-4 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-purple-500 w-full sm:w-auto">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
