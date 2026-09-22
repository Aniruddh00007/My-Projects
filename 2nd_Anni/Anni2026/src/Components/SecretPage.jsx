import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SecretPage() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030204] text-white">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-700/[0.08] blur-[160px]" />
        <div className="absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-fuchsia-700/[0.05] blur-[130px]" />
        <div className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-pink-600/[0.06] blur-[130px]" />
      </div>

      {/* STARS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(55)].map((_, index) => (
          <span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/60 animate-secret-twinkle"
            style={{
              left: `${(index * 31) % 100}%`,
              top: `${(index * 47) % 100}%`,
              animationDelay: `${(index % 9) * 0.35}s`,
            }}
          />
        ))}
      </div>

      {/* FIRST MESSAGE */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center px-6 transition-all duration-1000 ${
          revealed
            ? "pointer-events-none scale-110 opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        <div className="text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-pink-300/50">
            Secret Unlocked 🔐
          </p>

          <h1 className="mx-auto max-w-3xl text-3xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            Kuch yaadein duniya ke liye nahi hoti...
            
            <span className="mt-2 block bg-gradient-to-r from-pink-200 via-rose-300 to-pink-400 bg-clip-text font-semibold text-transparent">
              Sirf hum dono ke liye hoti hain ❤️
            </span>
          </h1>

          <div className="mx-auto mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

          <p className="mt-5 text-sm text-white/30">
            And this one will always belong to us.
          </p>

        </div>
      </div>

      {/* SECRET MEMORY */}
      <main
        className={`relative z-10 flex min-h-screen items-center justify-center px-4 py-12 transition-all duration-[1400ms] ${
          revealed
            ? "translate-y-0 opacity-100"
            : "translate-y-14 opacity-0"
        }`}
      >

        <div className="w-full max-w-5xl">

          {/* TOP */}
          <div className="mb-8 text-center">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/[0.06] px-4 py-2 text-xs tracking-[0.3em] text-rose-300">
              🔐 FOR YOUR EYES ONLY
            </div>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Our Secret Memory ❤️
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/40">
              Kuch moments duniya se chhupaane ke liye nahi,
              sirf apne beech sambhaal kar rakhne ke liye hote hain.
            </p>

          </div>

          {/* MEMORY CARD */}
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] shadow-[0_40px_100px_rgba(0,0,0,.75)] backdrop-blur-xl">

            {/* TOP LINE */}
            <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

            <div className="grid md:grid-cols-2">

              {/* IMAGE AREA */}
              <div className="relative min-h-[430px] overflow-hidden">

                <img
                  src="/photos/mmnt3.png"
                  alt="Our secret memory"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 md:bg-gradient-to-r md:from-transparent md:to-[#080508]/70" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
                  🔒 Private Memory
                </div>

              </div>

              {/* MESSAGE */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                <p className="text-xs uppercase tracking-[0.3em] text-pink-300/60">
                  SIRF TUM AUR MAIN
                </p>

                <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Ek Raaz, Sirf Hamara ❤️
                </h3>

                <div className="my-6 h-[1px] w-16 bg-gradient-to-r from-pink-500 to-transparent" />

                <div className="space-y-5 text-sm leading-7 text-white/50 sm:text-base">

                  <p>
                    Kuch moments aise hote hain jinhe duniya ko explain
                    karne ki zarurat hi nahi hoti... kyunki unki asli
                    feeling sirf wahi do log samajh sakte hain jinhone
                    unhe saath mein jiya ho.
                  </p>

                  <p>
                    Ye bhi hamara wahi moment hai. Kya hua, kaise hua,
                    humne kya feel kiya — ye sab sirf tum aur main
                    jaante hain. Duniya ke liye shayad ye bas ek memory
                    ho, lekin mere liye iske andar ek poori kahani
                    chhupi hai...
                  </p>

                  <p className="font-medium text-pink-100/80">
                    Hamari kahani. ❤️
                  </p>

                  <p>
                    Aur shayad is memory ki sabse khoobsurat baat bhi
                    yahi hai ki iske baare mein kisi aur ko jaan'ne ki
                    zarurat nahi.
                  </p>

                  <p className="text-pink-100/80">
                    Kuch cheezein duniya se chhupaane ke liye nahi,
                    sirf apne beech sambhaal kar rakhne ke liye hoti
                    hain. 🥹❤️
                  </p>

                </div>

                {/* QUOTE */}
                <div className="mt-9 border-l-2 border-pink-400/30 pl-5">
                  <p className="font-serif text-xl italic leading-8 text-pink-200/70">
                    “Raaz chhota sa hai... par iske andar basi yaad
                    sirf tumhari aur meri hai.” ❤️🔐
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-7 text-center">

            <p className="text-xs tracking-[0.2em] text-white/20">
              A LITTLE SECRET IN OUR LITTLE UNIVERSE
            </p>

            <p className="mt-3 text-sm text-pink-300/50">
              Duniya se door... bas tumhare aur mere beech. ❤️
            </p>

          </div>

        </div>

        {/* HEART SHAPED NEXT PAGE BUTTON */}
        {revealed && (
          <button
            onClick={() => navigate("/final")}
            className="group fixed bottom-8 right-8 z-50 flex flex-col items-center outline-none"
            title="Continue Our Story"
          >
            <div className="heart-next-button relative flex items-center justify-center">

              <span className="heart-arrow relative z-10 text-xl font-bold text-white">
                →
              </span>

            </div>

            <span className="mt-4 text-[10px] uppercase tracking-[0.25em] text-pink-300/50 transition-all duration-300 group-hover:text-pink-200">
              Continue
            </span>
          </button>
        )}

      </main>

      {/* CSS */}
      <style>
        {`
          /* HEART BUTTON */
          .heart-next-button {
            position: relative;
            width: 52px;
            height: 52px;
            background: linear-gradient(
              135deg,
              #fb7185,
              #e11d48
            );
            transform: rotate(45deg);
            border-radius: 8px;
            box-shadow:
              0 8px 25px rgba(225, 29, 72, 0.35);
            transition:
              transform .35s ease,
              box-shadow .35s ease;
            animation: heartBeatNext 2s ease-in-out infinite;
          }

          .heart-next-button::before,
          .heart-next-button::after {
            content: "";
            position: absolute;
            width: 52px;
            height: 52px;
            background: inherit;
            border-radius: 50%;
          }

          .heart-next-button::before {
            left: -26px;
            top: 0;
          }

          .heart-next-button::after {
            top: -26px;
            left: 0;
          }

          .heart-arrow {
            transform: rotate(-45deg);
            transition: transform .3s ease;
          }

          .group:hover .heart-next-button {
            transform: rotate(45deg) scale(1.12);
            box-shadow:
              0 10px 40px rgba(244, 63, 94, .55);
          }

          .group:hover .heart-arrow {
            transform:
              rotate(-45deg)
              translateX(4px);
          }

          @keyframes heartBeatNext {
            0%, 100% {
              scale: 1;
            }

            50% {
              scale: 1.06;
            }
          }

          /* STAR ANIMATION */
          @keyframes secretTwinkle {
            0%, 100% {
              opacity: .1;
              transform: scale(.8);
            }

            50% {
              opacity: .8;
              transform: scale(1.4);
            }
          }

          .animate-secret-twinkle {
            animation:
              secretTwinkle
              3.5s
              ease-in-out
              infinite;
          }
        `}
      </style>

    </div>
  );
}