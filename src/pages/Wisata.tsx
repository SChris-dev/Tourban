import React, { useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Carousel from '../components/Carousel'
import { wisataData } from '../data/wisataData'
import type { WisataItem } from '../data/wisataData'

const Wisata: React.FC = () => {
  const [selectedWisata, setSelectedWisata] = useState<WisataItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (wisata: WisataItem) => {
    setSelectedWisata(wisata)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedWisata(null)
  }

  return (
    <div className="min-h-screen bg-gradient-earth dark:bg-gradient-earth-dark">
      {/* Header Section */}
      <section className="bg-gradient-sage dark:bg-gradient-sage-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 fade-in-up">
            Destinasi Wisata
          </h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Jelajahi tempat-tempat bersejarah dan pemandangan menawan yang menjadi kebanggaan 
            Kabupaten Tuban. Setiap destinasi memiliki cerita dan pesona yang unik.
          </p>
        </div>
      </section>

      {/* Wisata Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wisataData.map((wisata) => (
              <Card
                key={wisata.id}
                title={wisata.nama}
                description={wisata.deskripsi}
                image={wisata.images[0]}
                onClick={() => handleCardClick(wisata)}
                className="fade-in-up"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Wisata Details */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedWisata?.nama}
        maxWidth="max-w-6xl"
      >
        {selectedWisata && (
          <div className="space-y-6">
            {/* Image Carousel */}
            <Carousel images={selectedWisata.images} alt={selectedWisata.nama} />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Deskripsi</h3>
                <p className="text-earth-700 dark:text-cream-200 leading-relaxed mb-6">
                  {selectedWisata.deskripsi}
                </p>

                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Sejarah</h3>
                <p className="text-earth-700 dark:text-cream-200 leading-relaxed">
                  {selectedWisata.sejarah}
                </p>
              </div>

              {/* Location Info */}
              <div>
                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Lokasi</h3>
                <div className="bg-earth-50 dark:bg-earth-900 p-4 rounded-lg mb-6">
                  <p className="text-earth-700 dark:text-cream-200 flex items-center">
                    <svg className="w-5 h-5 text-earth-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {selectedWisata.lokasi}
                  </p>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={selectedWisata.mapsEmbed}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Lokasi ${selectedWisata.nama}`}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-earth-200">
              <button
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedWisata.lokasi)}`, '_blank')}
                className="flex-1 bg-earth-500 hover:bg-earth-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Buka di Google Maps
              </button>
              
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: selectedWisata.nama,
                      text: selectedWisata.deskripsi,
                      url: window.location.href
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Link berhasil disalin!')
                  }
                }}
                className="flex-1 bg-sage-500 hover:bg-sage-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Bagikan
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Wisata
