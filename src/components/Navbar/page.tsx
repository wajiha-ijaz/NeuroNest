"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

// Use "/" to represent your app's main intro/landing page
  const hideNavbarOn = ["/", "/login", "/signup"]; 
  
  if (hideNavbarOn.includes(pathname)) return null;

  return (
    <nav className="w-[1440px] h-[70px] bg-[#F6A572] flex justify-between items-center px-4 shadow-sm mx-auto relative">
      
      {/* LEFT CIRCLE: Positioned away from the corner with ml-6 */}
      <div className="w-[60px] h-[60px] ml-6 bg-white/40 rounded-full border-2 border-white relative overflow-hidden flex-shrink-0 ml-[10px]">
        <Image 
          src="/download.jpg" 
          alt="NeuroNest Logo Icon" 
          fill 
          className="object-cover" 
        />
      </div>

{/* 1. TOP ORANGE NAV BAR - Fixed 1440x119 */}
      <nav className="w-[1440px] h-[60px] bg-[#F6A572] flex justify-between items-center px-20 shadow-sm">
        <div className="flex items-center ">
        
          <span className="font-playpen font-bold text-[30px] text-black mr-[100px]">NeuroNest</span>
        </div>

       <div className="w-[600px] flex justify-between text-white font-roboto font-bold uppercase text-lg tracking-widest text-[20px]">
  <a className="hover:text-black transition-colors">Home</a>
  <a className="hover:text-black transition-colors">Assessment</a>
  <a className="hover:text-black transition-colors">Activities</a>
  <a className="hover:text-black transition-colors">Dashboard</a>
</div>

        <div className="w-16 h-16 bg-white/40 rounded-full border-2 border-white" />
      </nav>


    </nav>
  );
}