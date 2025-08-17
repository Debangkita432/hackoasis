"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import CountdownTimer from "./countdown-timer"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Violet gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#250060]/20 via-[#260061]/10 to-[#240060]/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#25005f]/10 to-transparent" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,0,96,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,0,96,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${orbitron.className}`}>
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <Image
              src="/logo.png"
              alt="IEM HACKOASIS 2.0"
              width={220}
              height={140}
              className="mx-auto rounded-xl object-contain border border-white/20 animate-float"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span
              className="block mb-2 text-white font-extrabold"
              style={{
                textShadow:
                  "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(37,0,96,0.8), 0 0 30px rgba(37,0,96,0.6), 2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              IEM HACKOASIS
            </span>
            <span
              className="text-6xl sm:text-8xl lg:text-9xl block text-white font-black"
              style={{
                textShadow:
                  "0 0 15px rgba(37,0,96,1), 0 0 30px rgba(37,0,96,0.8), 0 0 45px rgba(37,0,96,0.6), 3px 3px 6px rgba(0,0,0,0.9)",
              }}
            >
              2.0
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl sm:text-2xl mb-8 tracking-wider text-white font-semibold animate-fade-in-up"
            style={{
              textShadow:
                "0 0 8px rgba(255,255,255,0.6), 1px 1px 3px rgba(0,0,0,0.8)",
            }}
          >
            &gt; Innovate. Collaborate. Create. &lt;
          </p>

          {/* Event Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up">
            <div className="px-4 py-2 flex items-center gap-2 rounded-xl border border-white/20 bg-[#250060]/30 backdrop-blur">
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-white">20th September 2025</span>
            </div>
            <div className="px-4 py-2 flex items-center gap-2 rounded-xl border border-white/20 bg-[#250060]/30 backdrop-blur">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white">IEM Gurukul Building</span>
            </div>
            <div className="px-4 py-2 flex items-center gap-2 rounded-xl border border-white/20 bg-[#250060]/30 backdrop-blur">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white">10AM - 6PM</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-12 animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-6 tracking-widest text-white">[ EVENT STARTS IN ]</h3>
            <CountdownTimer />
          </div>

          {/* CTAs — SAME SIZE */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up mb-16">
            {/* Outline / Glass pill (Brochure) */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="relative rounded-full w-[260px] sm:w-[320px] h-[56px] sm:h-[64px] px-0 text-white text-xl sm:text-2xl tracking-wide border-[3px] border-[#250060] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
            >
              <a href="#schedule" aria-label="View events" className="flex items-center justify-center w-full h-full whitespace-nowrap">
                Download Brochure
              </a>
            </Button>

            {/* Filled pill (Register Now) */}
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden rounded-full w-[260px] sm:w-[320px] h-[56px] sm:h-[64px] px-0 text-white text-xl sm:text-2xl tracking-wide bg-gradient-to-r from-[#250060] to-[#260061] hover:from-[#240060] hover:to-[#25005f] border-[3px] border-[#240060]/80 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_20px_48px_-12px_rgba(255,255,255,0.35)]"
            >
              <a
                href="https://forms.gle/Aq7aJhhe9kvLE1e4A"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open registration form"
                className="flex items-center justify-center w-full h-full whitespace-nowrap"
              >
                Register Now...
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-20 bg-gradient-to-b from-white/18 to-transparent" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 animate-fade-in-up">
            {[
              { value: "09", label: "HOURS OF CODING" },
              { value: "₹20k+", label: "PRIZE POOL" },
            ].map((stat, i) => (
              <div
                key={i}
                className="w-full max-w-sm p-6 text-center rounded-2xl border border-white/20 bg-[#250060]/30 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <div
                  className="text-4xl sm:text-5xl font-bold mb-2 text-white"
                  style={{ textShadow: "0 0 10px rgba(37,0,96,1), 0 0 20px rgba(37,0,96,0.8), 0 0 30px rgba(37,0,96,0.6), 2px 2px 4px rgba(0,0,0,0.9)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm tracking-widest text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local CSS */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 700ms ease-out both; }
      `}</style>
    </section>
  )
}
