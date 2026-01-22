import Image from 'next/image';
import Link from 'next/link';

export default function TeenGamesPage() {
  return (
    // Main Container centered with exact 1440px width
    <div className="w-[1440px] h-[1400px] mx-auto min-h-screen bg-white font-sans flex flex-col items-center">
      
      {/* 1. TOP ORANGE NAV BAR - Fixed 1440x119 */}
      <nav className="w-[1440px] h-[60px] bg-[#F6A572] flex justify-between items-center px-20 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-white/40 rounded-full border-2 border-white" />
          <span className="font-playpen font-bold text-[30px] text-black ml-[100px]">NeuroNest</span>
        </div>


       <div className="w-[600px] flex justify-between text-white font-playpen font-bold uppercase text-lg tracking-widest text-[20px]">
  <a className="hover:text-black transition-colors">Home</a>
  <a className="hover:text-black transition-colors">Assessment</a>
  <a className="hover:text-black transition-colors">Activities</a>
  <a className="hover:text-black transition-colors">Dashboard</a>
</div>

        <div className="w-16 h-16 bg-white/40 rounded-full border-2 border-white" />
      </nav>

      {/* 2. TEXT BELOW NAV */}
      <header className="text-center pt-12 pb-10 mr-[150px] m-[35px]">
        <h1 className="text-[42px]  m-[35px] text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Interactive Activities
        </h1>
        <p className="text-gray-600 text-[28px] text-xl font-roboto -m-[20px]">
          Choose activities based on age group and developmental needs.
        </p>
      </header>

      {/* 3. LIGHT GREY BANNER */}
      <section className="bg-[#E5E7EB] w-full h-[90px] py-6 text-center m6 mr-[160px] m-[25px]">
        <h2 className="text-[35px] text-4xl font-bold text-gray-800 font-playpen  m-[25px]">
          Animations
        </h2>
      </section>

      {/* 4. GAME GRID - Exact 139px gap */}
      <main className="flex justify-center gap-[80px] pb-24 m-[100px] -ml-[100px]">
        
        {/* Card 1 */}
        <GameCard 
          title="Hand Washing"
          description="Decision making game to help teens understand real life social situations."
          imageSrc="/kidd.png" 
          bgColor="bg-[#E8F5E9]" 
          btnColor="bg-[#AFE879]"
        />

        {/* Card 2 */}
        <GameCard 
          title="Teeth Brushing"
          description="Classic game designed to improve problem solving and planning skills."
          imageSrc="/kid.png" 
          bgColor="bg-[#E1F5FE]" 
          btnColor="bg-[#40BCFF]"
        />

      </main>

      {/* 5. BOTTOM ORANGE BAR */}
      <footer className="bg-[#F6A572] w-full h-[150px] mt-auto" />
    </div>
  );
}

function GameCard({ title, description, imageSrc, bgColor, btnColor }: any) {
  return (
    // Card Box: Exact 538x734
    <article className={`${bgColor} w-[500px] h-[650px] rounded-[48px] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] border border-white/40 flex flex-col items-center text-center transition-all hover:-translate-y-2 -mt-[35px]`}>
      
      {/* White Image Container */}
      <div className="bg-white w-[385px] h-[385px] rounded-[36px] mb-8 flex items-center justify-center relative overflow-hidden p-10 shadow-inner m-[39px]">
        <div className="relative w-full h-full">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill
            className="object-contain"
            priority 
          />
        </div>
      </div>
      
      {/* Text */}
      <h3 className="text-[32px] font-extrabold text-black mb-4 font-playpen -m-[10px]">
        {title}
      </h3>
      <p className="text-[20px] text-gray-700 font-semibold text-lg leading-relaxed mb-10 flex-grow px-4 mt-[15px]">
        {description}
      </p>
      
      {/* Updated Button Section */}
      <button 
        className={`
          ${btnColor} 
          hover:bg-[#B45309] 
          text-[#f8f7f6] 
          font-bold
          w-[420px] h-[50px] 
          rounded-[30px]
          flex items-center justify-center
          text-2xl uppercase tracking-widest 
          border-none transition-all duration-300 
          shadow-lg hover:shadow-xl active:scale-95
          mb-[30px]
        `}
      >
        PRACTICE NOW
      </button>
    </article>
  );
}