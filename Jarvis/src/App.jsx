import React from "react";
import useVoiceAssistant from "./components/Assistant1";
import VoiceAnimation from "./components/voiceAnimation";

function App() {

  // 🎙️ Voice Assistant Hook
  const { isAwake, isSpeaking } = useVoiceAssistant();

  return (
    <div className="h-screen w-full bg-black">

      {/* 🎨 Siri UI */}
      <VoiceAnimation
        active={isAwake}
        speaking={isSpeaking}
      />

    </div>
  );
}

export default App;
