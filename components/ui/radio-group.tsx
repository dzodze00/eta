"use client"

import * as React from "react"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

interface RadioGroupContextValue {
  value: string | undefined
  onValueChange: (value: string) => void
  name: string
}

const RadioGroupContext = React.createContext<RadioGroupContextValue>({
  value: undefined,
  onValueChange: () => {},
  name: "",
})

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  name: string
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, defaultValue, onValueChange, name, ...props }, ref) => {
    const [selectedValue, setSelectedValue] = React.useState<string | undefined>(value || defaultValue)

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value)
      }
    }, [value])

    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setSelectedValue(newValue)
      }
      if (onValueChange) {
        onValueChange(newValue)
      }
    }

    return (
      <RadioGroupContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange, name }}>
        <div ref={ref} className={cn("grid gap-2", className)} {...props} />
      </RadioGroupContext.Provider>
    )
  },
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  value: string
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange, name } = React.useContext(RadioGroupContext)
    const checked = selectedValue === value

    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="radio"
            ref={ref}
            name={name}
            value={value}
            checked={checked}
            onChange={() => onValueChange(value)}
            className="sr-only"
            {...props}
          />
          <div
            className={cn(
              "h-4 w-4 rounded-full border border-gray-300 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2",
              checked && "border-purple-600",
              className,
            )}
            onClick={() => onValueChange(value)}
          >
            {checked && (
              <Circle className="h-2.5 w-2.5 fill-purple-600 text-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </div>
        </div>
      </div>
    )
  },
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
