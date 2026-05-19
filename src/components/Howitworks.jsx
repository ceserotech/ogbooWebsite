import { ShoppingCart, Package, Truck, BedDouble } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Choose Your Mattress",
      desc: "Browse our collection and select the perfect mattress for your comfort needs.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Place Your Order",
      desc: "Add to cart and complete your order in just a few simple clicks.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      desc: "We deliver your mattress safely and quickly to your doorstep anywhere in Nigeria.",
    },
    {
      icon: <BedDouble className="w-6 h-6" />,
      title: "Enjoy Better Sleep",
      desc: "Unbox, set up, and enjoy premium comfort every night.",
    },
  ];

  return (
    <motion.div 
    initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    className="w-full bg-white py-16 px-6 md:px-20 mt-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600 mt-3">
          Getting your perfect sleep is easier than ever in just 4 simple steps.
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            {/* Step Number */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500  text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-black text-yellow-500 mb-4 mt-4">
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}