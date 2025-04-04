"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  className?: string
  background?: string
  particleColor?: string
  particleCount?: number
  particleSize?: number
  children?: React.ReactNode
}

export const Sparkles = ({
  className,
  background = "#000000",
  particleColor = "#00ff00",
  particleCount = 200,
  particleSize = 1.5,
  children,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>(0)
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; life: number; size: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect()
      canvas.width = width
      canvas.height = height

      // Reinitialize particles when canvas size changes
      initParticles(width, height)
    }

    const initParticles = (width: number, height: number) => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5, // Increased from 0.2 to 0.5
        vy: (Math.random() - 0.5) * 0.5, // Increased from 0.2 to 0.5
        life: Math.random() * 100,
        size: Math.random() * particleSize + 0.5,
      }))
    }

    const animate = () => {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.vx
        particle.y += particle.vy

        // Slowly change direction
        particle.vx += (Math.random() - 0.5) * 0.03 // Increased from 0.01 to 0.03
        particle.vy += (Math.random() - 0.5) * 0.03 // Increased from 0.01 to 0.03

        // Limit velocity
        particle.vx = Math.max(Math.min(particle.vx, 1.0), -1.0) // Increased from 0.5 to 1.0
        particle.vy = Math.max(Math.min(particle.vy, 1.0), -1.0) // Increased from 0.5 to 1.0

        // Reset particles that go off screen
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          if (Math.random() > 0.5) {
            // Reset to a side
            particle.x = Math.random() > 0.5 ? 0 : canvas.width
            particle.y = Math.random() * canvas.height
          } else {
            // Reset to top/bottom
            particle.x = Math.random() * canvas.width
            particle.y = Math.random() > 0.5 ? 0 : canvas.height
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Initial setup
    handleResize()
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [particleCount, particleColor, particleSize])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)} style={{ background }}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

