"use client";

import { useState } from "react";
import Image from "next/image";

export default function SpeechFunPage() {
  // State to toggle between the preview UI and the actual game
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-[1440px] h-[1000px] mx-auto bg-white flex flex-col items-center">
      
      {/* 1. WELCOME HEADER */}
      <section className="text-center py-12">
        <h1 className="mr-[75px] mt-[38px] text-[40px] font-extrabold text-black font-playpen leading-tight">
          Welcome To Speech Fun
        </h1>
        <p className="mr-[75px] text-[24px] text-gray-500 font-medium font-playpen">
          Learn different sounds.
        </p>
      </section>

      {/* 2. TITLE BANNER */}
      <section className="mt-[20px] w-full h-[100px] bg-[#F6A572] flex flex-col items-center justify-center text-center mb-10">
        <h2 className="mr-[75px] text-[28px] font-bold text-black uppercase font-playpen">
          TITLE: ANIMAL SOUNDS
        </h2>
        <p className="mr-[75px] text-[18px] text-black/80 font-bold font-playpen">
          Learn animals and their voices.
        </p>
      </section>

      {/* 3. MAIN ACTIVITY AREA - Set to 1000x600 per your request */}
      <div className="w-[1000px] h-[700px] bg-[#C5B4E3] flex flex-col items-center justify-center shadow-lg mb-12 mt-[24px] overflow-hidden border border-gray-100 mr-[167px] relative rounded-[20px]">
        
        {isPlaying ? (
          /* THE ACTUAL SCRATCH GAME */
          <iframe
            src="/animalsounds.html" 
            className="w-full h-full border-none shadow-inner"
            allow="fullscreen; autoplay"
            title="Animal Sounds Game"
          />
        ) : (
          /* THE PREVIEW UI */
          <div className="w-full h-full flex items-center justify-center bg-white/20">
             <div className="w-[450px] h-[500px] bg-white rounded-[20px] relative overflow-hidden shadow-sm">
                <Image 
                  src="/animal.jpeg" 
                  alt="Animal Group Preview"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
          </div>
        )}
      </div>

      {/* 4. PLAY BUTTON */}
      <div className="w-full flex justify-center">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="
            bg-[#F6A572] 
            hover:bg-[#E28A4F] 
            text-black 
            font-black 
            w-[300px] 
            h-[45px] 
            my-[20px] 
            mr-[150px] 
            rounded-[30px] 
            flex 
            items-center 
            justify-center 
            text-[20px] 
            uppercase 
            tracking-widest 
            shadow-md 
            transition-all 
            active:scale-95 
            font-playpen 
            border-none 
            outline-none
          "
        >
          {isPlaying ? "RESTART GAME" : "PLAY NOW"}
        </button>
      </div>

      {/* 5. BOTTOM ORANGE BAR */}
      <footer className="bg-[#F6A572] w-full h-[150px] mt-auto" />
    </div>
  );
}