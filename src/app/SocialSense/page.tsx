"use client";

import { useState } from "react";

export default function SpeechFunPage() {
  const [iframeKey, setIframeKey] = useState(0);
  return (
    <div className="w-[1440px] h-[1000px] mx-auto bg-white flex flex-col items-center">
      
      {/* 1. WELCOME HEADER */}
      <section className="text-center py-12">
        <h1 className="mr-[75px] mt-[38px] text-[40px] font-extrabold text-black font-playpen leading-tight">
          Welcome To Teens Fun
        </h1>
      </section>

      {/* 2. TITLE BANNER */}
      <section className="mt-[20px] w-full h-[100px] bg-[#7ECE68] flex flex-col items-center justify-center text-center mb-10">
        <h2 className="mr-[75px] text-[28px] font-bold text-black uppercase font-playpen">
          TITLE: Social Sense
        </h2>
        <p className="mr-[75px] text-[18px] text-black/80 font-bold font-playpen">
          Practice real-world decision making.
        </p>
      </section>

      {/* 3. MAIN ACTIVITY AREA - Set to 1000x600 per your request */}
      <div className="w-[900px] h-[800px] bg-[#C5B4E3] flex flex-col items-center justify-center shadow-lg mb-12 mt-[24px] overflow-hidden border border-gray-100 mr-[167px] relative rounded-[20px]">
        
        {/* THE ACTUAL SCRATCH GAME */}
        <iframe
          key={iframeKey}
          src="/SocialSenselevel.html" 
          className="w-full h-full border-none shadow-inner"
          allow="fullscreen; autoplay"
          title="Social Sense Game"
        />
      </div>

      {/* 4. RESTART BUTTON */}
      <div className="w-full flex justify-center">
        <button 
          onClick={() => setIframeKey(prev => prev + 1)}
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
          RESTART
        </button>
      </div>

      {/* 5. BOTTOM ORANGE BAR */}
      <footer className="bg-[#F6A572] w-full h-[120px] mt-auto" />
    </div>
  );
}