import { CTAButton } from "@/components/ui/CTAButton";
import { HeroSection } from "@/components/ui/HeroSection";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { InteractiveGrid } from "@/components/ui/InteractiveGrid";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden flex flex-col bg-background relative">

      <AnimatedBackground />
      <InteractiveGrid />

      {/* Header */}
      <div className="py-[clamp(12px,2vh,32px)] flex justify-end px-6 z-20">
        <LanguageToggle />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-grow min-h-0 gap-[clamp(12px,3vh,40px)] z-30">
        <LogoStrip />
        <HeroSection />
      </div>

      {/* Footer */}
      <footer className="py-[clamp(8px,1.5vh,20px)] text-xs text-neutral/40 border-t border-white/5 z-20 flex justify-center">
        <p>&copy; {new Date().getFullYear()} Sabbaq. All rights reserved.</p>
      </footer>

    </main>
  );
}
