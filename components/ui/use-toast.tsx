// This is a simplified version of the toast component
type ToastProps = {
  title?: string
  description?: string
  duration?: number
}

export function toast({ title, description, duration = 3000 }: ToastProps) {
  // Create a toast element
  const toast = document.createElement("div")
  toast.className =
    "fixed top-4 right-4 z-50 max-w-md bg-white rounded-lg shadow-lg border border-gray-200 p-4 transition-all"

  // Create title if provided
  if (title) {
    const titleElement = document.createElement("div")
    titleElement.className = "font-medium"
    titleElement.textContent = title
    toast.appendChild(titleElement)
  }

  // Create description if provided
  if (description) {
    const descElement = document.createElement("div")
    descElement.className = "text-sm text-gray-500 mt-1"
    descElement.textContent = description
    toast.appendChild(descElement)
  }

  // Add to document
  document.body.appendChild(toast)

  // Animate in
  setTimeout(() => {
    toast.style.opacity = "1"
  }, 10)

  // Remove after duration
  setTimeout(() => {
    toast.style.opacity = "0"
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, duration)

  return {
    id: Date.now().toString(),
    dismiss: () => {
      toast.style.opacity = "0"
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast)
        }
      }, 300)
    },
  }
}
