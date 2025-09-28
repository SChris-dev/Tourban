import React, { useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Carousel from '../components/Carousel'
import { kulinerData } from '../data/kulinerData'
import type { KulinerItem } from '../data/kulinerData'

const Kuliner: React.FC = () => {
  const [selectedKuliner, setSelectedKuliner] = useState<KulinerItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (kuliner: KulinerItem) => {
    setSelectedKuliner(kuliner)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedKuliner(null)
  }

  return (
    <div className="min-h-screen bg-gradient-earth dark:bg-gradient-earth-dark">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-terracotta-600 to-terracotta-800 dark:from-terracotta-800 dark:to-terracotta-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 fade-in-up">
            Kuliner Khas Tuban
          </h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Nikmati kelezatan cita rasa otentik makanan tradisional Tuban yang telah turun temurun 
            diwariskan dan menjadi kebanggaan kuliner Jawa Timur.
          </p>
        </div>
      </section>

      {/* Kuliner Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kulinerData.map((kuliner) => (
              <Card
                key={kuliner.id}
                title={kuliner.nama}
                description={kuliner.deskripsi}
                image={kuliner.images[0]}
                onClick={() => handleCardClick(kuliner)}
                className="fade-in-up"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Kuliner Details */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedKuliner?.nama}
        maxWidth="max-w-5xl"
      >
        {selectedKuliner && (
          <div className="space-y-6">
            {/* Image Carousel */}
            <Carousel images={selectedKuliner.images} alt={selectedKuliner.nama} />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Deskripsi</h3>
                <p className="text-earth-700 dark:text-cream-200 leading-relaxed mb-6">
                  {selectedKuliner.deskripsi}
                </p>

                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Bahan Utama</h3>
                <div className="bg-terracotta-50 dark:bg-earth-900 p-4 rounded-lg">
                  <p className="text-earth-700 dark:text-cream-200 leading-relaxed">
                    {selectedKuliner.bahanUtama}
                  </p>
                </div>
              </div>

              {/* Tempat Beli */}
              <div>
                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Tempat Membeli</h3>
                <div className="space-y-3">
                  {selectedKuliner.tempatBeli.map((tempat, index) => (
                    <div
                      key={index}
                      className="bg-earth-50 dark:bg-earth-900 p-4 rounded-lg border-l-4 border-terracotta-400"
                    >
                      <p className="text-earth-700 flex items-start">
                        <svg className="w-5 h-5 text-terracotta-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-earth-700 dark:text-cream-200">{tempat}</span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tips */}
                <div className="mt-6 bg-gradient-to-r from-terracotta-100 to-cream-100 dark:from-earth-900 dark:to-earth-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-earth-800 dark:text-cream-100 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-terracotta-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tips Wisata Kuliner
                  </h4>
                  <p className="text-earth-600 dark:text-cream-300 text-sm">
                    Kunjungi pada pagi atau sore hari untuk mendapatkan makanan yang lebih fresh. 
                    Jangan lupa untuk mencoba variasi rasa yang berbeda di setiap tempat!
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-earth-200">
              <button
                onClick={() => {
                  const searchQuery = `${selectedKuliner.nama} Tuban food`
                  window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank')
                }}
                className="flex-1 bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Cari Resep Online
              </button>
              
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: selectedKuliner.nama,
                      text: selectedKuliner.deskripsi,
                      url: window.location.href
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Link berhasil disalin!')
                  }
                }}
                className="flex-1 bg-earth-500 hover:bg-earth-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Bagikan
              </button>

              <button
                onClick={() => {
                  const mapsQuery = selectedKuliner.tempatBeli[0]
                  window.open(`https://maps.google.com/?q=${encodeURIComponent(mapsQuery)}`, '_blank')
                }}
                className="flex-1 bg-sage-500 hover:bg-sage-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Cari di Maps
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Kuliner
