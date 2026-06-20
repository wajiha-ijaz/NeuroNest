"use client";

import { useState } from "react";
import Image from "next/image";

export default function SpeechFunPage() {
  const [iframeKey, setIframeKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    /* 1. MAIN CONTAINER - Bound tightly to viewport to match perfect styling distribution */
    <div className="w-full h-screen bg-white flex flex-col justify-between overflow-hidden relative">
      
      {/* 2. HERO HEADER SECTION */}
      <header className="w-full flex flex-col items-center">
        {/* Welcome Header Container */}
        <div className="text-center py-[1.5vh]">
          <h1 className="text-[32px] md:text-[36px] font-extrabold text-black font-playpen leading-none">
            Welcome To Kids Animations
          </h1>
        </div>

        {/* 3. TITLE BANNER - Blue banner background setting */}
        <div className="w-full h-[10vh] min-h-[60px] max-h-[90px] bg-[#95D5F8] flex flex-col items-center justify-center text-center shadow-sm">
          <h2 className="text-[20px] md:text-[24px] font-bold text-black uppercase font-playpen tracking-wide leading-tight">
            TITLE: DRESS UP
          </h2>
          <p className="text-[14px] md:text-[16px] text-black/80 font-bold font-playpen">
            Learn how to dress yourself.
          </p>
        </div>
      </header>

  {/* 4. MAIN ACTIVITY AREA (IFRAME CONTAINER) */}
      {/* Automatically calculates height distributions based on viewport rules with preview omitted */}
      <main className="w-full max-w-[500px] flex-1 min-h-[40vh] max-h-[52vh] mx-auto bg-[#C5B4E3] flex items-center justify-center shadow-lg my-[2vh] overflow-hidden border border-gray-100 relative rounded-[20px]">
        {/* THE ACTIVE GAME IFRAME DIRECT RENDER */}
        <iframe
          key={iframeKey}
          src="https://turbowarp.org/1286629819/embed"
          className="w-full h-full border-none shadow-inner"
          allow="fullscreen; autoplay"
          title="Animal Sounds Game"
        />
      </main>

      {/* 5. SINGLE RESTART ACTION BUTTON ROW */}
      <div className="w-full flex justify-center items-center gap-4 mb-[2vh]">
        <button 
          onClick={() => setIframeKey(prev => prev + 1)}
          className="bg-[#40BCFF] hover:bg-[#2faee0] text-white font-black w-[240px] md:w-[280px] h-[45px] rounded-[30px] flex items-center justify-center text-[16px] md:text-[18px] uppercase tracking-widest shadow-md transition-all active:scale-95 font-playpen border-none outline-none"
        >
          RESTART
        </button>
      </div>

      {/* 6. BOTTOM ORANGE BAR */}
      <footer className="bg-[#F6A572] w-full h-[7vh] min-h-[50px] max-h-[80px]" />
    </div>
  );
}