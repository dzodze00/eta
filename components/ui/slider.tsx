"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: number[]
  value?: number[]
  max?: number
  step?: number
  onValueChange?: (value: number[]) => void
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ className, defaultValue = [0], value, max = 100, step = 1, onValueChange, ...props }, ref) => {
    const [values, setValues] = React.useState<number[]>(value || defaultValue)
    const thumbRefs = React.useRef<(HTMLDivElement | null)[]>([])
    const trackRef = React.useRef<HTMLDivElement>(null)
    const [draggingThumbIndex, setDraggingThumbIndex] = React.useState<number | null>(null)

    React.useEffect(() => {
      if (value !== undefined) {
        setValues(value)
      }
    }, [value])

    const handlePointerDown = (index: number) => (e: React.PointerEvent) => {
      e.preventDefault()
      setDraggingThumbIndex(index)
      document.addEventListener("pointermove", handlePointerMove)
      document.addEventListener("pointerup", handlePointerUp)
    }

    const handlePointerMove = React.useCallback(
      (e: PointerEvent) => {
        if (draggingThumbIndex === null || !trackRef.current) return

        const track = trackRef.current
        const trackRect = track.getBoundingClientRect()
        const newPosition = (e.clientX - trackRect.left) / trackRect.width
        let newValue = Math.round((newPosition * max) / step) * step
        newValue = Math.max(0, Math.min(max, newValue))

        const newValues = [...values]
        newValues[draggingThumbIndex] = newValue

        // Sort values for range slider
        if (newValues.length > 1) {
          newValues.sort((a, b) => a - b)
        }

        setValues(newValues)
        if (onValueChange) {
          onValueChange(newValues)
        }
      },
      [draggingThumbIndex, max, step, values, onValueChange],
    )

    const handlePointerUp = React.useCallback(() => {
      setDraggingThumbIndex(null)
      document.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("pointerup", handlePointerUp)
    }, [handlePointerMove])

    React.useEffect(() => {
      return () => {
        document.removeEventListener("pointermove", handlePointerMove)
        document.removeEventListener("pointerup", handlePointerUp)
      }
    }, [handlePointerMove, handlePointerUp])

    return (
      <div ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
        <div ref={trackRef} className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
          <div
            className="absolute h-full bg-purple-600"
            style={{
              left: 0,
              right: values.length > 1 ? `${100 - (values[1] / max) * 100}%` : 0,
              width: values.length > 1 ? `${((values[1] - values[0]) / max) * 100}%` : `${(values[0] / max) * 100}%`,
            }}
          />
        </div>
        {values.map((value, index) => (
          <div
            key={index}
            ref={(el) => (thumbRefs.current[index] = el)}
            className="absolute left-0 top-1/2 h-4 w-4 cursor-pointer rounded-full border border-purple-600 bg-white shadow-sm -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            style={{ left: `${(value / max) * 100}%` }}
            onPointerDown={handlePointerDown(index)}
            tabIndex={0}
            role="slider"
            aria-valuemin={0}
            aria-valuemax={max}
            aria-valuenow={value}
          />
        ))}
      </div>
    )
  },
)
Slider.displayName = "Slider"

export { Slider }
