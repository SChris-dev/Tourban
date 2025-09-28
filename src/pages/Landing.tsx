import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { wisataData } from '../data/wisataData'
import { kulinerData } from '../data/kulinerData'
import { penginapanData } from '../data/penginapanData'
import { olehOlehData } from '../data/olehOlehData'

type ShowcaseSlide = {
  src: string
}

type CategoryShowcaseProps = {
  title: string
  subtitle: string
  ctaLabel: string
  ctaTo: string
  slides: ShowcaseSlide[]
  accent: 'amber' | 'terracotta' | 'sage'
}

function buildSlides<T extends { images: string[] }>(items: T[]): ShowcaseSlide[] {
  // Flatten images from featured items; limit to 8 to keep it light
  const sources: string[] = []
  items.forEach((item) => {
    item.images.forEach((img) => sources.push(img))
  })
  const unique = Array.from(new Set(sources))
  return unique.slice(0, 8).map((src) => ({ src }))
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaTo,
  slides,
  accent,
}) => {
  const [index, setIndex] = useState(0)
  const total = slides.length

  useEffect(() => {
    if (total === 0) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 3500)
    return () => clearInterval(id)
  }, [total])

  const accentClasses = useMemo(() => {
    switch (accent) {
      case 'amber':
        return 'bg-amber-500 hover:bg-amber-600'
      case 'terracotta':
        return 'bg-terracotta-500 hover:bg-terracotta-600'
      case 'sage':
        return 'bg-sage-500 hover:bg-sage-600'
    }
  }, [accent])

  return (
    <div className="mb-16">
      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, i) => (
            <img
              key={`${slide.src}-${i}`}
              src={slide.src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={i !== index}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Subtle gradient edges */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">{title}</h2>
          <p className="text-white/90 md:text-lg max-w-2xl mb-6 drop-shadow">
            {subtitle}
          </p>
          <Link
            to={ctaTo}
            className={`inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg ${accentClasses}`}
          >
            {ctaLabel}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

const Landing: React.FC = () => {
  // Get featured items (first 2 from each category)
  const featuredWisata = wisataData.slice(0, 2)
  const featuredKuliner = kulinerData.slice(0, 2)
  const featuredPenginapan = penginapanData.slice(0, 2)
  const featuredOlehOleh = olehOlehData.slice(0, 2)

  return (
    <div className="min-h-screen bg-gradient-earth dark:bg-gradient-earth-dark">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-earth-900 dark:to-earth-800 min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-300 dark:bg-earth-700 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 dark:bg-earth-700 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-300 dark:bg-earth-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 fade-in-up">
            Tourban
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4 fade-in-up">
            Jelajahi Budaya Tuban
          </p>
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Temukan keindahan wisata, kelezatan kuliner, kenyamanan penginapan, dan keunikan oleh-oleh 
            khas Kabupaten Tuban dalam satu platform digital yang komprehensif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Link
              to="/wisata"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Mulai Jelajahi
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 float-animation">
          <div className="w-20 h-20 bg-white/20 rounded-full blur-sm"></div>
        </div>
        <div className="absolute top-20 right-20 float-animation" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-amber-300/30 rounded-full blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-32 float-animation" style={{ animationDelay: '2s' }}>
          <div className="w-24 h-24 bg-amber-300/20 rounded-full blur-sm"></div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-amber-50 dark:bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wisata Showcase */}
          <CategoryShowcase
            title="Destinasi Wisata"
            subtitle="Jelajahi tempat-tempat bersejarah dan pemandangan menawan di Tuban"
            ctaLabel="Lihat Semua Wisata"
            ctaTo="/wisata"
            slides={buildSlides(featuredWisata)}
            accent="amber"
          />

          {/* Kuliner Showcase */}
          <CategoryShowcase
            title="Kuliner Khas"
            subtitle="Nikmati cita rasa otentik makanan tradisional Tuban"
            ctaLabel="Jelajahi Kuliner"
            ctaTo="/kuliner"
            slides={buildSlides(featuredKuliner)}
            accent="terracotta"
          />

          {/* Penginapan Showcase */}
          <CategoryShowcase
            title="Penginapan Nyaman"
            subtitle="Temukan akomodasi terbaik untuk perjalanan Anda di Tuban"
            ctaLabel="Cari Penginapan"
            ctaTo="/penginapan"
            slides={buildSlides(featuredPenginapan)}
            accent="sage"
          />

          {/* Oleh-oleh Showcase */}
          <CategoryShowcase
            title="Oleh-Oleh Khas"
            subtitle="Bawa pulang kerajinan dan produk unggulan Tuban"
            ctaLabel="Lihat Oleh-Oleh"
            ctaTo="/oleh-oleh"
            slides={buildSlides(featuredOlehOleh)}
            accent="amber"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-800 dark:to-amber-950 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Mulai Petualangan Budaya Anda
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Temukan kekayaan budaya Tuban yang menawan. Dari wisata bersejarah hingga kuliner lezat, 
            semuanya tersedia dalam genggaman Anda.
          </p>
          <Link
            to="/wisata"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-amber-100 text-amber-800 dark:text-amber-900 hover:bg-amber-50 dark:hover:bg-amber-200 font-semibold text-lg rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Jelajahi Sekarang
            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Landing
