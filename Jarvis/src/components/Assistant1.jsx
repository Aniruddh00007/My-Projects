import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";

export default function useVoiceAssistant() {
  const recognitionRef = useRef(null);

  // 🔑 Ref version (logic ke liye)
  const isAwakeRef = useRef(false);

  // UI state
  const [isAwake, setIsAwake] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [started, setStarted] = useState(false);

  // 🔊 Speak
  const speak = useCallback((text) => {
    if (!text) return;

    recognitionRef.current?.stop();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.onstart = () => {
      setIsSpeaking(true);
      console.log("🔊 Speaking:", text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);

      try {
        recognitionRef.current?.start();
      } catch {}
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognitionRef.current = recognition;

    recognition.onresult = async (event) => {
      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript
          .toLowerCase()
          .trim();
      }

      console.log("🎧 Heard:", transcript);

      // 🧠 WAKE WORD
      if (!isAwakeRef.current && transcript.includes("hello dost")) {
        isAwakeRef.current = true;   // ref update
        setIsAwake(true);            // UI update

        speak("Yes Aniruddh, I am listening");
        return;
      }

      // 🚀 BACKEND CALL
      if (isAwakeRef.current && transcript) {
        console.log("📡 Sending to backend:", transcript);

        try {
          const res = await axios.post(
            "http://localhost:8080/api/command",
            { command: transcript }
          );
          
console.log("FULL RESPONSE 👉", res);
console.log("DATA 👉", res.data);
console.log("RESPONSE TEXT 👉", res.data.response);

         const reply =
  res.data.response ||
  res.data.reply ||
  res.data.message ||
  res.data.text ||
  "No response from server";

          speak(reply);

          // Sleep reset
          isAwakeRef.current = false;
          setIsAwake(false);

        } catch (error) {
          console.error("❌ Server Error:", error);
          speak("Server not responding");
        }
      }
    };

    recognition.onend = () => {
      if (!isSpeaking) {
        try {
          recognition.start();
        } catch {}
      }
    };

    // 👇 First click start
    const startOnClick = () => {
      if (!started) {
        recognition.start();
        console.log("🎤 Mic Started");
        setStarted(true);
      }
    };

    window.addEventListener("click", startOnClick, { once: true });

    return () => {
      window.removeEventListener("click", startOnClick);
      recognition.stop();
    };
  }, [isSpeaking, speak, started]);

  return { isAwake, isSpeaking };
}
