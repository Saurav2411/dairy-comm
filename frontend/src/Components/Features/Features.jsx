import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const products = [
    {
      title: "Fresh Cow Milk",
      status: "New",
      price: "₹60/L",
      currentPrice: "₹55/L",
      image: "/src/assets/features/milk.jpeg",
    },
    {
      title: "Pure Desi Ghee",
      status: "Sale",
      price: "₹600/kg",
      currentPrice: "₹520/kg",
      image: "/src/assets/features/ghee.webp",
    },
    {
      title: "Paneer Block",
      price: "₹320/kg",
      image: "/src/assets/features/paneer.jpeg",
    },
    {
      title: "Fresh Curd",
      status: "New",
      price: "₹40/500g",
      image: "/src/assets/features/curd.jpeg",
    },
    {
      title: "Butter",
      price: "₹250/500g",
      image: "/src/assets/features/butter.jpeg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="lg:container mx-auto py-10">
      <SectionTitle title="Dairy Specials from Gokul" mb="mb-11" />

      <Slider {...settings}>
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-4"
          >
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Image Section */}
              <div className="relative h-56 bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                {item.status && (
                  <span className="absolute top-3 left-3 text-xs px-3 py-1 bg-[#029fae] text-white rounded-full uppercase font-medium">
                    {item.status}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[#007580] font-semibold text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <button className="h-10 w-10 bg-[#029fae] rounded-full flex items-center justify-center hover:bg-[#027f90] transition-colors">
                    <ShoppingCart color="white" size="1.5rem" />
                  </button>
                </div>

                <div className="text-[#272343] text-lg font-bold">
                  {item.currentPrice || item.price}
                  {item.currentPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {item.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Features;
