"use client";

import { useState } from "react";
import Image from "next/image";

export default function ColorSortingPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-[1440px] h-[1000px] mx-auto bg-white flex flex-col items-center">
      
      {/* 1. WELCOME HEADER */}
      <section className="text-center py-12">
        <h1 className="mr-[75px] mt-[38px] text-[40px] font-extrabold text-black font-playpen leading-tight">
          Welcome To Sensory Explorer
        </h1>
        <p className="mr-[75px] text-[24px] text-gray-500 font-medium font-playpen">
          Learn different colors.
        </p>
      </section>

      {/* 2. TITLE BANNER */}
      <section className="mt-[20px] w-full h-[100px] bg-[#F2D75D] flex flex-col items-center justify-center text-center mb-10">
        <h2 className="mr-[75px] text-[28px] font-bold text-black uppercase font-playpen">
          TITLE: COLOR SORTING
        </h2>
        <p className="mr-[75px] text-[18px] text-black/80 font-bold font-playpen">
          Put the fruit in the correct bowl.
        </p>
      </section>

{/* 3. MAIN ACTIVITY AREA */}
      <div className="w-[1000px] h-[700px] bg-[#F5F5F5] flex flex-col items-center justify-between shadow-lg mb-12 mt-[24px] overflow-hidden border border-gray-100 mr-[167px] rounded-[20px]">
        
        {isPlaying ? (
          /* THE ACTUAL GAME */
          <iframe
            key="colorsortinggame"
            src="/colorsortinggame.html" 
            className="w-full h-full border-none shadow-inner"
            allow="fullscreen; autoplay; microphone; camera"
            title="Color Sorting Game"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation"
          />
        ) : (
          /* THE PREVIEW UI */
          <>
            {/* TOP AREA: Target Bowl */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="relative w-[350px] h-[280px]">
                <Image 
                  src="/redbowl.jpeg"
                  alt="Red Bowl"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* BOTTOM AREA: Red Fruit Selection Bar */}
            <div className="w-full h-[280px] bg-[#FF8A8A] flex items-center justify-center gap-8 px-10">
              
              {/* Fruit Card 1: Apple */}
              <div className="w-[160px] h-[180px] bg-white rounded-[10px] flex items-center justify-center relative shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <div className="relative w-[100px] h-[100px]">
                  <Image src="/apple.jpeg" alt="Apple" fill className="object-contain" />
                </div>
              </div>

              {/* Fruit Card 2: Banana */}
              <div className="w-[160px] h-[180px] bg-white rounded-[10px] flex items-center justify-center relative shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <div className="relative w-[100px] h-[100px]">
                  <Image src="/banana.jpeg" alt="Banana" fill className="object-contain" />
                </div>
              </div>

              {/* Fruit Card 3: Orange */}
              <div className="w-[160px] h-[180px] bg-white rounded-[10px] flex items-center justify-center relative shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <div className="relative w-[100px] h-[100px]">
                  <Image src="/orange.jpeg" alt="Orange" fill className="object-contain" />
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
            bg-[#F2D75D] 
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