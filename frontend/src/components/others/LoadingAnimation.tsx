import type React from "react"
import { cn } from "@/lib/utils"

interface LoadingAnimationProps {
  className?: string
  size?: "small" | "medium" | "large"
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ className, size = "medium" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-10 h-10",
    large: "w-14 h-14",
  }

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-white border-t-transparent",
        sizeClasses[size],
        className
      )}
    ></div>
  )
}

export default LoadingAnimation
