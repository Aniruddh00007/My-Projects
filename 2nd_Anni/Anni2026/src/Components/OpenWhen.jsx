import { useEffect, useState } from "react";

/* =========================================================
   OPEN WHEN DATA
========================================================= */

const openWhenLetters = [
  {
    id: 1,
    icon: "🥺",
    title: "Open when you miss me",
    label: "For the moments I feel far away",
    message:
      "If you're reading this because you miss me, just remember that somewhere I'm probably missing you too. Close your eyes for a second and think about all those little moments that belong only to us. Distance can keep us apart for a while, but it can never take those memories away. ❤️",
  },

  {
    id: 2,
    icon: "😤",
    title: "Open when you're angry with me",
    label: "Okay... maybe I messed up",
    message:
      "I know you're angry with me right now, and maybe I deserve that angry face too. But before you stay mad at me forever, remember that no fight is bigger than what we have. Take your time, be angry, complain about me... but eventually come back to me. I still choose you. ❤️",
  },

  {
    id: 3,
    icon: "🌧️",
    title: "Open when you're sad",
    label: "For your difficult days",
    message:
      "You don't always have to be strong. Some days are heavy, and that's okay. I wish I could sit beside you right now, hold your hand and remind you that you don't have to face everything alone. Until I can do that, let this little letter be my hug. 🫂❤️",
  },

  {
    id: 4,
    icon: "😊",
    title: "Open when you need a smile",
    label: "Emergency happiness inside",
    message:
      "Hey you... yes, you with that serious face. 😌 I need one small smile from you right now. Think about our stupid conversations, our random moments and all the times we laughed for absolutely no reason. There it is... that's the smile I wanted. ❤️",
  },

  {
    id: 5,
    icon: "📸",
    title: "Open when you want to remember us",
    label: "A little piece of our story",
    message:
      "Remember how all of this started? Two people who had no idea how many memories they were about to create. Every conversation, every meeting, every laugh, every fight and every little moment became another page of us. And somehow, we're still writing. ❤️",
  },

  {
    id: 6,
    icon: "💗",
    title: "Open when you love me a little extra",
    label: "My favorite one",
    message:
      "So today you love me a little extra? Good... because I probably love you a little extra too. ❤️ Keep this feeling with you. Through ordinary days, difficult days and all the beautiful days still waiting for us. And whenever you forget how special you are to me, come back and read this again.",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

function OpenWhen() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [opening, setOpening] = useState(false);
  const [openedLetters, setOpenedLetters] = useState([]);


  /* =========================================================
     OPEN LETTER
  ========================================================= */

  const openLetter = (letter) => {
    setSelectedLetter(letter);
    setOpening(false);

    setTimeout(() => {
      setOpening(true);
    }, 150);

    setOpenedLetters((previous) => {
      if (previous.includes(letter.id)) {
        return previous;
      }

      return [...previous, letter.id];
    });
  };


  /* =========================================================
     CLOSE LETTER
  ========================================================= */

  const closeLetter = () => {
    setOpening(false);

    setTimeout(() => {
      setSelectedLetter(null);
    }, 350);
  };


  /* =========================================================
     ESC CLOSE
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && selectedLetter) {
        closeLetter();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedLetter]);


  /* =========================================================
     LOCK BACKGROUND
  ========================================================= */

  useEffect(() => {
    if (selectedLetter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedLetter]);


  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
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

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,#271027_0%,#100713_42%,#050208_80%)]
          "
        />


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


        <div
          className="
            absolute
            bottom-[5%]
            left-[25%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-rose-600/5
            blur-[120px]
          "
        />


        {/* Stars */}

        {Array.from({ length: 70 }).map((_, index) => (
          <span
            key={index}
            className="open-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}


        {/* Floating Hearts */}

        <span className="open-floating-heart heart-one">
          ♥
        </span>

        <span className="open-floating-heart heart-two">
          ♥
        </span>

        <span className="open-floating-heart heart-three">
          ♥
        </span>

      </div>



      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[75vh]
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >

        <div className="animate-[fadeDown_1s_ease]">

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
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pink-300
              backdrop-blur-xl
            "
          >
            💌 Just For You
          </span>

        </div>


        <p
          className="
            mt-7
            text-xs
            uppercase
            tracking-[0.4em]
            text-pink-500
            sm:text-sm
          "
        >
          A Letter For Every Feeling
        </p>


        <h1
          className="
            mt-5
            font-serif
            text-5xl
            font-semibold
            leading-[1.05]
            text-[#fff4f8]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >

          Open When

          <span
            className="
              text-pink-500
              drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]
            "
          >
            ...
          </span>

        </h1>


        <div
          className="
            mt-7
            flex
            items-center
            gap-3
            text-pink-500
          "
        >

          <span className="opacity-60">
            ♡
          </span>

          <span
            className="
              animate-[heartbeat_1.6s_ease-in-out_infinite]
              text-xl
            "
          >
            ♥
          </span>

          <span className="opacity-60">
            ♡
          </span>

        </div>


        <p
          className="
            mt-7
            max-w-2xl
            text-sm
            leading-7
            text-[#a999a4]
            sm:text-base
          "
        >

          Six little letters for six different moments.

          <br className="hidden sm:block" />

          Whenever you need me, maybe one of them will say
          exactly what I wish I could tell you.

        </p>


        <a
          href="#letters"
          className="
            group
            mt-10
            flex
            items-center
            gap-3
            rounded-full
            border
            border-pink-500/20
            bg-pink-500/[0.07]
            px-7
            py-3.5
            text-sm
            font-semibold
            text-pink-200
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-pink-500/40
            hover:bg-pink-500/[0.12]
          "
        >

          Choose A Letter

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          >
            ↓
          </span>

        </a>

      </section>



      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section
        className="
          mx-auto
          max-w-3xl
          px-6
          pb-24
          text-center
        "
      >

        <div
          className="
            mx-auto
            h-px
            w-24
            bg-gradient-to-r
            from-transparent
            via-pink-500/50
            to-transparent
          "
        />


        <p
          className="
            handwritten
            mt-8
            text-2xl
            leading-10
            text-[#e5cedb]
            sm:text-3xl
          "
        >

          “You don't have to open them all today.

          <br className="hidden sm:block" />

          Save them for the moments you need them.”

        </p>

      </section>



      {/* =====================================================
          LETTERS
      ===================================================== */}

      <section
        id="letters"
        className="
          relative
          mx-auto
          max-w-6xl
          px-5
          pb-36
          sm:px-8
        "
      >

        <div className="mb-16 text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-pink-500
            "
          >
            Letters From My Heart
          </p>


          <h2
            className="
              mt-4
              font-serif
              text-4xl
              font-semibold
              text-[#fff4f8]
              sm:text-5xl
            "
          >
            Which One Do You Need?
          </h2>


          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-[#8f808b]
            "
          >
            Pick the envelope that matches your heart right now.
          </p>

        </div>



        {/* Envelope Grid */}

        <div
          className="
            grid
            gap-7
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {openWhenLetters.map((letter) => (

            <EnvelopeCard
              key={letter.id}
              letter={letter}
              opened={openedLetters.includes(letter.id)}
              onOpen={() => openLetter(letter)}
            />

          ))}

        </div>



        {/* Progress */}

        <div className="mt-16 text-center">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#6f606b]
            "
          >
            {openedLetters.length} of {openWhenLetters.length} letters opened
          </p>


          <div
            className="
              mx-auto
              mt-4
              h-1
              w-48
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
                to-fuchsia-500
                transition-all
                duration-700
              "
              style={{
                width: `${
                  (openedLetters.length /
                    openWhenLetters.length) *
                  100
                }%`,
              }}
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          END + NEXT PAGE BUTTON
      ===================================================== */}

      <section
        className="
          relative
          border-t
          border-white/5
          px-6
          py-28
          text-center
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-0
            h-48
            w-96
            -translate-x-1/2
            bg-pink-600/[0.06]
            blur-[90px]
          "
        />


        <div className="relative">

          <p
            className="
              text-5xl
              animate-[heartbeat_1.6s_ease-in-out_infinite]
            "
          >
            💌
          </p>


          <h2
            className="
              handwritten
              mt-6
              text-4xl
              text-[#fff0f6]
              sm:text-5xl
            "
          >
            A little piece of me,
            whenever you need it.
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-[#8f808b]
            "
          >
            Keep these letters close. Some are for difficult days,
            some for happy ones, and all of them are for you.
          </p>


          {/* =================================================
              NEXT PAGE - MINI GAMES
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              window.location.href = "/mini-games";
            }}
            className="
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
              px-8
              py-4
              text-sm
              font-semibold
              text-pink-100
              shadow-[0_10px_35px_rgba(236,72,153,0.15)]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-pink-400/50
              hover:shadow-[0_15px_45px_rgba(236,72,153,0.28)]
            "
          >

            {/* Shine Animation */}

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />


            <span className="relative text-lg">
              🎮
            </span>


            <span className="relative">
              Let's Play Some Games
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

        </div>

      </section>



      {/* =====================================================
          LETTER MODAL
      ===================================================== */}

      {selectedLetter && (

        <LetterModal
          letter={selectedLetter}
          opening={opening}
          onClose={closeLetter}
        />

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


          /* =================================================
             STARS
          ================================================= */

          .open-star {

            position: absolute;

            width: 2px;
            height: 2px;

            border-radius: 50%;

            background: #fff5f8;

            opacity: 0.15;

            animation:
              openTwinkle infinite ease-in-out;

          }


          @keyframes openTwinkle {

            0%, 100% {
              opacity: 0.08;
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

          .open-floating-heart {

            position: absolute;

            color:
              rgba(236,72,153,0.07);

            font-size: 60px;

            animation:
              floatingHeart
              12s
              infinite
              ease-in-out;

          }


          .heart-one {
            left: 10%;
            top: 20%;
          }


          .heart-two {

            right: 10%;
            top: 35%;

            animation-delay: 3s;

          }


          .heart-three {

            left: 45%;
            bottom: 12%;

            animation-delay: 6s;

          }


          @keyframes floatingHeart {

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
             ENVELOPE CARDS
          ================================================= */

          .envelope-wrapper {
            perspective: 1200px;
          }


          .envelope {

            position: relative;

            height: 210px;

            overflow: hidden;

            border-radius: 20px;

            background:
              linear-gradient(
                145deg,
                #281326,
                #170a19
              );

            border:
              1px solid
              rgba(236,72,153,0.16);

            box-shadow:
              0 20px 50px
              rgba(0,0,0,0.35);

            transition:
              transform 0.5s ease,
              box-shadow 0.5s ease,
              border-color 0.5s ease;

          }


          .envelope-wrapper:hover .envelope {

            transform:
              translateY(-8px)
              rotateX(2deg);

            border-color:
              rgba(236,72,153,0.35);

            box-shadow:
              0 25px 70px
              rgba(236,72,153,0.12);

          }


          .envelope-back {

            position: absolute;

            inset: 0;

            background:
              linear-gradient(
                135deg,
                rgba(236,72,153,0.07),
                transparent 45%
              );

          }


          .envelope-bottom {

            position: absolute;

            left: 0;
            right: 0;
            bottom: 0;

            height: 72%;

            background:
              linear-gradient(
                145deg,
                #241124,
                #160917
              );

            clip-path:
              polygon(
                0 35%,
                50% 75%,
                100% 35%,
                100% 100%,
                0 100%
              );

          }


          .envelope-left {

            position: absolute;

            inset: 0;

            background:
              rgba(255,255,255,0.018);

            clip-path:
              polygon(
                0 25%,
                52% 67%,
                0 100%
              );

          }


          .envelope-right {

            position: absolute;

            inset: 0;

            background:
              rgba(236,72,153,0.025);

            clip-path:
              polygon(
                100% 25%,
                48% 67%,
                100% 100%
              );

          }


          .envelope-flap {

            position: absolute;

            left: 0;
            right: 0;
            top: 0;

            height: 62%;

            background:
              linear-gradient(
                180deg,
                #32152e,
                #1c0c1d
              );

            clip-path:
              polygon(
                0 0,
                100% 0,
                50% 82%
              );

            transform-origin:
              top center;

            transition:
              transform 0.6s ease;

            z-index: 4;

          }


          .envelope-wrapper:hover
          .envelope-flap {

            transform:
              rotateX(-8deg);

          }


          /* =================================================
             WAX SEAL
          ================================================= */

          .wax-seal {

            position: absolute;

            left: 50%;
            top: 48%;

            z-index: 15;

            display: flex;

            width: 48px;
            height: 48px;

            align-items: center;
            justify-content: center;

            transform:
              translate(-50%, -50%);

            border-radius: 50%;

            background:
              linear-gradient(
                145deg,
                #e11d74,
                #9d174d
              );

            border:
              1px solid
              rgba(255,255,255,0.15);

            box-shadow:
              0 6px 20px
              rgba(225,29,116,0.35);

            color: white;

            font-size: 19px;

            transition:
              transform 0.4s ease,
              opacity 0.4s ease;

          }


          .envelope-wrapper:hover
          .wax-seal {

            transform:
              translate(-50%, -50%)
              scale(1.1);

          }


          /* =================================================
             LETTER MODAL
          ================================================= */

          .letter-modal-content {

            position: relative;

            width: 100%;

            max-width: 580px;

            margin: auto;

          }


          .modal-envelope {

            position: relative;

            width: min(420px, 88vw);

            height: 240px;

            margin:
              220px auto 0;

            perspective: 1400px;

          }


          .modal-envelope-body {

            position: absolute;

            inset: 0;

            z-index: 4;

            overflow: hidden;

            border-radius: 24px;

            background:
              linear-gradient(
                145deg,
                #2a1428,
                #170a18
              );

            border:
              1px solid
              rgba(236,72,153,0.2);

            box-shadow:
              0 30px 80px
              rgba(0,0,0,0.55);

          }


          /* =================================================
             LETTER PAPER - READABLE POSITION
          ================================================= */

          .modal-letter-paper {

            position: absolute;

            z-index: 6;

            left: 7%;
            right: 7%;

            top: 45px;

            height: 380px;

            overflow-y: auto;

            padding:
              32px 30px;

            border-radius:
              18px;

            background:
              linear-gradient(
                145deg,
                #fffafb,
                #f9eaf1
              );

            color: #4b2638;

            box-shadow:
              0 20px 60px
              rgba(0,0,0,0.35);

            opacity: 0;

            transform:
              scale(0.94);

            transition:
              top
              0.85s
              0.35s
              cubic-bezier(
                0.2,
                0.8,
                0.2,
                1
              ),
              opacity
              0.4s
              0.25s
              ease,
              transform
              0.7s
              0.3s
              ease;

          }


          .modal-envelope.open
          .modal-letter-paper {

            top: -185px;

            opacity: 1;

            transform:
              scale(1);

          }


          .modal-letter-paper::-webkit-scrollbar {
            width: 4px;
          }


          .modal-letter-paper::-webkit-scrollbar-track {
            background:
              rgba(190,24,93,0.05);
          }


          .modal-letter-paper::-webkit-scrollbar-thumb {

            background:
              rgba(190,24,93,0.25);

            border-radius: 999px;

          }


          /* =================================================
             MODAL FLAP
          ================================================= */

          .modal-envelope-flap {

            position: absolute;

            left: 0;
            right: 0;
            top: 0;

            z-index: 10;

            height: 60%;

            background:
              linear-gradient(
                180deg,
                #351731,
                #1c0b1c
              );

            clip-path:
              polygon(
                0 0,
                100% 0,
                50% 85%
              );

            transform-origin:
              top center;

            backface-visibility:
              hidden;

            transition:
              transform
              0.8s
              cubic-bezier(
                0.4,
                0,
                0.2,
                1
              );

          }


          .modal-envelope.open
          .modal-envelope-flap {

            transform:
              rotateX(-175deg);

            z-index: 3;

          }


          /* =================================================
             STAGE
          ================================================= */

          .letter-stage {

            display: flex;

            min-height: 100dvh;

            align-items: center;

            justify-content: center;

            padding:
              30px 20px 50px;

          }


          /* =================================================
             MOBILE
          ================================================= */

          @media (max-width: 640px) {

            .letter-stage {

              min-height: 100dvh;

              align-items: center;

              padding:
                70px 14px 30px;

            }


            .modal-envelope {

              width: min(350px, 92vw);

              height: 205px;

              margin:
                190px auto 0;

            }


            .modal-letter-paper {

              left: 5%;
              right: 5%;

              top: 35px;

              height:
                min(370px, 55vh);

              padding:
                25px 20px;

            }


            .modal-envelope.open
            .modal-letter-paper {

              top: -165px;

            }


            .modal-envelope-flap {
              height: 60%;
            }

          }


          @media (max-height: 650px) {

            .letter-stage {

              align-items: flex-start;

              overflow-y: auto;

              padding-top: 40px;

            }


            .modal-envelope {
              margin-top: 190px;
            }


            .modal-letter-paper {
              height: 330px;
            }

          }

        `}
      </style>

    </div>
  );
}



/* =========================================================
   ENVELOPE CARD
========================================================= */

function EnvelopeCard({
  letter,
  opened,
  onOpen,
}) {

  return (

    <button
      type="button"
      onClick={onOpen}
      className="
        envelope-wrapper
        group
        w-full
        text-left
      "
    >

      <div className="envelope">

        <div className="envelope-back" />

        <div className="envelope-flap" />

        <div className="envelope-left" />

        <div className="envelope-right" />

        <div className="envelope-bottom" />


        {/* Wax Seal */}

        <div className="wax-seal">
          ♥
        </div>


        {/* Icon */}

        <div
          className="
            absolute
            left-5
            top-5
            z-10
            text-2xl
          "
        >
          {letter.icon}
        </div>


        {/* Opened */}

        {opened && (

          <div
            className="
              absolute
              right-4
              top-4
              z-10
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-pink-400/15
              bg-black/30
              px-3
              py-1
              text-[9px]
              font-semibold
              uppercase
              tracking-wider
              text-pink-300
              backdrop-blur-md
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-pink-400
              "
            />

            Opened

          </div>

        )}


        {/* Bottom Information */}

        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
            z-20
          "
        >

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-pink-400
            "
          >
            Letter {String(letter.id).padStart(2, "0")}
          </p>


          <h3
            className="
              handwritten
              mt-1
              text-xl
              text-[#fff0f6]
              sm:text-2xl
            "
          >
            {letter.title}
          </h3>

        </div>

      </div>


      <div className="px-2 pt-5">

        <p
          className="
            text-sm
            text-[#887984]
          "
        >
          {letter.label}
        </p>


        <div
          className="
            mt-2
            flex
            items-center
            gap-2
            text-xs
            font-semibold
            text-pink-500
          "
        >

          {opened
            ? "Read Again"
            : "Open Envelope"}

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </div>

      </div>

    </button>
  );
}



/* =========================================================
   LETTER MODAL
========================================================= */

function LetterModal({
  letter,
  opening,
  onClose,
}) {

  return (

    <div
      className="
        fixed
        inset-0
        z-50
        overflow-y-auto
        bg-black/90
        backdrop-blur-xl
      "
      onClick={onClose}
    >


      {/* Close Button */}

      <button
        type="button"
        onClick={onClose}
        className="
          fixed
          right-5
          top-5
          z-[100]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#150b16]/90
          text-xl
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-pink-500/30
          hover:bg-pink-500/10
        "
      >
        ×
      </button>


      {/* Stage */}

      <div
        className="letter-stage"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <div className="letter-modal-content">


          {/* Envelope */}

          <div
            className={`
              modal-envelope
              ${opening ? "open" : ""}
            `}
          >


            {/* Envelope Body */}

            <div className="modal-envelope-body">

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-pink-500/[0.05]
                  to-transparent
                "
              />


              <div
                className="
                  absolute
                  inset-0
                  opacity-50
                "
                style={{
                  clipPath:
                    "polygon(0 30%, 50% 70%, 100% 30%, 100% 100%, 0 100%)",
                  background:
                    "linear-gradient(145deg, #241124, #160917)",
                }}
              />

            </div>


            {/* =================================================
                LETTER PAPER
            ================================================= */}

            <div className="modal-letter-paper">

              <div className="text-center">


                <span className="text-3xl">
                  {letter.icon}
                </span>


                <p
                  className="
                    mt-3
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-pink-600/60
                  "
                >
                  Open When
                </p>


                <h2
                  className="
                    handwritten
                    mt-2
                    text-3xl
                    font-semibold
                    leading-tight
                    text-[#6d2948]
                    sm:text-4xl
                  "
                >
                  {letter.title.replace(
                    "Open when ",
                    ""
                  )}
                </h2>


                <div
                  className="
                    mx-auto
                    my-5
                    h-px
                    w-16
                    bg-gradient-to-r
                    from-transparent
                    via-pink-400/50
                    to-transparent
                  "
                />


                <p
                  className="
                    handwritten
                    text-xl
                    leading-8
                    text-[#573144]
                    sm:text-2xl
                    sm:leading-9
                  "
                >
                  {letter.message}
                </p>


                <div className="mt-7">

                  <span className="text-2xl">
                    ❤️
                  </span>


                  <p
                    className="
                      handwritten
                      mt-2
                      text-lg
                      text-[#8c4968]
                    "
                  >
                    Always yours
                  </p>

                </div>

              </div>

            </div>


            {/* Envelope Flap */}

            <div className="modal-envelope-flap" />


            {/* Seal */}

            <div
              className={`
                wax-seal
                transition-all
                duration-500

                ${
                  opening
                    ? "scale-0 opacity-0"
                    : ""
                }
              `}
            >
              ♥
            </div>

          </div>


          {/* Bottom Button */}

          <div
            className="
              mt-10
              text-center
            "
          >

            <button
              type="button"
              onClick={onClose}
              className="
                rounded-full
                border
                border-pink-500/20
                bg-pink-500/[0.07]
                px-7
                py-3
                text-sm
                font-semibold
                text-pink-200
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-pink-500/40
                hover:bg-pink-500/[0.12]
              "
            >
              Keep This Letter ❤️
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


export default OpenWhen;