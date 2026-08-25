import React, { useState } from "react";

function Login({ onLogin }) {
  const [answers, setAnswers] = useState({
    proposal: "",
    kiss: "",
    hug: "",
  });

  const [message, setMessage] = useState("");
  const [wrong, setWrong] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  // My Actual Answers (for validation)
  const correctAnswers = {
    proposal: "26-10-2024",
    kiss: "13-11-2024",
    hug: "14-11-2024",
  };

  const questions = [
    {
      id: "proposal",
      number: "01",
      emoji: "💍",
      title: "When did you propose to me?",
      options: [
        "23-10-2024",
        "18-10-2024",
        "26-10-2024",
        "25-10-2024",
      ],
    },
    {
      id: "kiss",
      number: "02",
      emoji: "💋",
      title: "When was our first kiss?",
      options: [
        "13-11-2024",
        "18-11-2024",
        "10-11-2024",
        "15-11-2024",
      ],
    },
    {
      id: "hug",
      number: "03",
      emoji: "🫂",
      title: "When did we have our first hug?",
      options: [
        "10-11-2024",
        "12-11-2024",
        "14-11-2024",
        "20-11-2024",
      ],
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    setMessage("");
    setWrong(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const allAnswered =
      answers.proposal &&
      answers.kiss &&
      answers.hug;

    if (!allAnswered) {
      setWrong(true);
      setMessage("Come on... answer all three questions first! ❤️");
      return;
    }

    const allCorrect =
      answers.proposal === correctAnswers.proposal &&
      answers.kiss === correctAnswers.kiss &&
      answers.hug === correctAnswers.hug;

    if (allCorrect) {
      setWrong(false);
      setMessage("You remember everything! ❤️");
      setUnlocked(true);

      setTimeout(() => {
        if (onLogin) {
          onLogin();
        }
      }, 2000);
    } else {
      setWrong(true);
      setMessage(
        "Hmm... Something doesn't feel right 😜 Try again!"
      );
    }
  };

  return (
    <div
      className="
        min-h-screen min-h-[100dvh]
        w-full
        overflow-hidden
        relative
        flex items-center justify-center
        px-4 py-8
        bg-gradient-to-br
        from-pink-50
        via-rose-100
        to-pink-200
      "
    >

      {/* Floating Hearts */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute left-[8%] bottom-[-30px] text-2xl opacity-40 animate-[float_9s_linear_infinite]">
          ❤️
        </span>

        <span className="absolute left-[25%] bottom-[-30px] text-xl opacity-40 animate-[float_12s_linear_2s_infinite]">
          💕
        </span>

        <span className="absolute left-[45%] bottom-[-30px] text-2xl opacity-40 animate-[float_10s_linear_4s_infinite]">
          💗
        </span>

        <span className="absolute left-[65%] bottom-[-30px] text-xl opacity-40 animate-[float_13s_linear_1s_infinite]">
          💖
        </span>

        <span className="absolute left-[82%] bottom-[-30px] text-2xl opacity-40 animate-[float_11s_linear_3s_infinite]">
          ❤️
        </span>
      </div>

      {/* Main Card */}

      <div
        className="
          relative z-10
          w-full
          max-w-[520px]
          rounded-[28px]
          bg-white/80
          backdrop-blur-xl
          border border-white/70
          shadow-[0_25px_60px_rgba(155,70,100,0.18)]
          px-5 py-8
          sm:px-9 sm:py-10
          animate-[cardAppear_0.8s_ease]
        "
      >

        {!unlocked ? (
          <>
            {/* Header */}

            <div className="text-center">

              <div className="text-5xl mb-3 animate-[heartbeat_1.5s_ease-in-out_infinite]">
                ❤️
              </div>

              <p className="text-[11px] sm:text-xs font-bold tracking-[2px] uppercase text-pink-600">
                Our 2nd Anniversary
              </p>

              <h1
                className="
                  mt-3
                  font-serif
                  text-[30px]
                  sm:text-[38px]
                  leading-tight
                  font-semibold
                  text-[#472432]
                "
              >
                Do You Remember
                <br />
                <span className="text-pink-600">
                  Our Story?
                </span>
              </h1>

              <p className="mt-4 text-sm leading-6 text-[#765763]">
                Before entering our little world...
                <br />
                let's see how well you remember us. 🥰
              </p>

            </div>

            {/* Questions */}

            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-6"
            >

              {questions.map((question) => (
                <div
                  key={question.id}
                  className="
                    p-4
                    sm:p-5
                    rounded-2xl
                    bg-white/70
                    border border-pink-100
                    shadow-sm
                  "
                >

                  {/* Question Heading */}

                  <div className="flex items-start gap-3">

                    <div
                      className="
                        flex-shrink-0
                        w-10 h-10
                        rounded-full
                        bg-pink-100
                        flex items-center justify-center
                        text-lg
                      "
                    >
                      {question.emoji}
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-pink-500 tracking-wider">
                        MEMORY {question.number}
                      </p>

                      <h2 className="mt-1 text-sm sm:text-base font-semibold text-[#55323f]">
                        {question.title}
                      </h2>
                    </div>

                  </div>

                  {/* Options */}

                  <div className="grid grid-cols-2 gap-2 mt-4">

                    {question.options.map((option) => {

                      const selected =
                        answers[question.id] === option;

                      return (
                        <button
                          type="button"
                          key={option}
                          onClick={() =>
                            handleAnswer(
                              question.id,
                              option
                            )
                          }
                          className={`
                            min-h-[44px]
                            px-2
                            rounded-xl
                            text-xs sm:text-sm
                            font-medium
                            border
                            transition-all duration-200
                            ${
                              selected
                                ? "bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-200 scale-[1.02]"
                                : "bg-white/80 text-[#765763] border-pink-100 hover:border-pink-300 hover:bg-pink-50"
                            }
                          `}
                        >
                          {option}
                        </button>
                      );
                    })}

                  </div>

                </div>
              ))}

              {/* Enter Button */}

              <button
                type="submit"
                className="
                  w-full
                  min-h-[54px]
                  rounded-2xl
                  bg-gradient-to-r
                  from-pink-600
                  to-rose-600
                  text-white
                  font-bold
                  text-sm sm:text-base
                  shadow-lg
                  shadow-pink-200
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-pink-300
                  active:translate-y-0
                "
              >
                Unlock Our Story ❤️
              </button>

            </form>

            {/* Message */}

            {message && (
              <p
                className={`
                  mt-5
                  text-center
                  text-sm
                  font-semibold
                  animate-[messageAppear_0.3s_ease]
                  ${
                    wrong
                      ? "text-rose-600"
                      : "text-pink-600"
                  }
                `}
              >
                {message}
              </p>
            )}

            <p className="mt-4 text-center text-[11px] text-[#a17a88]">
              Three memories. One story. One love. ❤️
            </p>

          </>
        ) : (

          /* SUCCESS SCREEN */

          <div className="text-center py-10 animate-[successAppear_0.6s_ease]">

            <div className="text-7xl animate-[heartbeat_1s_ease-in-out_infinite]">
              💖
            </div>

            <h1
              className="
                mt-6
                font-serif
                text-3xl sm:text-4xl
                font-semibold
                text-pink-600
              "
            >
              You Remembered Everything!
            </h1>

            <p className="mt-5 text-[#765763] leading-7">
              I guess some memories
              <br />
              are impossible to forget... 🥰
            </p>

            <p className="mt-4 font-semibold text-pink-600">
              Welcome to our story ❤️
            </p>

            <div className="mt-8 text-2xl animate-[heartbeat_1s_ease-in-out_infinite]">
              ❤️
            </div>

          </div>

        )}

      </div>

      {/* Animations */}

      <style>
        {`
          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.15);
            }
          }

          @keyframes cardAppear {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.96);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes messageAppear {
            from {
              opacity: 0;
              transform: translateY(5px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes successAppear {
            from {
              opacity: 0;
              transform: scale(0.8);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }

            20% {
              opacity: 0.4;
            }

            80% {
              opacity: 0.4;
            }

            100% {
              transform: translateY(-110vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>

    </div>
  );
}

export default Login;