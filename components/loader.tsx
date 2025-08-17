"use client"
import { useEffect, useState } from "react"

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const timer = setTimeout(() => setIsLoading(false), 8000) // longer fallback
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <video
        src={isMobile ? "/loader_phn.mp4" : "/loader.mp4"}
        autoPlay
        muted
        playsInline
        onEnded={() => setIsLoading(false)}
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.8 // slow down
        }}
        className="w-full h-full object-cover bg-black transform scale-110 -translate-y-6"
        // scale-110 -> zoom in
        // -translate-y-6 -> move slightly up
        // object-cover -> fills screen properly
      />
    </div>
  )
}
