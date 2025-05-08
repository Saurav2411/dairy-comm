import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Benefits of A2 Cow Milk: Nature’s Gift",
    image: "/src/assets/blog/a2_milk.webp",
    content: "A2 cow milk is rich in A2 beta-casein protein, making it easier to digest and less inflammatory compared to A1 milk...",
  },
  {
    id: 2,
    title: "Why Ghee is a Superfood",
    image: "/src/assets/blog/ghee.jpeg",
    content: "Ghee, especially when made traditionally, contains healthy fats, vitamins A, E, and D. It promotes brain function...",
  },
  {
    id: 3,
    title: "The Sacred Badri Cow of Uttarakhand",
    image: "/src/assets/blog/badri_cow.webp",
    content: "Native to the Himalayas, Badri cows produce highly nutritious milk believed to have medicinal value in Ayurveda...",
  },
  {
    id: 4,
    title: "Traditional vs Commercial Dairy Practices",
    image: "/src/assets/blog/traditional_vs_commercial.jpg",
    content: "Traditional dairy focuses on animal care, organic feed, and minimal processing—ensuring purity and nutrition...",
  },
  {
    id: 5,
    title: "The Importance of Farm-to-Table Dairy",
    image: "/src/assets/blog/farm_to_table.jpg",
    content: "Locally sourced dairy supports local farmers, offers freshness, and avoids harmful preservatives...",
  },
];

const Blog = () => {
  return (
    <div className="lg:container mx-auto px-4 py-16">
      <motion.h2 
        className="text-4xl font-bold text-center mb-14 text-[#007580]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Blog
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#272343] mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {blog.content}
              </p>
              <div className="mt-4 text-right">
                <span className="text-[#029fae] font-medium hover:underline">Read More →</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
