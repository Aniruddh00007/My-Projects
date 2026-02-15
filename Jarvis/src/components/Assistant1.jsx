import { useEffect, useRef, useState } from "react";

export default function useVoiceAssistant() {
  const recognitionRef = useRef(null);

  const [isAwake, setIsAwake] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const transcript =
        event.results[event.results.length - 1][0].transcript.toLowerCase();

      console.log("Heard:", transcript);

      if (transcript.includes("hello")) {
        setIsAwake(true);
        speak("Yes, Aniruddh i am Listening", setIsSpeaking, setIsAwake);
      }
    };

    recognition.onend = () => recognition.start();

    recognitionRef.current = recognition;

    // 👇 Start only after first click
    const startOnClick = () => {
      if (!started) {
        recognition.start();
        console.log("🎤 Mic Started After Click");
        setStarted(true);
      }
    };

    window.addEventListener("click", startOnClick);

    return () => {
      window.removeEventListener("click", startOnClick);
    };
  }, [started]);

  return { isAwake, isSpeaking };
}

// 🔊 Speak
function speak(text, setIsSpeaking, setIsAwake) {
  const speech = new SpeechSynthesisUtterance(text);

  speech.onstart = () => setIsSpeaking(true);

  speech.onend = () => {
    setIsSpeaking(false);
    setIsAwake(false);
  };

  window.speechSynthesis.speak(speech);
}
