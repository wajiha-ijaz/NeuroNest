import Image from 'next/image';
import Link from 'next/link';

export default function TeenGamesPage() {
  return (
    // Pure container ko 100vh par bound kiya taake baghair scroll ke 1 time screen pe show ho
    <div className="w-full h-screen bg-white font-sans flex flex-col justify-between overflow-hidden relative">

      {/* 2. HEADER SECTION (TEXT BELOW NAV) */}
      <header className="w-full text-center flex flex-col items-center justify-center pt-[2vh] pb-[1vh]">
        <h1 className="text-[32px] md:text-[36px] font-extrabold text-gray-900 tracking-tight leading-none mb-1">
          Interactive Activities
        </h1>
        <p className="text-gray-600 text-[16px] md:text-[18px] font-medium">
          Choose activities based on age group and developmental needs.
        </p>
      </header>

{/* 3. SEGMENTED TOGGLE BAR */}
      <section className="w-full flex justify-center my-[1vh]">
        <div className="flex items-center justify-between px-4 bg-white border-[2px] border-gray-200 rounded-[55px] w-full max-w-[700px] h-[10vh] min-h-[55px] max-h-[75px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
    
    {/* Kids Button - Links to /kids-games */}
    <Link href="/kids" className="no-underline">
      <button className="ml-[30px] w-[160px] h-[40px] bg-transparent  text-black font-bold text-[16px] rounded-[40px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] transition-all flex items-center justify-center">
        Kids (3-12)
      </button>
    </Link>
    
    {/* Teens Button - Links to /teen-games */}
    <Link href="/teens" className="no-underline">
      <button className="w-[160px] h-[40px]  bg-[#87D1FF] text-gray-500 font-bold text-[16px] rounded-[40px] hover:text-black hover:bg-gray-50 transition-all flex items-center justify-center">
        Teens (13-17)
      </button>
    </Link>
    
    {/* Adults Button - Blank link (#) for now */}
    <Link href="/adults" className="no-underline">
      <button className="mr-[30px] w-[160px] h-[40px] bg-transparent text-gray-500 font-bold text-[16px] rounded-[40px] hover:text-black hover:bg-gray-50 transition-all flex items-center justify-center">
        Adults (18+)
      </button>
    </Link>
    
  </div>
</section>

     {/* 4. GAME GRID - Balanced and Centered */}
<main className="w-full flex-1 max-h-[62vh] flex items-center justify-center gap-8 px-6 my-[1vh]">
  
  {/* Card 1 */}
  <GameCard 
    title="Teens Games"
    description="Mind development games for autistic teens that will help them learn and grow."
    bgColor="bg-white" 
     imageSrc="/teens.png" 
    btnColor="bg-[#F6A572]"
    href="/teengames"
  />

  {/* Card 2 */}
  <GameCard 
    title="Communication Buddy"
    description="A personalized chatbot that helps the autistic teen with communication."
    imageSrc="/chat.png" 
    bgColor="bg-white" 
    btnColor="bg-[#C499F3]"
    href="/CommunicationBuddy"
  />
</main>
      {/* 5. BOTTOM ORANGE BAR */}
      <footer className="bg-[#F6A572] w-full h-[6vh] min-h-[50px]" />
    </div>
  );
}
    function GameCard({ title, description, imageSrc, bgColor, btnColor, href }: any) {
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
      {/* Link added here using the href prop */}
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
          PLAY NOW
        </button>
      </Link>
    </article>
  );
}