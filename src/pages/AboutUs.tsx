import React from 'react'

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-earth dark:bg-gradient-earth-dark">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-earth-700 to-earth-900 dark:from-earth-900 dark:to-earth-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 fade-in-up">
            Tentang Kami
          </h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Mengenal lebih dekat tim di balik Tourban - platform digital untuk melestarikan 
            dan mempromosikan kekayaan budaya Kabupaten Tuban.
          </p>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 bg-cream-50 dark:bg-earth-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-earth-800 dark:text-cream-100 mb-6">Tentang Tourban</h2>
            <p className="text-lg text-earth-700 dark:text-cream-200 leading-relaxed">
              Tourban adalah platform digital yang didedikasikan untuk mempromosikan dan melestarikan 
              kekayaan budaya Kabupaten Tuban. Website ini menyajikan informasi lengkap tentang wisata, 
              kuliner, penginapan, dan oleh-oleh khas Tuban dalam satu tempat yang mudah diakses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-earth-800 p-8 rounded-xl shadow-earth">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-earth-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-earth-800 dark:text-cream-100">Misi Kami</h3>
              </div>
              <p className="text-earth-700 dark:text-cream-200 leading-relaxed">
                Membangun jembatan digital antara kekayaan budaya Tuban dengan masyarakat luas, 
                serta mendukung pengembangan pariwisata dan ekonomi kreatif lokal melalui teknologi modern.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-earth-800 p-8 rounded-xl shadow-earth">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sage-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-earth-800 dark:text-cream-100">Visi Kami</h3>
              </div>
              <p className="text-earth-700 dark:text-cream-200 leading-relaxed">
                Menjadi platform digital terdepan yang melestarikan budaya lokal dan mempromosikan 
                Tuban sebagai destinasi wisata unggulan di Jawa Timur yang kaya akan nilai sejarah dan budaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-earth-800 dark:text-cream-100 mb-6">Tim Pengembang</h2>
            <p className="text-lg text-earth-600 dark:text-cream-200 max-w-2xl mx-auto">
              Dibangun dengan dedikasi oleh siswa-siswi SMKN 1 Tuban yang peduli terhadap 
              pelestarian budaya dan kemajuan teknologi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Meiska */}
            <div className="bg-white dark:bg-earth-800 rounded-2xl shadow-earth overflow-hidden fade-in-up">
              <div className="bg-gradient-to-br from-earth-500 to-earth-700 p-8 text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Meiska Nurvika Ardianti</h3>
                <p className="text-earth-100 font-medium">Project Lead & Content Creator</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-earth-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-14 0h2m0 0h-2m2 0h2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-earth-800 dark:text-cream-100">SMKN 1 Tuban</p>
                      <p className="text-earth-600 dark:text-cream-300 text-sm">Teknik Kimia Industri</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-earth-800 dark:text-cream-100">081259152806</p>
                      <p className="text-earth-600 dark:text-cream-300 text-sm">WhatsApp / Telepon</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-terracotta-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.311-.622-.311-1.541c0-1.444.83-2.52 1.863-2.52.878 0 1.303.658 1.303 1.448 0 .883-.562 2.203-.851 3.427-.242 1.024.513 1.858 1.522 1.858 1.827 0 3.233-1.927 3.233-4.706 0-2.463-1.77-4.185-4.296-4.185-2.926 0-4.64 2.194-4.64 4.463 0 .884.341 1.833.766 2.347.084.101.096.19.071.294-.077.315-.245.994-.279 1.133-.043.183-.141.221-.326.134-1.215-.565-1.976-2.34-1.976-3.766 0-3.245 2.357-6.225 6.795-6.225 3.571 0 6.349 2.543 6.349 5.945 0 3.547-2.235 6.394-5.339 6.394-1.043 0-2.025-.543-2.357-1.188 0 0-.516 1.965-.642 2.448-.232.893-.858 2.015-1.276 2.698.962.297 1.98.457 3.042.457 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                    </div>
                    <div>
                      <a 
                        href="https://instagram.com/isme_iskaa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 transition-colors duration-200"
                      >
                        @isme_iskaa
                      </a>
                      <p className="text-earth-600 dark:text-cream-300 text-sm">Instagram</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-earth-50 dark:bg-earth-900 rounded-lg">
                  <p className="text-earth-700 dark:text-cream-200 text-sm leading-relaxed">
                    Bertanggung jawab dalam penelitian konten, koordinasi proyek, dan memastikan 
                    akurasi informasi budaya Tuban yang disajikan dalam website.
                  </p>
                </div>
              </div>
            </div>

            {/* Wulan */}
            <div className="bg-white dark:bg-earth-800 rounded-2xl shadow-earth overflow-hidden fade-in-up">
              <div className="bg-gradient-to-br from-sage-500 to-sage-700 p-8 text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Wulan Rahmawati</h3>
                <p className="text-sage-100 font-medium">Technical Lead & Developer</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-14 0h2m0 0h-2m2 0h2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-earth-800 dark:text-cream-100">SMKN 1 Tuban</p>
                      <p className="text-earth-600 dark:text-cream-300 text-sm">Teknik Komputer dan Jaringan</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-earth-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-earth-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-earth-800 dark:text-cream-100">082333857904</p>
                      <p className="text-earth-600 dark:text-cream-300 text-sm">WhatsApp / Telepon</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-terracotta-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.311-.622-.311-1.541c0-1.444.83-2.52 1.863-2.52.878 0 1.303.658 1.303 1.448 0 .883-.562 2.203-.851 3.427-.242 1.024.513 1.858 1.522 1.858 1.827 0 3.233-1.927 3.233-4.706 0-2.463-1.77-4.185-4.296-4.185-2.926 0-4.64 2.194-4.64 4.463 0 .884.341 1.833.766 2.347.084.101.096.19.071.294-.077.315-.245.994-.279 1.133-.043.183-.141.221-.326.134-1.215-.565-1.976-2.34-1.976-3.766 0-3.245 2.357-6.225 6.795-6.225 3.571 0 6.349 2.543 6.349 5.945 0 3.547-2.235 6.394-5.339 6.394-1.043 0-2.025-.543-2.357-1.188 0 0-.516 1.965-.642 2.448-.232.893-.858 2.015-1.276 2.698.962.297 1.98.457 3.042.457 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                    </div>
                    <div>
                      <a 
                        href="https://instagram.com/callmewwlyn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400 dark:hover:text-terracotta-300 transition-colors duration-200"
                      >
                        @callmewwlyn
                      </a>
                      <p className="text-earth-600 dark:text-cream-300 text-sm">Instagram</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-sage-50 dark:bg-earth-900 rounded-lg">
                  <p className="text-earth-700 dark:text-cream-200 text-sm leading-relaxed">
                    Memimpin pengembangan teknis website, implementasi fitur pencarian global, 
                    dan memastikan website responsive serta user-friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-earth-800 dark:bg-earth-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Teknologi yang Digunakan</h2>
          <p className="text-earth-200 text-lg mb-12 max-w-2xl mx-auto">
            Dibangun dengan teknologi modern untuk memberikan pengalaman terbaik kepada pengguna.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', desc: 'UI Framework' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Vite', desc: 'Build Tool' }
            ].map((tech, index) => (
              <div key={index} className="bg-earth-700 dark:bg-earth-800 p-6 rounded-lg hover:bg-earth-600 dark:hover:bg-earth-700 transition-colors duration-200">
                <div className="w-12 h-12 bg-cream-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-earth-800 font-bold text-lg">{tech.name[0]}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                <p className="text-earth-300 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-earth-800 mb-6">Mari Berkolaborasi</h2>
          <p className="text-lg text-earth-700 mb-12 leading-relaxed">
            Memiliki saran, masukan, atau ingin berkolaborasi dalam pengembangan Tourban? 
            Jangan ragu untuk menghubungi kami. Kami selalu terbuka untuk diskusi dan kerjasama 
            yang dapat memajukan pariwisata dan budaya Tuban.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:tourban.tuban@gmail.com"
              className="bg-earth-500 hover:bg-earth-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Kirim Email
            </a>
            <a
              href="https://wa.me/6281259152806"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
