"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

type VantaBackgroundProps = {
  children: ReactNode
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    // @ts-ignore
    if (!vantaEffect && window.VANTA?.CLOUDS) {
      // @ts-ignore
      setVantaEffect(window.VANTA.CLOUDS({
        el: vantaRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={vantaRef} className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {children}
      </div>
    </div>
  )
}
