"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  value: string | null
  onValueChange: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue>({
  value: null,
  onValueChange: () => {},
})

interface AccordionProps {
  type?: "single" | "multiple"
  collapsible?: boolean
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

function Accordion({
  type = "single",
  collapsible = false,
  value,
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}: AccordionProps) {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(value || defaultValue || null)

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleValueChange = (itemValue: string) => {
    if (type === "single") {
      if (collapsible && selectedValue === itemValue) {
        setSelectedValue(null)
      } else {
        setSelectedValue(itemValue)
      }
    }

    if (onValueChange) {
      onValueChange(itemValue)
    }
  }

  return (
    <AccordionContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange }}>
      <div className={cn("space-y-1", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function AccordionItem({ value, className, ...props }: AccordionItemProps) {
  return <div data-value={value} className={cn("border rounded-md", className)} {...props} />
}

interface AccordionTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const { value, onValueChange } = React.useContext(AccordionContext)
  const itemValue = React.useContext(AccordionItemContext)
  const isOpen = value === itemValue

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between px-4 py-2 font-medium transition-all hover:underline",
        className,
      )}
      onClick={() => onValueChange(itemValue)}
      {...props}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionItemContext = React.createContext<string>("")

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const { value } = React.useContext(AccordionContext)
  const itemValue = React.useContext(AccordionItemContext)
  const isOpen = value === itemValue

  if (!isOpen) return null

  return (
    <div className={cn("overflow-hidden px-4 py-2 text-sm", className)} {...props}>
      {children}
    </div>
  )
}

// Modified AccordionItem to provide context for its children
function AccordionItemWithContext({ value, className, children, ...props }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <AccordionItem value={value} className={className} {...props}>
        {children}
      </AccordionItem>
    </AccordionItemContext.Provider>
  )
}

export { Accordion, AccordionItemWithContext as AccordionItem, AccordionTrigger, AccordionContent }
