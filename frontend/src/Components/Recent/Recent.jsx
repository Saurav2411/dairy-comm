import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Recent = () => {
  const recentProducts = [
    {
      title: 'Fresh Cow Milk',
      status: 'Fresh',
      price: '₹60/L',
      currentPrice: '₹55/L',
      image: '/src/assets/features/milk.jpeg',
    },
    {
      title: 'Organic Curd',
      status: 'New',
      price: '₹50/kg',
      image: '/src/assets/features/curd.jpeg',
    },
    {
      title: 'Desi Ghee',
      price: '₹600/L',
      image: '/src/assets/features/ghee.jpeg',
    },
    {
      title: 'Paneer (Cottage Cheese)',
      status: 'Fresh',
      price: '₹350/kg',
      currentPrice: '₹320/kg',
      image: '/src/assets/features/paneer.jpeg',
    },
    {
      title: 'Butter',
      status: 'Fresh',
      price: '₹250/500g',
      image: '/src/assets/features/butter.jpeg',
    },
    {
      title: 'Mango Lassi',
      status: 'New',
      price: '₹40/250ml',
      image: '/src/assets/features/lassi.jpeg',
    },
    {
      title: 'Flavored Milk (Chocolate)',
      price: '₹30/200ml',
      image: '/src/assets/features/flavored_milk.jpeg',
    },
    {
      title: 'Vanilla Ice Cream',
      price: '₹120/500ml',
      status: 'Fresh',
      image: '/src/assets/features/ice_cream.jpeg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:container mx-auto px-4">
      <SectionTitle title="Recently Added Dairy Products" mb="mb-11" />

      <div className="features_slider w-full">
        <Slider {...settings}>
          {recentProducts.map((product, index) => (
            <div key={index} className="p-4">
              <div className="feature_image mb-4 relative group">
                <img
                  className="w-full h-[220px] object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                  src={product.image}
                  alt={product.title}
                />
                {product.status && (
                  <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                    <span className="text-sm font-inter font-normal">{product.status}</span>
                  </div>
                )}
              </div>
              <div className="feature_content">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base text-[#007580] capitalize font-inter font-semibold">
                    {product.title}
                  </h4>
                  <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center hover:bg-[#029fae] transition-all">
                    <ShoppingCart size="1.5rem" color="#fff" />
                  </span>
                </div>
                <p className="text-xl text-[#272343] font-semibold font-inter">
                  {product.price}
                  {product.currentPrice && (
                    <span className="text-sm text-[#9a9caa] line-through">
                      {product.currentPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recent;
