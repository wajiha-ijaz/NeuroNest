import Image from 'next/image';
import Link from 'next/link';

export default function TeenGamesPage() {
  return (
    // Main Container centered with exact 1440px width
    <div className="w-[1440px] h-[1400px] mx-auto min-h-screen bg-white font-sans flex flex-col items-center">
      


      {/* 2. TEXT BELOW NAV */}
      <header className="text-center pt-12 pb-10 mr-[150px] m-[35px]">
        <h1 className="text-[42px]  m-[35px] text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Interactive Activities
        </h1>
        <p className="text-gray-600 text-[28px] text-xl font-roboto -m-[20px]">
          Choose activities based on age group and developmental needs.
        </p>
      </header>

    {/* 3. SEGMENTED TOGGLE BAR (Figma Exact: 811x111) */}
      <section className="flex justify-center mb-16">
        <div className="flex items-center justify-between px-6 bg-white border-[3px] border-gray-300 rounded-[55px] w-[900px] h-[90px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] mr-[170px] m-[30px]">
          
          {/* Kids Button (218x83) - Active State */}
          <button className="ml-[30px] w-[218px] h-[65px] bg-transparent text-gray-500 font-bold text-[22px] rounded-[40px] hover:text-black hover:bg-gray-50 transition-all flex items-center justify-center">
            Kids (3-12)
          </button>
          
          {/* Teens Button (218x83) */}
          <button className="w-[218px] h-[65px] bg-[#87D1FF] text-black font-bold text-[22px] rounded-[40px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] transition-all flex items-center justify-center">
            Teens (13-17)
          </button>
          
          {/* Adults Button (218x83) */}
          <button className="mr-[30px] w-[218px] h-[65px] bg-transparent text-gray-500 font-bold text-[22px] rounded-[40px] hover:text-black hover:bg-gray-50 transition-all flex items-center justify-center">
            Adults (18+)
          </button>
          
        </div>
      </section>

      {/* 4. GAME GRID - Balanced and Centered */}
  <main className="flex justify-center gap-[30px] pb-24 mr-[110px]">
  
  {/* Card 1 */}
  <GameCard 
    title="Teens Games"
    description="Mind development games for autistic teens that will help them learn and grow."
    bgColor="bg-white" 
     imageSrc="/teens.png" 
    btnColor="bg-[#F6A572]"
  />

  {/* Card 2 */}
  <GameCard 
    title="Communication Buddy"
    description="A personalized chatbot that helps the autistic teen with communication."
    imageSrc="/chat.png" 
    bgColor="bg-white" 
    btnColor="bg-[#C499F3]"
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
          <article className={`${bgColor} w-[500px] h-[600px] rounded-[48px] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] border border-white/40 flex flex-col  text-center transition-all hover:-translate-y-2 mr-[50px] mt-[35px]`}>
            
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
    {/* 2. Text Section - Moved up by removing large top margins */}
      <div className="-mt-[70px] gap-[10px] flex flex-col items-center flex-grow">
        <h3 className="text-[40px] font-extrabold text-black mb-6 font-playpen">
          {title}
        </h3>
        <p className="text-[20px] text-gray-600 font-medium leading-relaxed max-w-[440px] px-4">
          {description}
        </p>
      </div>
      
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
          ml-[40px] 
        `}
      >
        PLAY NOW
      </button>
    </article>
  );
}