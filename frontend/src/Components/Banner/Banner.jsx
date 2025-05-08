import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Pure & Fresh Milk Delivered Daily",
      subTitle: "Welcome to Gokul Dairy",
      image: "/src/assets/Banner/milk_banner.jpg",
    },
    {
      id: 2,
      title: "Traditional Ghee Made with Care",
      subTitle: "Authentic Indian Taste",
      image: "/src/assets/Banner/ghee_banner.jpeg",
    },
    {
      id: 3,
      title: "Thick & Creamy Curd for Every Meal",
      subTitle: "Naturally Cultured",
      image: "/src/assets/Banner/curd_banner.jpeg",
    },
    {
      id: 4,
      title: "Fresh Paneer for Healthy Cooking",
      subTitle: "Soft & Nutritious",
      image: "/src/assets/Banner/paneer_banner.jpeg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        className="w-4 h-4 bg-[#029fae] rounded-full cursor-pointer"
        style={{
          margin: "0 6px",
        }}
      />
    ),
  };

  return (
    <div className="lg:container mx-auto">
      <div className="slider-container w-full h-full relative">
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="banner_slide_item flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white rounded-xl shadow-xl overflow-hidden"
              style={{ height: "600px" }} // Fixed height for every banner
            >
              {/* Text with animation */}
              <motion.div
                className="banner_text max-w-lg md:max-w-xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm text-[#4d4d4d] uppercase mb-2">
                  {product.subTitle}
                </p>
                <h3 className="text-4xl md:text-5xl text-[#1a1a1a] font-extrabold leading-tight mb-5">
                  {product.title}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-[#029fae] text-white rounded-lg shadow-lg hover:bg-[#027f90] transition-all duration-300"
                >
                  Explore Products <FaArrowRight />
                </motion.button>
              </motion.div>

              {/* Image with animation */}
              <motion.div
                className="banner_image max-w-md w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          ))}
        </Slider>

        {/* Slider Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="slick-dots flex justify-center space-x-2">
            {/* Custom dots have been styled above in customPaging */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
