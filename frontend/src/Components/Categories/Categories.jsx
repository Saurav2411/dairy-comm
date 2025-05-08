import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = [
    {
      title: "Fresh Milk",
      products: "120+ Products",
      image: "/src/assets/categories/milk.jpg",
    },
    {
      title: "Desi Ghee",
      products: "80+ Products",
      image: "/src/assets/categories/ghee.jpeg",
    },
    {
      title: "Natural Curd",
      products: "60+ Products",
      image: "/src/assets/categories/curd.jpeg",
    },
    {
      title: "Soft Paneer",
      products: "40+ Products",
      image: "/src/assets/categories/paneer.jpeg",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="lg:container mx-auto px-4">
      <SectionTitle title="Top Dairy Categories" mb="mb-11" />

      <div className="slider-container features_slider w-full h-full">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="px-4"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg bg-white h-[424px] group transition-all duration-300 hover:shadow-2xl cursor-pointer">
                <div className="relative h-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[340px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black bg-opacity-60 text-white flex flex-col justify-center px-5">
                    <h4 className="text-xl font-semibold capitalize mb-1">{category.title}</h4>
                    <p className="text-sm">{category.products}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
