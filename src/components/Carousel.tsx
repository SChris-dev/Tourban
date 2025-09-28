import React, { useState } from 'react'

interface CarouselProps {
  images: string[]
  alt: string
}

const Carousel: React.FC<CarouselProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-cream-100 dark:bg-earth-800 rounded-lg flex items-center justify-center">
        <span className="text-earth-600 dark:text-cream-300">No images available</span>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://via.placeholder.com/600x400/4e82ff/ffffff?text=Tourban+Image'
          }}
        />
        
        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200
                ${index === currentIndex 
                  ? 'border-earth-500 opacity-100' 
                  : 'border-cream-200 dark:border-earth-700 opacity-70 hover:opacity-100'
                }
              `}
            >
              <img
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://via.placeholder.com/64x64/4e82ff/ffffff?text=T'
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && images.length <= 5 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-200
                ${index === currentIndex 
                  ? 'bg-earth-500 w-6' 
                  : 'bg-cream-300 dark:bg-earth-700 hover:bg-cream-400 dark:hover:bg-earth-600'
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
