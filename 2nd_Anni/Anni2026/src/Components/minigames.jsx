import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/* =========================================================
   QUIZ DATA

   IMPORTANT:
   Personal answers below are placeholders.
   Change only the options + correctAnswer when you want
   to put your real relationship details.
========================================================= */

const quizQuestions = [
  {
    id: 1,
    icon: "💍",
    question: "Who made the first move towards our relationship? ❤️",
    options: [
      "Aniruddh",
      "Anjali",
      "Both at the same time",
      "It just happened naturally",
    ],
    correctAnswer: "Anjali",
  },

  {
    id: 2,
    icon: "🌹",
    question: "Where did our first romantic moment happen? 👀❤️",
    options: [
      "Bus",
      "Lab",
      "Classroom",
      "Corridor",
    ],
    correctAnswer: "Classroom",
  },

  {
    id: 3,
    icon: "📍",
    question: "Who realized their feelings first? ❤️",
    options: [
      "Aniruddh",
      "Anjali",                                                                         
      "Both at the same time",
      "It just happened naturally",
    ],
    correctAnswer: "Anjali",
  },

  {
    id: 4,
    icon: "❤️",
    question: 'Where did we have our first proper romantic conversation? 💕',
    options: [
      "Noida",
      "Insta",
      "whatsapp",
      "Classroom",
    ],
    correctAnswer: "Classroom",
  },

  {
    id: 5,
    icon: "💋",
    question: "Who initiated our first kiss? 💋",
    options: [
      "Aniruddh",
      "Anjali",
      "Both moved closer",
      "No one knows anymore 😂",
    ],
    correctAnswer: "Both moved closer",
  },

  {
    id: 6,
    icon: "🫂",
    question: "What was our first photo together taken on 📸?",
    options: [
      "12 October 2024",
      "16 October 2024",
      "14 October 2024",
      "15 October 2024",
    ],
    correctAnswer: "15 October 2024",
  },

  {
    id: 7,
    icon: "🥰",
    question: "What is my favorite thing about you?",
    options: [
      "Your smile",
      "Your eyes",
      "Your caring nature",
      "Everything about you ❤️",
    ],
    correctAnswer: "Your smile",
  },

  {
    id: 8,
    icon: "🌙",
    question: "Which happened first in our story? 👀❤️",
    options: [
      "First romantic conversation",
      "First time holding hands",
      "First hug",
      "First kiss",
    ],
    correctAnswer: "First time holding hands",
  },

  {
    id: 9,
    icon: "😤",
    question: "What is the one thing we fight about the most? 😅",
    options: [
      "Late replies",
      "Not listening",
      "Overthinking",
      "All of these 😭",
    ],
    correctAnswer: "Late replies",
  },

  {
    id: 10,
    icon: "💗",
    question: "What do I love calling you the most? ❤️",
    options: [
      "Baby",
      "Jaan",
      "Madam Ji",
      "Devi",
    ],
    correctAnswer: "Jaan",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

function MiniGames() {
   const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const [answered, setAnswered] = useState(false);

  const [finished, setFinished] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);


  /* =========================================================
     CURRENT QUESTION
  ========================================================= */

  const question = quizQuestions[currentQuestion];


  /* =========================================================
     BACKGROUND STARS

     useMemo prevents stars from changing position every time
     the user selects an answer.
  ========================================================= */

  const stars = useMemo(() => {
    return Array.from({ length: 75 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 5}s`,
    }));
  }, []);


  /* =========================================================
     CONFETTI
  ========================================================= */

  const confettiPieces = useMemo(() => {
    return Array.from({ length: 45 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${3 + Math.random() * 2}s`,
      rotation: `${Math.random() * 360}deg`,
    }));
  }, []);


  /* =========================================================
     SELECT ANSWER
  ========================================================= */

  const handleAnswer = (answer) => {
    if (answered) {
      return;
    }

    setSelectedAnswer(answer);
    setAnswered(true);

    if (answer === question.correctAnswer) {
      setScore((previousScore) => previousScore + 1);
    }
  };


  /* =========================================================
     NEXT QUESTION
  ========================================================= */

  const handleNext = () => {
    if (!answered) {
      return;
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);

      setSelectedAnswer(null);

      setAnswered(false);
    } else {
      setFinished(true);

      /*
        Special celebration for high score
      */

      const finalScore =
        selectedAnswer === question.correctAnswer
          ? score + 1
          : score;

      if (finalScore >= 8) {
        setShowConfetti(true);
      }
    }
  };


  /* =========================================================
     RESTART GAME
  ========================================================= */

  const restartQuiz = () => {
    setGameStarted(false);

    setCurrentQuestion(0);

    setSelectedAnswer(null);

    setScore(0);

    setAnswered(false);

    setFinished(false);

    setShowConfetti(false);
  };


  /* =========================================================
     RESULT MESSAGE
  ========================================================= */

  const getResult = () => {
    if (score === 10) {
      return {
        emoji: "👑❤️",
        title: "Perfect Score!",
        message:
          "Looks like you know me better than I know myself... ❤️",
        subMessage:
          "10/10? Okay, I'm officially impressed. You really do remember our little world.",
      };
    }

    if (score >= 8) {
      return {
        emoji: "🥰",
        title: "Almost Perfect!",
        message:
          "Okayyy... you really know us pretty well. ❤️",
        subMessage:
          "You missed only a tiny bit, but your heart clearly remembers our story.",
      };
    }

    if (score >= 6) {
      return {
        emoji: "💕",
        title: "Not Bad At All!",
        message:
          "You remember the important things... mostly. 😌❤️",
        subMessage:
          "A few memories might need a little refresh. Maybe that's an excuse to make more together.",
      };
    }

    if (score >= 4) {
      return {
        emoji: "🤨❤️",
        title: "Hmm...",
        message:
          "I think we need a little revision session together. 😂",
        subMessage:
          "Don't worry, I'll happily remind you of every single memory.",
      };
    }

    return {
      emoji: "😤💔",
      title: "Excuse Me?!",
      message:
        "Hmm... we definitely need to talk. 😏❤️",
      subMessage:
        "Don't even think you're escaping. Go back and try again!",
    };
  };


  const result = getResult();


  /* =========================================================
     PROGRESS
  ========================================================= */

  const progress =
    ((currentQuestion + 1) / quizQuestions.length) * 100;


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
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="fixed inset-0 overflow-hidden">

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,#271027_0%,#100713_42%,#050208_80%)]
          "
        />


        {/* LEFT GLOW */}

        <div
          className="
            absolute
            -left-40
            top-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-pink-600/10
            blur-[130px]
          "
        />


        {/* RIGHT GLOW */}

        <div
          className="
            absolute
            -right-40
            top-[35%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-fuchsia-700/10
            blur-[140px]
          "
        />


        {/* CENTER GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-600/[0.05]
            blur-[130px]
          "
        />


        {/* STARS */}

        {stars.map((star) => (
          <span
            key={star.id}
            className="game-star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}


        {/* FLOATING HEARTS */}

        <span className="game-heart game-heart-one">
          ♥
        </span>

        <span className="game-heart game-heart-two">
          ♥
        </span>

        <span className="game-heart game-heart-three">
          ♥
        </span>

      </div>


      {/* =====================================================
          CONFETTI
      ===================================================== */}

      {showConfetti && finished && (

        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-50
            overflow-hidden
          "
        >

          {confettiPieces.map((piece) => (

            <span
              key={piece.id}
              className="confetti-piece"
              style={{
                left: piece.left,
                animationDelay: piece.delay,
                animationDuration: piece.duration,
                "--rotation": piece.rotation,
              }}
            >
              {piece.id % 3 === 0
                ? "♥"
                : piece.id % 3 === 1
                ? "✨"
                : "💕"}
            </span>

          ))}

        </div>

      )}



      {/* =====================================================
          START SCREEN
      ===================================================== */}

      {!gameStarted && !finished && (

        <section
          className="
            relative
            z-10
            flex
            min-h-screen
            items-center
            justify-center
            px-5
            py-16
          "
        >

          <div
            className="
              w-full
              max-w-3xl
              text-center
            "
          >

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-pink-500/20
                bg-pink-500/[0.07]
                px-5
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-pink-300
                backdrop-blur-xl
              "
            >
              🎮 Mini Game 01
            </span>


            {/* Small Heading */}

            <p
              className="
                mt-8
                text-xs
                font-semibold
                uppercase
                tracking-[0.4em]
                text-pink-500
              "
            >
              Aniruddh × Anjali
            </p>


            {/* Main Heading */}

            <h1
              className="
                mt-5
                font-serif
                text-5xl
                font-semibold
                leading-tight
                text-[#fff4f8]
                sm:text-6xl
                md:text-7xl
              "
            >
              How Well Do You
              <br />

              <span
                className="
                  text-pink-500
                  drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]
                "
              >
                Know Us?
              </span>
            </h1>


            {/* Hearts */}

            <div
              className="
                mt-7
                flex
                items-center
                justify-center
                gap-3
                text-pink-500
              "
            >
              <span className="opacity-50">
                ♡
              </span>

              <span className="game-heartbeat text-xl">
                ♥
              </span>

              <span className="opacity-50">
                ♡
              </span>
            </div>


            {/* Description */}

            <p
              className="
                mx-auto
                mt-7
                max-w-xl
                text-sm
                leading-7
                text-[#a999a4]
                sm:text-base
              "
            >
              Ten questions. Ten memories. One relationship.

              <br className="hidden sm:block" />

              Let's see how much you actually remember about us.
              👀❤️
            </p>


            {/* Info Cards */}

            <div
              className="
                mx-auto
                mt-10
                grid
                max-w-lg
                grid-cols-3
                gap-3
              "
            >

              <MiniInfo
                value="10"
                label="Questions"
              />

              <MiniInfo
                value="10"
                label="Points"
              />

              <MiniInfo
                value="∞"
                label="Love"
              />

            </div>


            {/* Start Button */}

            <button
              type="button"
              onClick={() => setGameStarted(true)}
              className="
                game-main-button
                group
                relative
                mt-10
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-pink-500/30
                bg-gradient-to-r
                from-pink-600/20
                via-fuchsia-600/20
                to-pink-600/20
                px-9
                py-4
                text-sm
                font-semibold
                text-pink-100
                shadow-[0_10px_40px_rgba(236,72,153,0.15)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-pink-400/50
                hover:shadow-[0_15px_50px_rgba(236,72,153,0.25)]
              "
            >

              <span className="button-shine" />

              <span className="relative text-lg">
                🎮
              </span>

              <span className="relative">
                Start The Quiz
              </span>

              <span
                className="
                  relative
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </button>


            <p
              className="
                mt-5
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#675963]
              "
            >
              No cheating allowed 😌
            </p>

          </div>

        </section>

      )}



      {/* =====================================================
          QUIZ SCREEN
      ===================================================== */}

      {gameStarted && !finished && (

        <section
          className="
            relative
            z-10
            flex
            min-h-screen
            items-center
            justify-center
            px-4
            py-10
            sm:px-6
          "
        >

          <div
            className="
              w-full
              max-w-3xl
            "
          >

            {/* =================================================
                TOP INFO
            ================================================= */}

            <div
              className="
                mb-6
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#756670]
                  "
                >
                  Question
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-pink-300
                  "
                >
                  {currentQuestion + 1}
                  <span className="text-[#665760]">
                    {" "}/ {quizQuestions.length}
                  </span>
                </p>

              </div>


              {/* Score */}

              <div
                className="
                  rounded-full
                  border
                  border-pink-500/15
                  bg-pink-500/[0.05]
                  px-4
                  py-2
                  backdrop-blur-xl
                "
              >

                <span
                  className="
                    text-xs
                    text-[#8f808b]
                  "
                >
                  Score
                </span>

                <span
                  className="
                    ml-2
                    font-semibold
                    text-pink-400
                  "
                >
                  {score}
                </span>

              </div>

            </div>



            {/* =================================================
                PROGRESS BAR
            ================================================= */}

            <div
              className="
                mb-8
                h-1
                w-full
                overflow-hidden
                rounded-full
                bg-white/[0.05]
              "
            >

              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-pink-600
                  via-pink-500
                  to-fuchsia-500
                  transition-all
                  duration-700
                "
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>



            {/* =================================================
                QUESTION CARD
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-pink-500/[0.12]
                bg-[#120a13]/80
                p-6
                shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
                sm:p-9
              "
            >

              {/* Card Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-40
                  w-72
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-pink-600/[0.09]
                  blur-[70px]
                "
              />


              {/* Number */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-pink-500
                  "
                >
                  Memory {String(question.id).padStart(2, "0")}
                </span>


                <span className="text-3xl">
                  {question.icon}
                </span>

              </div>


              {/* Question */}

              <h2
                className="
                  relative
                  mt-7
                  font-serif
                  text-2xl
                  font-semibold
                  leading-relaxed
                  text-[#fff4f8]
                  sm:text-3xl
                "
              >
                {question.question}
              </h2>



              {/* =================================================
                  ANSWERS
              ================================================= */}

              <div
                className="
                  relative
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >

                {question.options.map((option, index) => {

                  const isSelected =
                    selectedAnswer === option;

                  const isCorrect =
                    option === question.correctAnswer;


                  let optionClass = `
                    border-white/[0.07]
                    bg-white/[0.025]
                    text-[#c9bac4]
                    hover:border-pink-500/25
                    hover:bg-pink-500/[0.06]
                  `;


                  if (answered && isCorrect) {
                    optionClass = `
                      border-emerald-400/40
                      bg-emerald-400/[0.08]
                      text-emerald-200
                      shadow-[0_0_25px_rgba(52,211,153,0.08)]
                    `;
                  }


                  if (
                    answered &&
                    isSelected &&
                    !isCorrect
                  ) {
                    optionClass = `
                      border-rose-500/40
                      bg-rose-500/[0.08]
                      text-rose-200
                    `;
                  }


                  return (

                    <button
                      key={option}
                      type="button"
                      disabled={answered}
                      onClick={() =>
                        handleAnswer(option)
                      }
                      className={`
                        group
                        flex
                        min-h-[70px]
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        px-5
                        py-4
                        text-left
                        text-sm
                        transition-all
                        duration-300
                        ${optionClass}
                      `}
                    >

                      {/* Option Letter */}

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-black/20
                          text-[10px]
                          font-bold
                        "
                      >
                        {String.fromCharCode(65 + index)}
                      </span>


                      <span className="flex-1">
                        {option}
                      </span>


                      {/* Correct Icon */}

                      {answered && isCorrect && (
                        <span className="text-lg">
                          ✓
                        </span>
                      )}


                      {/* Wrong Icon */}

                      {answered &&
                        isSelected &&
                        !isCorrect && (
                          <span className="text-lg">
                            ×
                          </span>
                        )}

                    </button>

                  );

                })}

              </div>



              {/* =================================================
                  FEEDBACK
              ================================================= */}

              {answered && (

                <div
                  className={`
                    mt-6
                    rounded-2xl
                    border
                    px-5
                    py-4
                    text-sm
                    leading-6
                    ${
                      selectedAnswer ===
                      question.correctAnswer
                        ? `
                          border-emerald-400/15
                          bg-emerald-400/[0.05]
                          text-emerald-200
                        `
                        : `
                          border-rose-400/15
                          bg-rose-400/[0.05]
                          text-rose-200
                        `
                    }
                  `}
                >

                  {selectedAnswer ===
                  question.correctAnswer ? (

                    <p>
                      <span className="mr-2">
                        ❤️
                      </span>

                      You remembered! +1 point for you.
                    </p>

                  ) : (

                    <p>
                      <span className="mr-2">
                        😏
                      </span>

                      Nope! The answer was{" "}

                      <strong>
                        {question.correctAnswer}
                      </strong>

                      . We might need to talk about this one.
                    </p>

                  )}

                </div>

              )}



              {/* =================================================
                  NEXT BUTTON
              ================================================= */}

              <div
                className="
                  mt-8
                  flex
                  justify-end
                "
              >

                <button
                  type="button"
                  disabled={!answered}
                  onClick={handleNext}
                  className={`
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    px-7
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      answered
                        ? `
                          border-pink-500/30
                          bg-pink-500/[0.09]
                          text-pink-200
                          hover:-translate-y-0.5
                          hover:border-pink-400/50
                          hover:bg-pink-500/[0.14]
                        `
                        : `
                          cursor-not-allowed
                          border-white/5
                          bg-white/[0.02]
                          text-white/20
                        `
                    }
                  `}
                >

                  {currentQuestion ===
                  quizQuestions.length - 1
                    ? "See My Score"
                    : "Next Question"}


                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </button>

              </div>

            </div>


            {/* Bottom Text */}

            <p
              className="
                mt-6
                text-center
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#5f515a]
              "
            >
              Every answer unlocks another memory ❤️
            </p>

          </div>

        </section>

      )}



      {/* =====================================================
          FINAL RESULT
      ===================================================== */}

      {finished && (

        <section
          className="
            relative
            z-10
            flex
            min-h-screen
            items-center
            justify-center
            px-5
            py-16
          "
        >

          <div
            className="
              w-full
              max-w-2xl
              text-center
            "
          >

            {/* Badge */}

            <span
              className="
                inline-flex
                rounded-full
                border
                border-pink-500/20
                bg-pink-500/[0.07]
                px-5
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-pink-300
              "
            >
              Quiz Complete
            </span>


            {/* Emoji */}

            <div
              className="
                result-emoji
                mt-8
                text-6xl
              "
            >
              {result.emoji}
            </div>


            {/* Title */}

            <h1
              className="
                mt-7
                font-serif
                text-4xl
                font-semibold
                text-[#fff4f8]
                sm:text-6xl
              "
            >
              {result.title}
            </h1>


            {/* =================================================
                SCORE
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                mt-9
                flex
                h-44
                w-44
                items-center
                justify-center
                rounded-full
                border
                border-pink-500/20
                bg-pink-500/[0.05]
                shadow-[0_0_70px_rgba(236,72,153,0.12)]
                backdrop-blur-xl
              "
            >

              <div>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#887984]
                  "
                >
                  Your Score
                </p>


                <p
                  className="
                    mt-2
                    font-serif
                    text-5xl
                    font-bold
                    text-pink-400
                  "
                >
                  {score}

                  <span
                    className="
                      text-2xl
                      text-[#806d79]
                    "
                  >
                    /10
                  </span>
                </p>


                <p className="mt-1 text-xl">
                  ❤️
                </p>

              </div>

            </div>


            {/* Result Message */}

            <h2
              className="
                handwritten
                mt-9
                text-3xl
                text-[#f5dce8]
                sm:text-4xl
              "
            >
              {result.message}
            </h2>


            <p
              className="
                mx-auto
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-[#978792]
              "
            >
              {result.subMessage}
            </p>



            {/* =================================================
                SCORE DOTS
            ================================================= */}

            <div
              className="
                mt-8
                flex
                justify-center
                gap-2
              "
            >

              {Array.from({ length: 10 }).map(
                (_, index) => (

                  <span
                    key={index}
                    className={`
                      h-2
                      w-2
                      rounded-full

                      ${
                        index < score
                          ? `
                            bg-pink-500
                            shadow-[0_0_10px_rgba(236,72,153,0.7)]
                          `
                          : `
                            bg-white/10
                          `
                      }
                    `}
                  />

                )
              )}

            </div>



            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >

              {/* Restart */}

              <button
                type="button"
                onClick={restartQuiz}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-pink-500/30
                  bg-pink-500/[0.08]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-pink-200
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-pink-400/50
                  hover:bg-pink-500/[0.13]
                "
              >
                ↻ Play Again
              </button>


              {/* Back to Open When */}

              <button
                type="button"
                onClick={()=> navigate("/memory-room")}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-7
                  py-3.5
                  text-sm
                  text-[#a999a4]
                  transition-all
                  duration-300
                  hover:border-white/15
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                ← Go to Memory Room
              </button>

            </div>


            {/* Ending */}

            <p
              className="
                handwritten
                mt-12
                text-xl
                text-[#705f69]
              "
            >
              Made with ❤️ for our little universe
            </p>

          </div>

        </section>

      )}



      {/* =====================================================
          CSS
      ===================================================== */}

      <style>
        {`

          html {
            scroll-behavior: smooth;
          }


          .handwritten {
            font-family:
              "Dancing Script",
              "Segoe Script",
              "Brush Script MT",
              cursive;
          }


          /* =================================================
             STARS
          ================================================= */

          .game-star {

            position: absolute;

            width: 2px;
            height: 2px;

            border-radius: 50%;

            background: #fff5f8;

            opacity: 0.15;

            animation:
              gameTwinkle
              infinite
              ease-in-out;

          }


          @keyframes gameTwinkle {

            0%, 100% {
              opacity: 0.07;
              transform: scale(1);
            }

            50% {
              opacity: 0.55;
              transform: scale(1.8);
            }

          }


          /* =================================================
             FLOATING HEARTS
          ================================================= */

          .game-heart {

            position: absolute;

            color:
              rgba(236,72,153,0.06);

            font-size: 65px;

            animation:
              gameFloatingHeart
              12s
              infinite
              ease-in-out;

          }


          .game-heart-one {
            left: 8%;
            top: 20%;
          }


          .game-heart-two {

            right: 9%;
            top: 32%;

            animation-delay: 4s;

          }


          .game-heart-three {

            left: 45%;
            bottom: 8%;

            animation-delay: 7s;

          }


          @keyframes gameFloatingHeart {

            0%, 100% {

              transform:
                translateY(0)
                rotate(0deg);

            }

            50% {

              transform:
                translateY(-35px)
                rotate(12deg);

            }

          }


          /* =================================================
             HEARTBEAT
          ================================================= */

          .game-heartbeat {

            display: inline-block;

            animation:
              gameHeartbeat
              1.6s
              ease-in-out
              infinite;

          }


          @keyframes gameHeartbeat {

            0%, 100% {
              transform: scale(1);
            }

            15% {
              transform: scale(1.15);
            }

            30% {
              transform: scale(1);
            }

            45% {
              transform: scale(1.2);
            }

            70% {
              transform: scale(1);
            }

          }


          /* =================================================
             BUTTON SHINE
          ================================================= */

          .button-shine {

            position: absolute;

            inset: 0;

            transform:
              translateX(-110%);

            background:
              linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,0.12),
                transparent
              );

            transition:
              transform
              0.8s
              ease;

          }


          .game-main-button:hover
          .button-shine {

            transform:
              translateX(110%);

          }


          /* =================================================
             RESULT EMOJI
          ================================================= */

          .result-emoji {

            animation:
              resultFloat
              3s
              ease-in-out
              infinite;

          }


          @keyframes resultFloat {

            0%, 100% {

              transform:
                translateY(0)
                scale(1);

            }

            50% {

              transform:
                translateY(-10px)
                scale(1.05);

            }

          }


          /* =================================================
             CONFETTI
          ================================================= */

          .confetti-piece {

            position: absolute;

            top: -50px;

            font-size: 18px;

            animation:
              confettiFall
              linear
              forwards;

          }


          @keyframes confettiFall {

            0% {

              transform:
                translateY(-50px)
                rotate(0deg);

              opacity: 1;

            }

            100% {

              transform:
                translateY(110vh)
                rotate(var(--rotation));

              opacity: 0;

            }

          }


          /* =================================================
             MOBILE
          ================================================= */

          @media (max-width: 640px) {

            .game-heart {

              font-size: 45px;

            }

          }

        `}
      </style>

    </div>
  );
}


/* =========================================================
   MINI INFO COMPONENT
========================================================= */

function MiniInfo({
  value,
  label,
}) {

  return (

    <div
      className="
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.025]
        px-3
        py-4
        backdrop-blur-xl
      "
    >

      <p
        className="
          font-serif
          text-xl
          font-semibold
          text-pink-300
          sm:text-2xl
        "
      >
        {value}
      </p>


      <p
        className="
          mt-1
          text-[8px]
          uppercase
          tracking-[0.15em]
          text-[#756670]
          sm:text-[9px]
        "
      >
        {label}
      </p>

    </div>

  );
}


export default MiniGames;