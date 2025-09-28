import React, { useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Carousel from '../components/Carousel'
import { olehOlehData } from '../data/olehOlehData'
import type { OlehOlehItem } from '../data/olehOlehData'

const OlehOleh: React.FC = () => {
  const [selectedOlehOleh, setSelectedOlehOleh] = useState<OlehOlehItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (olehOleh: OlehOlehItem) => {
    setSelectedOlehOleh(olehOleh)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedOlehOleh(null)
  }

  return (
    <div className="min-h-screen bg-gradient-earth dark:bg-gradient-earth-dark">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-cream-600 to-cream-800 dark:from-cream-800 dark:to-cream-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 fade-in-up">
            Oleh-Oleh Khas Tuban
          </h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Bawa pulang kerajinan dan produk unggulan Tuban sebagai kenang-kenangan. 
            Setiap produk memiliki nilai budaya dan kearifan lokal yang tinggi.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 dark:bg-earth-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-white dark:bg-earth-800 px-4 py-2 rounded-lg shadow-sm">
              <svg className="w-5 h-5 text-cream-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-earth-700 dark:text-cream-100 font-medium">Kategori:</span>
            </div>
            <button className="px-4 py-2 bg-cream-100 hover:bg-cream-200 text-cream-800 dark:bg-earth-800 dark:hover:bg-earth-700 dark:text-cream-100 rounded-lg transition-colors duration-200">
              Semua Produk
            </button>
            <button className="px-4 py-2 bg-white hover:bg-cream-50 text-earth-700 dark:bg-earth-800 dark:hover:bg-earth-700 dark:text-cream-100 rounded-lg transition-colors duration-200 border border-cream-200 dark:border-earth-700">
              Kerajinan
            </button>
            <button className="px-4 py-2 bg-white hover:bg-cream-50 text-earth-700 dark:bg-earth-800 dark:hover:bg-earth-700 dark:text-cream-100 rounded-lg transition-colors duration-200 border border-cream-200 dark:border-earth-700">
              Makanan
            </button>
            <button className="px-4 py-2 bg-white hover:bg-cream-50 text-earth-700 dark:bg-earth-800 dark:hover:bg-earth-700 dark:text-cream-100 rounded-lg transition-colors duration-200 border border-cream-200 dark:border-earth-700">
              Tekstil
            </button>
          </div>
        </div>
      </section>

      {/* Oleh-oleh Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {olehOlehData.map((olehOleh) => (
              <div key={olehOleh.id} className="relative">
                <Card
                  title={olehOleh.nama}
                  description={olehOleh.deskripsi}
                  image={olehOleh.images[0]}
                  onClick={() => handleCardClick(olehOleh)}
                  className="fade-in-up"
                />
                {/* Authentic Badge */}
                <div className="absolute top-4 left-4 bg-cream-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  Khas Tuban
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Oleh-oleh Details */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedOlehOleh?.nama}
        maxWidth="max-w-6xl"
      >
        {selectedOlehOleh && (
          <div className="space-y-6">
            {/* Image Carousel */}
            <Carousel images={selectedOlehOleh.images} alt={selectedOlehOleh.nama} />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Deskripsi</h3>
                <p className="text-earth-700 dark:text-cream-200 leading-relaxed mb-6">
                  {selectedOlehOleh.deskripsi}
                </p>

                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Detail Produk</h3>
                <div className="bg-cream-50 dark:bg-earth-900 p-4 rounded-lg">
                  <p className="text-earth-700 dark:text-cream-200 leading-relaxed">
                    {selectedOlehOleh.deskripsiDetail}
                  </p>
                </div>

                {/* Heritage Value */}
                <div className="mt-6 bg-gradient-to-r from-cream-100 to-earth-50 dark:from-earth-900 dark:to-earth-800 p-4 rounded-lg border-l-4 border-cream-500 dark:border-earth-700">
                  <h4 className="font-semibold text-earth-800 dark:text-cream-100 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-cream-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    Nilai Budaya
                  </h4>
                  <p className="text-earth-600 dark:text-cream-300 text-sm">
                    Produk ini merupakan warisan budaya turun temurun yang mencerminkan kearifan lokal 
                    masyarakat Tuban. Setiap pembelian membantu melestarikan tradisi dan memberdayakan ekonomi lokal.
                  </p>
                </div>
              </div>

              {/* Tempat Beli */}
              <div>
                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-4">Tempat Membeli</h3>
                <div className="space-y-3 mb-6">
                  {selectedOlehOleh.tempatBeli.map((tempat, index) => (
                    <div
                      key={index}
                      className="bg-earth-50 dark:bg-earth-900 p-4 rounded-lg border-l-4 border-cream-400 hover:shadow-md transition-shadow duration-200"
                    >
                      <p className="text-earth-700 flex items-start">
                        <svg className="w-5 h-5 text-cream-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-earth-700 dark:text-cream-200">{tempat}</span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Shopping Tips */}
                <div className="bg-gradient-to-r from-cream-100 to-sage-50 dark:from-earth-900 dark:to-earth-800 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-earth-800 dark:text-cream-100 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-cream-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Tips Berbelanja
                  </h4>
                  <ul className="text-earth-600 dark:text-cream-300 text-sm space-y-1">
                    <li>• Bandingkan kualitas dan harga di beberapa tempat</li>
                    <li>• Tanyakan sertifikat keaslian produk</li>
                    <li>• Periksa kondisi produk sebelum membeli</li>
                    <li>• Minta tips perawatan dari penjual</li>
                    <li>• Jangan ragu untuk bernegosiasi harga</li>
                  </ul>
                </div>

                {/* Care Instructions */}
                <div className="bg-earth-50 dark:bg-earth-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-earth-800 dark:text-cream-100 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-cream-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cara Perawatan
                  </h4>
                  <p className="text-earth-600 dark:text-cream-300 text-sm">
                    Simpan di tempat kering dan sejuk. Untuk produk tekstil, hindari sinar matahari langsung. 
                    Untuk kerajinan, bersihkan dengan lap kering secara berkala.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-earth-200">
              <button
                onClick={() => {
                  const searchQuery = `${selectedOlehOleh.nama} Tuban souvenir`
                  window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank')
                }}
                className="flex-1 bg-cream-600 hover:bg-cream-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Cari Online
              </button>
              
              <button
                onClick={() => {
                  const mapsQuery = selectedOlehOleh.tempatBeli[0]
                  window.open(`https://maps.google.com/?q=${encodeURIComponent(mapsQuery)}`, '_blank')
                }}
                className="flex-1 bg-earth-500 hover:bg-earth-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Cari di Maps
              </button>
              
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: selectedOlehOleh.nama,
                      text: selectedOlehOleh.deskripsi,
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

export default OlehOleh
