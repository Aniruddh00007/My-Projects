import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/* =========================================================
   JOURNEY DATA
========================================================= */

const journey = [
  {
    id: 1,
    icon: "",
    title: "Day 1",
    subtitle: "The Beginning",
    date: "25-10-2024 ",
    location:
      "ye pic jaan tmhare Bus mai click kara thaa hmne  ",
    color: "from-pink-500 to-rose-500",
    message:
      "This was the day hmari story start hui thiii  . main or important day thaa ye jaan😂😂",
    details:
      " Deepawali ke holidays parne waale the hm dono HUG plan kar rhe thee ki jaane se pehle jhappi to krna hi hai , par kyu karna thaa madam relation mai to thee nhi ham . 😅  Fr jaan hm bus mai thee or hmne ye pic click kari or 1st kiss jo ki completely thaa nhi bt thaa ... jiske baad aapne next day mujhe reserve kar hi liya thaa .....  from the bottom of my heart i really love uh ye bol kr ,.... and from the bottom of my heart I also Love uh meri shona.❤️😘 ",
    photo: "/photos/day1.jpg",
  },

  {
    id: 2,
    icon: "💬",
    title: "First Talk",
    subtitle: "The First Conversation",
    date: "25-09-2024",
    location:
      "Hmare Class mai ,,,,  Tmhari kasam mai srf hawa khaane hi aaya thaa  ",
    color: "from-purple-500 to-pink-500",
    message:
      "then One conversation changed everything  kahani whi se start kardi thii hmne .",
    details:
      "agar yaad ho to mai tapan ke saath baithne gya or usne mna kar diya  ki wha baith wha shi hawa aayegi .....😅  fr wha tm thii  or  luck to dekho us lecture mai jo teacher the unhone kuchh karwaya nhi or next waali adjustment thii jisse hm ek dusre ko achhe se jaan paaye samjh paaye or us din purple phone or second day new phone,.... or new topic mere liye 😂😂?",
    photo: "/photos/1sttalk.jpg",
  },

  {
    id: 3,
    icon: "",
    title: "First Meet",
    subtitle: "Finally Together",
    date: "09-10-2024",
    location: "Pamir Block  top Floor",
    color: "from-orange-400 to-pink-500",
    message:
      "  The first time we stood together in the same place. My hand was around your waist, and your hand was resting on my shoulder while we were rehearsing.",
    details:
      "Rehersal ke time mai tmne mere shoulder pe haath rakha thaa or mai tmhare waist pe   sbse best perform kar rhe thee ham jha puri class hesitate kar rhi thi ek dusre ka haath pakarne mai 😂😂  best performance  thaa jaan wo or mai bhi itna comfort feel kar rha thaa like tm meri hi ho uss time se hi .",
    photo: "/photos/1st meet.png",
  },

  {
    id: 4,
    icon: "",
    title: "First Romance",
    subtitle: "A Day To Remember",
    date: "13-11-2024",
    location: "Hmara Classroom ...., last bench",
    color: "from-red-500 to-pink-500",
    message:
      "A simple day that became one of my favorite memories.",
    details:
      " Shayad tumhe yaad ho, hum apne official relationship ke bilkul initial phase mein the. Us din hum class mein aa gaye the, lekin  wahan aur koi nahi aaya tha, kyunki sab post-Diwali celebration aur  stalls ki preparations mein busy the Hum bhi bas class se nikalne hi wale the, tab maine tumhe   approach kiya… 🙈❤️ Aur phir hum last bench par gaye, jahan   humne apni first kiss ki. 💋   Aur uske baad tumhara reaction… woh main shayad kabhi nahi bhool sakta. 🙈 Tum ekdum out of the world si ho gayi thi—  tumhari aankhein band thi, tum long breaths le rahi thi, aur kuch der ke liye aisa lag raha tha jaise tum completely usi moment mein kho gayi ho. ❤️  Woh moment thoda nervous, thoda unexpected, lekin hum dono ke liye bahut hi special tha. 🫶🏻     ...........................bt ye jo image h ye bhi ek romantic Moment ko hi yaad dilaata hai jisse hm dono kabhi nhi bhulne waale..........., or isse hme private hi rkhna chahiye 🙈🙈  ",
    photo: "/photos/romance.jpg",
  },

  {
    id: 5,
    icon: "",
    title: "First Rain",
    subtitle: "first memorable rainy day",
    date: "27-12-2024",
    location: "in our College ",
    color: "from-blue-500 to-purple-500",
    message: "Our first  memorable rainy day.",
    details:
      "hmara exam thaa  hmne pehle study kari  fr caffet area mai aa gye wha mast thandi thandi hawa chal rhi thii or baarish usme hmne garma garam maggie or coffes order kara .  din thaa wo bhi one of the best day of our story........................  ye whi ki pic h   par same day ki nhi hmne exam ke dar se click nhi kara,... hmne nhi tmne ... tmhi darti thii exam sb se   mai to har moments ko memorable bna rha thaa or aaj bhi same kosish hai ..... Kal jab budhape mein tumhare daant bhi gir jayenge na 😂❤️, tab bhi in moments ko yaad karte hi dil phir se wahi young wali feeling se bhar jayega… jaise hum ek baar phir apni kahani ke unhi khoobsurat dino mein laut aaye hon. ❤️✨",
    photo: "/photos/Rain.png",
  },

  {
    id: 6,
    icon: "",
    title: "First Trip",
    subtitle: "Bunk Together 😂",
    date: "25-04-2025",
    location: "MG Road ka Mall thaa koi ",
    color: "from-cyan-400 to-blue-500",
    message:
      "Some places become special because of the person beside you.",
    details:
      "first trip thaa  hmara kitne mushkil se tmhe convence kara thaa maine, fr jaa kr jhuti shadi karwaai ,nakli papa bnaana para ... ,tab jaa kar college se nikal paayi tm ,fr cab se mall gye, short time mai acchi memories create kari jaan hmne, 1st or best moment thaa hmara or metro station mai good bei kiss public mai .....sb kuchh ,tmhare saare efforts, love, care sb bhut jyada precious hai mere liyee jaan .",
    photo: "/photos/1sttrip.png",
  },

  {
    id: 7,
    icon: "",
    title: "1st Anniversary",
    subtitle: "One Beautiful Year",
    date: "26-10-2025",
    location: "Anniversary Location",
    color: "from-yellow-400 to-pink-500",
    message:
      "One year. Countless memories. And so much more to come.",
    details:
      "1st Anniversary  thaa hmara , special to kuchh nhi but  jo digitally possible hua wo kara maine,   or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️ ....Love you so muchhhhhh my LOVE ❤️",
    photo: "/photos/1stAnniversary.png",
  },

  {
    id: 8,
    icon: "",
    title: "Today",
    subtitle: "Still Us",
    date: "Today",
    location: "Our Present",
    color: "from-pink-500 to-purple-600",
    message:
      "And after everything we've been through, we're still here… ❤️",
    details: "Ham aaj bhi saath hai or bhagwan ji ke aashirwaad se hmara pyaar increase hi hua hai , or mai hmseha chahunga ye hmesha barta hi rhe, jaan kuchh dikkate hai abhi career ,situation, financial chije bhi , bt trust me sb thk hoga mai bs start hi nhi kar paa rha bs ek startup fr chije khud shi honi start ho jayegi just tmse request hai , meri rehna hmesha , and apna trust mt khtm karna mere se or mai sure hu ki hm next stage mai le jaaynege next year hmare rishte ko ,  baaki I love uh hmesha ❤️❤️",
    photo: "/photos/Today.png",
  },
];

