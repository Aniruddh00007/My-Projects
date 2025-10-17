import React, { memo } from "react";
import { motion } from "framer-motion";
import ThreeDHoverGallery from "./ui/ThreeDHoverGallery";
import SmokeyCursor from "./ui/SmokeyCursor";

// Memoized Collage component
const Collage = memo(({ images }) => {
  const heartVariants = {
    initial: { opacity: 0, y: 20, scale: 0.5 },
    animate: {
      opacity: [0, 1, 0],
      y: [-20, -60],
      scale: [0.5, 1, 0.8],
      transition: { duration: 1.8, repeat: Infinity, repeatType: "loop" },
    },
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-pink-200 via-white to-pink-100 
                 border-8 border-pink-300 rounded-3xl shadow-[0_0_30px_rgba(255,105,180,0.6)]
                 p-3 w-[480px] h-[390px] flex items-center justify-center group"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      {/* Floating Hearts */}
      <motion.div
        className="absolute inset-0 pointer-events-none flex justify-center"
        variants={heartVariants}
        initial="initial"
        animate="animate"
      >
        <span className="absolute text-pink-500 text-4xl top-1/2">💖</span>
        <span className="absolute text-rose-400 text-3xl top-1/2 left-1/4">💗</span>
        <span className="absolute text-rose-500 text-3xl top-1/2 right-1/4">💕</span>
      </motion.div>

      {/* Collage Images */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full bg-white rounded-2xl shadow-lg p-2">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className={idx === 0 ? "row-span-2 group/image" : "group/image"}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={src}
              alt={`Collage ${idx}`}
              className="w-full h-full object-cover rounded-xl 
                         transition duration-300 group-hover/image:brightness-110 group-hover/image:saturate-150 group-hover/image:blur-[1px]"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

function CollagePage() {
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-pink-100 to-rose-100 flex flex-col items-center py-10 space-y-16">
      <h1 className="mt-10 text-4xl font-extrabold text-pink-700 drop-shadow-md mb-6">
        💕 Our Golden Love Story 💕
      </h1>

      {rows.map((row, i) => (
        <div key={i} className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap gap-10 justify-center">
            {row.collages.map((images, idx) => (
              <Collage key={idx} images={images} />
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-rose-700">{row.title}</h2>
        </div>
      ))}

      {/* Optional heavy components */}
      <ThreeDHoverGallery />
      <SmokeyCursor
        splatRadius={0.1}
        splatForce={3000}
        densityDissipation={8}
        velocityDissipation={5}
        colorUpdateSpeed={5}
      />
    </div>
  );
}

export default CollagePage;
