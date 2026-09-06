import { useEffect, useState } from "react";


const journey = [
  {
    id: 1,
    icon: "👀❤️",
    title: "Day 1",
    subtitle: "The Beginning",
    date: "00-09-2024 ",
    location: "Hmare Class ke bhar -> fr lab 8 tak  ",
    color: "from-pink-500 to-rose-500",
    message: "This was the day hmari story start hui thiii  thori introduction se, shukr mnao ki maine Rewari suna thaa nhi to ye story create hi nhi hoti 😂😂",
    details:
      " Ham dono hi late thee  class mai aaye tab dekha koi hai nhi fr time table check karke pta lga ki lab hai  fr dono sathh lab tk gye tmne wo patte wala bag taanga hua thaa 😅😅 us patte waale bag ne bhi kaafi help ki meri tmse new conversation start karne mai.. .  ",
    photo: "/photos/temp.jpg",
  },
  {
    id: 2,
    icon: "💬",
    title: "First Talk",
    subtitle: "The First Conversation",
    date: "25-09-2024",
    location: "Hmare Class mai ,,,,  Tmhari kasam mai srf hawa khaane hi aaya thaa  ",
    color: "from-purple-500 to-pink-500",
    message: "then One conversation changed everything  kahani whi se start kardi thii hmne .",
    details:
      "agar yaad ho to mai tapan ke saath baithne gya or usne mna kar diya  ki wha baith wha shi hawa aayegi .....😅  fr wha tm thii  or  luck to dekho us lecture mai jo teacher the unhone kuchh karwaya nhi or next waali adjustment thii jisse hm ek dusre ko achhe se jaan paaye samjh paaye or us din purple phone or second day new phone,.... or new topic mere liye 😂😂?",
    photo: "/photos/temp.jpg",
  },
  {
    id: 3,
    icon: "🫂💕",
    title: "First Meet",
    subtitle: "Finally Together",
    date: "09-10-2024",
    location: "Pamir Block  top Floor",
    color: "from-orange-400 to-pink-500",
    message: "  The first time we stood together in the same place. My hand was around your waist, and your hand was resting on my shoulder while we were rehearsing.",
    details:
      "Rehersal ke time mai tmne mujhe apne shoulder pe haath rakha thaa or mai tmhare waist pe   sbse best perform kar rhe thee ham jha puri class hesitate kar rhi thi ek dusre ka haath pakarne mai 😂😂  best perform thaa jaan wo or mai bhi itna comfort feel kar rha thaa like tm meri hi ho uss time se hi .",
    photo: "/photos/temp.jpg",
  },
  {
    id: 4,
    icon: "🌹",
    title: "First Romance",
    subtitle: "A Day To Remember",
    date: "DD Month YYYY",
    location: "Date Location",
    color: "from-red-500 to-pink-500",
    message: "A simple day that became one of my favorite memories.",
    details:
      "Write everything you remember about your first date here.",
    photo: "/photos/temp.jpg",
  },
  {
    id: 5,
    icon: "🌧️",
    title: "First Rain",
    subtitle: "first memorable rainy day",
    date: "27-12-2024",
    location: "in our College ",
    color: "from-blue-500 to-purple-500",
    message: "Our first  memorable rainy day.",
    details:
      "hmara exam thaa  hmne pehle study kari  fr caffet area mai aa kar mast thandi thandi hawa chal rhi thii or baarish usme garma garam maggie.  din thaa wo bhi one of the best day of our story",
    photo: "/photos/temp.jpg",
  },
  {
    id: 6,
    icon: "✈️",
    title: "First Trip",
    subtitle: "Bunk Together 😂",
    date: "25-04-2025",
    location: "MG Road ka Mall thaa koi ",
    color: "from-cyan-400 to-blue-500",
    message: "Some places become special because of the person beside you.",
    details:
      "first trip thaa  hmara kitne mushkil se tmhe convence karna padha fr jaa kr jhuti shadi karwaai nakli papa bnaana para ... tab jaa kar college se nikal paayi tm fr cab se mall short time mai acchi memories create kari 1st or best moment thaa hmara or metro station mai good bei kiss public mai .....sb kuchh tmhare saare efforts, love, care sb bhut jyada precious hai mere liyee .",
    photo: "/photos/temp.jpg",
  },
  {
    id: 7,
    icon: "💍",
    title: "1st Anniversary",
    subtitle: "One Beautiful Year",
    date: "26-10-2025",
    location: "Anniversary Location",
    color: "from-yellow-400 to-pink-500",
    message: "One year. Countless memories. And so much more to come.",
    details:
      "1st Anniversary  thaa special jo digitally possible hua wo kara maine   or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️ ....Love you so muchhhhhh  ❤️",
    photo: "/photos/temp.jpg",
  },
  {
    id: 8,
    icon: "✨",
    title: "Today",
    subtitle: "Still Us",
    date: "Today",
    location: "Our Present",
    color: "from-pink-500 to-purple-600",
    message: "And after everything we've been through, we're still here… ❤️",
    details:
      "Write your current message to each other here.",
    photo: "/photos/temp.jpg",
  },
];


