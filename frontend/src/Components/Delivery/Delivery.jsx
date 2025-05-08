import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";

const Delivery = () => {
  const features = [
    {
      icon: <Percent size="2.5rem" className="text-[#029fae]" />,
      title: "Weekly Offers",
      description: "Fresh dairy at discounted rates every week",
    },
    {
      icon: <Truck size="2.5rem" className="text-[#029fae]" />,
      title: "Free Home Delivery",
      description: "Get milk & more at your doorstep daily",
    },
    {
      icon: <Clock3 size="2.5rem" className="text-[#029fae]" />,
      title: "24/7 Customer Support",
      description: "We're always here for your dairy needs",
    },
    {
      icon: <ShieldCheck size="2.5rem" className="text-[#029fae]" />,
      title: "Secure Payments",
      description: "Trusted and encrypted checkout options",
    },
  ];

  return (
    <div className="lg:container mx-auto bg-white shadow-md p-6 md:p-10 rounded-2xl mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <div>{feature.icon}</div>
            <div>
              <h4 className="text-lg font-semibold text-[#272343] font-inter mb-1 capitalize">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-500 font-inter">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
