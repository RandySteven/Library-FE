import { Footer } from "@/components/Elements/Footer";
import { AboutUs } from "@/components/Fragments/AboutUs";
import { HeroSection } from "@/components/Fragments/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        {/* header */}
        <HeroSection />

        {/* About us */}
        <AboutUs />

        {/* Display products */}

        {/* Display genres */}


      </main>
      <Footer />
    </div>
  );
}
