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

     {/* 3. LIGHT GREY BANNER */}
      <section className="bg-[#E5E7EB] w-full h-[90px] py-6 text-center m6 mr-[160px] m-[25px]">
        <h2 className="text-[35px] text-4xl font-bold text-gray-800 font-roboto m-[25px]">
          Kids Games
        </h2>
      </section>

{/* 4. ACTIVITY GRID - Fixed Syntax Here */}
      <main className="w-full flex flex-col items-center pb-24 mr-[150px] mt-[70px]">
        {/* Container for cards using flex-wrap to handle the 3rd card centering */}
        <div className="flex flex-wrap justify-center gap-[40px] max-w-[1200px]">
          
          <ActivityCard 
            title="Sensory Explorer"
            description="Interactive sensory exploration activities."
            imageSrc="/g1.jpg" 
            btnText="PLAY NOW"
            btnColor="bg-[#F6A572]" 
          />

          <ActivityCard 
            title="Memory Match"
            description="Fun memory building exercises."
            imageSrc="/g2.jpg" 
            btnText="PLAY NOW"
            btnColor="bg-[#C499F3]" 
          />

          {/* This card will wrap to the second row and center because of 'justify-center' */}
          <ActivityCard 
            title="Speech Fun"
            description="Interactive speech development tools."
            imageSrc="/g3.jpg" 
            btnText="START PRACTICE"
            btnColor="bg-[#F48FB1]" 
          />
        </div>
      </main>

      {/* 5. BOTTOM ORANGE BAR */}
      <footer className="bg-[#F6A572] w-full h-[150px] mt-auto" />
    </div>
  );
}
function ActivityCard({ title, description, imageSrc, btnText, btnColor }: any) {
  return (
    <article className="w-[538px] h-[325px] bg-white rounded-[25px] p-6 border border-gray-200 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] flex flex-col">
      
      {/* Top Section: Horizontal Image + Text */}
      <div className="flex items-center gap-6 mb-8">
        {/* Rounded Image Wrapper */}
        <div className="w-[143px] h-[143px] relative flex-shrink-0 rounded-full overflow-hidden mt-[10px] ml-[22px]">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-contain"
          />
        </div>

        {/* Text Column */}
        <div className="text-left">
          <h3 className="text-[40px] ml-[22px] font-extrabold text-black font-playpen leading-tight">
            {title}
          </h3>
          <p className="text-[24px] ml-[22px] text-gray-500 font-medium leading-snug mt-1">
            {description}
          </p>
        </div>
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
          ml-[58px]
          mt-[58px]
        `}
      >
        PLAY NOW
      </button>
    </article>
  );
}