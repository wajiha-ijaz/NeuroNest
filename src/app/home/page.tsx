import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    // Changed: Added min-h-screen and flex-col to the main wrapper
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="w-[1440px] relative h-[700px] overflow-hidden mx-auto flex-shrink-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/rec.png"
            alt="Colorful Popsicle Sticks"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        <div className="mt-[54px] ml-[54px] relative z-10 flex flex-col pt-32 pl-32 max-w-[1000px]">
          <h1 className="text-[85px] font-extrabold text-[#333] leading-[1.1] font-playpen">
            Why Fit In? When <br />
            You Are Born To
          </h1>
          <span className="text-[110px] text-[#F6A572] font-playpen italic mt-[-10px] ml-2">
            Stand Out.
          </span>
        </div>
      </section>

      {/* 2. GET STARTED SECTION */}
      {/* Added flex-grow here: This pushes the footer down by filling empty space */}
      <section className="w-full bg-white flex flex-col items-center py-20 flex-grow">
        <h2 className="mt-[30px] text-[40px] font-bold text-black mb-16 font-playpen">
          Lets get started with NeuroNest!
        </h2>

        <div className="flex gap-[50px] justify-center items-center">
          
          {/* Card 1 */}
          <div className="mt-[70px] w-[450px] h-[600px] bg-[#F2D75D] rounded-[30px] p-10 flex flex-col items-center text-center shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="mt-[40px] w-[300px] h-[300px] bg-white rounded-full relative mb-8 overflow-hidden flex items-center justify-center border border-gray-10 flex-shrink-0">
              <Image src="/sa.png" alt="Icon" width={300} height={300} className="object-cover" />
            </div>

            <div className="flex flex-col items-center justify-center flex-grow">
              <h3 className="text-[40px] font-bold mb-4 font-playpen text-gray-800 leading-tight">Interactive Activities</h3>
              <p className="max-w-[300px] text-gray-600 text-[24px] leading-snug font-playpen">
                Age-appropriate games and tools for all developmental stages.
              </p>
            </div>
            {/* Link to Kids Page */}
          <Link href="/kids" className="no-underline">
            <button className="bg-[#00AD42] hover:bg-[#008f37] text-[#f8f7f6] font-bold w-[350px] h-[50px] rounded-[30px] flex items-center justify-center text-[20px] uppercase tracking-widest transition-all shadow-lg active:scale-95 mb-[30px]">
              Explore Activities
            </button>
          </Link>
        </div> {/* Closes Card 1 */}

        {/* Card 2 */}
        <div className="mt-[70px] w-[450px] h-[600px] bg-[#AFF695] rounded-[30px] p-10 flex flex-col items-center text-center shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
          <div className="mt-[40px] w-[300px] h-[300px] bg-white rounded-full relative mb-8 overflow-hidden flex items-center justify-center border border-gray-100 flex-shrink-0">
            <Image src="/123.png" alt="Icon" width={350} height={350} className="object-contain" />
          </div>

          <div className="flex flex-col items-center justify-center flex-grow">
            <h3 className="text-[40px] font-bold mb-4 font-playpen text-gray-800 leading-tight">Progress Dashboard</h3>
            <p className="max-w-[300px] text-gray-600 text-[24px] leading-snug font-playpen">
              Track development and monitor activity engagement.
            </p>
          </div>

          {/* Link to Kids Page */}
          <Link href="/kids" className="no-underline">
            <button className="bg-[#00AD42] hover:bg-[#008f37] text-[#f8f7f6] font-bold w-[350px] h-[50px] rounded-[30px] flex items-center justify-center text-[20px] uppercase tracking-widest transition-all shadow-lg active:scale-95 mb-[30px]">
              View Progress
            </button>
          </Link>
        </div> {/* Closes Card 2 */}
      </div> {/* Closes the flex container holding both cards */}
    </section> {/* Closes the section wrapper */}

    {/* 3. FOOTER */}
    <footer className="bg-[#F6A572] w-full h-[150px] flex-shrink-0 mt-[150px]" />
  </div>
);
}
