'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'

type LightboxImage = { src: string; alt: string }

const LightboxContext = createContext<(image: LightboxImage) => void>(() => {})

export function useLightbox() {
  return useContext(LightboxContext)
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()

  const open = useCallback((img: LightboxImage) => {
    triggerRef.current = document.activeElement as HTMLElement | null
    setImage(img)
  }, [])

  const close = useCallback(() => {
    setImage(null)
    triggerRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!image) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [image, close])

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <AnimatePresence>
        {image && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={image.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={close}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full border border-cream/30 p-2.5 text-cream transition-colors hover:bg-cream hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream md:right-6 md:top-6"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Close image</span>
            </button>
            <motion.img
              src={image.src}
              alt={image.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              initial={reduce ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.96, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}
