import * as Font from "../components/fonts.js";

import Link from "next/link.js";
import Image from "next/image.js";

export default function Home() {

  return (
    <div className="flex flex-col max-w-screen">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/homepage/home-background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 shadow-[inset_0px_-200px_100px_30px_rgba(0,_0,_0,_0.6)] flex flex-col justify-end gap-8 p-20 h-screen w-full text-white">
          <h1 className={`${Font.dmSerifDisplay.className} text-8xl animate-revealBot`}>NgeBaju </h1>
          <h1 className="font-bold text-7xl animate-revealBot" style={{ animationDelay: '0ms' }}>Newest Collection</h1>
          <div className="flex flex-row justify-between w-full items-center">
            <p className="w-[40%] text-lg animate-revealBot" style={{ animationDelay: '300ms' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link href={"/"}
              className="text-2xl font-semibold p-6 px-10 bg-transparent border-white border-4 rounded-[70px] hover:bg-white hover:text-black transition duration-300 ease-in-out animate-revealBot"
              style={{ animationDelay: '300ms' }}
            >
              Discover Now
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col items-center my-10">
        <h1 className={`${Font.dmSerifDisplay.className} text-8xl mb-10`}>
          Our New Releases
        </h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 h-full w-[calc(100%/1.4)]">
          <div className="col-span-2 row-span-1 bg-black flex items-center justify-center animate-pulse duration-700 rounded-[30px]" style={{ animationDelay: '0ms' }}>
          </div>

          <div className="col-span-1 row-span-1 bg-black flex items-center justify-center animate-pulse duration-700 rounded-[30px]" style={{ animationDelay: '200ms' }}>
          </div>

          <div className="col-span-1 row-span-1 bg-black flex items-center justify-center animate-pulse duration-700 rounded-[30px]" style={{ animationDelay: '200ms' }}>
          </div>

          <div className="col-span-2 row-span-1 bg-black flex items-center justify-center animate-pulse duration-700 rounded-[30px]" style={{ animationDelay: '600ms' }}>
          </div>
        </div>
      </div>

      <div className="bg-black h-screen w-full p-20 flex flex-col gap-20 justify-evenly">
        <h1 className={`${Font.dmSerifDisplay.className} text-7xl text-white`}>
          Enough for the Wait, Start Shopping Now!

        </h1>
        <div className="bg-gradient-to-b from-gray-50 to-orange-200 h-[calc(100%/1.1)] px-10 rounded-[40px] flex flex-row justify-between items-center">
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className="text-6xl font-bold">
              Join Our Member and Get More Benefits
            </h1>
            <p className="text-xl ">
              Discover a collection of stylish and thoughtful gifts perfect for any occasion. Whether you're looking for trendy outfits, we have something special for everyone.
            </p>
            <Link href={"/auth/login"}
              className="text-2xl w-[40%] text-center font-semibold p-4 px-8 bg-transparent border-black border-4 rounded-[70px] hover:bg-black hover:text-orange-200 transition duration-300 ease-in-out"
            >
              Sign Up for Member
            </Link>
          </div>
          <div className="relative w-[calc(100%/2)] h-full self-end">
            <Image src={"/homepage/model-girl.png"} layout="fill" objectFit="cover" style={{ objectPosition: "0% 40%" }} alt="cewe model berdiri itam"/>
          </div>
        </div>
      </div>
    </div>
  );
}
