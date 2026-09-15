
import { useState } from "react";
import { useMusic } from "./MusicContext";


function MusicPlayer() {
  const {
    isPlaying,
    toggleMusic,
    volume,
    setVolume,
  } = useMusic();

  const [isOpen, setIsOpen] = useState(false);

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div
      className="
        fixed
        bottom-4
        left-4
        sm:bottom-6
        sm:left-6
        z-[9999]
        flex
        items-center
        gap-2
      "
    >
      {/* ================= EXPANDED PLAYER ================= */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ease-out

          ${
            isOpen
              ? "w-[220px] sm:w-[270px] opacity-100 translate-x-0"
              : "w-0 opacity-0 -translate-x-3"
          }
        `}
      >
        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-pink-500/20
            bg-[#100811]/95
            px-4
            py-2.5
            shadow-[0_10px_40px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
          "
        >
          {/* SONG INFO */}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">

              {isPlaying && (
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-pink-500
                    animate-pulse
                  "
                />
              )}

              <p
                className="
                  truncate
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-pink-500
                "
              >
                {isPlaying
                  ? "Now Playing"
                  : "Our Song"}
              </p>

            </div>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                font-medium
                text-[#f5e8ef]
              "
            >
              Aniruddh ❤️ Anjali
            </p>
          </div>

          {/* VOLUME */}

          <div className="flex items-center gap-1.5">

            <span className="text-xs">
              {volume === 0
                ? "🔇"
                : volume < 0.5
                ? "🔉"
                : "🔊"}
            </span>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolume}
              className="
                w-12
                sm:w-16
                cursor-pointer
                accent-pink-500
              "
            />

          </div>
        </div>
      </div>

      {/* ================= MAIN PLAYER ================= */}

      <div className="relative">

        {/* GLOW */}

        {isPlaying && (
          <>
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-pink-500/30
                blur-xl
                animate-pulse
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                -inset-1
                rounded-full
                border
                border-pink-400/20
                animate-ping
              "
            />
          </>
        )}

        {/* PLAY / PAUSE */}

        <button
          type="button"
          onClick={toggleMusic}
          className="
            relative
            flex
            h-12
            w-12
            sm:h-14
            sm:w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-pink-500/30
            bg-gradient-to-br
            from-[#1c0c19]
            via-[#130914]
            to-[#080409]
            text-pink-300
            shadow-[0_8px_30px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110
            hover:border-pink-400/50
            hover:shadow-[0_8px_35px_rgba(236,72,153,0.22)]
            active:scale-95
          "
          title={
            isPlaying
              ? "Pause Our Song"
              : "Play Our Song"
          }
        >
          {isPlaying ? (
            <span className="text-sm">
              ❚❚
            </span>
          ) : (
            <span className="text-xl">
              ♫
            </span>
          )}
        </button>

        {/* SETTINGS */}

        <button
          type="button"
          onClick={() =>
            setIsOpen((prev) => !prev)
          }
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            border
            border-pink-500/30
            bg-[#160a15]
            text-[9px]
            text-pink-300
            shadow-md
            transition
            duration-300
            hover:scale-110
          "
          title="Music controls"
        >
          {isOpen ? "×" : "•••"}
        </button>

      </div>
    </div>
  );
}

export default MusicPlayer;