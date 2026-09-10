import { useEffect, useState } from "react";

export default function NextChapter() {
  const [celebrate, setCelebrate] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const handleContinue = () => {
    setCelebrate(true);

    setTimeout(() => {
      setShowFinalMessage(true);
    }, 1200);
  };

  useEffect(() => {
    if (!celebrate) return;

    const timer = setTimeout(() => {
      setCelebrate(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, [celebrate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030204] text-white">

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose-600/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/[0.07] blur-[160px]" />

      </div>

      {/* =========================================================
          STARS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {[...Array(60)].map((_, index) => (
          <span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/70 animate-final-twinkle"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
              animationDelay: `${(index % 10) * 0.3}s`,
            }}
          />
        ))}

      </div>

      {/* =========================================================
          FLOATING BACKGROUND HEARTS
      ========================================================= */}

      <span className="pointer-events-none absolute left-[8%] top-[22%] animate-floating-heart-one text-xl opacity-20">
        ❤️
      </span>

      <span className="pointer-events-none absolute right-[10%] top-[30%] animate-floating-heart-two text-lg opacity-20">
        💕
      </span>

      <span className="pointer-events-none absolute bottom-[18%] left-[15%] animate-floating-heart-two text-sm opacity-20">
        💗
      </span>

      <span className="pointer-events-none absolute bottom-[15%] right-[16%] animate-floating-heart-one text-lg opacity-20">
        ❤️
      </span>

      {/* =========================================================
          CELEBRATION HEARTS
      ========================================================= */}

      {celebrate && (
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">

          {[...Array(35)].map((_, index) => (
            <span
              key={`heart-${index}`}
              className="absolute bottom-[-50px] animate-celebration-heart"
              style={{
                left: `${(index * 17) % 100}%`,
                fontSize: `${16 + (index % 5) * 6}px`,
                animationDelay: `${(index % 12) * 0.12}s`,
                animationDuration: `${4 + (index % 4)}s`,
              }}
            >
              {index % 3 === 0
                ? "❤️"
                : index % 3 === 1
                ? "💕"
                : "💗"}
            </span>
          ))}

        </div>
      )}

      {/* =========================================================
          SPARKLES
      ========================================================= */}

      {celebrate && (
        <div className="pointer-events-none fixed inset-0 z-30">

          {[...Array(45)].map((_, index) => (
            <span
              key={`spark-${index}`}
              className="absolute animate-sparkle-pop text-yellow-100"
              style={{
                left: `${(index * 23) % 100}%`,
                top: `${(index * 41) % 100}%`,
                animationDelay: `${(index % 15) * 0.1}s`,
              }}
            >
              ✨
            </span>
          ))}

        </div>
      )}

      {/* =========================================================
          FIREWORKS
      ========================================================= */}

      {celebrate && (
        <>
          <div className="firework firework-one" />
          <div className="firework firework-two" />
          <div className="firework firework-three" />
        </>
      )}

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <main className="relative z-20 flex min-h-screen items-center justify-center px-4 py-12">

        <div className="w-full max-w-4xl text-center">

          {/* SMALL LABEL */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/[0.06] px-4 py-2 text-xs tracking-[0.3em] text-pink-300 backdrop-blur-xl">
            ❤️ OUR STORY
          </div>

          {/* TITLE */}

          <h1 className="bg-gradient-to-r from-white via-pink-200 to-rose-400 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            The Next Chapter
          </h1>

          <div className="mx-auto mt-7 h-[1px] w-24 bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

          {/* STORY TEXT */}

          <div
            className={`mx-auto mt-10 max-w-2xl transition-all duration-1000 ${
              showFinalMessage
                ? "translate-y-[-20px] opacity-40"
                : "translate-y-0 opacity-100"
            }`}
          >

            <p className="text-lg leading-8 text-white/55 sm:text-xl sm:leading-9">
              We have already written so many beautiful chapters...
            </p>

            <p className="mt-4 text-lg leading-8 text-white/55 sm:text-xl sm:leading-9">
              Some were full of laughter.
              Some had fights.
              Some had tears.
              Some became memories we'll never forget.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/60 sm:text-xl">
              But somehow, through every page...
            </p>

            <p className="mt-3 font-serif text-2xl italic text-pink-200 sm:text-3xl">
              it was always you and me. ❤️
            </p>

            <div className="mx-auto my-8 h-[1px] w-16 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />

            <p className="text-xl text-white/65 sm:text-2xl">
              And our story isn't over.
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/30">
              This is only
            </p>

            <h2 className="mt-3 bg-gradient-to-r from-pink-200 via-rose-300 to-pink-400 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
              Chapter 2 ❤️
            </h2>

          </div>

          {/* =====================================================
              CONTINUE BUTTON
          ===================================================== */}

          {!showFinalMessage && (
            <button
              onClick={handleContinue}
              className="
                group
                relative
                mt-12
                overflow-hidden
                rounded-full
                border border-pink-400/30
                bg-pink-500/10
                px-8 py-4
                text-sm font-semibold
                tracking-wide
                text-pink-100
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:scale-105
                hover:border-pink-400/60
                hover:bg-pink-500/20
                hover:shadow-[0_0_45px_rgba(244,63,94,.35)]
                active:scale-95
              "
            >

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">
                Continue Our Story

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </span>

            </button>
          )}

          {/* =====================================================
              FINAL ANNIVERSARY MESSAGE
          ===================================================== */}

          {showFinalMessage && (
            <div className="animate-final-reveal mt-5">

              <div className="mx-auto max-w-3xl rounded-[30px] border border-pink-400/20 bg-white/[0.035] px-6 py-10 shadow-[0_25px_80px_rgba(244,63,94,.12)] backdrop-blur-xl sm:px-10 sm:py-12">

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-pink-300/60">
                  And one last thing...
                </p>

                <h2 className="text-3xl font-black leading-tight sm:text-5xl">
                  Happy Anniversary
                </h2>

                <p className="mt-5 bg-gradient-to-r from-pink-200 via-rose-300 to-pink-300 bg-clip-text text-2xl font-bold leading-relaxed text-transparent sm:text-3xl">
                  My Love,
                  <br />
                  My Girl,
                  <br />
                  Meri Hone Waali Patni Ji,
                  <br />
                  My Everything ❤️
                </p>

                <div className="mx-auto my-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

                <p className="font-serif text-xl italic leading-8 text-white/55 sm:text-2xl">
                  “No ending. No goodbye.
                  Just another chapter waiting for us.”
                </p>

                <div className="mt-8 text-5xl animate-big-heart">
                  ❤️
                </div>

                <p className="mt-5 text-xs tracking-[0.25em] text-white/25">
                  ANIRUDDH ❤️ ANJALI
                </p>

              </div>

            </div>
          )}

        </div>

      </main>

      {/* =========================================================
          CSS ANIMATIONS
      ========================================================= */}

      <style>
        {`

          /* STARS */

          @keyframes finalTwinkle {

            0%, 100% {
              opacity: .15;
              transform: scale(.7);
            }

            50% {
              opacity: 1;
              transform: scale(1.5);
            }

          }

          .animate-final-twinkle {
            animation:
              finalTwinkle
              3.2s
              ease-in-out
              infinite;
          }


          /* BACKGROUND HEARTS */

          @keyframes floatingHeartOne {

            0%, 100% {
              transform:
                translateY(0)
                rotate(-5deg);
            }

            50% {
              transform:
                translateY(-25px)
                rotate(6deg);
            }

          }

          .animate-floating-heart-one {
            animation:
              floatingHeartOne
              6s
              ease-in-out
              infinite;
          }


          @keyframes floatingHeartTwo {

            0%, 100% {
              transform:
                translateY(0)
                rotate(5deg);
            }

            50% {
              transform:
                translateY(20px)
                rotate(-6deg);
            }

          }

          .animate-floating-heart-two {
            animation:
              floatingHeartTwo
              8s
              ease-in-out
              infinite;
          }


          /* CELEBRATION HEARTS */

          @keyframes celebrationHeart {

            0% {
              transform:
                translateY(0)
                rotate(0deg)
                scale(.7);

              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            100% {
              transform:
                translateY(-115vh)
                rotate(360deg)
                scale(1.2);

              opacity: 0;
            }

          }

          .animate-celebration-heart {
            animation:
              celebrationHeart
              5s
              ease-out
              forwards;
          }


          /* SPARKLES */

          @keyframes sparklePop {

            0% {
              opacity: 0;
              transform:
                scale(0)
                rotate(0deg);
            }

            40% {
              opacity: 1;
              transform:
                scale(1.5)
                rotate(120deg);
            }

            100% {
              opacity: 0;
              transform:
                scale(.5)
                rotate(260deg);
            }

          }

          .animate-sparkle-pop {
            animation:
              sparklePop
              2s
              ease-out
              infinite;
          }


          /* FINAL MESSAGE */

          @keyframes finalReveal {

            0% {
              opacity: 0;
              transform:
                translateY(50px)
                scale(.92);
            }

            100% {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }

          }

          .animate-final-reveal {
            animation:
              finalReveal
              1.2s
              cubic-bezier(.22,.8,.25,1)
              forwards;
          }


          /* BIG HEART */

          @keyframes bigHeart {

            0%, 100% {
              transform: scale(1);
            }

            20% {
              transform: scale(1.18);
            }

            40% {
              transform: scale(1);
            }

            60% {
              transform: scale(1.12);
            }

            80% {
              transform: scale(1);
            }

          }

          .animate-big-heart {
            animation:
              bigHeart
              1.8s
              ease-in-out
              infinite;
          }


          /* FIREWORKS */

          .firework {
            position: fixed;

            width: 8px;
            height: 8px;

            border-radius: 50%;

            z-index: 35;

            pointer-events: none;

            background: #fb7185;

            box-shadow:
              0 -45px #fb7185,
              32px -32px #fda4af,
              45px 0 #f9a8d4,
              32px 32px #fb7185,
              0 45px #fda4af,
              -32px 32px #f9a8d4,
              -45px 0 #fb7185,
              -32px -32px #fda4af;

            animation:
              fireworkExplosion
              1.8s
              ease-out
              infinite;
          }


          .firework-one {
            left: 20%;
            top: 30%;
          }


          .firework-two {
            right: 20%;
            top: 25%;

            animation-delay: .6s;
          }


          .firework-three {
            left: 50%;
            top: 18%;

            animation-delay: 1.1s;
          }


          @keyframes fireworkExplosion {

            0% {
              opacity: 0;
              transform: scale(.1);
            }

            25% {
              opacity: 1;
            }

            100% {
              opacity: 0;
              transform: scale(2.3);
            }

          }

        `}
      </style>

    </div>
  );
}