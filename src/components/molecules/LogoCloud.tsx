"use client"

import type React from "react"

import Image from "next/image"
import IconOkk from "../../../public/marqueLogos/okxLogo.png"
import IconArgent from "../../../public/marqueLogos/argentX.png"
import IconBravaas from "../../../public/marqueLogos/bravoos.png"
import IconStarknet from "../../../public/marqueLogos/starknet.png"
import IconMetamask from "../../../public/marqueLogos/metamask.png"
import { useRef, useEffect } from "react"

export default function LogoCloud() {
  const logos = [
    {
      image: IconArgent,
      alt: "argent-logo",
    },
    {
      image: IconStarknet,
      alt: "starknet-logo",
    },
    {
      image: IconMetamask,
      alt: "metamask-logo",
    },
    {
      image: IconBravaas,
      alt: "bravaas-logo",
    },
    {
      image: IconOkk,
      alt: "okk-logo",
    },
  ]

  // Create two sets of logos for a seamless loop
  // const [isPaused, setIsPaused] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)

  // Use a more reliable approach with CSS variables for animation control
  useEffect(() => {
    // Set the animation duration based on the number of logos
    const duration = logos.length * 5 // 5 seconds per logo for a smooth pace

    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty("--duration", `${duration}s`)
    }
  }, [logos.length])

  return (
    <div
      className="overflow-hidden whitespace-nowrap pb-24 sm:pb-28 z-10 w-full relative"
      // style={
      //   {
      //     // Apply the pause state directly with inline styles to prevent jumping
      //     "--play-state": isPaused ? "paused" : "running",
      //   } as React.CSSProperties
      // }
    >
      <div ref={scrollerRef} className="scroller flex items-center">
        <div className="logos-slide flex items-center">
          {logos.map((logo, index) => (
            <div key={`logo-${index}`} className="logo-wrapper mx-8">
              <Image
                src={logo.image || "/placeholder.svg"}
                alt={logo.alt}
                width={150}
                height={80}
                priority
                className="transition-transform hover:scale-110 object-contain"
                style={{ width: "150px", height: "auto" }}
              />
            </div>
          ))}
        </div>

        {/* Duplicate the logos for seamless looping */}
        <div className="logos-slide flex items-center">
          {logos.map((logo, index) => (
            <div key={`logo-dup-${index}`} className="logo-wrapper mx-8">
              <Image
                src={logo.image || "/placeholder.svg"}
                alt={logo.alt}
                width={150}
                height={80}
                priority
                className="transition-transform hover:scale-110 object-contain"
                style={{ width: "150px", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

