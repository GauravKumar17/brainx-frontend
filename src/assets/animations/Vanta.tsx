"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

type VantaBackgroundProps = {
  children: ReactNode
}

type VantaEffect = {
  destroy: () => void
}

type VantaCloudsOptions = {
  el: HTMLDivElement
  mouseControls: boolean
  touchControls: boolean
  gyroControls: boolean
  minHeight: number
  minWidth: number
}

type VantaWindow = Window & {
  VANTA?: {
    CLOUDS?: (options: VantaCloudsOptions) => VantaEffect
  }
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement | null>(null)
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)
  const [fallbackMode, setFallbackMode] = useState(false)

  useEffect(() => {
    if (fallbackMode) {
      return
    }

    const clouds = (window as VantaWindow).VANTA?.CLOUDS

    if (!vantaEffect && clouds && vantaRef.current) {
      try {
        setVantaEffect(clouds({
          el: vantaRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00
        }))
      } catch (error) {
        console.error("Vanta background disabled:", error)
        setFallbackMode(true)
      }
    }

    if (!clouds) {
      setFallbackMode(true)
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [fallbackMode, vantaEffect])

  return (
    <div
      ref={vantaRef}
      className={`relative w-full h-screen overflow-hidden ${
        fallbackMode
          ? "bg-[radial-gradient(circle_at_top,#60a5fa_0%,#1e293b_45%,#020617_100%)]"
          : ""
      }`}
    >
      {fallbackMode && (
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />
      )}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {children}
      </div>
    </div>
  )
}
