import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
      <div className="max-w-4xl flex flex-col items-center space-y-10">
        
       {/* Logo Circle */}
<div className="w-[250px] h-[250px] rounded-full bg-white flex items-center justify-center shadow-lg -mt-[100px]">
  <Image
    src="/download.jpg"
    alt="NeuroNest Logo"
    width={160}
    height={160}
    className="object-contain"
    priority
  />
</div>

        {/* 2. Brand Identity */}
        <div className="space-y-4">
 <h1 className="font-playpen text-[128px] font-semibold text-[#D97706] leading-none tracking-tight -mt-[50px]">
  NeuroNest
</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 ">
            A Digital Nest for Growing Minds
          </h2>
        </div>

        {/* 3. Description Text */}
        <p className="text-black font-bold  md:text-xl leading-relaxed max-w-[800px] font-medium mt-[10px]">
          A supportive web-based platform designed to help individuals on the autism 
          spectrum build communication, cognitive, and daily-life skills. Through 
          interactive games, a communication buddy chatbot, and caregiver progress 
          tracking, NeuroNest provides a safe and engaging environment that 
          supports learning and growth at every stage.
        </p>

 {/* 4. Action Button */}
<Link href="/signup" className="no-underline">
  <button 
    className="
      mt-[20px]
      bg-[#D97706] 
      hover:bg-[#B45309] 
      text-[#f8f7f6]
      font-bold
      /* Size & Shape */
      w-[240px] h-[60px]      /* Increased width/height to fit text-2xl comfortably */
      flex items-center justify-center /* Ensures text stays centered */
      rounded-[30px] 
      /* Typography */
      text-2xl 
      uppercase 
      tracking-widest 
      /* Effects */
      border-none 
      transition-all 
      duration-300 
      shadow-lg 
      hover:shadow-xl 
      active:scale-95
    "
  >
    Get Started
  </button>
</Link>
</div>
    </main>

  );
  }