import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    // overflow-hidden lagane se browser ka extra space aur accidental scrollbars gayab ho jayenge
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden overflow-y-auto style={{ scrollbarWidth: 'none' }}">
      
      {/* 1. HERO SECTION: TEXT & IMAGE */}
      {/* Scrollbar hatane ke liye isko w-full kiya aur max-w-[1440px] se center kiya */}
      <section className="w-full max-w-[1440px] relative h-[500px] overflow-hidden mx-auto flex-shrink-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/rec.png"
            alt="Colorful Popsicle Sticks"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        <div className="mt-[34px] ml-[54px] relative z-10 flex flex-col pt-32 pl-32 max-w-[1000px]">
          <h1 className="text-[65px] font-extrabold text-[#333] leading-[1.1] font-playpen">
            Why Fit In? When <br />
            You Are Born To
          </h1>
          <span className="text-[85px] text-[#F6A572] font-playpen italic mt-[-10px] ml-2">
            Stand Out.
          </span>
        </div>
      </section>

      {/* 2. GET STARTED SECTION: HORIZONTAL CARDS WITH REPLICATED GAMECARD STYLE */}
      <section className="w-full bg-white flex flex-col items-center py-16 flex-grow overflow-hidden">
        <h2 className="mt-[10px] text-[28px] font-bold text-black mb-12 font-playpen">
          Lets get started with NeuroNest!
        </h2>

        {/* Cards Wrapper */}
        <div className="w-full flex flex-wrap items-center justify-center gap-8 pb-12 px-6">
          
          {/* Card 1 - Interactive Activities */}
          <div className="mt-[10px] bg-[#F2D75D] w-[300px] h-[350px] rounded-[48px] p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] border border-white/40 flex flex-col items-center text-center transition-all hover:-translate-y-2 mx-[20px]">
            
           {/* White Square Image Container */}
            <div className="bg-white w-[180px] h-[180px] rounded-[100px] flex items-center justify-center relative overflow-hidden p-10 shadow-inner m-[20px] flex-shrink-0">
              <div className="relative w-full h-full">
                <Image 
                  src="/acttt.avif" 
                  alt="Progress Dashboard" 
                  fill
                  className="object-contain"
                  priority 
                />
              </div>
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col items-center flex-1 justify-center py-2">
              <h3 className="text-[24px] md:text-[28px] font-black text-black mb-1 font-playpen leading-tight">
                Interactive Activities
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-500 font-semibold leading-snug max-w-[280px] px-2">
                Age-appropriate games and tools for all developmental stages.
              </p>
            </div>

            {/* Button */}
            <Link href="/kids" className="no-underline">
              <button 
                className="bg-[#00AD42] hover:bg-[#B45309] text-[#f8f7f6] font-bold w-[260px] h-[40px] rounded-[30px] flex items-center justify-center text-2xl uppercase tracking-widest border-none transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 mb-[30px] ml-[10px] mt-[10px]"
              >
                EXPLORE ACITIVITIES
              </button>
            </Link>
          </div>

          {/* Card 2 - Progress Dashboard */}
          <div className="mt-[10px] bg-[#AFF695] w-[300px] h-[350px] rounded-[48px] p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] border border-white/40 flex flex-col items-center text-center transition-all hover:-translate-y-2 mx-[20px]">
            
            {/* White Square Image Container */}
            <div className="bg-white w-[180px] h-[180px] rounded-[100px] flex items-center justify-center relative overflow-hidden p-10 shadow-inner m-[20px] flex-shrink-0">
              <div className="relative w-full h-full">
                <Image 
                  src="/bar.webp" 
                  alt="Progress Dashboard" 
                  fill
                  className="object-contain"
                  priority 
                />
              </div>
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col items-center flex-1 justify-center py-2">
              <h3 className="text-[24px] md:text-[28px] font-black text-black mb-1 font-playpen leading-tight">
                Progress Dashboard
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-500 font-semibold leading-snug max-w-[280px] px-2">
                Track development and monitor activity engagement.
              </p>
            </div>

            {/* Button */}
            <Link href="/Dashboard" className="no-underline">
              <button 
                className="bg-[#00AD42] hover:bg-[#B45309] text-[#f8f7f6] font-bold w-[260px] h-[40px] rounded-[30px] flex items-center justify-center text-2xl uppercase tracking-widest border-none transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 mb-[30px]"
              >
                VIEW PROGRESS
              </button>
            </Link>
          </div>

        </div>
      </section> 

      {/* 3. BOTTOM ORANGE BAR */}
      <footer className="bg-[#F6A572] w-full h-[8vh] min-h-[60px] max-h-[100px] flex-shrink-0 mt-[30px]" />
    </div>
  );
}