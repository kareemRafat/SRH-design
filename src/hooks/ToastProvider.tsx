import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { ToastContext } from './toast-context'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const hideTimer = useRef<number | undefined>(undefined)

  const showToast = useCallback((text: string) => {
    setMessage(text)
    setVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setVisible(false), 3200)
  }, [])

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        id="toast"
        role="status"
        aria-live="polite"
        className={`page-toast ${visible ? 'is-visible' : ''}`}
      >
        {message}
      </div>
    </ToastContext.Provider>
  )
}
