import Image from 'next/image';
import Link from 'next/link';

export default function AdultActivitiesPage() {
  return (
       // Main Container centered with exact 1440px width
    <div className="w-[1440px] h-[1000px] mx-auto min-h-screen bg-white font-sans flex flex-col items-center">
      

      {/* 2. TEXT BELOW NAV */}
      <header className="text-center pt-12 pb-10 mr-[150px] m-[10px]">
        <h1 className="text-[38px]  m-[35px] text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Interactive Activities
        </h1>
        <p className="text-gray-600 text-[24px] text-xl font-roboto -m-[30px]">
          Choose activities based on age group and developmental needs.
        </p>
      </header>

    {/* 3. SEGMENTED TOGGLE BAR (Figma Exact: 811x111) */}
      <section className="flex justify-center mb-16">
        <div className="flex items-center justify-between px-6 bg-white border-[3px] border-gray-300 rounded-[55px] w-[900px] h-[90px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] mr-[170px] m-[30px]">
          
         {/* Kids Button - Links to Kids Games */}
    <Link href="/kids" className="no-underline">
      <button className="ml-[30px] w-[218px] h-[65px] bg-transparent text-gray-500 font-bold text-[22px] rounded-[40px] hover:text-black hover:bg-gray-50 transition-all flex items-center justify-center">
        Kids (3-12)
      </button>
    </Link>
    
    {/* Teens Button - Links to Teen Games (Active State) */}
    <Link href="/teens" className="no-underline">
      <button className="w-[218px] h-[65px] bg-transparent text-black font-bold text-[22px] rounded-[40px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] transition-all flex items-center justify-center">
        Teens (13-17)
      </button>
    </Link>
    
    {/* Adults Button - Blank link for now */}
    <Link href="/adults" className="no-underline">
      <button className="mr-[30px] w-[218px] h-[65px] bg-[#87D1FF] text-gray-500 font-bold text-[22px] rounded-[40px] hover:text-black hover:bg-gray-50 transition-all flex items-center justify-center">
        Adults (18+)
      </button>
    </Link>
    
  </div>
</section>


{/* 4. ACTIVITY GRID - Fixed Syntax Here */}
      <main className="w-full flex flex-col items-center pb-24 mr-[150px] mt-[70px]">
        {/* Container for cards using flex-wrap to handle the 3rd card centering */}
        <div className="flex flex-wrap justify-center gap-[40px] max-w-[1200px]">
          
          <ActivityCard 
            title="Breathing Buddy"
            description="Calming guided exercises to manage stress and anxiety."
            imageSrc="/a1.avif" 
            btnText="START PRACTICE"
            btnColor="bg-[#AFE879]"
            href="/breathing-buddy"
          />

          <ActivityCard 
            title="Routine Reminder"
            description="Stay organized with personalized daily schedules and alerts."
            imageSrc="/a2.avif" 
            btnText="START PRACTICE"
            btnColor="bg-[#C499F3]"
            href="/routine-reminder"
          />

          {/* This card will wrap to the second row and center because of 'justify-center' */}
          <ActivityCard 
            title="Task Manager"
            description="Break down complex workplace tasks into manageable steps."
            imageSrc="/a22.avif" 
            btnText="START NOW"
            btnColor="bg-[#F6A572]"
            href="/task-manager"
          />
        </div>
      </main>
            {/* 5. BOTTOM ORANGE BAR */}
            <footer className="bg-[#F6A572] w-full h-[120px] mt-auto" />
          </div>
        );
      }
  function ActivityCard({ title, description, imageSrc, btnText, btnColor, href }: any) {
  return (
    <article className="-mt-[25px] w-[500px] h-[250px] bg-white rounded-[25px] p-6 border border-gray-200 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] flex flex-col">
      
      {/* Top Section: Horizontal Image + Text */}
      <div className="mt-[10px] flex items-center gap-6 mb-8">
        {/* Rounded Image Wrapper */}
        <div className=" w-[120px] h-[120px] relative flex-shrink-0 rounded-full overflow-hidden mt-[10px] ml-[22px]">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-contain"
          />
        </div>

        {/* Text Column */}
        <div className="text-left">
          <h3 className="text-[38px] ml-[22px] font-extrabold text-black font-playpen leading-tight">
            {title}
          </h3>
          <p className="text-[23px] ml-[22px] text-gray-500 font-medium leading-snug mt-1">
            {description}
          </p>
        </div>
      </div>

       {/* Updated Button Section */}
      <Link href={href || '/'} className="no-underline">
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
            mt-[30px]
          `}
        >
          {btnText}
        </button>
      </Link>
    </article>
  );
}