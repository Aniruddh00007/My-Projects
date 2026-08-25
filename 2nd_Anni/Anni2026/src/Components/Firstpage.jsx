
import React from "react";

function FirstPage({ onContinue }) {
  return (
    <div className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-[#fff5f8] via-[#ffe8ef] to-[#ffd6e3]">

      {/* ================= BACKGROUND ================= */}

      {/* Soft Glow - Top Left */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />

      {/* Soft Glow - Bottom Right */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/30 rounded-full blur-3xl" />

      {/* Floating Hearts */}

      <span className="absolute top-[12%] left-[8%] text-3xl sm:text-4xl opacity-50 animate-bounce">
        ❤️
      </span>

      <span className="absolute top-[20%] right-[10%] text-2xl sm:text-3xl opacity-40 animate-pulse">
        💕
      </span>

      <span className="absolute bottom-[20%] left-[12%] text-2xl opacity-40 animate-pulse">
        💗
      </span>

      <span className="absolute bottom-[15%] right-[13%] text-3xl opacity-50 animate-bounce">
        💖
      </span>

      <span className="absolute top-[45%] left-[4%] text-xl opacity-30">
        ✨
      </span>

      <span className="absolute top-[38%] right-[5%] text-xl opacity-30">
        ✨
      </span>


      {/* ================= MAIN CONTENT ================= */}

      <main className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col items-center justify-center px-5 py-10">

        {/* Small Top Label */}

        <div className="flex items-center gap-3 mb-7 animate-[fadeDown_1s_ease]">

          <div className="h-px w-10 sm:w-16 bg-pink-400/60" />

          <p className="text-[10px] sm:text-xs font-bold tracking-[4px] uppercase text-pink-600">
            Our Story • Our Love • Our World
          </p>

          <div className="h-px w-10 sm:w-16 bg-pink-400/60" />

        </div>


        {/* ================= HEART ================= */}

        <div className="relative">

          {/* Glow behind heart */}
          <div className="absolute inset-0 bg-pink-400/20 blur-2xl rounded-full scale-150" />

          <div className="relative text-6xl sm:text-7xl md:text-8xl animate-[heartbeat_1.6s_ease-in-out_infinite]">
            ❤️
          </div>

        </div>


        {/* ================= ANNIVERSARY TITLE ================= */}

        <div className="text-center mt-7 animate-[fadeUp_1s_ease]">

          <p className="text-sm sm:text-base tracking-[3px] uppercase text-pink-600 font-medium">
            Happy Anniversary
          </p>

          <h1
            className="
              mt-3
              font-serif
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-[1]
              font-semibold
              text-[#45232f]
            "
          >
            My Love
            <span className="text-pink-600">.</span>
          </h1>

          {/* Decorative Hearts */}

          <div className="flex justify-center items-center gap-3 mt-5 text-pink-500">
            <span>♡</span>
            <span className="text-lg">♥</span>
            <span>♡</span>
          </div>

        </div>


        {/* ================= MESSAGE ================= */}

        <div className="text-center max-w-2xl mt-7 sm:mt-9 animate-[fadeUp_1.2s_ease]">

          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#603b48]">
            "Another year of us..."
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-[#765763]">
            Another year of laughter,
            <span className="text-pink-600 font-medium"> love, </span>
            memories
            <br className="hidden sm:block" />
            and moments that became
            <span className="text-pink-600 font-medium"> ours. ❤️</span>
          </p>

        </div>


        {/* ================= CHALLENGE ================= */}

        <div
          className="
            mt-8 sm:mt-10
            w-full max-w-xl
            text-center
            animate-[fadeUp_1.4s_ease]
          "
        >

          <div className="flex items-center justify-center gap-3">

            <span className="text-xl">🧠</span>

            <h2 className="text-base sm:text-lg font-semibold text-[#55323f]">
              But before you enter...
            </h2>

          </div>

          <p className="mt-3 text-sm sm:text-base text-[#765763] leading-7">
            I have a little challenge for you.
            <br className="sm:hidden" />
            <span className="text-pink-600 font-semibold">
              {" "}Do you remember our story?
            </span>
          </p>

        </div>


        {/* ================= MEMORY PREVIEW ================= */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-3
            sm:gap-5
            animate-[fadeUp_1.6s_ease]
          "
        >

          {/* Memory 1 */}

          <div className="flex flex-col items-center">

            <div
              className="
                w-12 h-12
                sm:w-14 sm:h-14
                rounded-full
                bg-white/70
                backdrop-blur
                border border-white
                shadow-md
                flex items-center justify-center
                text-xl sm:text-2xl
              "
            >
              💍
            </div>

            <span className="mt-2 text-[10px] sm:text-xs text-[#765763]">
              Proposal
            </span>

          </div>


          {/* Line */}

          <div className="w-7 sm:w-12 h-px bg-pink-300" />


          {/* Memory 2 */}

          <div className="flex flex-col items-center">

            <div
              className="
                w-12 h-12
                sm:w-14 sm:h-14
                rounded-full
                bg-white/70
                backdrop-blur
                border border-white
                shadow-md
                flex items-center justify-center
                text-xl sm:text-2xl
              "
            >
              💋
            </div>

            <span className="mt-2 text-[10px] sm:text-xs text-[#765763]">
              First Kiss
            </span>

          </div>


          {/* Line */}

          <div className="w-7 sm:w-12 h-px bg-pink-300" />


          {/* Memory 3 */}

          <div className="flex flex-col items-center">

            <div
              className="
                w-12 h-12
                sm:w-14 sm:h-14
                rounded-full
                bg-white/70
                backdrop-blur
                border border-white
                shadow-md
                flex items-center justify-center
                text-xl sm:text-2xl
              "
            >
              🫂
            </div>

            <span className="mt-2 text-[10px] sm:text-xs text-[#765763]">
              First Hug
            </span>

          </div>

        </div>


        {/* ================= CTA ================= */}

        <div className="mt-8 sm:mt-10 text-center animate-[fadeUp_1.8s_ease]">

          <button
            onClick={onContinue}
            className="
              group
              relative
              px-8
              sm:px-12
              py-4
              sm:py-[18px]
              rounded-full
              bg-gradient-to-r
              from-pink-600
              via-rose-600
              to-pink-600
              bg-[length:200%_100%]
              hover:bg-right
              text-white
              font-semibold
              text-sm
              sm:text-base
              shadow-xl
              shadow-pink-300/50
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-2xl
              hover:shadow-pink-400/50
              active:scale-95
            "
          >

            <span className="flex items-center gap-3">
              Let's Begin Our Story
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

          </button>

          <p className="mt-4 text-[10px] sm:text-xs text-[#a17a88]">
            But first... prove you remember us ❤️
          </p>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="absolute bottom-5 left-0 right-0 text-center">

          <p className="text-[9px] sm:text-[10px] tracking-[2px] uppercase text-pink-400/80">
            Made with Love • For My Favorite Person
          </p>

        </div>

      </main>


      {/* ================= ANIMATIONS ================= */}

      <style>
        {`

          @keyframes heartbeat {

            0%, 100% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.13);
            }

          }

          @keyframes fadeUp {

            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }

          @keyframes fadeDown {

            from {
              opacity: 0;
              transform: translateY(-20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }

        `}
      </style>

    </div>
  );
}

export default FirstPage;

