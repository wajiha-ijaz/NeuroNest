import Image from 'next/image';
import Link from 'next/link';

export default function TeenGamesPage() {
  return (
    // 1. Pure container ko 100vh par bound kiya aur flex column se elements distribute kiye
    <div className="w-full h-screen bg-white font-sans flex flex-col justify-between overflow-hidden relative">

      {/* 2. TEXT BELOW NAV - Gaps and margins handled cleanly without breaking alignment */}
      <header className="w-full text-center flex flex-col items-center justify-center pt-[3vh] pb-[1vh]">
        <h1 className="text-[34px] md:text-[38px] font-extrabold text-gray-900 tracking-tight leading-none mb-2">
          Interactive Activities
        </h1>
        <p className="text-gray-600 text-[18px] md:text-[22px] font-roboto">
          Choose activities based on age group and developmental needs.
        </p>
      </header>

      {/* 3. LIGHT GREY BANNER - Kept original style but scaled with viewport */}
      <section className="bg-[#E5E7EB] w-full h-[8vh] min-h-[50px] max-h-[70px] flex items-center justify-center text-center">
        <h2 className="text-[26px] md:text-[30px] font-bold text-gray-800 font-roboto">
          Kids Animations
        </h2>
      </section>

{/* 4. GAME GRID - Cleaned layout with settings applied */}
      <main className="w-full flex flex-wrap items-center justify-center gap-8 pb-24 px-6">
        
        {/* Card 1 */}
        <GameCard 
          title="Social Sense"
          description="Decision making game to help teens understand real life social situations."
          imageSrc="/social-sense.png" 
          bgColor="bg-[#E8F5E9]" 
          btnColor="bg-[#AFE879]"
          href="/SocialSense"
        />

        {/* Card 2 */}
        <GameCard 
          title="Tower of Hanoi"
          description="Classic game designed to improve problem solving and planning skills."
          imageSrc="/tower.png" 
          bgColor="bg-[#E1F5FE]" 
          btnColor="bg-[#40BCFF]"
          href="/TowerofHanoi"
        />

      </main>

      {/* 5. BOTTOM ORANGE BAR */}
<footer className="bg-[#F6A572] w-full h-[6vh] min-h-[50px]" />
</div>
);
}
function GameCard({ title, description, imageSrc, bgColor, btnColor, btnText, href }: any) {
  return (
    <article className={`${bgColor} w-[300px] h-[350px] rounded-[48px] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] border border-white/40 flex flex-col text-center transition-all hover:-translate-y-2 mr-[20px] ml-[20px]`}>
      
      {/* White Image Container */}
      <div className="bg-white w-[250px] h-[250px] rounded-[36px] flex items-center justify-center relative overflow-hidden p-10 shadow-inner m-[20px]">
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
      
      {/* Text Section */}
      <div className="flex flex-col items-center flex-1 justify-center py-2">
        <h3 className="text-[24px] md:text-[28px] font-black text-black mb-1 font-playpen leading-tight">
          {title}
        </h3>
        <p className="text-[13px] md:text-[14px] text-gray-500 font-semibold leading-snug max-w-[280px] px-2">
          {description}
        </p>
      </div>

      {/* Link section with dynamic text */}
      <Link href={href || "#"} className="no-underline">
        <button 
          className={`
            ${btnColor} 
            hover:bg-[#B45309] 
            text-[#f8f7f6] 
            font-bold
            w-[250px] h-[40px] 
            rounded-[30px]
            flex items-center justify-center
            text-2xl uppercase tracking-widest 
            border-none transition-all duration-300 
            shadow-lg hover:shadow-xl active:scale-95
            mb-[30px] 
            ml-[30px]
            mt-[10px]
          `}
        >
          {btnText || "PLAY NOW"}
        </button>
      </Link>
    </article>
  );
}