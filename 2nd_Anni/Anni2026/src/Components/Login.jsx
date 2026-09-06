import React, { useState } from "react";

function Login({ onLogin }) {
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
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
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

      if (onLogin) {
        onLogin();
      }
    } else {
      setError(
        "Hmm... one of your memories seems a little confused 😜 Try again!"
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050208] via-[#0b0510] to-[#120617] text-[#d7cbd3]">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-pink-600/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-44 -right-44 w-[500px] h-[500px] bg-fuchsia-700/10 rounded-full blur-3xl" />

      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl" />

      <span className="absolute top-[10%] left-[7%] text-3xl opacity-20 animate-[floatHeart_6s_ease-in-out_infinite]">
        ❤️
      </span>

      <span className="absolute top-[22%] right-[8%] text-2xl opacity-20 animate-[floatHeartReverse_7s_ease-in-out_infinite]">
        💕
      </span>

      <span className="absolute bottom-[18%] left-[8%] text-2xl opacity-15 animate-[floatHeart_8s_ease-in-out_infinite]">
        💗
      </span>

      <span className="absolute bottom-[10%] right-[10%] text-3xl opacity-20 animate-[floatHeartReverse_6s_ease-in-out_infinite]">
        💖
      </span>


      {/* ================= HEADER ================= */}

      <section className="relative z-10 pt-16 sm:pt-24 pb-14 text-center">

        <p className="uppercase tracking-[5px] text-[11px] text-pink-500 font-semibold">
          A Little Memory Challenge
        </p>

        <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-[#fff2f7] leading-tight drop-shadow-[0_4px_24px_rgba(236,72,153,0.08)]">

          Do You Remember

          <br />

          <span className="text-pink-500">
            Our Story?
          </span>

        </h1>

        <div className="mx-auto mt-5 w-16 h-[2px] bg-gradient-to-r from-transparent via-pink-500/70 to-transparent" />

        <p className="max-w-xl mx-auto mt-6 px-5 text-sm sm:text-base leading-7 text-[#a797a3]">

          Before you enter our little world, let’s see how well you remember the
          moments that made{" "}

          <span className="text-pink-500 font-semibold">
            us.
          </span>

        </p>

      </section>


      {/* ================= TIMELINE ================= */}

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-24">

        {/* Center Timeline */}

        <div
          className="
            hidden md:block
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            bg-gradient-to-b
            from-transparent
            via-pink-500/25
            to-transparent
            -translate-x-1/2
          "
        />


        <div className="space-y-24 md:space-y-32">

          {questions.map((item, index) => {

            const isEven = index % 2 !== 0;

            return (

              <div key={item.id} className="relative">

                {/* Timeline Dot */}

                <div
                  className="
                    hidden md:flex
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    z-20
                    w-12
                    h-12
                    rounded-full
                    bg-[#140b16]
                    border
                    border-pink-500/30
                    items-center
                    justify-center
                    text-xl
                    shadow-[0_0_26px_rgba(236,72,153,0.18)]
                    backdrop-blur-xl
                  "
                >

                  {index === 0 && "💍"}
                  {index === 1 && "💋"}
                  {index === 2 && "🫂"}

                </div>


                {/* ================= ROW ================= */}

                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-10
                    md:gap-24
                    items-center
                  "
                >

                  {/* IMAGE */}

                  <div
                    className={`
                      ${isEven ? "md:order-2" : "md:order-1"}
                    `}
                  >

                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        bg-[#140d16]
                        border
                        border-white/5
                        shadow-[0_18px_60px_rgba(0,0,0,0.45)]
                      "
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-full
                          aspect-[4/3]
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* Image Overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#080309]/70
                          via-black/10
                          to-transparent
                          opacity-70
                        "
                      />

                      {/* Pink hover tint */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-pink-500/0
                          group-hover:bg-pink-500/5
                          transition-colors
                          duration-500
                        "
                      />

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div
                    className={`
                      ${isEven ? "md:order-1 md:text-right" : "md:order-2 md:text-left"}
                    `}
                  >

                    {/* Date */}

                    <span
                      className="
                        inline-block
                        px-4
                        py-1.5
                        rounded-full
                        bg-pink-500/10
                        border
                        border-pink-500/20
                        text-pink-400
                        text-[11px]
                        font-semibold
                        tracking-wide
                        shadow-[0_0_20px_rgba(236,72,153,0.08)]
                      "
                    >
                      {item.date}
                    </span>


                    {/* Title */}

                    <h2
                      className="
                        mt-5
                        font-serif
                        text-2xl
                        sm:text-3xl
                        text-[#fff4f8]
                        leading-snug
                      "
                    >
                      {item.title}
                    </h2>


                    {/* Question */}

                    <p
                      className="
                        mt-4
                        text-sm
                        sm:text-base
                        font-semibold
                        leading-6
                        text-[#e1d4dc]
                      "
                    >
                      {item.question}
                    </p>


                    {/* Description */}

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-[#9d8e99]
                        max-w-md
                        md:ml-auto
                      "
                    >
                      {item.description}
                    </p>


                    {/* ANSWERS */}

                    <div
                      className={`
                        mt-7
                        grid
                        grid-cols-2
                        gap-3
                        max-w-md
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
                              handleAnswer(
                                item.id,
                                option
                              )
                            }
                            className={`
                              px-3
                              py-3.5
                              rounded-xl
                              border
                              text-xs
                              sm:text-sm
                              transition-all
                              duration-300
                              font-medium
                              tracking-wide

                              ${
                                selected
                                  ? "bg-gradient-to-br from-pink-600 to-rose-600 text-white border-pink-400/20 shadow-[0_10px_28px_rgba(219,39,119,0.28)] scale-[1.02]"
                                  : "bg-[#130c15]/90 border-white/5 text-[#c9bbc4] hover:border-pink-500/30 hover:bg-[#1a101c] hover:text-white"
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


        {/* ================= FINAL ENTRY ================= */}

        <div className="mt-24 md:mt-32 text-center">

          <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

          <p className="mt-7 text-sm text-[#9d8e99]">

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

            <p className="mt-6 text-sm font-semibold text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.2)]">

              {error}

            </p>

          )}


          {/* Button */}

          <button
            onClick={handleSubmit}
            className="
              group
              relative
              overflow-hidden
              mt-8
              px-9
              sm:px-14
              py-4.5
              rounded-full
              bg-gradient-to-r
              from-[#db2777]
              via-[#e11d74]
              to-[#be185d]
              bg-[length:200%_100%]
              hover:bg-right
              text-white
              text-sm
              sm:text-base
              font-semibold
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

        </div>

      </section>


      {/* ================= ANIMATIONS ================= */}

      <style>
        {`

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

export default Login;