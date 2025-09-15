import React from "react";
import { motion } from "framer-motion";


function Collage({ images }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-5 w-[450px] h-[360px] flex flex-col items-center justify-center border-4 border-pink-400"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
        {/* First image (big one) */}
        <motion.div
          className="row-span-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={images[0]}
            alt="Collage"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Second */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <img
            src={images[1]}
            alt="Collage"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Third */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <img
            src={images[2]}
            alt="Collage"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CollagePage() {
  // 10 rows with 3 collages each
  const rows = [
    {
      title: "💕 Memories Row 1 💕",
      collages: [
        ["/Images/WE.jpg", "/Images/girl.jpg", "/Images/girl.jpg"],
        ["/Images/girl.jpg", "/Images/girl.jpg", "/Images/girl.jpg"],
        ["/Images/girl.jpg", "/Images/girl.jpg", "/Images/girl.jpg"],
      ],
    },
    {
      title: "💕 Memories Row 2 💕",
      collages: [
        ["/Images/girl.jpg", "/Images/girl.jpg", "/Images/girl.jpg"],
        ["/Images/girl.jpg", "/Images/girl.jpg", "/Images/girl.jpg"],
        ["/Images/girl.jpg", "/Images/girl.jpg", "/Images/girl.jpg"],
      ],
    },
   
    
    // Add up to 10 rows like this...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-red-100 to-pink-200 flex flex-col items-center py-10 space-y-16">
      <h1 className="text-3xl font-bold text-red-600 mb-6">💕 Our Collages 💕</h1>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col items-center space-y-4">
          {/* Row with 3 collages */}
          <div className="flex flex-wrap gap-8 justify-center">
            {row.collages.map((images, idx) => (
              <Collage key={idx} images={images} />
            ))}
          </div>

          {/* Heading under the row */}
          <h2 className="text-xl font-semibold text-pink-700">{row.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default CollagePage;
