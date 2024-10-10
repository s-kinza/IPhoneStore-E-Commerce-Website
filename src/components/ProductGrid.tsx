import ProductCard from './ProductCard';

const products = [
  { imageUrl: '/images/iphone.jpg', title: 'Apple iPhone 14 Pro Max', price: '900', isFavorite: false },
  { imageUrl: '/images/camera.jpg', title: 'Blackmagic Pocket Cinema Camera 6K', price: '2535', isFavorite: false },
  { imageUrl: '/images/watch.jpg', title: 'Apple Watch Series 9 GPS', price: '399', isFavorite: false },
  { imageUrl: '/images/airpods.jpg', title: 'Apple AirPods Max Silver', price: '549', isFavorite: false },
  { imageUrl: '/images/samsung_watch.jpg', title: ' Galaxy Watch', price: '369', isFavorite: false },
  { imageUrl: '/images/galaxy_fold.jpg', title: 'Galaxy Z Fold5', price: '1799', isFavorite: true },
  { imageUrl: '/images/galaxy_buds.jpg', title: 'Galaxy Buds FE', price: '99', isFavorite: false },
  { imageUrl: '/images/ipad.jpg', title: 'Apple iPad 10.2"', price: '398', isFavorite: false },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, index) => (
        <div key={index} className="transition-all duration-300 delay-100">
          <ProductCard 
            imageUrl={product.imageUrl} 
            title={product.title} 
            price={product.price} 
            isFavorite={product.isFavorite} 
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
