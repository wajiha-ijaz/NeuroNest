import Image from "next/image";

export default function SpeechFunPage() {
  return (
    <div className="w-[1440px] h-[1300px] mx-auto bg-white flex flex-col items-center">
      
      {/* 1. WELCOME HEADER */}
      <section className="text-center py-12">
        <h1 className="mr-[75px] mt-[44px] text-[56px] font-extrabold text-black font-playpen leading-tight">
          Welcome To Sensory Explorer
        </h1>
        <p className="mr-[75px] text-[24px] text-gray-500 font-medium font-playpen">
          Learn different colors.
        </p>
      </section>

      {/* 2. TITLE BANNER */}
      <section className="mt-[54px] w-full h-[150px] bg-[#F2D75D] flex flex-col items-center justify-center text-center mb-10">
        <h2 className="mr-[75px] text-[40px] font-bold text-black uppercase tracking-wide font-playpen">
          TITLE: COLOR SORTING
        </h2>
        <p className="mr-[75px] text-[20px] text-black/80 font-bold font-playpen">
         Put the fruit in the correct bowl.
        </p>
      </section>

{/* 3. MAIN ACTIVITY AREA (Sensory Explorer: Color Sorting) */}
<div className="w-[1200px] h-[750px] bg-[#F5F5F5] flex flex-col items-center justify-between shadow-lg mb-12 mt-[24px] overflow-hidden border border-gray-100mt-[24px] mr-[167px]">
  
  {/* TOP AREA: Target Bowl */}
  <div className="flex-grow flex items-center justify-center w-full">
    <div className="relative w-[500px] h-[400px]">
      <Image 
        src="/redbowl.jpeg" // Replace with your bowl image path
        alt="Red Bowl"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>

  {/* BOTTOM AREA: Red Fruit Selection Bar */}
  <div className="w-full h-[220px] bg-[#FF8A8A] flex items-center justify-center gap-10 px-10">
    
    {/* Fruit Card 1: Apple */}
    <div className="w-[275px] h-[275px] bg-white rounded-[10px] flex items-center justify-center relative shadow-sm hover:scale-105 transition-transform cursor-pointer">
      <div className="relative w-[140px] h-[140px]">
        <Image src="/apple.jpeg" alt="Apple" fill className="object-contain" />
      </div>
    </div>

    {/* Fruit Card 2: Banana */}
    <div className="w-[275px] h-[275px] bg-white rounded-[10px] flex items-center justify-center relative shadow-sm hover:scale-105 transition-transform cursor-pointer">
      <div className="relative w-[140px] h-[140px]">
        <Image src="/banana.jpeg" alt="Banana" fill className="object-contain" />
      </div>
    </div>

    {/* Fruit Card 3: Orange */}
    <div className="w-[275px] h-[275px] bg-white rounded-[10px] flex items-center justify-center relative shadow-sm hover:scale-105 transition-transform cursor-pointer">
      <div className="relative w-[140px] h-[140px]">
        <Image src="/orange.jpeg" alt="Orange" fill className="object-contain" />
      </div>
    </div>

  </div>
</div>

{/* 4. PLAY BUTTON */}
<div className="w-full flex justify-center">
  <button 
    className="
      bg-[#F2D75D] 
      hover:bg-[#E28A4F] 
      text-black 
      font-black 
      w-[300px] 
      h-[35px] 
      my-[50px] 
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
    PLAY NOW
  </button>
</div>

          {/* 5. BOTTOM ORANGE BAR */}
      <footer className="bg-[#F6A572] w-full h-[150px] mt-auto" />
    </div>
  );
}