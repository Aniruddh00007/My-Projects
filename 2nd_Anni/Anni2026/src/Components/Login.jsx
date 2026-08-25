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
    <div className="min-h-screen bg-gradient-to-b from-[#fff9fa] to-[#fff5f6] text-[#5a5568]">
      {/* ================= HEADER ================= */}
      <section className="pt-16 sm:pt-24 pb-14 text-center">
        <p className="uppercase tracking-[5px] text-[11px] text-[#c97f88] font-semibold">
          A Little Memory Challenge
        </p>

        <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-[#6b647a] leading-tight">
          Do You Remember
          <br />
          <span className="text-[#9b5a66]">Our Story?</span>
        </h1>

        <div className="mx-auto mt-5 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#eebdc3] to-transparent" />

        <p className="max-w-xl mx-auto mt-6 px-5 text-sm sm:text-base leading-7 text-[#7a7582]">
          Before you enter our little world, let’s see how well you remember the
          moments that made{" "}
          <span className="text-[#c0757f] font-semibold">us.</span>
        </p>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="relative max-w-6xl mx-auto px-5 sm:px-8 pb-24">
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
            via-[#f0d9dd]
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
                    bg-gradient-to-br
                    from-[#fff9fa]
                    to-[#fff5f6]
                    border
                    border-[#eec6cb]
                    items-center
                    justify-center
                    text-xl
                    shadow-[0_6px_20px_rgba(180,120,130,0.18)]
                  "
                >
                  {index === 0 && "💍"}
                  {index === 1 && "💋"}
                  {index === 2 && "🫂"}
                </div>

                {/* ================= ROW ================= */}
                <div
                  className={`
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-10
                    md:gap-24
                    items-center
                  `}
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
                        rounded-xl
                        bg-[#f6f1f3]
                        shadow-[0_10px_40px_rgba(90,70,80,0.12)]
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
                          from-black/25
                          via-black/5
                          to-transparent
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
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
                        bg-gradient-to-r
                        from-[#f9dbe0]
                        to-[#f8d3d9]
                        text-[#9b5a66]
                        text-[11px]
                        font-semibold
                        tracking-wide
                        shadow-sm
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
                        text-[#6b647a]
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
                        text-[#5f5a6b]
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
                        text-[#8a8490]
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
                              duration-200
                              font-medium
                              tracking-wide

                              ${
                                selected
                                  ? "bg-gradient-to-br from-[#d97f8a] to-[#c96f7a] text-white border-transparent shadow-[0_8px_24px_rgba(210,120,130,0.35)]"
                                  : "bg-white border-[#f0d9dd] text-[#6b6475] hover:border-[#e5b4bb] hover:bg-[#fff7f8]"
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
          <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#eec3ca] to-transparent" />

          <p className="mt-7 text-sm text-[#8a8490]">
            Three memories.
            <span className="mx-2 text-[#d48a94]">•</span>
            Three answers.
            <span className="mx-2 text-[#d48a94]">•</span>
            One story.
          </p>

          {/* Error */}
          {error && (
            <p className="mt-6 text-sm font-semibold text-[#b86a73]">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="
              mt-8
              px-9
              sm:px-14
              py-4.5
              rounded-full
              bg-gradient-to-br
              from-[#d97f8a]
              to-[#c96f7a]
              hover:from-[#c96f7a]
              hover:to-[#b8636e]
              text-white
              text-sm
              sm:text-base
              font-semibold
              shadow-[0_10px_30px_rgba(210,120,130,0.35)]
              transition-all
              duration-300
              hover:-translate-y-1
              active:scale-95
            "
          >
            Enter Our World
            <span className="ml-3">❤️</span>
          </button>

          <p className="mt-4 text-xs text-[#aaa3a8]">
            Only if you remember us correctly...
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;