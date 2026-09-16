import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    proposal: "",
    kiss: "",
    hug: "",
  });

  const [error, setError] = useState("");

  const correctAnswers = {
    proposal: "26 October 2024",
    kiss: "13 November 2024",
    hug: "14 November 2024",
  };

  const questions = [
    {
      id: "proposal",
      title: "Our First Proposal",
      question: "Do you remember when you proposed to me?",
      description:
        "That moment when our story became something more than just a beautiful memory.",
      image: "/photos/purpose.jpg",
      options: [
        "15 October 2024",
        "26 October 2024",
        "30 October 2024",
        "25 October 2024",
      ],
    },

    {
      id: "kiss",
      title: "Our First Kiss",
      question: "Do you remember when we had our first kiss?",
      description:
        "A little moment that somehow became one of the most unforgettable memories of us.",
      image:
        "/photos/kiss.jpg",
      options: [
        "13 November 2024",
        "16 November 2024",
        "14 November 2024",
        "25 October 2024",
      ],
    },

    {
      id: "hug",
      title: "Our First Hug",
      question: "Do you remember our first hug?",
      description:
        "The first time we held each other close and everything around us somehow disappeared.",
      image: "/photos/1sthug.jpg",
      options: [
        "14 November 2024",
        "19 November 2024",
        "04 November 2024",
        "18 November 2024",
      ],
    },
  ];

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));

    setError("");
  };

  const handleSubmit = () => {
    const allAnswered =
      answers.proposal &&
      answers.kiss &&
      answers.hug;

    if (!allAnswered) {
      setError("Answer all three memories first ❤️");
      return;
    }

    const allCorrect =
      answers.proposal === correctAnswers.proposal &&
      answers.kiss === correctAnswers.kiss &&
      answers.hug === correctAnswers.hug;

    if (allCorrect) {
      setError("");
      navigate("/home");
    } else {
      setError(
        "Hmm... one of your memories seems a little confused 😜 Try again!"
      );
    }
  };

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-b
        from-[#050208]
        via-[#0b0510]
        to-[#120617]
        text-[#d7cbd3]
      "
    >
      {/* =========================================================
          ROMANTIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0">
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-pink-600/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-44
            -right-44
            h-[500px]
            w-[500px]
            rounded-full
            bg-fuchsia-700/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[30%]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-rose-500/5
            blur-3xl
          "
        />
      </div>

      {/* Floating Hearts */}

      <span className="pointer-events-none absolute left-[7%] top-[10%] animate-[floatHeart_6s_ease-in-out_infinite] text-3xl opacity-20">
        ❤️
      </span>

      <span className="pointer-events-none absolute right-[8%] top-[22%] animate-[floatHeartReverse_7s_ease-in-out_infinite] text-2xl opacity-20">
        💕
      </span>

      <span className="pointer-events-none absolute bottom-[18%] left-[8%] animate-[floatHeart_8s_ease-in-out_infinite] text-2xl opacity-15">
        💗
      </span>

      <span className="pointer-events-none absolute bottom-[10%] right-[10%] animate-[floatHeartReverse_6s_ease-in-out_infinite] text-3xl opacity-20">
        💖
      </span>

      {/* Small Stars */}

      {[...Array(35)].map((_, index) => (
        <span
          key={`star-${index}`}
          className="
            pointer-events-none
            absolute
            h-[2px]
            w-[2px]
            animate-pulse
            rounded-full
            bg-pink-100
          "
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`,
            opacity: 0.1 + (index % 4) * 0.05,
            animationDelay: `${(index % 8) * 0.3}s`,
          }}
        />
      ))}

      {/* =========================================================
          HEADER
      ========================================================= */}

      <section className="relative z-10 pb-14 pt-16 text-center sm:pt-24">
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-pink-400/15
            bg-pink-500/[0.05]
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <span className="animate-pulse text-xs">♥</span>

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-pink-400
              sm:text-[11px]
            "
          >
            A Little Memory Challenge
          </p>
        </div>

        <h1
          className="
            mt-6
            font-['Great_Vibes']
            text-5xl
            font-normal
            leading-tight
            text-[#fff2f7]
            drop-shadow-[0_0_22px_rgba(236,72,153,0.12)]
            sm:text-6xl
            md:text-7xl
          "
        >
          Do You Remember
          <br />

          <span className="text-pink-400">
            Our Story?
          </span>
        </h1>

        <div className="mx-auto mt-6 flex max-w-[200px] items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-400/40" />

          <span className="text-sm text-pink-400/60">
            ♡
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-400/40" />
        </div>

        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            px-5
            font-['Playfair_Display']
            text-sm
            leading-7
            text-[#a797a3]
            sm:text-base
          "
        >
          Before you enter our little world, let’s see how well you remember
          the moments that made{" "}

          <span className="font-semibold text-pink-400">
            us.
          </span>
        </p>
      </section>

      {/* =========================================================
          TIMELINE
      ========================================================= */}

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        {/* Center Line */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            top-0
            hidden
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-pink-500/25
            to-transparent
            md:block
          "
        />

        <div className="space-y-24 md:space-y-32">
          {questions.map((item, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div key={item.id} className="relative">
                {/* Timeline Heart */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    hidden
                    h-12
                    w-12
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-pink-500/30
                    bg-[#140b16]
                    text-xl
                    shadow-[0_0_26px_rgba(236,72,153,0.18)]
                    backdrop-blur-xl
                    md:flex
                  "
                >
                  {index === 0 && "💍"}
                  {index === 1 && "💋"}
                  {index === 2 && "🫂"}
                </div>

                {/* =================================================
                    ROW
                ================================================= */}

                <div
                  className="
                    grid
                    grid-cols-1
                    items-center
                    gap-10
                    md:grid-cols-2
                    md:gap-24
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div
                    className={`
                      ${isEven ? "md:order-2" : "md:order-1"}
                    `}
                  >
                    <div
                      className="
                        group
                        relative
                        mx-auto
                        w-full
                        max-w-[520px]
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-pink-300/10
                        bg-[#0b060c]
                        shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                        transition-all
                        duration-700
                        hover:-translate-y-1
                        hover:border-pink-300/25
                        hover:shadow-[0_30px_90px_rgba(219,39,119,0.20)]
                      "
                    >
                      {/* SAME IMAGE AS BLURRED BACKGROUND */}

                      <img
                        src={item.image}
                        alt=""
                        aria-hidden="true"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          scale-110
                          object-cover
                          opacity-40
                          blur-2xl
                        "
                      />

                      {/* Dark Tint */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-[#160811]/65
                          via-black/25
                          to-[#18060f]/65
                        "
                      />

                      {/* Soft Pink Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-[-60px]
                          left-1/2
                          h-40
                          w-[75%]
                          -translate-x-1/2
                          rounded-full
                          bg-pink-500/15
                          blur-[60px]
                        "
                      />

                      {/* =============================================
                          MAIN PHOTO - FULL PHOTO, NO CROPPING
                      ============================================= */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-[350px]
                          w-full
                          items-center
                          justify-center
                          p-2
                          sm:h-[420px]
                          sm:p-3
                          md:h-[450px]
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="
                            h-full
                            w-full
                            object-contain
                            blur-[12px]
                            opacity-70
                            transition-all
                            duration-500
                            ease-out
                            group-hover:blur-0
                            group-hover:opacity-100
                          "
                        />

                        {/* Clear image fills ONLY this same card on hover */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            z-40
                            flex
                            items-center
                            justify-center
                            bg-[#080408]
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                          "
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="
                              h-full
                              w-full
                              object-contain
                              scale-[0.98]
                              transition-transform
                              duration-500
                              ease-out
                              group-hover:scale-100
                            "
                          />
                        </div>
                      </div>

                      {/* Cinematic Gradient */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          z-20
                          bg-gradient-to-t
                          from-[#070207]/35
                          via-transparent
                          to-black/10
                        "
                      />

                      {/* Border Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-[1px]
                          z-20
                          rounded-[27px]
                          border
                          border-white/[0.035]
                        "
                      />

                      {/* Top Shine */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-x-[15%]
                          top-0
                          z-30
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-pink-100/35
                          to-transparent
                        "
                      />

                      {/* Heart */}

                      <div
                        className="
                          absolute
                          bottom-4
                          right-4
                          z-30
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-black/25
                          text-sm
                          shadow-[0_0_20px_rgba(244,63,94,0.25)]
                          backdrop-blur-md
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:bg-pink-500/10
                        "
                      >
                        ❤️
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className={`
                      ${
                        isEven
                          ? "md:order-1 md:text-right"
                          : "md:order-2 md:text-left"
                      }
                    `}
                  >
                    {/* Title */}

                    <h2
                      className="
                        font-['Great_Vibes']
                        text-4xl
                        leading-snug
                        text-[#fff4f8]
                        drop-shadow-[0_0_15px_rgba(236,72,153,0.10)]
                        sm:text-5xl
                      "
                    >
                      {item.title}
                    </h2>

                    {/* Small Decoration */}

                    <div
                      className={`
                        mt-3 flex items-center gap-2
                        ${
                          isEven
                            ? "md:justify-end"
                            : "md:justify-start"
                        }
                      `}
                    >
                      <span className="h-px w-10 bg-pink-400/30" />

                      <span className="text-xs text-pink-400/60">
                        ♥
                      </span>
                    </div>

                    {/* Question */}

                    <p
                      className="
                        mt-5
                        font-['Playfair_Display']
                        text-sm
                        font-semibold
                        leading-7
                        text-[#eadde5]
                        sm:text-base
                      "
                    >
                      {item.question}
                    </p>

                    {/* Description */}

                    <p
                      className={`
                        mt-3
                        max-w-md
                        text-sm
                        leading-6
                        text-[#9d8e99]
                        ${isEven ? "md:ml-auto" : ""}
                      `}
                    >
                      {item.description}
                    </p>

                    {/* =================================================
                        ANSWERS
                    ================================================= */}

                    <div
                      className={`
                        mt-7
                        grid
                        max-w-md
                        grid-cols-1
                        gap-3
                        sm:grid-cols-2
                        ${isEven ? "md:ml-auto" : ""}
                      `}
                    >
                      {item.options.map((option) => {
                        const selected =
                          answers[item.id] === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              handleAnswer(item.id, option)
                            }
                            className={`
                              rounded-xl
                              border
                              px-3
                              py-3.5
                              text-xs
                              font-medium
                              tracking-wide
                              transition-all
                              duration-300
                              sm:text-sm

                              ${
                                selected
                                  ? `
                                    scale-[1.02]
                                    border-pink-300/20
                                    bg-gradient-to-br
                                    from-pink-600
                                    to-rose-600
                                    text-white
                                    shadow-[0_10px_30px_rgba(219,39,119,0.30)]
                                  `
                                  : `
                                    border-white/5
                                    bg-[#130c15]/90
                                    text-[#c9bbc4]
                                    hover:-translate-y-[2px]
                                    hover:border-pink-500/30
                                    hover:bg-[#1a101c]
                                    hover:text-white
                                  `
                              }
                            `}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            FINAL ENTRY
        ========================================================= */}

        <div className="mt-24 text-center md:mt-32">
          <div className="mx-auto flex max-w-xs items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-500/35" />

            <span className="animate-pulse text-pink-400/70">
              ♥
            </span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-500/35" />
          </div>

          <p
            className="
              mt-7
              font-['Playfair_Display']
              text-sm
              italic
              text-[#9d8e99]
              sm:text-base
            "
          >
            Three memories.

            <span className="mx-2 text-pink-500">
              •
            </span>

            Three answers.

            <span className="mx-2 text-pink-500">
              •
            </span>

            One story.
          </p>

          {/* Error */}

          {error && (
            <p
              className="
                mx-auto
                mt-6
                max-w-lg
                rounded-xl
                border
                border-pink-400/10
                bg-pink-500/[0.05]
                px-5
                py-3
                text-sm
                font-semibold
                text-pink-300
                drop-shadow-[0_0_8px_rgba(236,72,153,0.2)]
              "
            >
              {error}
            </p>
          )}

          {/* Submit Button */}

          <button
            type="button"
            onClick={handleSubmit}
            className="
              group
              relative
              mt-8
              overflow-hidden
              rounded-full
              border
              border-pink-300/10
              bg-gradient-to-r
              from-[#db2777]
              via-[#e11d74]
              to-[#be185d]
              bg-[length:200%_100%]
              px-9
              py-4
              text-sm
              font-semibold
              text-white
              shadow-[0_12px_35px_rgba(219,39,119,0.28)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:bg-right
              hover:shadow-[0_16px_50px_rgba(236,72,153,0.40)]
              active:scale-95
              sm:px-14
              sm:text-base
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative">
              Enter Our World

              <span className="ml-3">
                ❤️
              </span>
            </span>
          </button>

          <p className="mt-4 text-xs text-[#756772]">
            Only if you remember us correctly...
          </p>

          <p
            className="
              mt-7
              font-['Great_Vibes']
              text-2xl
              text-pink-200/25
            "
          >
            some memories are meant to stay forever ♡
          </p>
        </div>
      </section>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style>
        {`

          @keyframes floatHeart {

            0%, 100% {
              transform:
                translateY(0px)
                rotate(0deg);
            }

            50% {
              transform:
                translateY(-16px)
                rotate(5deg);
            }

          }

          @keyframes floatHeartReverse {

            0%, 100% {
              transform:
                translateY(0px)
                rotate(0deg);
            }

            50% {
              transform:
                translateY(16px)
                rotate(-5deg);
            }

          }

        `}
      </style>
    </div>
  );
}

export default Login;