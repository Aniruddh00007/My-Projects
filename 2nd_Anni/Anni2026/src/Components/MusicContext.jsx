import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.35);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.volume = volume;

      await audio.play();

      setIsPlaying(true);

      console.log("🎵 Our Song started ❤️");
    } catch (error) {
      console.error("Music couldn't start:", error);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    setIsPlaying(false);
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await playMusic();
    } else {
      pauseMusic();
    }
  };

  const setVolume = (newVolume) => {
    const value = Number(newVolume);

    setVolumeState(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  return (
    <MusicContext.Provider
      value={{
        playMusic,
        pauseMusic,
        toggleMusic,
        isPlaying,
        volume,
        setVolume,
      }}
    >
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.error(
            "❌ Audio Error:",
            e.currentTarget.error
          );
        }}
      >
        <source
          src="/music/our-song.mp3"
          type="audio/mpeg"
        />
      </audio>

      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error(
      "useMusic must be used inside MusicProvider"
    );
  }

  return context;
}