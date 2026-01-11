import HeroSection from "@/components/sections/Hero";
import { Navigation } from "../components/Navigation";
import Skills from "@/components/sections/Skills";
export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Skills />
    </>
  );
}
