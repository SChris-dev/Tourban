import React from 'react'

interface CardProps {
  title: string
  description: string
  image: string
  onClick?: () => void
  className?: string
}

const Card: React.FC<CardProps> = ({ title, description, image, onClick, className = '' }) => {
  // Better placeholder image - using a high quality landscape image from Unsplash
  const placeholderImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  
  return (
    <div
      onClick={onClick}
      className={`
        bg-white dark:bg-earth-800 rounded-xl shadow-earth hover:shadow-earth-lg dark:shadow-dark dark:hover:shadow-dark-lg 
        transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden group
        border border-earth-100 dark:border-earth-700
        ${className}
      `}
    >
      <div className="aspect-w-16 aspect-h-10 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = placeholderImage
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-earth-800 dark:text-earth-100 mb-2 group-hover:text-earth-600 dark:group-hover:text-earth-200 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-earth-600 dark:text-earth-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex items-center text-earth-500 dark:text-earth-400 group-hover:text-earth-400 dark:group-hover:text-earth-300 transition-colors duration-200">
          <span className="text-sm font-medium">Lihat Detail</span>
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Card
