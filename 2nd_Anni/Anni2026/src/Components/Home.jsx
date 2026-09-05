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
    photo: "/photos/first-talk.jpg",
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
    photo: "/photos/first-date.jpg",
  },
  {
    id: 5,
    icon: "🌧️",
    title: "First Rain",
    subtitle: "first memorable rainy day",
    date: "01-01-2025",
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
      "1st Anniversary  thaa special jo digitally possible hua wo kara maine   or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️  or is time bhi shyd mil naa hi paa rhe honge to digitally efforts hi daal skta hu filhaal to so happy Anniversary to us ❤️   Love you ❤️",
    photo: "/photos/anniversary.jpg",
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
    photo: "/photos/today.jpg",
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

      let years = now.getFullYear() - relationshipStart.getFullYear();
      let months = now.getMonth() - relationshipStart.getMonth();
      let days = now.getDate() - relationshipStart.getDate();

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

      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

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
    <div className="min-h-screen overflow-x-hidden bg-[#08030d] text-white">
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b0b35_0%,#15071b_35%,#08030d_75%)]" />

        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-pink-600/10 blur-3xl animate-pulse" />

        <div
          className="absolute right-[5%] top-[40%] h-96 w-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="stars">
          {Array.from({ length: 80 }).map((_, index) => (
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
          ))}
        </div>

        <div className="floating-heart heart1">♥</div>
        <div className="floating-heart heart2">♥</div>
        <div className="floating-heart heart3">♥</div>
      </div>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        <div className="mb-8">
          <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-5 py-2 text-sm text-pink-200 backdrop-blur-md">
            ✨ Our Universe ✨
          </span>
        </div>

        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-pink-300">
          A story written by two hearts
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          ANIRUDDH{" "}
          <span className="inline-block animate-pulse text-pink-500">
            ❤️
          </span>{" "}
          ANJALI
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
          Two people. One story.
          <br />
          Countless memories.
        </p>

        {/* Counter */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
          <CounterBox value={timeTogether.years} label="Years" />
          <CounterBox value={timeTogether.months} label="Months" />
          <CounterBox value={timeTogether.days} label="Days" />
          <CounterBox value={timeTogether.hours} label="Hours" />
          <CounterBox value={timeTogether.minutes} label="Minutes" />
          <CounterBox value={timeTogether.seconds} label="Seconds" />
        </div>

        <a
          href="#journey"
          className="mt-12 flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-4 font-semibold shadow-lg shadow-pink-500/20 transition duration-300 hover:scale-105 hover:shadow-pink-500/40"
        >
          Explore Our Story
          <span>↓</span>
        </a>

        <div className="absolute bottom-7 animate-bounce text-gray-500">
          ↓
        </div>
      </section>

      {/* Journey */}
      <section
        id="journey"
        className="mx-auto max-w-6xl px-6 pb-32"
      >
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-pink-400">
            Our Journey
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Moments That Became Memories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Every chapter has a beginning, a little chaos, a lot of love,
            and a memory worth keeping forever.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-pink-500/0 via-pink-500/60 to-purple-500/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
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

      {/* Final Section */}
      <section className="border-t border-white/5 px-6 py-28 text-center">
        <p className="text-5xl">❤️</p>

        <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
          Our story isn't over.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          There are still places to go, pictures to take, fights to survive,
          laughs to share and memories waiting to be made.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("journey")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 rounded-full border border-pink-400/40 bg-pink-500/10 px-8 py-4 font-semibold text-pink-200 transition hover:bg-pink-500/20"
        >
          Continue Our Story →
        </button>

        <p className="mt-12 text-sm text-gray-600">
          Made with ❤️ for Aniruddh & Anjali
        </p>
      </section>

      {/* Modal */}
      {selected && (
        <JourneyModal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}

      {/* CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          opacity: 0.3;
          animation: twinkle infinite ease-in-out;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.8);
          }
        }

        .floating-heart {
          position: absolute;
          color: rgba(244, 63, 94, 0.12);
          font-size: 50px;
          animation: floatHeart 12s infinite ease-in-out;
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
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-40px) rotate(15deg);
          }
        }

        .glass {
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
        }
      `}</style>
    </div>
  );
}


/* Counter */
function CounterBox({ value, label }) {
  return (
    <div className="glass min-w-[82px] rounded-2xl px-3 py-4">
      <div className="text-2xl font-bold text-white">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
        {label}
      </div>
    </div>
  );
}


/* Journey Card */
function JourneyCard({ item, index, onClick }) {
  const isRight = index % 2 !== 0;

  return (
    <div
      className={`relative flex items-center md:w-full ${
        isRight ? "md:justify-end" : "md:justify-start"
      }`}
    >
      
      {/* Timeline Dot */}
      <div className="absolute left-5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-pink-400/40 bg-[#16091b] text-sm shadow-lg shadow-pink-500/20 md:left-1/2">
        {item.icon}
      </div>

      <button
        onClick={onClick}
        className={`group ml-12 w-full text-left md:ml-0 md:w-[44%] ${
          isRight ? "md:mr-8" : "md:ml-8"
        }`}
      >
        <div className="glass overflow-hidden rounded-3xl transition duration-500 group-hover:-translate-y-2 group-hover:border-pink-400/30 group-hover:shadow-2xl group-hover:shadow-pink-500/10">
          
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-950 to-purple-950">
            <img
              src={item.photo}
              alt={item.title}
              className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl drop-shadow-lg">
                {item.icon}
              </span>
            </div>

            <div className="absolute bottom-4 left-5 rounded-full bg-black/40 px-4 py-1.5 text-xs text-white backdrop-blur-md">
              {item.date}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-pink-400">
                  Chapter {String(item.id).padStart(2, "0")}
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>

              <span className="text-2xl transition group-hover:scale-125">
                {item.icon}
              </span>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
              📍 {item.location}
            </div>

            <p className="mt-4 text-sm italic leading-6 text-gray-300">
              "{item.message}"
            </p>

            <div className="mt-5 text-sm font-semibold text-pink-400">
              Open Memory →
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}


/* Modal */
function JourneyModal({ item, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#120716] shadow-2xl shadow-pink-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur-md transition hover:bg-white/10"
        >
          ×
        </button>

        {/* Modal Image */}
        <div className="relative h-64 bg-gradient-to-br from-pink-950 to-purple-950 sm:h-80">
          <img
            src={item.photo}
            alt={item.title}
            className="h-full w-full object-cover opacity-80"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30`}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl">{item.icon}</span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-7 sm:p-10">
          <p className="text-sm uppercase tracking-widest text-pink-400">
            Chapter {String(item.id).padStart(2, "0")}
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {item.title}
          </h2>

          <p className="mt-1 text-gray-500">
            {item.subtitle}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <InfoBox icon="📅" title="Date" value={item.date} />
            <InfoBox
              icon="📍"
              title="Location"
              value={item.location}
            />
          </div>

          <div className="mt-7 rounded-2xl border border-pink-500/10 bg-pink-500/5 p-5">
            <p className="text-sm leading-7 text-gray-300">
              {item.details}
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg italic text-pink-200">
              ❤️ "{item.message}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


function InfoBox({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
      <div className="text-sm text-gray-500">
        {icon} {title}
      </div>

      <div className="mt-1 text-sm font-medium text-gray-200">
        {value}
      </div>
    </div>
  );
}


export default App;