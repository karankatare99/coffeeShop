import { Coffee } from "@/components/Coffee";
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
            </div>

        </div>
        <div className="bg-[#272c35] relative"></div>
          <HeroSection />
      </div>

      <Coffee />
      <Socials />
      </div>
  );
}
