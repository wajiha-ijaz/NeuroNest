"use client";

import { useState } from "react";
import Image from "next/image";

const DJANGO_BASE_URL = process.env.NEXT_PUBLIC_DJANGO_URL || "http://127.0.0.1:8000";

export default function SpeechFunPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  return (
    // Pure page ko 100vh par absolute limit kar diya aur scrollbars ko permanently hide kiya
    <div className="w-full h-screen bg-white flex flex-col justify-between overflow-hidden relative">
      
      {/* 1. HERO SECTION (HEADER & BANNER) */}
      <header className="w-full flex flex-col items-center">
        {/* WELCOME HEADER - Dynamic small padding */}
        <div className="text-center py-[1.5vh]">
          <h1 className="text-[32px] md:text-[36px] font-extrabold text-black font-playpen leading-none">
            Welcome To Memory Match
          </h1>
        </div>

        {/* TITLE BANNER - Scaled with dynamic height unit */}
        <div className="w-full h-[10vh] min-h-[60px] max-h-[90px] bg-[#AFE879] flex flex-col items-center justify-center text-center shadow-sm">
          <h2 className="text-[20px] md:text-[24px] font-bold text-black uppercase font-playpen tracking-wide leading-tight">
            TITLE: CARD MATCHING
          </h2>
          <p className="text-[14px] md:text-[16px] text-black/80 font-bold font-playpen">
            Flip the cards and find the matching pairs.
          </p>
        </div>
      </header>

      {/* 2. MAIN ACTIVITY AREA (IFRAME CONTAINER) */}
      {/* flex-1 automatic screen ke bache hue hisse ko cover karega bina doosre elements ko niche dhakele */}
      <main className="w-full max-w-[500px] flex-1 min-h-[40vh] max-h-[52vh] mx-auto bg-[#C5B4E3] flex items-center justify-center shadow-lg my-[2vh] overflow-hidden border border-gray-100 relative rounded-[20px]">
            
        {isPlaying ? (
          /* THE ACTUAL CARD MATCHING GAME */
          <iframe
            key={iframeKey}
            src="/cardmatching.html" 
            className="w-full h-full border-none shadow-inner"
            allow="fullscreen; autoplay"
            title="Card Matching Game"
          />
        ) : (
          /* THE PREVIEW UI (Visible before clicking PLAY NOW) */
          <div className="w-full h-full flex flex-col">
            {/* TOP SECTION: Target Cards (Light Blue Area) */}
            <div className="flex-1 bg-[#B3E5FC] flex items-center justify-center gap-4 px-6">
              
              {/* Target Card 1: Car */}
              <div className="w-[28%] aspect-square bg-white rounded-[12px] flex items-center justify-center relative shadow-md opacity-50">
                <div className="relative w-[65%] h-[65%]">
                  <Image src="/car.jpeg" alt="Car Target" fill className="object-contain" />
                </div>
              </div>

              {/* Target Card 2: Umbrella */}
              <div className="w-[28%] aspect-square bg-white rounded-[12px] flex items-center justify-center relative shadow-md opacity-50">
                <div className="relative w-[65%] h-[65%]">
                  <Image src="/umbrella.jpeg" alt="Umbrella Target" fill className="object-contain" />
                </div>
              </div>

              {/* Target Card 3: Star */}
              <div className="w-[28%] aspect-square bg-white rounded-[12px] flex items-center justify-center relative shadow-md opacity-50">
                <div className="relative w-[65%] h-[65%]">
                  <Image src="/star.jpeg" alt="Star Target" fill className="object-contain" />
                </div>
              </div>

            </div>

            {/* BOTTOM SECTION: Active Selection (Light Green Area) */}
            <div className="flex-1 bg-[#C8E6C9] flex items-center justify-center">
              <div className="w-[35%] aspect-square bg-white rounded-[12px] flex items-center justify-center relative shadow-md">
                <div className="relative w-[70%] h-[70%]">
                  <Image src="/car.jpeg" alt="Active Car" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* 3. BUTTONS ROW - Adjusted margin to prevent overlap */}
      <div className="w-full flex justify-center items-center gap-6 mb-[2vh]">

        {/* PLAY NOW */}
        <a
          href={`${DJANGO_BASE_URL}/memory-game/`}
          className="bg-[#AFE879] hover:bg-[#E28A4F] text-black font-black w-[240px] md:w-[280px] h-[45px] rounded-[30px] flex items-center justify-center text-[16px] md:text-[18px] uppercase tracking-widest shadow-md transition-all active:scale-95 font-playpen border-none outline-none no-underline"
        >
          PLAY NOW
        </a>

        {/* VIEW PROGRESS */}
        <a
          href={`${DJANGO_BASE_URL}/memory-game-progress/`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#AFE879] hover:bg-[#E28A4F] text-black font-black w-[240px] md:w-[280px] h-[45px] rounded-[30px] flex items-center justify-center text-[16px] md:text-[18px] uppercase tracking-widest shadow-md transition-all active:scale-95 font-playpen border-none outline-none no-underline"
        >
          VIEW PROGRESS
        </a>

      </div>

      {/* 4. BOTTOM GREEN BAR - Adjusted height relative to viewport to guarantee no overflow */}
      <footer className="bg-[#F6A572]  w-full h-[7vh] min-h-[50px] max-h-[80px]" />

      {/* FLOATING ICON (N) - Instantly matches screenshot element */}
      <div className="absolute bottom-[8.5vh] left-4 w-10 h-10 bg-neutral-900 text-white font-bold rounded-box rounded-full flex items-center justify-center text-sm shadow-md cursor-pointer z-50">
        N
      </div>
    </div>
  );
}