function App() {
  const [selected, setSelected] = useState(null);

  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /*
    CHANGE THIS DATE
    Put your actual relationship starting date here.

    Example:
    const relationshipStart = new Date("2024-02-14T20:00:00");
  */

  const relationshipStart = new Date("2024-10-26T22:15:00");


  useEffect(() => {

    const calculateTime = () => {

      const now = new Date();

      let years =
        now.getFullYear() - relationshipStart.getFullYear();

      let months =
        now.getMonth() - relationshipStart.getMonth();

      let days =
        now.getDate() - relationshipStart.getDate();


      if (days < 0) {

        months--;

        const previousMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        );

        days += previousMonth.getDate();

      }


      if (months < 0) {

        years--;

        months += 12;

      }


      const startToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );


      const startTimeToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        relationshipStart.getHours(),
        relationshipStart.getMinutes(),
        relationshipStart.getSeconds()
      );


      let diff = now - startTimeToday;


      if (diff < 0) {

        diff += 24 * 60 * 60 * 1000;

      }


      const hours =
        Math.floor(diff / (1000 * 60 * 60)) % 24;

      const minutes =
        Math.floor(diff / (1000 * 60)) % 60;

      const seconds =
        Math.floor(diff / 1000) % 60;


      setTimeTogether({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });

    };


    calculateTime();

    const interval =
      setInterval(calculateTime, 1000);

    return () => clearInterval(interval);

  }, []);


  return (

    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#050208] via-[#0b0510] to-[#120617] text-white">


      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#261026_0%,#100713_42%,#050208_78%)]" />


        {/* Pink Glow */}

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


        {/* Purple Glow */}

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


        {/* Bottom Glow */}

        <div
          className="
            absolute
            bottom-[5%]
            left-[30%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-rose-600/5
            blur-[120px]
          "
        />


        {/* Stars */}

        <div className="stars">

          {Array.from({ length: 80 }).map(
            (_, index) => (

              <span
                key={index}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                }}
              />

            )
          )}

        </div>


        {/* Floating Hearts */}

        <div className="floating-heart heart1">
          ♥
        </div>

        <div className="floating-heart heart2">
          ♥
        </div>

        <div className="floating-heart heart3">
          ♥
        </div>

      </div>



      {/* ================= HERO ================= */}

      <section
        className="
          relative
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >


        {/* Top Tag */}

        <div className="mb-8 animate-[fadeDown_1s_ease]">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-pink-500/20
              bg-pink-500/[0.07]
              px-5
              py-2
              text-sm
              text-pink-300
              backdrop-blur-xl
              shadow-[0_0_30px_rgba(236,72,153,0.08)]
            "
          >
            ✨ Our Universe ✨
          </span>

        </div>



        <p
          className="
            mb-5
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.4em]
            text-pink-500
            font-medium
            animate-[fadeUp_1s_ease]
          "
        >

          A story written by two hearts

        </p>



        {/* Names */}

        <h1
          className="
            font-serif
            text-5xl
            font-semibold
            tracking-tight
            text-[#fff5f8]
            sm:text-7xl
            md:text-8xl
            animate-[fadeUp_1.15s_ease]
          "
        >

          ANIRUDDH{" "}

          <span
            className="
              inline-block
              animate-[heartbeat_1.6s_ease-in-out_infinite]
              text-pink-500
              drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]
            "
          >
            ❤️
          </span>

          {" "}ANJALI

        </h1>



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

          <span className="opacity-70">
            ♡
          </span>

          <span className="text-lg">
            ♥
          </span>

          <span className="opacity-70">
            ♡
          </span>

        </div>



        <p
          className="
            mt-7
            max-w-2xl
            font-serif
            text-lg
            leading-8
            text-[#c7b6c1]
            sm:text-xl
          "
        >

          Two people. One story.

          <br />

          Countless memories.

        </p>



        {/* ================= COUNTER ================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-3
            gap-3
            sm:grid-cols-6
            sm:gap-4
          "
        >

          <CounterBox
            value={timeTogether.years}
            label="Years"
          />

          <CounterBox
            value={timeTogether.months}
            label="Months"
          />

          <CounterBox
            value={timeTogether.days}
            label="Days"
          />

          <CounterBox
            value={timeTogether.hours}
            label="Hours"
          />

          <CounterBox
            value={timeTogether.minutes}
            label="Minutes"
          />

          <CounterBox
            value={timeTogether.seconds}
            label="Seconds"
          />

        </div>



        {/* Explore Button */}

        <a
          href="#journey"
          className="
            group
            relative
            mt-12
            flex
            items-center
            gap-3
            overflow-hidden
            rounded-full
            border
            border-pink-300/10
            bg-gradient-to-r
            from-[#db2777]
            via-[#e11d74]
            to-[#be185d]
            bg-[length:200%_100%]
            px-8
            py-4
            font-semibold
            text-white
            shadow-[0_12px_35px_rgba(219,39,119,0.28)]
            transition-all
            duration-500
            hover:bg-right
            hover:-translate-y-1
            hover:shadow-[0_16px_45px_rgba(236,72,153,0.38)]
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
            Explore Our Story
          </span>

          <span
            className="
              relative
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          >
            ↓
          </span>

        </a>



        <div
          className="
            absolute
            bottom-7
            animate-bounce
            text-pink-500/40
          "
        >
          ↓
        </div>

      </section>



      {/* ================= JOURNEY ================= */}

      <section
        id="journey"
        className="
          relative
          mx-auto
          max-w-6xl
          px-6
          pb-32
        "
      >


        {/* Heading */}

        <div className="mb-20 text-center">

          <p
            className="
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.35em]
              text-pink-500
              font-medium
            "
          >
            Our Journey
          </p>


          <h2
            className="
              mt-4
              font-serif
              text-4xl
              font-semibold
              text-[#fff4f8]
              sm:text-5xl
              md:text-6xl
            "
          >
            Moments That Became Memories
          </h2>


          <div
            className="
              mx-auto
              mt-5
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-pink-500/60
              to-transparent
            "
          />


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              sm:text-base
              leading-7
              text-[#978894]
            "
          >

            Every chapter has a beginning, a little chaos, a lot of love,
            and a memory worth keeping forever.

          </p>

        </div>



        {/* ================= TIMELINE ================= */}

        <div className="relative">


          {/* Center Line */}

          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-pink-500/0
              via-pink-500/35
              to-pink-500/0
              md:left-1/2
              md:-translate-x-1/2
            "
          />


          <div className="space-y-12 md:space-y-16">

            {journey.map((item, index) => (

              <JourneyCard
                key={item.id}
                item={item}
                index={index}
                onClick={() =>
                  setSelected(item)
                }
              />

            ))}

          </div>

        </div>

      </section>



      {/* ================= FINAL SECTION ================= */}

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
            h-40
            w-80
            -translate-x-1/2
            bg-pink-600/5
            blur-3xl
          "
        />


        <p
          className="
            relative
            text-5xl
            animate-[heartbeat_1.6s_ease-in-out_infinite]
            drop-shadow-[0_0_24px_rgba(236,72,153,0.3)]
          "
        >
          ❤️
        </p>


        <h2
          className="
            relative
            mt-6
            font-serif
            text-4xl
            font-semibold
            text-[#fff5f8]
            sm:text-5xl
          "
        >

          Our story isn't over.

        </h2>


        <p
          className="
            relative
            mx-auto
            mt-5
            max-w-xl
            leading-7
            text-[#978894]
          "
        >

          There are still places to go, pictures to take, fights to survive,
          laughs to share and memories waiting to be made.

        </p>


        <button
          onClick={() =>
            document
              .getElementById("journey")
              .scrollIntoView({
                behavior: "smooth",
              })
          }
          className="
            relative
            mt-8
            rounded-full
            border
            border-pink-500/25
            bg-pink-500/[0.08]
            px-8
            py-4
            font-semibold
            text-pink-300
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-pink-500/45
            hover:bg-pink-500/[0.13]
            hover:text-pink-200
            hover:shadow-[0_10px_35px_rgba(236,72,153,0.12)]
          "
        >

          Continue Our Story →

        </button>


        <p
          className="
            mt-12
            text-sm
            text-[#665864]
          "
        >

          Made with ❤️ for Aniruddh & Anjali

        </p>

      </section>



      {/* ================= MODAL ================= */}

      {selected && (

        <JourneyModal
          item={selected}
          onClose={() =>
            setSelected(null)
          }
        />

      )}



      {/* ================= CSS ================= */}

      <style>
        {`

          html {
            scroll-behavior: smooth;
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


          .star {

            position: absolute;

            width: 2px;

            height: 2px;

            background: #fff5f8;

            border-radius: 50%;

            opacity: 0.2;

            animation: twinkle infinite ease-in-out;

          }


          @keyframes twinkle {

            0%, 100% {

              opacity: 0.08;

              transform: scale(1);

            }


            50% {

              opacity: 0.55;

              transform: scale(1.7);

            }

          }


          .floating-heart {

            position: absolute;

            color: rgba(236, 72, 153, 0.08);

            font-size: 55px;

            filter: drop-shadow(
              0 0 15px rgba(236, 72, 153, 0.12)
            );

            animation:
              floatHeart 12s infinite ease-in-out;

          }


          .heart1 {

            left: 15%;

            top: 30%;

          }


          .heart2 {

            right: 15%;

            top: 20%;

            animation-delay: 3s;

          }


          .heart3 {

            left: 50%;

            bottom: 15%;

            animation-delay: 6s;

          }


          @keyframes floatHeart {

            0%, 100% {

              transform:
                translateY(0)
                rotate(0deg);

            }


            50% {

              transform:
                translateY(-40px)
                rotate(15deg);

            }

          }


          .glass {

            background:
              linear-gradient(
                145deg,
                rgba(255,255,255,0.045),
                rgba(255,255,255,0.018)
              );

            border:
              1px solid
              rgba(255,255,255,0.07);

            backdrop-filter:
              blur(18px);

            -webkit-backdrop-filter:
              blur(18px);

          }

        `}
      </style>

    </div>

  );
}



/* =========================================================
   COUNTER
========================================================= */

function CounterBox({ value, label }) {

  return (

    <div
      className="
        glass
        min-w-[82px]
        rounded-2xl
        px-3
        py-4
        shadow-[0_12px_40px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-pink-500/20
        hover:shadow-[0_15px_40px_rgba(236,72,153,0.08)]
      "
    >

      <div
        className="
          text-2xl
          font-semibold
          text-[#fff5f8]
        "
      >

        {String(value).padStart(2, "0")}

      </div>


      <div
        className="
          mt-1
          text-[10px]
          uppercase
          tracking-widest
          text-[#746671]
        "
      >

        {label}

      </div>

    </div>

  );

}



/* =========================================================
   JOURNEY CARD
========================================================= */

function JourneyCard({
  item,
  index,
  onClick,
}) {

  const isRight =
    index % 2 !== 0;


  return (

    <div
      className={`relative flex items-center md:w-full ${
        isRight
          ? "md:justify-end"
          : "md:justify-start"
      }`}
    >


      {/* Timeline Dot */}

      <div
        className="
          absolute
          left-5
          z-10
          flex
          h-9
          w-9
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          border
          border-pink-500/30
          bg-[#130a15]
          text-sm
          shadow-[0_0_22px_rgba(236,72,153,0.18)]
          md:left-1/2
        "
      >

        {item.icon}

      </div>



      <button
        onClick={onClick}
        className={`group ml-12 w-full text-left md:ml-0 md:w-[44%] ${
          isRight
            ? "md:mr-8"
            : "md:ml-8"
        }`}
      >


        <div
          className="
            glass
            overflow-hidden
            rounded-3xl
            shadow-[0_20px_60px_rgba(0,0,0,0.30)]
            transition-all
            duration-500
            group-hover:-translate-y-2
            group-hover:border-pink-500/25
            group-hover:shadow-[0_25px_70px_rgba(236,72,153,0.10)]
          "
        >


          {/* ================= IMAGE ================= */}

          <div
            className="
              relative
              h-48
              overflow-hidden
              bg-gradient-to-br
              from-[#240c23]
              to-[#100612]
            "
          >

            <img
              src={item.photo}
              alt={item.title}
              className="
                h-full
                w-full
                object-cover
                opacity-70
                transition-transform
                duration-700
                group-hover:scale-110
              "
              onError={(e) => {
                e.currentTarget.style.display =
                  "none";
              }}
            />


            {/* Item Color */}

            <div
              className={`
                absolute
                inset-0
                bg-gradient-to-br
                ${item.color}
                opacity-[0.16]
              `}
            />


            {/* Dark Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#080309]/80
                via-black/5
                to-transparent
              "
            />


            {/* Main Emoji */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >

              <span
                className="
                  text-6xl
                  drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)]
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >

                {item.icon}

              </span>

            </div>


            {/* Date */}

            <div
              className="
                absolute
                bottom-4
                left-5
                rounded-full
                border
                border-white/10
                bg-black/45
                px-4
                py-1.5
                text-xs
                text-[#f7eaf1]
                backdrop-blur-xl
              "
            >

              {item.date}

            </div>

          </div>



          {/* ================= CONTENT ================= */}

          <div className="p-6">


            <div
              className="
                flex
                items-start
                justify-between
                gap-4
              "
            >


              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-pink-500
                  "
                >

                  Chapter{" "}
                  {String(item.id).padStart(
                    2,
                    "0"
                  )}

                </p>


                <h3
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    font-semibold
                    text-[#fff4f8]
                  "
                >

                  {item.title}

                </h3>


                <p
                  className="
                    mt-1
                    text-sm
                    text-[#82737f]
                  "
                >

                  {item.subtitle}

                </p>

              </div>


              <span
                className="
                  text-2xl
                  transition-transform
                  duration-300
                  group-hover:scale-125
                "
              >

                {item.icon}

              </span>

            </div>



            <div
              className="
                mt-5
                flex
                items-start
                gap-2
                text-sm
                leading-6
                text-[#a596a1]
              "
            >

              📍 {item.location}

            </div>


            <p
              className="
                mt-4
                text-sm
                italic
                leading-6
                text-[#cabcc5]
              "
            >

              "{item.message}"

            </p>


            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-pink-500
              "
            >

              Open Memory

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

        </div>

      </button>

    </div>

  );

}



/* =========================================================
   MODAL
========================================================= */

function JourneyModal({
  item,
  onClose,
}) {

  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/85
        p-4
        backdrop-blur-xl
      "
      onClick={onClose}
    >


      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-2xl
          overflow-y-auto
          rounded-3xl
          border
          border-white/[0.07]
          bg-gradient-to-b
          from-[#130914]
          to-[#09040b]
          shadow-[0_30px_100px_rgba(0,0,0,0.7)]
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >


        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/50
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



        {/* ================= MODAL IMAGE ================= */}

        <div
          className="
            relative
            h-64
            overflow-hidden
            bg-gradient-to-br
            from-[#240c23]
            to-[#100612]
            sm:h-80
          "
        >

          <img
            src={item.photo}
            alt={item.title}
            className="
              h-full
              w-full
              object-cover
              opacity-80
            "
            onError={(e) => {
              e.currentTarget.style.display =
                "none";
            }}
          />


          <div
            className={`
              absolute
              inset-0
              bg-gradient-to-br
              ${item.color}
              opacity-20
            `}
          />


          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#09040b]
              via-transparent
              to-black/10
            "
          />


          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >

            <span
              className="
                text-8xl
                drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)]
              "
            >

              {item.icon}

            </span>

          </div>

        </div>



        {/* ================= MODAL CONTENT ================= */}

        <div className="p-7 sm:p-10">


          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-pink-500
            "
          >

            Chapter{" "}
            {String(item.id).padStart(
              2,
              "0"
            )}

          </p>


          <h2
            className="
              mt-3
              font-serif
              text-4xl
              font-semibold
              text-[#fff4f8]
            "
          >

            {item.title}

          </h2>


          <p
            className="
              mt-2
              text-[#82737f]
            "
          >

            {item.subtitle}

          </p>



          <div
            className="
              mt-7
              grid
              gap-3
              sm:grid-cols-2
            "
          >

            <InfoBox
              icon="📅"
              title="Date"
              value={item.date}
            />

            <InfoBox
              icon="📍"
              title="Location"
              value={item.location}
            />

          </div>



          {/* Details */}

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-pink-500/10
              bg-pink-500/[0.045]
              p-5
            "
          >

            <p
              className="
                text-sm
                leading-7
                text-[#c9bbc4]
              "
            >

              {item.details}

            </p>

          </div>



          {/* Message */}

          <div className="mt-7 text-center">

            <div
              className="
                mx-auto
                mb-5
                h-px
                w-20
                bg-gradient-to-r
                from-transparent
                via-pink-500/50
                to-transparent
              "
            />


            <p
              className="
                font-serif
                text-lg
                italic
                leading-8
                text-pink-200
              "
            >

              ❤️ "{item.message}"

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}



/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({
  icon,
  title,
  value,
}) {

  return (

    <div
      className="
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.025]
        p-4
      "
    >

      <div
        className="
          text-sm
          text-[#786a75]
        "
      >

        {icon} {title}

      </div>


      <div
        className="
          mt-2
          text-sm
          font-medium
          leading-6
          text-[#e4d8df]
        "
      >

        {value}

      </div>

    </div>

  );

}


export default App;