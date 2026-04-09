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
            Welcome To Memory Match
        </h1>
        <p className="mr-[75px] text-[24px] text-gray-500 font-medium font-playpen">
         Learn and improve your memory.
        </p>
      </section>

      {/* 2. TITLE BANNER */}
      <section className="mt-[20px] w-full h-[100px] bg-[#AFE879] flex flex-col items-center justify-center text-center mb-10">
        <h2 className="mr-[75px] text-[28px] font-bold text-black uppercase font-playpen">
          TITLE: CARD MATCHING
        </h2>
        <p className="mr-[75px] text-[18px] text-black/80 font-bold font-playpen">
           Flip the cards and find the matching pairs.
        </p>
      </section>

     {/* 3. MAIN ACTIVITY AREA - Set to 1000x600 per your request */}
          <div className="w-[1000px] h-[700px] bg-[#C5B4E3] flex flex-col items-center justify-center shadow-lg mb-12 mt-[24px] overflow-hidden border border-gray-100 mr-[167px] relative rounded-[20px]">
            
            {isPlaying ? (
              /* THE ACTUAL SCRATCH GAME */
              <iframe
                src="/cardmatching.html" 
                className="w-full h-full border-none shadow-inner"
                allow="fullscreen; autoplay"
                title="Animal Sounds Game"
              />
            ) : (
             /* THE PREVIEW UI (Visible before clicking PLAY NOW) */
          <>
            {/* TOP SECTION: Target Cards (Light Blue Area) */}
            <div className="w-full h-1/2 bg-[#B3E5FC] flex items-center justify-center gap-10 px-10">
              
              {/* Target Card 1: Car */}
              <div className="w-[300px] h-[350px] bg-white/60 rounded-[15px] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-[160px] h-[160px] opacity-40">
                  <Image src="/car.jpeg" alt="Car Target" fill className="object-contain" />
                </div>
              </div>

              {/* Target Card 2: Umbrella */}
              <div className="w-[300px] h-[350px] bg-white/60 rounded-[15px] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-[160px] h-[160px] opacity-40">
                  <Image src="/umbrella.jpeg" alt="Umbrella Target" fill className="object-contain" />
                </div>
              </div>

              {/* Target Card 3: Star */}
              <div className="w-[300px] h-[350px] bg-white/60 rounded-[15px] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-[160px] h-[160px] opacity-40">
                  <Image src="/star.jpeg" alt="Star Target" fill className="object-contain" />
                </div>
              </div>

            </div>

            {/* BOTTOM SECTION: Active Selection (Light Green Area) */}
            <div className="w-full h-1/2 bg-[#C8E6C9] flex items-center justify-center">
              <div className="w-[300px] h-[350px] bg-white rounded-[20px] flex items-center justify-center relative shadow-md">
                <div className="relative w-[200px] h-[200px]">
                  <Image src="/car.jpeg" alt="Active Car" fill className="object-contain" />
                </div>
              </div>
            </div>
          </>
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