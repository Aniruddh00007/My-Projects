import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const roomSections = [
  {
    id: 1,
    title: "First Memories",
    icon: "🌸",
    subtitle: "Where everything slowly began...",
    photos: [
      {
        id: 1,
        src: "/photos/temp.jpg",
        title: "The Beginning",
        date: "Our First Memory",
        message:
          "Some moments don't look special when they happen, but later they become the beginning of everything.",
      },
      {
        id: 2,
        src: "/photos/temp.jpg",
        title: "First Time Together",
        date: "A Beautiful Beginning",
        message:
          "Before we knew what our story would become, we were already creating memories.",
      },
      {
        id: 3,
        src: "/photos/temp.jpg",
        title: "That Smile",
        date: "The Early Days",
        message:
          "Maybe it was just another normal day for everyone else, but for us it became something worth remembering.",
      },
    ],
  },

  {
    id: 2,
    title: "Trips",
    icon: "✈️",
    subtitle: "Places became memories because you were there.",
    photos: [
      {
        id: 4,
        src: "/photos/temp.jpg",
        title: "Our Adventure",
        date: "Together Somewhere",
        message:
          "The destination mattered less than the fact that we were experiencing it together.",
      },
      {
        id: 5,
        src: "/photos/temp.jpg",
        title: "Miles & Memories",
        date: "Our Trip",
        message:
          "Every road felt shorter when you were beside me.",
      },
      {
        id: 6,
        src: "/photos/temp.jpg",
        title: "Us Against The World",
        date: "Another Adventure",
        message:
          "Just two people collecting places, laughs and stories to remember forever.",
      },
    ],
  },

  {
    id: 3,
    title: "Special Moments",
    icon: "✨",
    subtitle: "The moments that deserve their own little universe.",
    photos: [
      {
        id: 7,
        src: "/photos/temp.jpg",
        title: "A Moment To Keep",
        date: "Special Day",
        message:
          "Some memories stay alive because of how deeply we felt them.",
      },
      {
        id: 8,
        src: "/photos/temp.jpg",
        title: "Just You & Me",
        date: "One Of Our Days",
        message:
          "Nothing extraordinary was needed. Having you there was enough.",
      },
      {
        id: 9,
        src: "/photos/temp.jpg",
        title: "Forever Favourite",
        date: "One Beautiful Memory",
        message:
          "If I could return to one small moment just to feel it again, maybe this would be one of them.",
      },
    ],
  },

  {
    id: 4,
    title: "Crazy Moments",
    icon: "😂",
    subtitle: "Because love isn't always serious.",
    photos: [
      {
        id: 10,
        src: "/photos/temp.jpg",
        title: "No Explanation 😂",
        date: "Crazy Us",
        message:
          "Some photos need beautiful captions. This one probably needs an explanation instead.",
      },
      {
        id: 11,
        src: "/photos/temp.jpg",
        title: "Certified Pagal",
        date: "Another Random Day",
        message:
          "One thing we definitely know how to do together is make normal moments completely unforgettable.",
      },
      {
        id: 12,
        src: "/photos/temp.jpg",
        title: "Our Chaos",
        date: "Just Us Being Us",
        message:
          "Maybe we're a little crazy, but at least we're crazy together.",
      },
    ],
  },

  {
    id: 5,
    title: "Us ❤️",
    icon: "❤️",
    subtitle: "Every version of us belongs here.",
    photos: [
      {
        id: 13,
        src: "/photos/temp.jpg",
        title: "My Favourite Person",
        date: "Us",
        message:
          "Of all the people I could have met in this world, somehow I found you.",
      },
      {
        id: 14,
        src: "/photos/temp.jpg",
        title: "Our Story",
        date: "Still Us",
        message:
          "We've changed, learned, fought, laughed and grown — and somehow our story keeps becoming more beautiful.",
      },
      {
        id: 15,
        src: "/photos/temp.jpg",
        title: "To Be Continued...",
        date: "Today & Tomorrow",
        message:
          "This gallery isn't finished. We're still creating the photos that will fill these walls.",
      },
    ],
  },
];

