"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const DialogContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

function Dialog({ open, onOpenChange, children }: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(open || false)

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open)
    }
  }, [open])

  React.useEffect(() => {
    if (onOpenChange) {
      onOpenChange(isOpen)
    }
  }, [isOpen, onOpenChange])

  return <DialogContext.Provider value={{ open: isOpen, setOpen: setIsOpen }}>{children}</DialogContext.Provider>
}

function DialogTrigger({ children, asChild, ...props }: { children: React.ReactNode; asChild?: boolean }) {
  const { setOpen } = React.useContext(DialogContext)

  const handleClick = () => {
    setOpen(true)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      onClick: handleClick,
    })
  }

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

function DialogContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = React.useContext(DialogContext)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-lg",
          className,
        )}
        {...props}
      >
        <button
          type="button"
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={() => setOpen(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  )
}

function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
}

function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
}

function DialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-gray-500", className)} {...props} />
}

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription }
