

import { motion } from "framer-motion";


const images = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "images/coll1.png",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  "images/coll4.png",
  "images/coll3.png",
  "images/coll5.png",
];

export default function Collection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    className="mt-35 md:px-18">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <h1 className="text-3xl font-semibold text-center mx-auto">
        Our Latest Collections
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto mb-7">
        A visual collection of our most recent goods - each piece crafted with
        intention, emotion, and style.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            {/* Image */}
            <img
              src={src}
              alt=""
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>

            {/* Soft shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/10 to-transparent transition duration-300"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
