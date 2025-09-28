import React, { useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Carousel from '../components/Carousel'
import { penginapanData } from '../data/penginapanData'
import type { PenginapanItem } from '../data/penginapanData'

const Penginapan: React.FC = () => {
  const [selectedPenginapan, setSelectedPenginapan] = useState<PenginapanItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (penginapan: PenginapanItem) => {
    setSelectedPenginapan(penginapan)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPenginapan(null)
  }

  return (
    <div className="min-h-screen bg-gradient-earth dark:bg-gradient-earth-dark">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-sage-600 to-sage-800 dark:from-sage-800 dark:to-sage-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 fade-in-up">
            Penginapan Tuban
          </h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Temukan akomodasi terbaik untuk perjalanan Anda di Tuban. Mulai dari hotel berbintang 
            hingga homestay yang nyaman dengan pelayanan terbaik.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/50 dark:bg-earth-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-white dark:bg-earth-800 px-4 py-2 rounded-lg shadow-sm">
              <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
              <span className="text-earth-700 dark:text-cream-100 font-medium">Filter berdasarkan:</span>
            </div>
            <button className="px-4 py-2 bg-sage-100 hover:bg-sage-200 text-sage-800 dark:bg-earth-800 dark:hover:bg-earth-700 dark:text-cream-100 rounded-lg transition-colors duration-200">
              Semua Tipe
            </button>
            <button className="px-4 py-2 bg-white hover:bg-sage-50 text-earth-700 dark:bg-earth-800 dark:hover:bg-earth-700 dark:text-cream-100 rounded-lg transition-colors duration-200 border border-sage-200 dark:border-earth-700">
              Hotel
            </button>
            <button className="px-4 py-2 bg-white hover:bg-sage-50 text-earth-700 dark:bg-earth-800 dark:hover:bg-earth-700 dark:text-cream-100 rounded-lg transition-colors duration-200 border border-sage-200 dark:border-earth-700">
              Homestay
            </button>
            <button className="px-4 py-2 bg-white hover:bg-sage-50 text-earth-700 dark:bg-earth-800 dark:hover:bg-earth-700 dark:text-cream-100 rounded-lg transition-colors duration-200 border border-sage-200 dark:border-earth-700">
              Resort
            </button>
          </div>
        </div>
      </section>

      {/* Penginapan Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {penginapanData.map((penginapan) => (
              <div key={penginapan.id} className="relative">
                <Card
                  title={penginapan.nama}
                  description={penginapan.deskripsi}
                  image={penginapan.images[0]}
                  onClick={() => handleCardClick(penginapan)}
                  className="fade-in-up"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-sage-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  {penginapan.rangeHarga}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Penginapan Details */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedPenginapan?.nama}
        maxWidth="max-w-6xl"
      >
        {selectedPenginapan && (
          <div className="space-y-6">
            {/* Image Carousel */}
            <Carousel images={selectedPenginapan.images} alt={selectedPenginapan.nama} />

            {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Description and Facilities */}
              <div>
              <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-3">Deskripsi</h3>
              <p className="text-earth-700 dark:text-cream-200 leading-relaxed mb-6 bg-earth-50/60 dark:bg-earth-900/60 p-4 rounded-lg">
                  {selectedPenginapan.deskripsi}
                </p>

              <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-3">Fasilitas</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPenginapan.fasilitas.map((fasilitas, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sage-100 text-sage-800 dark:bg-earth-800 dark:text-cream-100 text-sm border border-sage-200/60 dark:border-earth-700"
                  >
                    <svg className="w-4 h-4 text-sage-600 dark:text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {fasilitas}
                  </span>
                ))}
              </div>

                {/* Price and Contact */}
                <div className="mt-6 space-y-4">
                  <div className="bg-gradient-to-r from-sage-100 to-earth-50 dark:from-earth-900 dark:to-earth-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-earth-800 dark:text-cream-100 mb-2">Range Harga</h4>
                    <p className="text-2xl font-bold text-sage-600">{selectedPenginapan.rangeHarga}</p>
                    <p className="text-earth-600 dark:text-cream-300 text-sm mt-1">*Harga dapat berubah sewaktu-waktu</p>
                  </div>
                  
                  <div className="bg-earth-50 dark:bg-earth-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-earth-800 dark:text-cream-100 mb-2">Kontak</h4>
                    <p className="text-earth-700 dark:text-cream-200 flex items-center">
                      <svg className="w-5 h-5 text-sage-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {selectedPenginapan.kontak}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div>
                <h3 className="text-2xl font-semibold text-earth-800 dark:text-cream-100 mb-3">Lokasi</h3>
                <div className="bg-earth-50 dark:bg-earth-900 p-4 rounded-lg mb-4">
                  <p className="text-earth-700 dark:text-cream-200 flex items-center">
                    <svg className="w-5 h-5 text-sage-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {selectedPenginapan.lokasi}
                  </p>
                </div>

                {/* Google Maps Embed */}
                <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-6" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={selectedPenginapan.mapsEmbed}
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Lokasi ${selectedPenginapan.nama}`}
                  ></iframe>
                </div>

                {/* Booking Tips */}
                <div className="bg-gradient-to-r from-sage-100 to-cream-100 dark:from-earth-900 dark:to-earth-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-earth-800 dark:text-cream-100 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-sage-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tips Reservasi
                  </h4>
                  <ul className="text-earth-600 dark:text-cream-300 text-sm space-y-1">
                    <li>• Hubungi langsung untuk harga terbaik</li>
                    <li>• Booking lebih awal saat musim liburan</li>
                    <li>• Tanyakan paket wisata yang tersedia</li>
                    <li>• Konfirmasi fasilitas yang diperlukan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-earth-200">
              <button
                onClick={() => window.open(`tel:${selectedPenginapan.kontak}`, '_self')}
                className="flex-1 bg-sage-500 hover:bg-sage-600 text-white px-5 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hubungi
              </button>
              
              <button
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedPenginapan.lokasi)}`, '_blank')}
                className="flex-1 bg-earth-500 hover:bg-earth-600 text-white px-5 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Buka di Maps
              </button>
              
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: selectedPenginapan.nama,
                      text: selectedPenginapan.deskripsi,
                      url: window.location.href
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Link berhasil disalin!')
                  }
                }}
                className="flex-1 bg-terracotta-500 hover:bg-terracotta-600 text-white px-5 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center shadow-sm"
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

export default Penginapan
