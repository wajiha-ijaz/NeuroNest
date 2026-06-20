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
    <nav className="w-full bg-[#F6A572] flex justify-between items-center px-4 md:px-8 lg:px-12 py-3 shadow-md">
      
      {/* LEFT CIRCLE: Positioned away from the corner with ml-6 */}
      <div className="w-[40px] h-[40px] ml-6 bg-white/40 rounded-full border-2 border-white relative overflow-hidden flex-shrink-0 ml-[10px]">
        <Image 
          src="/download.jpg" 
          alt="NeuroNest Logo Icon" 
          fill 
          className="object-cover" 
        />
      </div>

{/* 1. TOP ORANGE NAV BAR - Fixed 1440x119 */}
      <nav className="w-[1440px] h-[50px] bg-[#F6A572] flex justify-between items-center px-20 shadow-sm">
        <div className="flex items-center ">
        
          <span className="font-playpen font-bold text-[30px] text-black mr-[100px]">NeuroNest</span>
        </div>

        <div className="w-[500px] flex justify-between font-roboto font-bold uppercase text-lg tracking-widest text-[20px]">
          <Link href="/home" className="no-underline text-[#000000] px-4 py-2 rounded hover:text-white transition-colors">Home</Link>
          <Link href="/kids" className="no-underline text-[#000000] px-4 py-2 rounded hover:text-white transition-colors">Activities</Link>
          <Link href="/Dashboard" className="no-underline text-[#000000] px-4 py-2 rounded hover:text-white transition-colors">Dashboard</Link>
        </div>

        <div className="w-16 h-16 bg-white/40 rounded-full border-2 border-white" />
      </nav>


    </nav>
  );
}