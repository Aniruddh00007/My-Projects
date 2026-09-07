import { useEffect, useRef, useState } from "react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const envelopeRef = useRef(null);

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  // =========================================================
  // OPEN / CLOSE LETTER
  // =========================================================

  const openLetter = () => {
    if (isOpen) return;

    setIsOpen(true);

    // Letter comes out after envelope flap opens
    setTimeout(() => {
      setShowLetter(true);
    }, 650);
  };

  const closeLetter = () => {
    setShowLetter(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 350);
  };

  // =========================================================
  // 3D MOUSE MOVEMENT
  // =========================================================

  const handleMouseMove = (event) => {
    if (!envelopeRef.current || isOpen) return;

    const rect = envelopeRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 7;
    const rotateX = -((y - centerY) / centerY) * 5;

    setTilt({
      x: rotateX,
      y: rotateY,
    });
  };

  const resetTilt = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  // ESC KEY

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeLetter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050306] text-white">

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose-600/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/[0.06] blur-[130px]" />

      </div>

      {/* =========================================================
          STARS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {[...Array(45)].map((_, index) => (
          <span
            key={index}
            className="absolute h-[2px] w-[2px] animate-twinkle rounded-full bg-white/70"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
              animationDelay: `${(index % 8) * 0.4}s`,
            }}
          />
        ))}

      </div>

      {/* =========================================================
          FLOATING HEARTS
      ========================================================= */}

      <span className="pointer-events-none absolute left-[8%] top-[25%] animate-heart-one text-xl opacity-20">
        ❤️
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[30%] animate-heart-two text-lg opacity-20">
        💕
      </span>

      <span className="pointer-events-none absolute bottom-[15%] left-[15%] animate-heart-three text-sm opacity-20">
        ❤️
      </span>

      <span className="pointer-events-none absolute bottom-[20%] right-[16%] animate-heart-one text-sm opacity-20">
        💗
      </span>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <main className="relative z-10 flex min-h-screen flex-col items-center px-4 pb-12 pt-12">

        {/* HEADER */}

        <div
          className={`text-center transition-all duration-700 ${
            isOpen
              ? "translate-y-[-15px] opacity-40"
              : "translate-y-0 opacity-100"
          }`}
        >

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/[0.06] px-4 py-2 text-xs tracking-[0.25em] text-pink-300 backdrop-blur-xl">
            ❤️ SOMETHING FROM MY HEART
          </div>

          <h1 className="bg-gradient-to-r from-white via-pink-200 to-rose-400 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            A Letter From Me
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/45 sm:text-base">
            Some feelings deserve more than a message.
          </p>

        </div>

        {/* =========================================================
            ENVELOPE AREA
        ========================================================= */}

        <div className="flex flex-1 items-center justify-center py-10">

          <div
            className="relative"
            style={{
              perspective: "1200px",
            }}
          >

            {/* BACK GLOW */}

            <div
              className={`pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/15 blur-[100px] transition-all duration-1000 ${
                isOpen
                  ? "scale-125 opacity-80"
                  : "scale-100 opacity-40"
              }`}
            />

            {/* =====================================================
                ENVELOPE
            ===================================================== */}

            <button
              ref={envelopeRef}
              onClick={openLetter}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              className={`relative h-[230px] w-[330px] cursor-pointer outline-none transition-all duration-700 sm:h-[270px] sm:w-[400px] ${
                isOpen
                  ? "translate-y-[140px]"
                  : "animate-envelope-float"
              }`}
              style={{
                transformStyle: "preserve-3d",

                transform: isOpen
                  ? "translateY(140px)"
                  : `
                    rotateX(${tilt.x}deg)
                    rotateY(${tilt.y}deg)
                  `,
              }}
            >

              {/* ENVELOPE SHADOW */}

              <div className="absolute -bottom-10 left-1/2 h-14 w-[85%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-2xl" />

              {/* BACK */}

              <div className="absolute inset-0 overflow-hidden rounded-[18px] border border-pink-300/20 bg-gradient-to-br from-[#421d2c] via-[#30131f] to-[#1d0c13] shadow-[0_30px_70px_rgba(0,0,0,0.7)]">

                {/* subtle texture */}

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        135deg,
                        rgba(255,255,255,.04) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255,255,255,.04) 50%,
                        rgba(255,255,255,.04) 75%,
                        transparent 75%
                      )
                    `,
                    backgroundSize: "25px 25px",
                  }}
                />

              </div>

              {/* ===================================================
                  ENVELOPE FLAP
              =================================================== */}

              <div
                className="absolute left-0 top-0 z-20 h-[55%] w-full origin-top transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",

                  transform: isOpen
                    ? "rotateX(180deg)"
                    : "rotateX(0deg)",
                }}
              >

                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 50% 100%)",

                    background:
                      "linear-gradient(160deg, #5c263b 0%, #351522 55%, #210d15 100%)",
                  }}
                />

                <div
                  className="absolute left-1/2 top-[40%] h-[1px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-200/20 to-transparent"
                />

              </div>

              {/* LEFT FOLD */}

              <div
                className="absolute bottom-0 left-0 z-30 h-[85%] w-[60%]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 100%, 0 100%)",

                  background:
                    "linear-gradient(135deg, #351520, #1e0c13)",
                }}
              />

              {/* RIGHT FOLD */}

              <div
                className="absolute bottom-0 right-0 z-30 h-[85%] w-[60%]"
                style={{
                  clipPath:
                    "polygon(100% 0, 0 100%, 100% 100%)",

                  background:
                    "linear-gradient(225deg, #401a28, #210d15)",
                }}
              />

              {/* BOTTOM FOLD */}

              <div
                className="absolute bottom-0 left-0 z-40 h-[60%] w-full"
                style={{
                  clipPath:
                    "polygon(0 100%, 50% 0, 100% 100%)",

                  background:
                    "linear-gradient(to bottom, #3e1826, #210d15)",
                }}
              />

              {/* ===================================================
                  ADDRESS
              =================================================== */}

              <div
                className={`absolute inset-0 z-50 flex flex-col items-center justify-center transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              >

                <p className="text-[10px] uppercase tracking-[0.4em] text-pink-200/40">
                  specially For
                </p>

                <h2 className="mt-3 font-serif text-3xl italic text-pink-100 sm:text-4xl">
                  Anjali ❤️
                </h2>

                <div className="mt-4 h-[1px] w-24 bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />

              </div>

             

            

              {/* GLASS LIGHT */}

              <div
                className="pointer-events-none absolute inset-0 z-[70] overflow-hidden rounded-[18px] opacity-0 transition-opacity duration-300 hover:opacity-100"
              >

                <div
                  className="absolute -left-[60%] top-[-50%] h-[200%] w-[35%] rotate-[25deg] bg-white/[0.06] blur-xl"
                  style={{
                    transform: `translateX(${tilt.y * 8}px) rotate(25deg)`,
                  }}
                />

              </div>

            </button>

            {/* CLICK TEXT */}

            {!isOpen && (
              <div className="mt-10 text-center">

                <p className="animate-soft-pulse text-sm text-pink-200/60">
                  Click to open
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/20">
                  A little piece of my heart is inside
                </p>

              </div>
            )}

          </div>

        </div>

      </main>

      {/* ===========================================================
          OPENED LETTER
      =========================================================== */}

      {isOpen && (

        <div className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto px-4 py-10">

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/55 backdrop-blur-[5px]" />

          {/* LETTER */}

          <article
            className={`pointer-events-auto relative my-auto w-full max-w-[650px] transition-all duration-1000 ${
              showLetter
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-[220px] scale-90 opacity-0"
            }`}
          >

            {/* PAPER GLOW */}

            <div className="absolute -inset-10 rounded-[40px] bg-pink-500/[0.08] blur-[60px]" />

            {/* PAPER */}

            <div
              className="relative overflow-hidden rounded-[4px] border border-[#e7cfc5]/30 px-7 py-10 text-[#482c30] shadow-[0_40px_100px_rgba(0,0,0,.75)] sm:px-12 sm:py-12"
              style={{
                background:
                  "linear-gradient(145deg, #fffaf3 0%, #f8eee5 50%, #f4e5dd 100%)",
              }}
            >

              {/* PAPER TEXTURE */}

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 28px,
                      rgba(120,80,80,.07) 29px
                    )
                  `,
                }}
              />

              {/* CORNER DECORATION */}

              <div className="absolute -right-8 -top-8 text-[100px] text-rose-300/[0.12]">
                ❤️
              </div>

              <div className="absolute -bottom-8 -left-8 text-[90px] text-rose-300/[0.10]">
                ❤️
              </div>

              {/* CLOSE BUTTON */}

              <button
                onClick={closeLetter}
                className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[#6c4148]/10 bg-[#6c4148]/5 text-xl text-[#6c4148]/50 transition hover:bg-[#6c4148]/10 hover:text-[#6c4148]"
              >
                ×
              </button>

              {/* ===================================================
                  LETTER CONTENT
              =================================================== */}

              <div className="relative z-10">

                <p
                  className="text-sm uppercase tracking-[0.3em] text-[#9d6871]"
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  From My Heart
                </p>

                <div className="my-5 h-[1px] w-16 bg-[#ba7a85]/50" />

                <h2
                  className="text-3xl italic text-[#733d48] sm:text-4xl"
                  style={{
                    fontFamily:
                      "'Brush Script MT', 'Segoe Script', cursive",
                  }}
                >
                  My Anjali,
                </h2>

                {/* =================================================
                    CHANGE YOUR PERSONAL MESSAGE HERE
                ================================================= */}

                <div
                  className="mt-7 space-y-5 text-[15px] leading-8 sm:text-[17px]"
                  style={{
                    fontFamily:
                      "'Segoe Print', 'Bradley Hand', cursive",
                  }}
                >

                  <p>
                    I don't know if words will ever be enough to explain
                    what you mean to me, but today I wanted to leave a
                    little piece of my heart here for you.
                  </p>

                  <p>
                    Somewhere between our first conversations, our
                    random moments, our fights, our laughter and all
                    those memories we never planned, you became such an
                    important part of my life.
                  </p>

                  <p>
                    We've had beautiful days, difficult days, crazy
                    moments and moments I wish I could live all over
                    again. And somehow, every single one of them became
                    a part of <span className="font-semibold">our story.</span>
                  </p>

                  <p>
                    I don't want a perfect story with you. I just want
                    something real — where we keep understanding each
                    other, choosing each other and creating memories
                    that someday we'll look back at and smile.
                  </p>

                  <p>
                    Thank you for being part of my life, for all the
                    memories we've already made, and for all the ones
                    that are still waiting for us.
                  </p>

                  <p className="font-semibold text-[#7c3f4c]">
                    No matter how many pages our story gets, you'll
                    always be one of my favourite chapters. ❤️
                  </p>

                </div>

                {/* SIGNATURE */}

                <div className="mt-10 text-right">

                  <p
                    className="text-sm text-[#9d6871]"
                    style={{
                      fontFamily:
                        "'Segoe Print', cursive",
                    }}
                  >
                    Always yours,
                  </p>

                  <p
                    className="mt-1 text-3xl italic text-[#7d3e4c]"
                    style={{
                      fontFamily:
                        "'Brush Script MT', 'Segoe Script', cursive",
                    }}
                  >
                    Aniruddh ❤️
                  </p>

                </div>

                {/* ANNIVERSARY */}

                <div className="mt-9 flex items-center justify-center gap-3">

                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#b87b84]/30" />

                  <span className="text-xs tracking-[0.2em] text-[#a06c75]">
                    ❤️ OUR STORY CONTINUES ❤️
                  </span>

                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#b87b84]/30" />

                </div>

              </div>

            </div>

         </article>

          {/* NEXT PAGE BUTTON */}

          {showLetter && (
            <button
              onClick={() => {
                window.location.href = "/secret";
              }}
              className="
                pointer-events-auto
                fixed bottom-7 right-7 z-[120]
                group
                flex items-center gap-3
                rounded-full
                border border-pink-400/30
                bg-[#160b12]/80
                px-6 py-3
                text-sm font-medium
                text-pink-100
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:scale-105
                hover:border-pink-400/60
                hover:bg-pink-500/20
                hover:shadow-[0_0_35px_rgba(244,63,94,.30)]
                active:scale-95
                animate-next-button
              "
            >
              <span>Continue Our Story</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ❤️ →
              </span>
            </button>
          )}

        </div>
      )}

      {/* ===========================================================
          ANIMATIONS
      =========================================================== */}

      <style>
        {`
        @keyframes nextButtonAppear {
  0% {
    opacity: 0;
    transform: translateY(25px) scale(.9);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-next-button {
  animation: nextButtonAppear .8s ease-out .8s both;
}

        @keyframes twinkle {

          0%, 100% {
            opacity: .15;
            transform: scale(.8);
          }

          50% {
            opacity: .9;
            transform: scale(1.4);
          }

        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }


        @keyframes envelopeFloat {

          0%, 100% {
            translate: 0 0;
          }

          50% {
            translate: 0 -10px;
          }

        }

        .animate-envelope-float {
          animation: envelopeFloat 4s ease-in-out infinite;
        }


        @keyframes softPulse {

          0%, 100% {
            opacity: .4;
          }

          50% {
            opacity: 1;
          }

        }

        .animate-soft-pulse {
          animation: softPulse 2.2s ease-in-out infinite;
        }


        @keyframes heartOne {

          0%, 100% {
            transform: translateY(0) rotate(-5deg);
          }

          50% {
            transform: translateY(-20px) rotate(5deg);
          }

        }

        .animate-heart-one {
          animation: heartOne 6s ease-in-out infinite;
        }


        @keyframes heartTwo {

          0%, 100% {
            transform: translateY(0) rotate(5deg);
          }

          50% {
            transform: translateY(22px) rotate(-6deg);
          }

        }

        .animate-heart-two {
          animation: heartTwo 8s ease-in-out infinite;
        }


        @keyframes heartThree {

          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(12px, -18px);
          }

        }

        .animate-heart-three {
          animation: heartThree 7s ease-in-out infinite;
        }

        `}
      </style>

    </div>
  );
}