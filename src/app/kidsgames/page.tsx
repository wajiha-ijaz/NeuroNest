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
          Kids Games
        </h2>
      </section>

      {/* 4. ACTIVITY GRID - Dynamic height auto-calculated, card layouts protected */}
      <main className="w-full flex-1 max-h-[60vh] flex items-center justify-center px-4 overflow-hidden my-[1vh]">
        {/* Container for cards - flex-wrap centers the 3rd card beautifully */}
        <div className="flex flex-wrap justify-center items-center gap-[30px] md:gap-[40px] max-w-[1200px] w-full">
          
          <ActivityCard 
            title="Sensory Explorer"
            description="Interactive sensory exploration activities."
            imageSrc="/g1.jpg" 
            btnText="PLAY NOW"
            btnColor="bg-[#F6A572]" 
            href="/colorsorting"
          />

          <ActivityCard 
            title="Memory Match"
            description="Fun memory building exercises."
            imageSrc="/g2.jpg" 
            btnColor="bg-[#C499F3]" 
            btnText="PLAY NOW"
            href="/cardmatching"
          />

          <ActivityCard 
            title="Speech Fun"
            description="Interactive speech development tools."
            imageSrc="/g3.jpg" 
            btnText="START PRACTICE"
            btnColor="bg-[#F48FB1]" 
            href="/animalsounds"
          />
        </div>
      </main>

      {/* 5. BOTTOM ORANGE BAR - Sized so it never overflows the screen height */}
      <footer className="bg-[#F6A572] w-full h-[8vh] min-h-[60px] max-h-[100px]" />
    </div>
  );
}

function ActivityCard({ title, description, imageSrc, btnText, btnColor, href }: any) {
  return (
    // Card with image on left, text+button on right
    <article className="w-[420px] md:w-[460px] min-h-[120px] md:min-h-[120px] bg-white rounded-[30px] p-6 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] flex flex-col">
      
      {/* Top Section: Image + Text+Button Horizontal Layout */}
      <div className="flex items-start gap-6 md:gap-8">
        {/* Circular Image - Left */}
        <div className="w-[100px] md:w-[110px] h-[100px] md:h-[110px] relative rounded-full overflow-hidden flex-shrink-0 shadow-md">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover"
          />
        </div>

        {/* Text Section + Button - Right Column */}
        <div className="text-left flex flex-col justify-between flex-1 h-[100px] md:h-[110px]">
          <div>
            <h3 className="text-[22px] md:text-[26px] font-extrabold text-black font-playpen leading-tight">
              {title}
            </h3>
            <p className="text-[14px] md:text-[16px] text-gray-600 font-medium leading-snug mt-1">
              {description}
            </p>
          </div>

          {/* Button - Right Aligned */}
          <Link href={href || '/'} className="no-underline">
            <button 
              className={`
                ${btnColor} 
                hover:opacity-90
                text-white 
                font-bold
                w-[300px] h-[36px] md:h-[44px]
                rounded-full
                flex items-center justify-center
                text-xs md:text-sm uppercase tracking-wider 
                border-none transition-all duration-300 
                shadow-md hover:shadow-lg active:scale-95
              `}
            >
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}