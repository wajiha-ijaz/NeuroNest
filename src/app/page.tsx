import Image from "next/image";

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
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 -mt-[80px]">
            A Digital Nest for Growing Minds
          </h2>
        </div>

        {/* 3. Description Text */}
        <p className="text-black font-bold  md:text-xl leading-relaxed max-w-[800px] font-medium -mt-[10px]">
          A supportive web-based platform designed to help individuals on the autism 
          spectrum build communication, cognitive, and daily-life skills. Through 
          interactive games, a communication buddy chatbot, and caregiver progress 
          tracking, NeuroNest provides a safe and engaging environment that 
          supports learning and growth at every stage.
        </p>

        {/* 4. Action Button */}
        <button 
className="
    bg-[#D97706] 
    hover:bg-[#B45309] 
    text-[#f8f7f6]
    font-bold
    /* Size & Shape */
    w-[140px] h-[50px]      /* Set a specific wide width */
    py-6            /* 24px vertical padding */
    rounded-[30px]  /* 30px corner radius */
    /* Typography */
    text-2xl        /* Increased font size to match the bigger button */
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
      </div>
    </main>
  );
}