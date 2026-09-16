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
    <div className="relative min-h-screen overflow-hidden bg-[#050205] text-white">

      {/* =========================================================
          DEEP ROMANTIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-[#080308] via-[#050205] to-black" />

        <div className="absolute -left-52 -top-52 h-[650px] w-[650px] rounded-full bg-rose-700/[0.13] blur-[170px]" />

        <div className="absolute -bottom-52 -right-52 h-[650px] w-[650px] rounded-full bg-pink-700/[0.11] blur-[170px]" />

        <div className="absolute left-1/2 top-[42%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-800/[0.06] blur-[190px]" />

        <div className="absolute left-1/2 top-[35%] h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-rose-400/[0.035] blur-[120px]" />

      </div>


      {/* =========================================================
          STARRY LOVE UNIVERSE
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        {[...Array(75)].map((_, index) => (
          <span
            key={`star-${index}`}
            className="absolute rounded-full bg-white animate-final-twinkle"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
              width: `${index % 7 === 0 ? 2 : 1}px`,
              height: `${index % 7 === 0 ? 2 : 1}px`,
              opacity: 0.15 + (index % 5) * 0.08,
              animationDelay: `${(index % 12) * 0.25}s`,
            }}
          />
        ))}

      </div>


      {/* =========================================================
          AMBIENT HEARTS
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <span className="absolute left-[7%] top-[17%] animate-floating-heart-one text-xl opacity-15">
          ♡
        </span>

        <span className="absolute right-[8%] top-[25%] animate-floating-heart-two text-2xl text-pink-200 opacity-10">
          ♡
        </span>

        <span className="absolute left-[13%] top-[67%] animate-floating-heart-two text-lg text-rose-200 opacity-10">
          ♥
        </span>

        <span className="absolute right-[14%] top-[70%] animate-floating-heart-one text-xl opacity-10">
          ♡
        </span>

        <span className="absolute left-[24%] top-[10%] animate-floating-heart-two text-xs opacity-10">
          ♥
        </span>

        <span className="absolute right-[25%] bottom-[8%] animate-floating-heart-one text-sm opacity-10">
          ♡
        </span>

      </div>


      {/* =========================================================
          CELEBRATION REVEAL
      ========================================================= */}

      {celebrate && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">

          {[...Array(42)].map((_, index) => (
            <span
              key={`celebration-${index}`}
              className="absolute bottom-[-60px] animate-celebration-heart"
              style={{
                left: `${(index * 17) % 100}%`,
                fontSize: `${13 + (index % 5) * 5}px`,
                animationDelay: `${(index % 14) * 0.1}s`,
                animationDuration: `${4.5 + (index % 4)}s`,
                opacity: 0.5 + (index % 4) * 0.1,
              }}
            >
              {index % 5 === 0
                ? "❤️"
                : index % 5 === 1
                ? "💕"
                : index % 5 === 2
                ? "🌹"
                : index % 5 === 3
                ? "💗"
                : "✨"}
            </span>
          ))}

        </div>
      )}


      {/* =========================================================
          SPARKLES
      ========================================================= */}

      {celebrate && (
        <div className="pointer-events-none fixed inset-0 z-40">

          {[...Array(35)].map((_, index) => (
            <span
              key={`spark-${index}`}
              className="absolute animate-sparkle-pop text-pink-100"
              style={{
                left: `${(index * 23) % 100}%`,
                top: `${(index * 41) % 100}%`,
                animationDelay: `${(index % 15) * 0.1}s`,
                fontSize: `${9 + (index % 3) * 4}px`,
              }}
            >
              ✦
            </span>
          ))}

        </div>
      )}


      {/* =========================================================
          BEFORE FINAL REVEAL
      ========================================================= */}

      {!showFinalMessage && (
        <main className="relative z-20 flex min-h-screen items-center justify-center px-4 py-16">

          <div className="w-full max-w-4xl text-center">

            {/* Label */}

            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border border-rose-300/[0.15]
                bg-white/[0.035]
                px-5 py-2.5
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-rose-200/70
                shadow-[0_0_35px_rgba(244,63,94,0.08)]
                backdrop-blur-xl
                sm:text-xs
              "
            >
              <span className="animate-pulse text-rose-400">
                ♥
              </span>

              Our Story
            </div>


            {/* Main heading */}

            <p
              className="
                font-['Great_Vibes']
                text-2xl
                text-rose-200/50
                sm:text-3xl
              "
            >
              every love story has another page...
            </p>

            <h1
              className="
                mt-3
                bg-gradient-to-r
                from-white
                via-rose-100
                to-pink-300
                bg-clip-text
                text-5xl
                font-black
                tracking-tight
                text-transparent
                drop-shadow-[0_0_25px_rgba(251,207,232,0.12)]
                sm:text-6xl
                lg:text-7xl
              "
            >
              The Next Chapter
            </h1>


            {/* Ornament */}

            <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">

              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-300/35" />

              <span className="text-rose-300/50">
                ♡
              </span>

              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-300/35" />

            </div>


            {/* Story */}

            <div
              className="
                mx-auto
                mt-10
                max-w-2xl
                rounded-[32px]
                border border-white/[0.06]
                bg-white/[0.025]
                px-6 py-9
                shadow-[0_25px_90px_rgba(190,24,93,0.08)]
                backdrop-blur-xl
                sm:px-10 sm:py-11
              "
            >

              <p className="font-['Playfair_Display'] text-lg leading-8 text-white/55 sm:text-xl sm:leading-9">
                We have already written so many beautiful chapters...
              </p>

              <p className="mt-5 font-['Playfair_Display'] text-lg leading-8 text-white/45 sm:text-xl sm:leading-9">
                Some were full of laughter.
                <br />
                Some had fights.
                <br />
                Some had tears.
                <br />
                Some became memories we'll never forget.
              </p>


              <div className="mx-auto my-7 flex max-w-[180px] items-center gap-3">

                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-300/25" />

                <span className="text-xs text-rose-300/40">
                  ♥
                </span>

                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-300/25" />

              </div>


              <p className="font-['Playfair_Display'] text-lg text-white/55 sm:text-xl">
                But somehow, through every page...
              </p>

              <p
                className="
                  mt-3
                  font-['Great_Vibes']
                  text-4xl
                  text-rose-100
                  drop-shadow-[0_0_18px_rgba(251,113,133,0.16)]
                  sm:text-5xl
                "
              >
                it was always you and me. ❤️
              </p>

            </div>


            {/* Chapter */}

            <div className="mt-10">

              <p className="font-['Playfair_Display'] text-lg italic text-white/45 sm:text-xl">
                And our story isn't over.
              </p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.45em] text-white/25">
                This is only
              </p>

              <h2
                className="
                  mt-3
                  font-['Great_Vibes']
                  text-5xl
                  text-rose-200
                  drop-shadow-[0_0_22px_rgba(244,63,94,0.20)]
                  sm:text-6xl
                "
              >
                Chapter 2 ❤️
              </h2>

            </div>


            {/* Continue button */}

            <button
              onClick={handleContinue}
              className="
                group
                relative
                mt-11
                overflow-hidden
                rounded-full
                border border-rose-300/25
                bg-gradient-to-r
                from-rose-500/[0.10]
                via-pink-500/[0.15]
                to-rose-500/[0.10]
                px-8 py-4
                text-sm
                font-medium
                tracking-wide
                text-rose-50
                shadow-[0_0_35px_rgba(244,63,94,0.10)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:scale-105
                hover:border-rose-200/40
                hover:shadow-[0_0_55px_rgba(244,63,94,0.25)]
                active:scale-95
              "
            >

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">

                Continue Our Story

                <span className="text-rose-300 transition-all duration-500 group-hover:translate-x-2">
                  →
                </span>

              </span>

            </button>


            <p className="mt-5 font-['Great_Vibes'] text-xl text-rose-200/25">
              there's something waiting for you...
            </p>

          </div>

        </main>
      )}


      {/* =========================================================
          FINAL ANNIVERSARY REVEAL
      ========================================================= */}

      {showFinalMessage && (
        <main className="animate-final-reveal relative z-20 flex min-h-screen items-center justify-center px-4 py-12 sm:py-16">

          <div className="relative w-full max-w-5xl">


            {/* Giant glow behind card */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/[0.10] blur-[130px]" />


            {/* Main card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[42px]
                border border-rose-200/[0.13]
                bg-gradient-to-b
                from-white/[0.065]
                via-rose-950/[0.035]
                to-white/[0.02]
                px-5 py-12
                text-center
                shadow-[0_35px_120px_rgba(190,24,93,0.17)]
                backdrop-blur-2xl
                sm:px-10 sm:py-16
                md:px-14
              "
            >

              {/* Card inner light */}

              <div className="pointer-events-none absolute inset-x-[15%] top-0 h-[1px] bg-gradient-to-r from-transparent via-rose-100/40 to-transparent" />

              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-500/[0.08] blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-500/[0.08] blur-[100px]" />


              {/* Decorative hearts */}

              <span className="absolute left-[6%] top-[11%] animate-pulse text-2xl text-rose-200/15">
                ♡
              </span>

              <span className="absolute right-[7%] top-[18%] animate-pulse text-lg text-pink-200/15">
                ♥
              </span>

              <span className="absolute bottom-[15%] left-[9%] animate-pulse text-lg text-pink-200/10">
                ♡
              </span>

              <span className="absolute bottom-[25%] right-[8%] animate-pulse text-2xl text-rose-200/10">
                ♡
              </span>


              {/* One last thing */}

              <div className="relative z-10 flex items-center justify-center gap-4">

                <span className="h-px w-8 bg-gradient-to-r from-transparent to-rose-200/30 sm:w-16" />

                <p className="text-[9px] uppercase tracking-[0.48em] text-rose-100/40 sm:text-[10px]">
                  And one last thing...
                </p>

                <span className="h-px w-8 bg-gradient-to-l from-transparent to-rose-200/30 sm:w-16" />

              </div>


              {/* Main heading */}

              <div className="relative z-10 mt-7">

                <p className="text-lg tracking-[0.4em] text-rose-300/45">
                  𓆩 ♡ 𓆪
                </p>

                <div className="relative mt-3">

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/[0.08] blur-[45px]" />

                  <h1
                    className="
                      relative
                      font-['Great_Vibes']
                      text-5xl
                      font-normal
                      leading-[1.25]
                      text-rose-50
                      drop-shadow-[0_0_30px_rgba(251,207,232,0.28)]
                      sm:text-7xl
                      md:text-8xl
                      lg:text-[92px]
                    "
                  >
                    Happy Anniversary
                  </h1>

                </div>

                <p className="mt-1 text-lg tracking-[0.4em] text-rose-300/45">
                  𓆩 ♡ 𓆪
                </p>

              </div>


              {/* Main divider */}

              <div className="relative z-10 mx-auto my-9 flex max-w-md items-center gap-4">

                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-300/35" />

                <span className="animate-pulse text-lg text-rose-300/60">
                  ♥
                </span>

                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-300/35" />

              </div>


              {/* Love titles */}

              <div className="relative z-10 mx-auto max-w-2xl space-y-6">

                <p
                  className="
                    font-['Playfair_Display']
                    text-2xl
                    italic
                    tracking-wide
                    text-rose-100/85
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:text-white
                    sm:text-3xl
                  "
                >
                  My Love
                  <span className="ml-3 not-italic">❤️</span>
                </p>


                <p
                  className="
                    font-['Playfair_Display']
                    text-2xl
                    italic
                    tracking-wide
                    text-rose-100/85
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:text-white
                    sm:text-3xl
                  "
                >
                  My Girl
                  <span className="ml-3 not-italic">🌹</span>
                </p>


                {/* Wife line */}

                <div
                  className="
                    group
                    relative
                    mx-auto
                    max-w-2xl
                    overflow-hidden
                    rounded-[30px]
                    border border-rose-300/[0.10]
                    bg-gradient-to-r
                    from-transparent
                    via-rose-400/[0.055]
                    to-transparent
                    px-4 py-5
                    transition-all
                    duration-700
                    hover:border-rose-200/20
                    hover:shadow-[0_0_50px_rgba(244,63,94,0.10)]
                  "
                >

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/[0.08] blur-[35px]" />

                  <p
                    className="
                      relative
                      font-['Great_Vibes']
                      text-4xl
                      leading-relaxed
                      text-rose-100
                      drop-shadow-[0_0_20px_rgba(251,113,133,0.22)]
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                      sm:text-5xl
                      md:text-[56px]
                    "
                  >
                    Meri Hone Waali Patni Ji

                    <span className="ml-3 text-3xl">
                      💍❤️
                    </span>

                  </p>

                </div>


                <p
                  className="
                    font-['Playfair_Display']
                    text-2xl
                    italic
                    tracking-wide
                    text-rose-100/85
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:text-white
                    sm:text-3xl
                  "
                >
                  My Everything

                  <span className="ml-3 not-italic">
                    ♾️❤️
                  </span>

                </p>

              </div>


              {/* Tiny divider */}

              <div className="relative z-10 mx-auto my-10 flex max-w-[280px] items-center gap-4">

                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-300/25" />

                <span className="text-rose-300/45">
                  ♡
                </span>

                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-300/25" />

              </div>


              {/* Emotional quote */}

              <div className="relative z-10 mx-auto max-w-xl">

                <p className="font-['Great_Vibes'] text-6xl leading-none text-rose-200/20">
                  “
                </p>

                <p
                  className="
                    -mt-4
                    font-['Playfair_Display']
                    text-lg
                    italic
                    leading-9
                    text-white/50
                    sm:text-xl
                    md:text-[21px]
                  "
                >
                  No ending. No goodbye.

                  <br />

                  <span className="text-rose-100/80">
                    Just another chapter waiting for us.
                  </span>

                </p>

              </div>


              {/* Heartbeat */}

              <div className="relative z-10 mx-auto mt-10 flex h-28 w-28 items-center justify-center">

                <div className="absolute h-28 w-28 rounded-full bg-rose-500/[0.10] blur-2xl" />

                <div className="absolute h-16 w-16 animate-ping rounded-full border border-rose-300/20 bg-rose-400/[0.04]" />

                <div className="absolute h-20 w-20 animate-pulse rounded-full bg-pink-500/[0.06] blur-xl" />

                <div
                  className="
                    animate-big-heart
                    relative
                    text-6xl
                    drop-shadow-[0_0_35px_rgba(244,63,94,0.65)]
                  "
                >
                  ❤️
                </div>

              </div>


              {/* Names */}

              <div className="relative z-10 mt-6 flex items-center justify-center gap-4">

                <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/15 sm:w-16" />

                <p className="text-[10px] tracking-[0.32em] text-white/30 sm:text-xs">
                  ANIRUDDH

                  <span className="mx-2 tracking-normal text-rose-400">
                    ♥
                  </span>

                  ANJALI
                </p>

                <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/15 sm:w-16" />

              </div>


              {/* Final whisper */}

              <p
                className="
                  relative z-10
                  mt-7
                  font-['Great_Vibes']
                  text-2xl
                  text-rose-100/40
                  sm:text-3xl
                "
              >
                forever, in every lifetime ♡
              </p>

            </div>

          </div>

        </main>
      )}


      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style>
        {`

          @keyframes finalTwinkle {

            0%, 100% {
              opacity: .12;
              transform: scale(.7);
            }

            50% {
              opacity: .8;
              transform: scale(1.5);
            }

          }

          .animate-final-twinkle {
            animation: finalTwinkle 3.5s ease-in-out infinite;
          }


          @keyframes floatingHeartOne {

            0%, 100% {
              transform: translateY(0) rotate(-6deg);
            }

            50% {
              transform: translateY(-28px) rotate(7deg);
            }

          }

          .animate-floating-heart-one {
            animation: floatingHeartOne 7s ease-in-out infinite;
          }


          @keyframes floatingHeartTwo {

            0%, 100% {
              transform: translateY(0) rotate(6deg);
            }

            50% {
              transform: translateY(24px) rotate(-7deg);
            }

          }

          .animate-floating-heart-two {
            animation: floatingHeartTwo 9s ease-in-out infinite;
          }


          @keyframes celebrationHeart {

            0% {
              transform: translateY(0) rotate(0deg) scale(.7);
              opacity: 0;
            }

            12% {
              opacity: 1;
            }

            100% {
              transform: translateY(-115vh) rotate(280deg) scale(1.1);
              opacity: 0;
            }

          }

          .animate-celebration-heart {
            animation: celebrationHeart 5s ease-out forwards;
          }


          @keyframes sparklePop {

            0% {
              opacity: 0;
              transform: scale(0) rotate(0deg);
            }

            40% {
              opacity: .8;
              transform: scale(1.4) rotate(120deg);
            }

            100% {
              opacity: 0;
              transform: scale(.5) rotate(240deg);
            }

          }

          .animate-sparkle-pop {
            animation: sparklePop 2s ease-out infinite;
          }


          @keyframes finalReveal {

            0% {
              opacity: 0;
              transform: translateY(35px) scale(.96);
              filter: blur(7px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }

          }

          .animate-final-reveal {
            animation:
              finalReveal
              1.5s
              cubic-bezier(.22,.8,.25,1)
              forwards;
          }


          @keyframes bigHeart {

            0%, 100% {
              transform: scale(1);
            }

            12% {
              transform: scale(1.18);
            }

            24% {
              transform: scale(1);
            }

            36% {
              transform: scale(1.12);
            }

            50% {
              transform: scale(1);
            }

          }

          .animate-big-heart {
            animation:
              bigHeart
              2.1s
              ease-in-out
              infinite;
          }

        `}
      </style>

    </div>
  );
}