/* =========================================================
   APP
========================================================= */

function App() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-gradient-to-b
        from-[#050208]
        via-[#0b0510]
        to-[#120617]
        font-['Poppins']
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <RomanticBackground />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[100dvh]
          flex-col
          items-center
          justify-center
          overflow-hidden
          px-4
          py-16
          text-center
          sm:px-6
          sm:py-20
        "
      >
        {/* decorative kiss */}
        <span className="hero-kiss hero-kiss-1">💋</span>
        <span className="hero-kiss hero-kiss-2">💋</span>
        <span className="hero-sparkle hero-sparkle-1">✨</span>
        <span className="hero-sparkle hero-sparkle-2">✨</span>

        <div className="mb-6 animate-[fadeDown_1s_ease] sm:mb-8">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-pink-500/20
              bg-pink-500/[0.07]
              px-4
              py-2
              text-xs
              text-pink-300
              shadow-[0_0_30px_rgba(236,72,153,0.08)]
              backdrop-blur-xl
              sm:px-5
              sm:text-sm
            "
          >
            ✨ Our Universe ✨
          </span>
        </div>

        <p
          className="
            mb-4
            max-w-full
            animate-[fadeUp_1s_ease]
            text-[10px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-pink-500
            sm:mb-5
            sm:text-sm
            sm:tracking-[0.4em]
          "
        >
          A story written by two hearts
        </p>

        {/* ================= NAMES ================= */}

        <div className="w-full px-2 sm:px-4">
          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[1100px]
              items-center
              justify-center
              gap-[clamp(10px,2.5vw,28px)]
              whitespace-nowrap
            "
          >
            <span
              className="
                font-['Great_Vibes']
                text-[clamp(1.35rem,6.8vw,6rem)]
                font-normal
                leading-none
                text-[#fff5f8]
              "
            >
              AnjRuddh
            </span>

            <span
              className="
                shrink-0
                animate-[heartbeat_1.6s_ease-in-out_infinite]
                text-[clamp(1.45rem,6vw,4.5rem)]
                leading-none
                text-pink-500
                drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]
              "
            >
              ❤️
            </span>

            <span
              className="
                font-['Great_Vibes']
                text-[clamp(1.35rem,6.8vw,6rem)]
                font-normal
                leading-none
                text-[#fff5f8]
              "
            >
              AniJali
            </span>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3 text-pink-500">
          <span className="animate-pulse opacity-70">♡</span>

          <span className="animate-[heartbeat_1.5s_ease-in-out_infinite] text-lg">
            ♥
          </span>

          <span className="animate-pulse opacity-70">♡</span>
        </div>

        <p
          className="
            mt-5
            max-w-2xl
            px-2
            font-['Cormorant_Garamond']
            text-base
            italic
            leading-8
            text-[#c7b6c1]
            sm:mt-7
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
            mt-10
            grid
            w-full
            max-w-3xl
            grid-cols-2
            gap-3
            sm:mt-12
            sm:grid-cols-3
            sm:gap-4
            lg:grid-cols-6
          "
        >
          <CounterBox value={timeTogether.years} label="Years" />
          <CounterBox value={timeTogether.months} label="Months" />
          <CounterBox value={timeTogether.days} label="Days" />
          <CounterBox value={timeTogether.hours} label="Hours" />
          <CounterBox value={timeTogether.minutes} label="Minutes" />
          <CounterBox value={timeTogether.seconds} label="Seconds" />
        </div>

        {/* ================= EXPLORE ================= */}

        <a
          href="#journey"
          className="
            group
            relative
            mt-10
            flex
            max-w-full
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
            px-6
            py-3.5
            text-sm
            font-semibold
            text-white
            shadow-[0_12px_35px_rgba(219,39,119,0.28)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-right
            hover:shadow-[0_16px_45px_rgba(236,72,153,0.38)]
            sm:px-8
            sm:py-4
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
            bottom-5
            hidden
            animate-bounce
            text-pink-500/50
            sm:block
          "
        >
          ↓
        </div>
      </section>

      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section
        id="journey"
        className="
          relative
          mx-auto
          max-w-6xl
          px-4
          pb-20
          sm:px-6
          sm:pb-32
        "
      >
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              text-pink-500
              sm:text-sm
            "
          >
            Our Journey
          </p>

          <h2
            className="
              mt-4
              font-['Great_Vibes']
              text-4xl
              font-semibold
              leading-tight
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
              font-['Cormorant_Garamond']
              text-lg
              italic
              leading-8
              text-[#978894]
              sm:text-xl
            "
          >
            Every chapter has a beginning, a little chaos,
            a lot of love, and a memory worth keeping forever.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">
          <div
            className="
              absolute
              left-4
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
                onClick={() => setSelected(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/5
          px-4
          py-20
          text-center
          sm:px-6
          sm:py-28
        "
      >
        <span className="final-emoji final-heart">❤️</span>
        <span className="final-emoji final-kiss">💋</span>
        <span className="final-emoji final-star">✨</span>

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
            animate-[heartbeat_1.6s_ease-in-out_infinite]
            text-4xl
            drop-shadow-[0_0_24px_rgba(236,72,153,0.3)]
            sm:text-5xl
          "
        >
          ❤️
        </p>

        <h2
          className="
            relative
            mt-6
            font-['Great_Vibes']
            text-4xl
            font-semibold
            leading-tight
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
          There are still places to go, pictures to take,
          fights to survive, laughs to share and memories
          waiting to be made.
        </p>

        <button
          onClick={() => navigate("/OpenWhen")}
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
          Explore Our Story →
        </button>

        <p className="mt-12 text-sm text-[#665864]">
          Made with ❤️ for My Anjali
        </p>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {selected && (
        <JourneyModal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}

      {/* =====================================================
          CSS / ANIMATIONS
      ===================================================== */}

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          /* ================= HEARTBEAT ================= */

          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }

            14% {
              transform: scale(1.09);
            }

            28% {
              transform: scale(1);
            }

            42% {
              transform: scale(1.14);
            }

            70% {
              transform: scale(1);
            }
          }

          /* ================= FADE ================= */

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

          /* ================= STARS ================= */

          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff5f8;
            border-radius: 999px;
            opacity: 0.2;
            box-shadow:
              0 0 5px rgba(255,255,255,.8),
              0 0 10px rgba(236,72,153,.35);
            animation: twinkle infinite ease-in-out;
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0.08;
              transform: scale(1);
            }

            50% {
              opacity: 0.8;
              transform: scale(2);
            }
          }

          /* ================= BACKGROUND PARTICLES ================= */

          .romantic-particle {
            position: absolute;
            bottom: -80px;
            pointer-events: none;
            user-select: none;
            opacity: 0;
            animation-name: romanticFloat;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            filter:
              drop-shadow(
                0 0 10px rgba(236,72,153,.25)
              );
          }

          @keyframes romanticFloat {
            0% {
              transform:
                translate3d(0, 50px, 0)
                rotate(0deg)
                scale(.7);

              opacity: 0;
            }

            12% {
              opacity: .35;
            }

            55% {
              transform:
                translate3d(30px, -50vh, 0)
                rotate(12deg)
                scale(1);
            }

            88% {
              opacity: .2;
            }

            100% {
              transform:
                translate3d(-25px, -115vh, 0)
                rotate(-15deg)
                scale(.85);

              opacity: 0;
            }
          }

          /* ================= HERO EMOJIS ================= */

          .hero-kiss,
          .hero-sparkle {
            position: absolute;
            pointer-events: none;
            user-select: none;
            z-index: 0;
          }

          .hero-kiss {
            font-size: clamp(22px, 3vw, 42px);
            opacity: .16;
            animation:
              kissFloat 6s ease-in-out infinite;
          }

          .hero-kiss-1 {
            left: 8%;
            top: 26%;
          }

          .hero-kiss-2 {
            right: 9%;
            bottom: 24%;
            animation-delay: -3s;
          }

          .hero-sparkle {
            font-size: clamp(18px, 2vw, 30px);
            opacity: .3;
            animation:
              sparklePulse 2.5s ease-in-out infinite;
          }

          .hero-sparkle-1 {
            right: 18%;
            top: 18%;
          }

          .hero-sparkle-2 {
            left: 19%;
            bottom: 17%;
            animation-delay: -1.2s;
          }

          @keyframes kissFloat {
            0%, 100% {
              transform:
                translateY(0)
                rotate(-7deg)
                scale(1);
            }

            50% {
              transform:
                translateY(-20px)
                rotate(7deg)
                scale(1.12);
            }
          }

          @keyframes sparklePulse {
            0%, 100% {
              opacity: .12;
              transform: scale(.8) rotate(0deg);
            }

            50% {
              opacity: .65;
              transform: scale(1.25) rotate(15deg);
            }
          }

          /* ================= GLASS ================= */

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

            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
          }

          /* ================= CARD IMAGE ================= */

          .memory-card-image {
            transition:
              transform .9s cubic-bezier(.2,.7,.2,1),
              filter .7s ease;
          }

          .memory-card:hover .memory-card-image {
            transform: scale(1.055);
            filter:
              saturate(1.08)
              contrast(1.03);
          }

          /* ================= MODAL ================= */

          .memory-modal-backdrop {
            animation:
              modalBackdrop .3s ease-out both;
          }

          .memory-modal {
            animation:
              modalEnter .48s
              cubic-bezier(.16,1,.3,1)
              both;
          }

          .modal-full-image {
            animation:
              imageReveal .65s
              cubic-bezier(.16,1,.3,1)
              both;
          }

          @keyframes modalBackdrop {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes modalEnter {
            from {
              opacity: 0;
              transform:
                translateY(30px)
                scale(.94);
            }

            to {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }
          }

          @keyframes imageReveal {
            from {
              opacity: 0;
              transform: scale(.97);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* ================= MODAL EMOJIS ================= */

          .modal-particle {
            position: absolute;
            z-index: 15;
            pointer-events: none;
            user-select: none;
            animation:
              modalParticleFloat
              4.5s ease-in-out infinite;
          }

          .modal-particle-1 {
            left: 4%;
            top: 18%;
            font-size: 28px;
          }

          .modal-particle-2 {
            right: 5%;
            top: 36%;
            font-size: 25px;
            animation-delay: -1.5s;
          }

          .modal-particle-3 {
            left: 9%;
            bottom: 17%;
            font-size: 21px;
            animation-delay: -2.4s;
          }

          @keyframes modalParticleFloat {
            0%, 100% {
              opacity: .18;
              transform:
                translateY(0)
                rotate(-5deg);
            }

            50% {
              opacity: .65;
              transform:
                translateY(-15px)
                rotate(7deg)
                scale(1.15);
            }
          }

          /* ================= FINAL EMOJIS ================= */

          .final-emoji {
            position: absolute;
            pointer-events: none;
            opacity: .12;
            animation:
              finalFloat 6s ease-in-out infinite;
          }

          .final-heart {
            left: 10%;
            top: 25%;
            font-size: 35px;
          }

          .final-kiss {
            right: 12%;
            top: 30%;
            font-size: 32px;
            animation-delay: -2s;
          }

          .final-star {
            left: 25%;
            bottom: 18%;
            font-size: 25px;
            animation-delay: -4s;
          }

          @keyframes finalFloat {
            0%, 100% {
              transform:
                translateY(0)
                rotate(-5deg);
            }

            50% {
              transform:
                translateY(-22px)
                rotate(7deg)
                scale(1.12);
            }
          }

          /* ================= SCROLLBAR ================= */

          .memory-scroll::-webkit-scrollbar {
            width: 5px;
          }

          .memory-scroll::-webkit-scrollbar-track {
            background: transparent;
          }

          .memory-scroll::-webkit-scrollbar-thumb {
            background:
              rgba(236,72,153,.3);

            border-radius: 999px;
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: .01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </div>
  );
}

/* =========================================================
   ROMANTIC BACKGROUND
========================================================= */

function RomanticBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 75 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 61) % 100}%`,
        delay: `${(index % 10) * 0.37}s`,
        duration: `${2.2 + (index % 6) * 0.55}s`,
      })),
    []
  );

  const particles = useMemo(() => {
    const emojis = ["❤️", "♡", "💋", "✨", "♥"];

    return Array.from({ length: 18 }, (_, index) => ({
      id: index,
      emoji: emojis[index % emojis.length],
      left: `${4 + ((index * 17) % 92)}%`,
      delay: `${-(index * 1.35)}s`,
      duration: `${10 + (index % 7) * 1.7}s`,
      size: `${14 + (index % 5) * 5}px`,
    }));
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#261026_0%,#100713_42%,#050208_78%)]
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
          left-[30%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-rose-600/5
          blur-[120px]
        "
      />

      {/* Stars */}

      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      {/* Hearts / Kiss / Sparkles */}

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="romantic-particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            fontSize: particle.size,
          }}
        >
          {particle.emoji}
        </span>
      ))}
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
        w-full
        min-w-0
        rounded-xl
        px-2
        py-3
        shadow-[0_12px_40px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-pink-500/20
        hover:shadow-[0_15px_40px_rgba(236,72,153,0.08)]
        sm:rounded-2xl
        sm:px-3
        sm:py-4
      "
    >
      <div
        className="
          text-xl
          font-semibold
          text-[#fff5f8]
          sm:text-2xl
        "
      >
        {String(value).padStart(2, "0")}
      </div>

      <div
        className="
          mt-1
          text-[9px]
          uppercase
          tracking-[0.12em]
          text-[#746671]
          sm:text-[10px]
          sm:tracking-widest
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
  const isRight = index % 2 !== 0;

  return (
    <div
      className={`relative flex items-center md:w-full ${
        isRight
          ? "md:justify-end"
          : "md:justify-start"
      }`}
    >
      {/* ================= TIMELINE DOT ================= */}

      <div
        className="
          absolute
          left-4
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
          text-pink-400
          shadow-[0_0_22px_rgba(236,72,153,0.18)]
          md:left-1/2
        "
      >
        {item.icon || "♥"}
      </div>

      <button
        onClick={onClick}
        className={`
          memory-card
          group
          ml-10
          min-w-0
          w-[calc(100%-2.5rem)]
          text-left
          sm:ml-12
          sm:w-[calc(100%-3rem)]
          md:ml-0
          md:w-[44%]
          ${
            isRight
              ? "md:mr-8"
              : "md:ml-8"
          }
        `}
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
            group-hover:shadow-[0_25px_70px_rgba(236,72,153,0.12)]
          "
        >
          {/* =================================================
              CARD IMAGE
              
              IMPORTANT:
              object-cover = CARD KO FULL FILL
              object-top = IMAGE TOP SE VISIBLE
          ================================================= */}

          <div
            className="
              relative
              h-[250px]
              w-full
              overflow-hidden
              bg-[#080409]
              sm:h-[300px]
              lg:h-[330px]
            "
          >
            <img
              src={item.photo}
              alt={item.title}
              className="
                memory-card-image
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-top
              "
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            {/* subtle pink tint */}

            <div
              className={`
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                ${item.color}
                opacity-[0.08]
              `}
            />

            {/* bottom dark gradient */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#080309]/75
                via-transparent
                to-black/5
              "
            />

            {/* Small decorative heart */}

            <span
              className="
                absolute
                right-5
                top-5
                animate-[heartbeat_1.8s_ease-in-out_infinite]
                text-xl
                drop-shadow-[0_0_10px_rgba(236,72,153,.7)]
              "
            >
              ❤️
            </span>

            {/* Date */}

            <div
              className="
                absolute
                bottom-4
                left-4
                rounded-full
                border
                border-white/10
                bg-black/55
                px-4
                py-1.5
                text-xs
                text-[#f7eaf1]
                backdrop-blur-xl
                sm:left-5
              "
            >
              {item.date}
            </div>
          </div>

          {/* ================= CARD CONTENT ================= */}

          <div className="p-4 sm:p-6">
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
                  {String(item.id).padStart(2, "0")}
                </p>

                <h3
                  className="
                    mt-2
                    font-['Playfair_Display']
                    text-xl
                    font-semibold
                    text-[#fff4f8]
                    sm:text-2xl
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1
                    font-['Cormorant_Garamond']
                    text-base
                    italic
                    text-[#82737f]
                  "
                >
                  {item.subtitle}
                </p>
              </div>

              <span
                className="
                  text-2xl
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:-rotate-6
                "
              >
                {item.icon || "❤️"}
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
                font-['Cormorant_Garamond']
                text-base
                italic
                leading-7
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
                  group-hover:translate-x-2
                "
              >
                →
              </span>

              <span
                className="
                  ml-auto
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              >
                ✨
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

/* =========================================================
   JOURNEY MODAL
========================================================= */

function JourneyModal({
  item,
  onClose,
}) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        oldOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="
        memory-modal-backdrop
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/90
        p-3
        backdrop-blur-xl
        sm:p-5
      "
      onClick={onClose}
    >
      {/* Decorative emojis */}

      <span className="modal-particle modal-particle-1">
        ❤️
      </span>

      <span className="modal-particle modal-particle-2">
        💋
      </span>

      <span className="modal-particle modal-particle-3">
        ✨
      </span>

      <div
        className="
          memory-modal
          memory-scroll
          relative
          max-h-[94dvh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-2xl
          border
          border-white/[0.08]
          bg-gradient-to-b
          from-[#130914]
          to-[#09040b]
          shadow-[0_30px_100px_rgba(0,0,0,0.8)]
          sm:rounded-3xl
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* ================= CLOSE ================= */}

        <button
          onClick={onClose}
          aria-label="Close memory"
          className="
            absolute
            right-3
            top-3
            z-30
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-black/65
            text-2xl
            text-white
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:rotate-90
            hover:border-pink-500/40
            hover:bg-pink-500/20
            sm:right-5
            sm:top-5
          "
        >
          ×
        </button>

        {/* =================================================
            FULL PHOTO

            object-contain = COMPLETE PHOTO
            NO CROPPING
        ================================================= */}

        <div
          className="
            relative
            flex
            min-h-[260px]
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-[#050205]
            sm:min-h-[420px]
          "
        >
          {/* blurred background */}

          <img
            src={item.photo}
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              scale-110
              object-cover
              opacity-[0.22]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/20
            "
          />

          {/* FULL IMAGE */}

          <img
            src={item.photo}
            alt={item.title}
            className="
              modal-full-image
              relative
              z-[2]
              mx-auto
              block
              max-h-[78vh]
              max-w-full
              object-contain
            "
            onError={(e) => {
              e.currentTarget.style.display =
                "none";
            }}
          />

          {/* subtle gradient */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-[3]
              h-32
              bg-gradient-to-t
              from-[#09040b]
              via-[#09040b]/40
              to-transparent
            "
          />

          {/* corner decoration */}

          <div
            className="
              absolute
              bottom-5
              left-5
              z-[4]
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-black/45
              px-4
              py-2
              text-xs
              text-pink-100
              backdrop-blur-xl
            "
          >
            <span
              className="
                animate-[heartbeat_1.7s_ease-in-out_infinite]
              "
            >
              ❤️
            </span>

            Our Memory
          </div>
        </div>

        {/* ================= MODAL CONTENT ================= */}

        <div className="relative p-5 sm:p-10">
          <div
            className="
              absolute
              right-8
              top-8
              hidden
              text-xl
              opacity-20
              sm:block
            "
          >
            ✨ 💕 ✨
          </div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-pink-500
            "
          >
            Chapter{" "}
            {String(item.id).padStart(2, "0")}
          </p>

          <h2
            className="
              mt-3
              font-['Great_Vibes']
              text-4xl
              font-semibold
              text-[#fff4f8]
              sm:text-5xl
            "
          >
            {item.title}
          </h2>

          <p
            className="
              mt-2
              font-['Cormorant_Garamond']
              text-lg
              italic
              text-[#82737f]
              sm:text-xl
            "
          >
            {item.subtitle}
          </p>

          {/* Date + Location */}

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

          {/* ================= DETAILS ================= */}

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-pink-500/10
              bg-pink-500/[0.045]
              p-4
              shadow-[inset_0_0_35px_rgba(236,72,153,.025)]
              sm:p-6
            "
          >
            <div
              className="
                mb-3
                flex
                items-center
                gap-2
                text-sm
                text-pink-400
              "
            >
              <span>💭</span>
              <span>Our Memory</span>
            </div>

            <p
              className="
                font-['Cormorant_Garamond']
                text-base
                leading-8
                text-[#c9bbc4]
                sm:text-lg
              "
            >
              {item.details}
            </p>
          </div>

          {/* ================= MESSAGE ================= */}

          <div className="mt-8 text-center">
            <div
              className="
                mx-auto
                mb-5
                flex
                items-center
                justify-center
                gap-3
                text-pink-500
              "
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500/50" />

              <span
                className="
                  animate-[heartbeat_1.7s_ease-in-out_infinite]
                "
              >
                ❤️
              </span>

              <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500/50" />
            </div>

            <p
              className="
                mx-auto
                max-w-2xl
                font-['Cormorant_Garamond']
                text-base
                italic
                leading-8
                text-pink-200
                sm:text-lg
              "
            >
              "{item.message}"
            </p>

            <div
              className="
                mt-7
                flex
                items-center
                justify-center
                gap-4
                text-xl
              "
            >
              <span className="animate-[kissFloat_4s_ease-in-out_infinite]">
                💋
              </span>

              <span className="animate-[heartbeat_1.6s_ease-in-out_infinite]">
                ❤️
              </span>

              <span className="animate-[sparklePulse_2s_ease-in-out_infinite]">
                ✨
              </span>

              <span className="animate-[heartbeat_1.8s_ease-in-out_infinite]">
                💕
              </span>

              <span className="animate-[kissFloat_4s_ease-in-out_infinite]">
                💋
              </span>
            </div>
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
        transition-all
        duration-300
        hover:border-pink-500/15
        hover:bg-pink-500/[0.04]
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