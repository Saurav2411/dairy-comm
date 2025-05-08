import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const Product = () => {
  const [active, setActive] = useState({
    id: 0,
    product: 'all'
  });

  const productTitle = [
    { id: 0, title: "all", product: 'all' },
    { id: 1, title: "new arrivals", product: 'newest' },
    { id: 2, title: "popular", product: 'trending' },
    { id: 3, title: "best seller", product: 'best_seller' },
  ];

  const products = [
    {
      title: 'Fresh Cow Milk',
      status: 'Fresh',
      price: '₹60/L',
      image: '/src/assets/products/milk.jpeg',
      currentPrice: '₹55/L',
      product: 'newest',
    },
    {
      title: 'Organic Curd',
      status: 'New',
      price: '₹50/kg',
      image: '/src/assets/products/curd.jpeg',
      product: 'newest',
    },
    {
      title: 'Desi Ghee',
      status: 'Popular',
      price: '₹600/L',
      image: '/src/assets/products/ghee.jpeg',
      currentPrice: '₹580/L',
      product: 'trending',
    },
    {
      title: 'Paneer (Cottage Cheese)',
      status: 'Fresh',
      price: '₹350/kg',
      image: '/src/assets/products/paneer.jpeg',
      product: 'trending',
    },
    {
      title: 'Butter',
      status: 'New',
      price: '₹250/500g',
      image: '/src/assets/products/butter.jpeg',
      product: 'best_seller',
    },
    {
      title: 'Mango Lassi',
      status: 'New',
      price: '₹40/250ml',
      image: '/src/assets/products/lassi.jpeg',
      product: 'best_seller',
    },
    {
      title: 'Flavored Milk (Chocolate)',
      status: 'Fresh',
      price: '₹30/200ml',
      image: '/src/assets/products/flavored_milk.jpeg',
      product: 'best_seller',
    },
    {
      title: 'Ice Cream (Vanilla)',
      status: 'New',
      price: '₹120/500ml',
      image: '/src/assets/products/ice_cream.jpeg',
      product: 'trending',
    },
    {
      title: 'Milk Shake (Strawberry)',
      status: 'Fresh',
      price: '₹50/250ml',
      image: '/src/assets/products/milkshake.jpeg',
      product: 'all',
    },
    {
      title: 'Sweetened Condensed Milk',
      status: 'Popular',
      price: '₹90/400g',
      image: '/src/assets/products/Condensed_Milk.jpg',
      product: 'all',
    }
  ];

  const productFilter = products.filter(product => 
    active?.product === 'all' || product.product === active?.product
  );

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title={'our dairy products'} textAlign={'center'} mb={'mb-5'} />

        <div className="flex items-center justify-center gap-6 mb-11">
          {productTitle.map((title, indx) => (
            <button
              key={title.id}
              onClick={() => setActive({ id: title.id, product: title.product })}
              className={`text-base font-extrabold uppercase font-inter cursor-pointer ${active.id === indx ? 'text-[#272343]' : 'text-[#9a9caa]'}`}
            >
              {title.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productFilter.map((product, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl transform transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="feature_image mb-4 relative">
              <img
                className="w-full h-60 object-cover rounded-lg"
                src={product.image}
                alt={product.title}
              />
              {product.status && (
                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                  <button className="text-sm font-inter font-normal">{product.status}</button>
                </div>
              )}
            </div>

            <div className="feature_content">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base text-[#007580] capitalize font-inter font-semibold">{product.title}</h4>
                <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center hover:bg-[#029fae] transition-colors">
                  <ShoppingCart size="1.5rem" color="#fff" />
                </span>
              </div>
              <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                {product.price}
                {product.currentPrice && (
                  <span className="text-sm text-[#9a9caa] font-inter font-normal line-through">{product.currentPrice}</span>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Product;
