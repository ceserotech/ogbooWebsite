import { CheckCircle, Shield, Truck, Star, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "10-Year Warranty",
      desc: "We stand by the quality of our mattresses with long-term protection.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Delivery",
      desc: "Fast and reliable delivery straight to your doorstep anywhere in Nigeria.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Comfort",
      desc: "Designed with high-density foam for maximum comfort and support.",
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "100-Night Trial",
      desc: "Try our mattress risk-free and return if you're not satisfied.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Certified Quality",
      desc: "All products are tested and certified for durability and safety.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full bg-gray-50 py-16 px-6 md:px-20 mt-30"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Our Mattresses
        </h2>
        <p className="text-gray-600 mt-3">
          Comfort, durability, and trust — everything you need for better sleep.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500  text-black mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
