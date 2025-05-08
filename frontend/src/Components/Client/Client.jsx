import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Client = () => {
  const clientSays = [
    {
      id: 1,
      description:
        "I’ve been ordering Gokul Dairy's fresh milk every morning for the past 6 months — it’s always fresh and perfectly packaged. Great service!",
      name: "Amit Sharma",
      position: "Software Engineer, Pune",
      image: "/src/assets/clients/client1.jpg",
    },
    {
      id: 2,
      description:
        "Their desi ghee reminds me of my childhood in the village. Truly authentic and aromatic! Highly recommend Gokul Dairy to all.",
      name: "Neha Patil",
      position: "Nutritionist, Mumbai",
      image: "/src/assets/clients/client2.jpg",
    },
    {
      id: 3,
      description:
        "The paneer quality is top-notch — soft, fresh, and cooks beautifully. My go-to store for all dairy needs!",
      name: "Rohit Mehra",
      position: "Chef, Delhi",
      image: "/src/assets/clients/client3.jpg",
    },
    {
      id: 4,
      description:
        "Gokul Dairy’s curd is thick and natural, unlike commercial brands. It has improved my family’s digestion noticeably.",
      name: "Sunita Iyer",
      position: "Homemaker, Bengaluru",
      image: "/src/assets/clients/client4.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="lg:container mx-auto px-4">
      <SectionTitle title="What Our Customers Say" mb="mb-11" />

      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {clientSays.map((client) => (
            <motion.div
              key={client.id}
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 h-full flex flex-col justify-between">
                <p className="text-lg text-gray-700 font-inter mb-6">
                  “{client.description}”
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-14 h-14 object-cover rounded-full border-2 border-[#029fae]"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 capitalize">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-500">{client.position}</p>
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

export default Client;
