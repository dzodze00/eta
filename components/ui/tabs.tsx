"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  selectedTab: string
  setSelectedTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue>({
  selectedTab: "",
  setSelectedTab: () => {},
})

interface TabsProps {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

function Tabs({ defaultValue, value, onValueChange, children, className }: TabsProps) {
  const [selectedTab, setSelectedTab] = React.useState(value || defaultValue)

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value)
    }
  }, [value])

  const handleTabChange = (newValue: string) => {
    if (value === undefined) {
      setSelectedTab(newValue)
    }
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab: handleTabChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

function TabsList({ className, ...props }: TabsListProps) {
  return (
    <div
      className={cn("inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1", className)}
      {...props}
    />
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  const { selectedTab, setSelectedTab } = React.useContext(TabsContext)
  const isSelected = selectedTab === value

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isSelected ? "bg-white text-purple-700 shadow-sm" : "text-gray-600 hover:text-gray-900",
        className,
      )}
      onClick={() => setSelectedTab(value)}
      data-state={isSelected ? "active" : "inactive"}
      {...props}
    />
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function TabsContent({ className, value, ...props }: TabsContentProps) {
  const { selectedTab } = React.useContext(TabsContext)
  const isSelected = selectedTab === value

  if (!isSelected) return null

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2",
        className,
      )}
      data-state={isSelected ? "active" : "inactive"}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
