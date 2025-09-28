import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-800 dark:bg-earth-950 text-cream-50 border-t border-earth-700 dark:border-earth-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-earth-400 to-earth-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-serif text-2xl font-bold text-cream-50">Tourban</span>
            </div>
            <p className="text-cream-200 text-lg leading-relaxed mb-4">
              Jelajahi kekayaan budaya dan keindahan Kabupaten Tuban melalui platform digital yang komprehensif.
            </p>
            <p className="text-cream-300 text-sm">
              Website informasi budaya Kabupaten Tuban yang menyajikan wisata, kuliner, penginapan, dan oleh-oleh khas daerah.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-cream-50 font-semibold text-lg mb-4">Jelajahi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-200 hover:text-cream-50 transition-colors duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/wisata" className="text-cream-200 hover:text-cream-50 transition-colors duration-200">
                  Wisata
                </Link>
              </li>
              <li>
                <Link to="/kuliner" className="text-cream-200 hover:text-cream-50 transition-colors duration-200">
                  Kuliner
                </Link>
              </li>
              <li>
                <Link to="/penginapan" className="text-cream-200 hover:text-cream-50 transition-colors duration-200">
                  Penginapan
                </Link>
              </li>
              <li>
                <Link to="/oleh-oleh" className="text-cream-200 hover:text-cream-50 transition-colors duration-200">
                  Oleh-Oleh
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-cream-50 font-semibold text-lg mb-4">Kontak Tim</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-cream-100 font-medium mb-1">Meiska Nurvika Ardianti</h4>
                <p className="text-cream-300 text-sm mb-1">SMKN 1 Tuban - Teknik Kimia Industri</p>
                <p className="text-cream-200 text-sm">081259152806</p>
                <a
                  href="https://instagram.com/isme_iskaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth-300 hover:text-earth-200 text-sm transition-colors duration-200"
                >
                  @isme_iskaa
                </a>
              </div>
              
              <div>
                <h4 className="text-cream-100 font-medium mb-1">Wulan Rahmawati</h4>
                <p className="text-cream-300 text-sm mb-1">SMKN 1 Tuban - Teknik Komputer dan Jaringan</p>
                <p className="text-cream-200 text-sm">082333857904</p>
                <a
                  href="https://instagram.com/callmewwlyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth-300 hover:text-earth-200 text-sm transition-colors duration-200"
                >
                  @callmewwlyn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-earth-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-cream-300 text-sm mb-4 md:mb-0">
              © 2025 Tourban. Dibuat dengan ❤️ untuk melestarikan budaya Tuban.
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cream-300 text-sm">Powered by:</span>
              <div className="flex items-center space-x-2">
                <span className="text-earth-300 text-xs bg-earth-700 px-2 py-1 rounded">React</span>
                <span className="text-earth-300 text-xs bg-earth-700 px-2 py-1 rounded">Tailwind CSS</span>
                <span className="text-earth-300 text-xs bg-earth-700 px-2 py-1 rounded">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
