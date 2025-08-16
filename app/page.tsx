import ThreeBackground from "@/components/three-background"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ScheduleSection from "@/components/schedule-section"
import TracksSection from "@/components/tracks-section"
import PrizesSection from "@/components/prizes-section"
import JudgesSection from "@/components/judges-section"
import FlashbackSection from "@/components/flashback-section"
import SponsorsSection from "@/components/sponsors-section"
import FAQSection from "@/components/faq-section"

import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <ThreeBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      {/* <TracksSection /> */}
      <PrizesSection />
      <JudgesSection />
      <FlashbackSection />
      <SponsorsSection />
      <FAQSection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  )
}
