import { Coffee } from "@/components/Coffee";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Socials } from "@/components/Socials";



export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-screen grid grid-cols-2 relative -z-2 overflow-x-hidden overflow-y-hidden">
        <div className="bg-[#1a1f25]">
          <Navbar />
            <div className="h-45 w-60 bg-[#272c35] absolute mt-110 ml-4"></div>
            <div className="mt-80">
              <div className="flex flex-col gap-4 max-w-sm mb-80 ml-10 mt-45 absolute">
                  <h2 className="text-[#f1dabf] text-2xl">Brew Lifestyle</h2>
                  <p className="text-neutral-400 font-medium leading-relaxed">Coffee - more than a morning ritual, it's a daily companion that sharpens our focus, lifts our spirits, and brings people together. Every cup carries powerful antioxidants.</p>
              </div>
            </div>

        </div>
        <div className="bg-[#272c35] relative"></div>
          <HeroSection />
          <h1 className="flex flex-col uppercase text-9xl text-[#21262f] absolute font-gothic ml-[760px] leading-snug"><p>brew</p> <p>ec&tacy</p></h1>
      </div>

      <Coffee />
      <Socials />
      </div>
  );
}
