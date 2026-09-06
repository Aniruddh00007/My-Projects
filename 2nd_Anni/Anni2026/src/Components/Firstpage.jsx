import React from "react";

function FirstPage({ onContinue }) {
  return (
    <div className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-[#050208] via-[#0c0610] to-[#140717]">

      {/* ================= BACKGROUND ================= */}

      {/* Dark Pink Glow - Top Left */}
      <div className="absolute -top-36 -left-36 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl" />

      {/* Purple / Rose Glow - Bottom Right */}
      <div className="absolute -bottom-40 -right-36 w-[430px] h-[430px] bg-fuchsia-700/15 rounded-full blur-3xl" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-pink-500/5 rounded-full blur-3xl" />

      {/* Extra Ambient Glows */}
      <div className="absolute top-[15%] right-[25%] w-52 h-52 bg-purple-700/10 rounded-full blur-3xl" />

      <div className="absolute bottom-[18%] left-[22%] w-44 h-44 bg-rose-600/10 rounded-full blur-3xl" />

      {/* ================= FLOATING HEARTS ================= */}

      <span className="absolute top-[12%] left-[8%] text-3xl sm:text-4xl opacity-40 animate-[floatHeart_5s_ease-in-out_infinite] drop-shadow-[0_0_12px_rgba(236,72,153,0.45)]">
        ❤️
      </span>

      <span className="absolute top-[20%] right-[10%] text-2xl sm:text-3xl opacity-30 animate-[floatHeartReverse_6s_ease-in-out_infinite] drop-shadow-[0_0_12px_rgba(244,114,182,0.4)]">
        💕
      </span>

      <span className="absolute bottom-[20%] left-[12%] text-2xl opacity-30 animate-[floatHeart_7s_ease-in-out_infinite] drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]">
        💗
      </span>

      <span className="absolute bottom-[15%] right-[13%] text-3xl opacity-40 animate-[floatHeartReverse_5.5s_ease-in-out_infinite] drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]">
        💖
      </span>

      <span className="absolute top-[45%] left-[4%] text-xl opacity-20 animate-pulse">
        ✨
      </span>

      <span className="absolute top-[38%] right-[5%] text-xl opacity-20 animate-pulse">
        ✨
      </span>

      {/* Tiny Decorative Dots */}

      <span className="absolute top-[30%] left-[20%] w-1 h-1 rounded-full bg-pink-400/50 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />

      <span className="absolute top-[65%] right-[22%] w-1 h-1 rounded-full bg-fuchsia-400/50 shadow-[0_0_10px_rgba(232,121,249,0.8)]" />

      <span className="absolute bottom-[30%] left-[28%] w-1 h-1 rounded-full bg-rose-400/50 shadow-[0_0_10px_rgba(251,113,133,0.8)]" />


      {/* ================= MAIN CONTENT ================= */}

      <main className="relative z-10 min-h-screen min-h-[100dvh] flex flex-col items-center justify-center px-5 py-10">

        {/* Small Top Label */}

        <div className="flex items-center gap-3 mb-7 animate-[fadeDown_1s_ease]">

          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-pink-500/70" />

          <p className="text-[10px] sm:text-xs font-bold tracking-[4px] uppercase text-pink-500">
            Our Story • Our Love • Our World
          </p>

          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-pink-500/70" />

        </div>


        {/* ================= HEART ================= */}

        <div className="relative">

          {/* Glow behind heart */}

          <div className="absolute inset-0 bg-pink-600/30 blur-3xl rounded-full scale-[1.8]" />

          <div className="absolute inset-0 bg-fuchsia-600/20 blur-2xl rounded-full scale-[1.4]" />

          <div
            className="
              relative
              text-6xl
              sm:text-7xl
              md:text-8xl
              animate-[heartbeat_1.6s_ease-in-out_infinite]
              drop-shadow-[0_0_25px_rgba(236,72,153,0.45)]
            "
          >
            ❤️
          </div>

        </div>


        {/* ================= ANNIVERSARY TITLE ================= */}

        <div className="text-center mt-7 animate-[fadeUp_1s_ease]">

          <p className="text-sm sm:text-base tracking-[3px] uppercase text-pink-500 font-medium">
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
              text-[#fff5f8]
              drop-shadow-[0_4px_25px_rgba(236,72,153,0.08)]
            "
          >
            My Love
            <span className="text-pink-500 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]">
              .
            </span>
          </h1>

          {/* Decorative Hearts */}

          <div className="flex justify-center items-center gap-3 mt-5 text-pink-500">
            <span className="opacity-80">♡</span>

            <span className="text-lg drop-shadow-[0_0_8px_rgba(236,72,153,0.55)]">
              ♥
            </span>

            <span className="opacity-80">♡</span>
          </div>

        </div>


        {/* ================= MESSAGE ================= */}

        <div className="text-center max-w-2xl mt-7 sm:mt-9 animate-[fadeUp_1.2s_ease]">

          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#f3dce5]">
            "Another year of us..."
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-[#ad9ba7]">
            Another year of laughter,
            <span className="text-pink-500 font-medium">
              {" "}love,{" "}
            </span>
            memories
            <br className="hidden sm:block" />
            and moments that became
            <span className="text-pink-500 font-medium">
              {" "}ours. ❤️
            </span>
          </p>

        </div>


        {/* ================= CHALLENGE ================= */}

        <div
          className="
            mt-8
            sm:mt-10
            w-full
            max-w-xl
            text-center
            animate-[fadeUp_1.4s_ease]
          "
        >

          <div className="flex items-center justify-center gap-3">

            <span className="text-xl drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]">
              🧠
            </span>

            <h2 className="text-base sm:text-lg font-semibold text-[#f5edf2]">
              But before you enter...
            </h2>

          </div>

          <p className="mt-3 text-sm sm:text-base text-[#a996a3] leading-7">
            I have a little challenge for you.
            <br className="sm:hidden" />

            <span className="text-pink-500 font-semibold">
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
                group
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-full
                bg-[#171019]/85
                backdrop-blur-xl
                border
                border-pink-500/20
                shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                flex
                items-center
                justify-center
                text-xl
                sm:text-2xl
                transition-all
                duration-300
                hover:border-pink-500/60
                hover:bg-[#211220]
                hover:shadow-[0_0_24px_rgba(236,72,153,0.22)]
                hover:-translate-y-1
              "
            >
              💍
            </div>

            <span className="mt-2 text-[10px] sm:text-xs text-[#9e8996]">
              Proposal
            </span>

          </div>


          {/* Line */}

          <div className="w-7 sm:w-12 h-px bg-gradient-to-r from-pink-500/30 via-pink-500/70 to-pink-500/30" />


          {/* Memory 2 */}

          <div className="flex flex-col items-center">

            <div
              className="
                group
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-full
                bg-[#171019]/85
                backdrop-blur-xl
                border
                border-pink-500/20
                shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                flex
                items-center
                justify-center
                text-xl
                sm:text-2xl
                transition-all
                duration-300
                hover:border-pink-500/60
                hover:bg-[#211220]
                hover:shadow-[0_0_24px_rgba(236,72,153,0.22)]
                hover:-translate-y-1
              "
            >
              💋
            </div>

            <span className="mt-2 text-[10px] sm:text-xs text-[#9e8996]">
              First Kiss
            </span>

          </div>


          {/* Line */}

          <div className="w-7 sm:w-12 h-px bg-gradient-to-r from-pink-500/30 via-pink-500/70 to-pink-500/30" />


          {/* Memory 3 */}

          <div className="flex flex-col items-center">

            <div
              className="
                group
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-full
                bg-[#171019]/85
                backdrop-blur-xl
                border
                border-pink-500/20
                shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                flex
                items-center
                justify-center
                text-xl
                sm:text-2xl
                transition-all
                duration-300
                hover:border-pink-500/60
                hover:bg-[#211220]
                hover:shadow-[0_0_24px_rgba(236,72,153,0.22)]
                hover:-translate-y-1
              "
            >
              🫂
            </div>

            <span className="mt-2 text-[10px] sm:text-xs text-[#9e8996]">
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
              overflow-hidden
              px-8
              sm:px-12
              py-4
              sm:py-[18px]
              rounded-full
              bg-gradient-to-r
              from-[#db2777]
              via-[#e11d74]
              to-[#be185d]
              bg-[length:200%_100%]
              hover:bg-right
              text-white
              font-semibold
              text-sm
              sm:text-base
              border
              border-pink-300/10
              shadow-[0_12px_35px_rgba(219,39,119,0.28)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_16px_45px_rgba(236,72,153,0.38)]
              active:scale-95
            "
          >

            {/* Button Glow */}

            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
                -translate-x-full
                group-hover:translate-x-full
                transition-transform
                duration-700
              "
            />

            <span className="relative flex items-center gap-3">

              Let's Begin Our Story

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </span>

          </button>

          <p className="mt-4 text-[10px] sm:text-xs text-[#806c79]">
            But first... prove you remember us ❤️
          </p>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="absolute bottom-5 left-0 right-0 text-center">

          <p className="text-[9px] sm:text-[10px] tracking-[2px] uppercase text-pink-500/60">
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

            14% {
              transform: scale(1.08);
            }

            28% {
              transform: scale(1);
            }

            42% {
              transform: scale(1.13);
            }

            70% {
              transform: scale(1);
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


          @keyframes floatHeart {

            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }

            50% {
              transform: translateY(-14px) rotate(4deg);
            }

          }


          @keyframes floatHeartReverse {

            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }

            50% {
              transform: translateY(14px) rotate(-4deg);
            }

          }

        `}
      </style>

    </div>
  );
}

export default FirstPage;