export default function MemoryRoom() {
  const navigate = useNavigate();
  const [activeWall, setActiveWall] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [direction, setDirection] = useState("right");

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const roomRef = useRef(null);

  const currentSection = roomSections[activeWall];

  const nextWall = () => {
    setDirection("right");

    setActiveWall((prev) =>
      prev === roomSections.length - 1 ? 0 : prev + 1
    );
  };

  const previousWall = () => {
    setDirection("left");

    setActiveWall((prev) =>
      prev === 0 ? roomSections.length - 1 : prev - 1
    );
  };

  // =========================================
  // MOUSE 3D MOVEMENT
  // =========================================

  const handleMouseMove = (e) => {
    if (!roomRef.current) return;

    const rect = roomRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 4;

    setMouse({
      x: rotateY,
      y: rotateX,
    });
  };

  const resetRoom = () => {
    setMouse({
      x: 0,
      y: 0,
    });
  };

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === "ArrowRight") {
        nextWall();
      }

      if (event.key === "ArrowLeft") {
        previousWall();
      }

      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050306] text-white">

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose-600/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/[0.06] blur-[120px]" />
      </div>

      {/* STARS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, index) => (
          <span
            key={index}
            className="absolute h-[2px] w-[2px] animate-twinkle rounded-full bg-white/70"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
              animationDelay: `${(index % 8) * 0.35}s`,
            }}
          />
        ))}
      </div>

      {/* HEARTS */}

      <span className="pointer-events-none absolute left-[7%] top-[25%] animate-floating-heart text-xl opacity-20">
        ❤️
      </span>

      <span className="pointer-events-none absolute right-[8%] top-[35%] animate-floating-heart2 text-xl opacity-20">
        💕
      </span>

      {/* MAIN */}

      <main className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col px-4 pb-10 pt-10 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-7 text-center">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/[0.06] px-4 py-2 text-xs tracking-[0.25em] text-pink-300 backdrop-blur-xl">
            ✨ OUR LITTLE UNIVERSE
          </div>

          <h1 className="bg-gradient-to-r from-white via-pink-200 to-rose-400 bg-clip-text text-4xl font-black text-transparent sm:text-6xl">
          The Room of Us ❤️
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/45">
            Every wall holds a piece of our story.
          </p>

        </div>

        {/* WALL BUTTONS */}

        <div className="mb-7 flex flex-wrap justify-center gap-2">

          {roomSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveWall(index)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition-all duration-300 sm:text-sm ${
                activeWall === index
                  ? "border-pink-400/50 bg-pink-500/15 text-pink-100 shadow-[0_0_30px_rgba(244,63,94,.15)]"
                  : "border-white/10 bg-white/[0.03] text-white/40 hover:border-pink-400/40 hover:text-white"
              }`}
            >
              <span>{section.icon}</span>

              {section.title}
            </button>
          ))}

        </div>

        {/* ROOM PERSPECTIVE */}

        <section className="flex flex-1 items-center justify-center">

          <div
            ref={roomRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRoom}
            className="relative w-full max-w-6xl"
            style={{
              perspective: "1500px",
            }}
          >

            {/* ROOM */}

            <div
              key={currentSection.id}
              className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090609]/95 shadow-[0_50px_120px_rgba(0,0,0,.8)] ${
                direction === "right"
                  ? "animate-room-right"
                  : "animate-room-left"
              }`}
              style={{
                transformStyle: "preserve-3d",

                transform: `
                  rotateX(${mouse.y}deg)
                  rotateY(${mouse.x}deg)
                  scale(0.985)
                `,

                transition: "transform 0.12s ease-out",
              }}
            >

              {/* MOVING LIGHT REFLECTION */}

              <div
                className="pointer-events-none absolute inset-0 z-40 opacity-40"
                style={{
                  background: `
                    radial-gradient(
                      circle at ${50 + mouse.x * 4}% ${50 - mouse.y * 5}%,
                      rgba(255,182,193,0.13),
                      transparent 28%
                    )
                  `,
                }}
              />

              {/* TOP REFLECTION */}

              <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-28 bg-gradient-to-b from-white/[0.035] to-transparent" />

              {/* TITLE */}

              <div className="relative z-20 border-b border-white/[0.06] px-6 py-6 text-center">

                <div className="mb-2 text-3xl">
                  {currentSection.icon}
                </div>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  {currentSection.title}
                </h2>

                <p className="mt-2 text-xs text-white/40 sm:text-sm">
                  {currentSection.subtitle}
                </p>

              </div>

              {/* ROOM WALL */}

              <div className="relative min-h-[500px] overflow-hidden px-5 py-14 sm:px-10 lg:px-16">

                {/* WALL */}

                <div className="absolute inset-0 bg-gradient-to-b from-[#180e15] via-[#0e090d] to-[#060406]" />

                {/* WALL TEXTURE */}

                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        rgba(255,255,255,.015) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        90deg,
                        rgba(255,255,255,.015) 1px,
                        transparent 1px
                      )
                    `,
                    backgroundSize: "45px 45px",

                    transform: `
                      translate(
                        ${mouse.x * 1.5}px,
                        ${mouse.y * 1.5}px
                      )
                    `,
                  }}
                />

                {/* SPOTLIGHT */}

                <div
                  className="absolute top-[-150px] h-[500px] w-[600px] rounded-full bg-pink-300/[0.07] blur-[100px]"
                  style={{
                    left: `${50 + mouse.x * 2}%`,
                    transform: "translateX(-50%)",
                    transition: "left .15s ease-out",
                  }}
                />

                {/* LEFT SIDE WALL */}

                <div
                  className="pointer-events-none absolute bottom-0 left-0 top-0 w-[13%] bg-gradient-to-r from-black/80 to-transparent"
                  style={{
                    transform: "rotateY(18deg)",
                    transformOrigin: "left",
                  }}
                />

                {/* RIGHT SIDE WALL */}

                <div
                  className="pointer-events-none absolute bottom-0 right-0 top-0 w-[13%] bg-gradient-to-l from-black/80 to-transparent"
                  style={{
                    transform: "rotateY(-18deg)",
                    transformOrigin: "right",
                  }}
                />

                {/* PHOTOS */}

                <div
                  className="relative z-10 grid min-h-[350px] grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-3"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  {currentSection.photos.map((photo, index) => {

                    const depth =
                      index === 1 ? 45 : 20;

                    return (
                      <button
                        key={photo.id}
                        onClick={() =>
                          setSelectedPhoto(photo)
                        }
                        className="group relative"
                        style={{
                          transform: `
                            translate3d(
                              ${mouse.x * (index === 1 ? -1.1 : -0.65)}px,
                              ${mouse.y * (index === 1 ? -1 : -0.55)}px,
                              ${depth}px
                            )
                            ${index === 0 ? "rotateZ(-2deg)" : ""}
                            ${index === 2 ? "rotateZ(2deg)" : ""}
                          `,

                          transition:
                            "transform .15s ease-out",

                          transformStyle: "preserve-3d",
                        }}
                      >

                        {/* FRAME SHADOW */}

                        <div className="absolute -inset-5 rounded-2xl bg-pink-500/0 blur-2xl transition duration-500 group-hover:bg-pink-500/20" />

                        {/* FRAME */}

                        <div className="relative rounded-[10px] border-[7px] border-[#2d1922] bg-[#130c10] p-2 shadow-[0_25px_45px_rgba(0,0,0,.75)] transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.05] group-hover:border-[#79405a]">

                          <div className="relative h-[270px] w-[210px] overflow-hidden sm:h-[290px] sm:w-[230px]">

                            <img
                              src={photo.src}
                              alt={photo.title}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* GLASS */}

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.09] via-transparent to-transparent" />

                            {/* MOVING GLASS REFLECTION */}

                            <div
                              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                              style={{
                                background: `
                                  linear-gradient(
                                    ${110 + mouse.x * 2}deg,
                                    transparent 30%,
                                    rgba(255,255,255,.16) 48%,
                                    transparent 65%
                                  )
                                `,
                              }}
                            />

                            {/* DARK OVERLAY */}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                            {/* HOVER TEXT */}

                            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                              <p className="text-[10px] uppercase tracking-[0.25em] text-pink-300">
                                Enter Memory
                              </p>

                              <p className="mt-1 font-semibold">
                                {photo.title}
                              </p>

                            </div>

                          </div>

                        </div>

                        {/* LABEL */}

                        <div className="mx-auto mt-4 w-fit rounded-md border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-lg">

                          <p className="text-xs text-pink-100">
                            {photo.title}
                          </p>

                        </div>

                        {/* REFLECTION BELOW */}

                        <div
                          className="pointer-events-none mx-auto mt-[-4px] h-10 w-[75%] opacity-20 blur-sm"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(244,114,182,.25), transparent)",
                            transform:
                              "perspective(200px) rotateX(65deg)",
                          }}
                        />

                      </button>
                    );
                  })}

                </div>

                {/* FLOOR */}

                <div
                  className="absolute bottom-[-30px] left-[-5%] h-[160px] w-[110%] border-t border-white/[0.05] bg-gradient-to-b from-[#120a10] to-black"
                  style={{
                    transform:
                      "perspective(550px) rotateX(58deg)",
                    transformOrigin: "bottom",
                  }}
                />

              </div>

              {/* NAVIGATION */}

              <div className="relative z-30 flex items-center justify-between border-t border-white/[0.06] bg-black/30 px-6 py-4 backdrop-blur-xl">

                <button
                  onClick={previousWall}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl transition-all duration-300 hover:scale-110 hover:border-pink-400/50 hover:bg-pink-500/10"
                >
                  ←
                </button>

                <div className="text-center">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Memory Wall
                  </p>

                  <p className="mt-1 text-xs text-pink-200">
                    {activeWall + 1} / {roomSections.length}
                  </p>

                </div>

                <button
                  onClick={nextWall}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl transition-all duration-300 hover:scale-110 hover:border-pink-400/50 hover:bg-pink-500/10"
                >
                  →
                </button>

              </div>

            </div>

            {/* ROOM SHADOW */}

            <div className="mx-auto h-14 w-[75%] rounded-[100%] bg-black/70 blur-3xl" />

          </div>

        </section>

        <p className="mt-4 text-center text-xs text-white/25">
          Move your mouse around the room • Click a frame to enter the memory ❤️
        </p> 

        {activeWall === roomSections.length - 1 && (
  <div className="mt-8 flex justify-end">
    <button
      onClick={()=> navigate("/envelop")}
      className="group flex items-center gap-3 rounded-full border border-pink-400/30 bg-pink-500/10 px-6 py-3 text-sm font-medium text-pink-100 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-pink-400/60 hover:bg-pink-500/20 hover:shadow-[0_0_30px_rgba(244,63,94,.25)] active:scale-95"
    >
      <span>Something Special</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        ❤️ →
      </span>
    </button>
  </div>
)}

      </main>

      {/* ==========================
          MODAL
      ========================== */}

      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 backdrop-blur-xl"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-4xl overflow-hidden rounded-[30px] border border-pink-500/20 bg-[#0b070a] shadow-[0_40px_120px_rgba(0,0,0,.9)] md:grid-cols-2"
          >

            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-xl"
            >
              ×
            </button>

            <div className="relative min-h-[380px]">

              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b070a]/60" />

            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10">

              <span className="mb-5 w-fit rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs tracking-[0.2em] text-pink-300">
                ❤️ OUR MEMORY
              </span>

              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                {selectedPhoto.date}
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                {selectedPhoto.title}
              </h2>

              <div className="my-6 h-[1px] w-16 bg-gradient-to-r from-pink-500 to-transparent" />

              <p className="leading-7 text-white/55">
                {selectedPhoto.message}
              </p>

              <p className="mt-8 font-serif text-xl italic text-pink-200/80">
                “A little piece of our forever.”
              </p>

            </div>

          </div>

        </div>
      )}

      {/* CSS */}

      <style>{`

        @keyframes twinkle {
          0%, 100% {
            opacity: .15;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }


        @keyframes floatingHeart {
          0%,100% {
            transform: translateY(0) rotate(-5deg);
          }

          50% {
            transform: translateY(-25px) rotate(6deg);
          }
        }

        .animate-floating-heart {
          animation: floatingHeart 6s ease-in-out infinite;
        }


        @keyframes floatingHeart2 {
          0%,100% {
            transform: translateY(0) rotate(5deg);
          }

          50% {
            transform: translateY(20px) rotate(-7deg);
          }
        }

        .animate-floating-heart2 {
          animation: floatingHeart2 8s ease-in-out infinite;
        }


        @keyframes roomRight {

          0% {
            opacity: 0;
            transform:
              translateX(90px)
              rotateY(-16deg)
              scale(.94);
          }

          100% {
            opacity: 1;
          }

        }


        @keyframes roomLeft {

          0% {
            opacity: 0;
            transform:
              translateX(-90px)
              rotateY(16deg)
              scale(.94);
          }

          100% {
            opacity: 1;
          }

        }


        .animate-room-right {
          animation:
            roomRight .65s
            cubic-bezier(.22,.8,.25,1);
        }


        .animate-room-left {
          animation:
            roomLeft .65s
            cubic-bezier(.22,.8,.25,1);
        }

      `}</style>

    </div>
  );
}