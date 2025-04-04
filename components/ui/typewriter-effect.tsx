"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!words.length) return

    const typingInterval = setInterval(() => {
      if (isTyping) {
        // Typing
        if (currentCharIndex < words[currentWordIndex].text.length) {
          setCurrentCharIndex((prev) => prev + 1)
        } else {
          // Finished typing current word
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCurrentCharIndex(0)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }, 1500) // Pause before typing next word
        }
      }
    }, 100) // Typing speed

    return () => clearInterval(typingInterval)
  }, [words, currentWordIndex, currentCharIndex, isTyping])

  return (
    <div className={cn("flex items-center", className)}>
      <span className={cn(words[currentWordIndex]?.className)}>
        {words[currentWordIndex]?.text.substring(0, currentCharIndex)}
      </span>
      <span className={cn("inline-block h-4 w-[2px] bg-green-400 rounded-full ml-1", cursorClassName)} />
    </div>
  )
}

