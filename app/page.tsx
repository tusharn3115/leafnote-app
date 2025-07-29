import FeaturesSection from "@/components/features";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <FeaturesSection />
    </>
  );
}