import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/2348136495940"
      
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: [1, 1.08, 1],
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.15,
        rotate: 8,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 animate-pulse"></div>

      {/* Main Button */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-full
          bg-green-500
          text-white
          shadow-2xl
          border-4
          border-white
        "
      >
        <MessageCircle size={30} />

        {/* Notification Dot */}
        <span
          className="
            absolute
            top-1
            right-1
            w-4
            h-4
            bg-red-500
            rounded-full
            border-2
            border-white
            animate-ping
          "
        ></span>
      </div>
    </motion.a>
  );
}