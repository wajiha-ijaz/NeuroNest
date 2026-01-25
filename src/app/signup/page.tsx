import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    // Background wrapper to center the card on the screen
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4">
      
      {/* Main Container: 1400px wide */}
      <div className="flex w-[1400px] h-[850px] bg-white shadow-2xl overflow-hidden rounded-lg">
        
        {/* LEFT SIDE: Image Section (30% Width) */}
        <div className="relative w-[30%] h-full">
          <Image
            src="/sign.jpg" 
            alt="Colorful Jigsaw Puzzle"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT SIDE: Form Section (70% Width) */}
        <div className="w-[70%] bg-white flex flex-col items-center justify-center px-32">
          
          {/* Header Section */}
          <div className="-mt-[200px] text-center w-[50%] mb-10">
            <h1 className="text-[32px] font-bold text-[#D37D3D] font-playpen leading-tight">
              Welcome to NeuroNest
            </h1>
            <p className="text-[18px] text-gray-700 font-playpen mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>

          {/* Facebook Button */}
          <button className="mt-[20px] flex h-[40px] w-[400px] items-center justify-center gap-3 rounded-[4px] bg-[#1877F2] text-white hover:opacity-90 transition-opacity mb-8">
             <span className="mr-[10px] bg-white text-[#FFFFFF] rounded-full w-6 h-6 flex items-center justify-center text-[23px] font-bold">f</span>
             <span className="font-semibold mr-[40px]  text-base uppercase text-[#FFFFFF] tracking-wider">Join using Facebook</span>
          </button>

       {/* Divider */}
<div className="mt-[15px] mt-4 relative w-full max-w-[600px] text-center mb-10">

  <span className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 text-gray-500 font-playpen text-sm">
    OR
  </span>
</div>
{/* Registration Form */}
<form className="mt-[5px] w-full max-w-[600px] space-y-4">
  
  {/* Name Row: Wrapped in flex to put them side-by-side correctly */}
  <div className="flex w-full gap-8">
    <div className="flex-1">
      <label className="block text-[16px] font-bold text-gray-800 font-playpen mb-1">
        First Name
      </label>
      <input type="text" className="w-full h-[45px] border border-gray-400 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white" />
    </div>
    <div className="flex-1">
      <label className="block text-[16px] font-bold text-gray-800 font-playpen mb-1">
        Last Name
      </label>
      <input type="text" className="w-full h-[45px] border border-gray-400 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white" />
    </div>
  </div>

  {/* Email Field */}
  <div>
    <label className="block text-[16px] font-bold text-gray-800 font-playpen mb-1">Email</label>
    <input type="email" className="w-full h-[45px] border border-gray-400 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white" />
  </div>

  {/* Username Field */}
  <div>
    <label className="block text-[16px] font-bold text-gray-800 font-playpen mb-1">
      Username <span className="text-[13px] font-normal text-gray-500 italic">(only letters, numbers and underscores)</span>
    </label>
    <input type="text" className="w-full h-[45px] border border-gray-400 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white" />
  </div>

  {/* Password Field */}
  <div>
    <label className="block text-[16px] font-bold text-gray-800 font-playpen mb-1">
      Password <span className="text-[13px] font-normal text-gray-500 italic">(min 8 char)</span>
    </label>
    <input type="password" className="w-full h-[45px] border border-gray-400 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white" />
  </div>

  {/* Submit Button */}
  <div className="mt-[15px] flex justify-center pt-4">
    <Link href="/home" className="no-underline">
      <button 
        type="button" 
        className="h-[35px] w-[200px] bg-black text-white text-[20px] font-bold rounded-md hover:bg-gray-800 transition-colors shadow-lg active:scale-95"
      >
        Join
      </button>
    </Link>
  </div>

  {/* Fine Print */}
  <p className="mt-[5px] text-center text-[12px] text-gray-400 font-playpen">
    By continuing, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>
  </p>
</form> 

{/* These three divs close the parent sections opened at the top of the file */}
        </div> 
      </div> 
    </div>
  );
}