import Image from "next/image";

export default function SpeechFunPage() {
  return (
    <div className="w-[1440px] h-[1300px] mx-auto bg-white flex flex-col items-center">
      
      {/* 1. WELCOME HEADER */}
      <section className="text-center py-12">
        <h1 className="mr-[75px] mt-[44px] text-[56px] font-extrabold text-black font-playpen leading-tight">
          Welcome To Speech Fun
        </h1>
        <p className="mr-[75px] text-[24px] text-gray-500 font-medium font-playpen">
          Learn different sounds.
        </p>
      </section>

      {/* 2. TITLE BANNER */}
      <section className="mt-[54px] w-full h-[150px] bg-[#F6A572] flex flex-col items-center justify-center text-center mb-10">
        <h2 className="mr-[75px] text-[40px] font-bold text-black uppercase tracking-wide font-playpen">
          TITLE: ANIMAL SOUNDS
        </h2>
        <p className="mr-[75px] text-[20px] text-black/80 font-bold font-playpen">
          Learn animals and their voices.
        </p>
      </section>

      {/* 3. MAIN ACTIVITY AREA (Purple Frame with Inner White Box) */}
      <div className="w-[1200px] h-[1200px] bg-[#C5B4E3] flex items-center justify-center shadow-lg mb-12 mt-[24px] mr-[167px] ">
        
        {/* INNER WHITE BOX FOR PICTURE */}
        <div className="ml-[30px] w-[450px] h-[650px] bg-white rounded-[20px] relative overflow-hidden shadow-sm">
          <Image 
            src="/animal.jpeg" // Replace with your image path
            alt="Animal Group"
            fill
            className="object-contain p-4" // Padding keeps animals away from the white edges
            priority
          />
        </div>

      </div>

{/* 4. PLAY BUTTON */}
<div className="w-full flex justify-center">
  <button 
    className="
      bg-[#F6A572] 
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