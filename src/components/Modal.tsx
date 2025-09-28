import React, { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  maxWidth?: string
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  maxWidth = 'max-w-4xl' 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 dark:bg-black/60 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className={`
            relative bg-white dark:bg-earth-900 rounded-xl shadow-2xl w-full ${maxWidth} 
            transform transition-all fade-in-up border border-earth-100 dark:border-earth-700
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-earth-200 dark:border-earth-700">
              <h2 className="text-2xl font-serif font-bold text-earth-800 dark:text-cream-100">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-earth-400 hover:text-earth-600 dark:text-earth-300 dark:hover:text-earth-200 transition-colors duration-200 p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Close button if no title */}
          {!title && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-earth-400 hover:text-earth-600 dark:text-earth-300 dark:hover:text-earth-200 transition-colors duration-200 p-2 bg-white/80 dark:bg-earth-800/80 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Body */}
          <div className="p-6 text-earth-800 dark:text-cream-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
