import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSearch } from '../contexts/SearchContext'
import DarkModeToggle from './DarkModeToggle'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { searchQuery, setSearchQuery, performSearch, searchResults } = useSearch()
  const navigate = useNavigate()
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.trim()) {
      performSearch(query)
      setIsSearchOpen(true)
    } else {
      setIsSearchOpen(false)
    }
  }

  const handleSearchResultClick = (path: string) => {
    navigate(path)
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Wisata', path: '/wisata' },
    { name: 'Kuliner', path: '/kuliner' },
    { name: 'Penginapan', path: '/penginapan' },
    { name: 'Oleh-Oleh', path: '/oleh-oleh' },
    { name: 'Tentang Kami', path: '/about' }
  ]

  return (
    <nav className="bg-white/95 dark:bg-earth-900/95 backdrop-blur-md shadow-earth dark:shadow-dark sticky top-0 z-50 border-b border-earth-100 dark:border-earth-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-earth-400 to-earth-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-serif text-2xl font-bold text-earth-700 dark:text-earth-100">Tourban</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-earth-700 dark:text-earth-200 hover:text-earth-500 dark:hover:text-earth-300 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-earth-500 dark:bg-earth-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Search Bar and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div ref={searchRef}>
              <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-earth-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-64 pl-10 pr-3 py-2 border border-earth-200 dark:border-earth-600 rounded-lg leading-5 bg-white dark:bg-earth-800 dark:text-earth-100 placeholder-earth-400 dark:placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                placeholder="Cari wisata, kuliner, penginapan..."
              />
              
              {/* Search Results Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-earth-800 rounded-lg shadow-lg dark:shadow-dark border border-earth-200 dark:border-earth-600 max-h-96 overflow-y-auto z-50">
                  {searchResults.map((result, index) => (
                    <button
                      key={`${result.category}-${result.id}-${index}`}
                      onClick={() => handleSearchResultClick(result.path)}
                      className="w-full text-left px-4 py-3 hover:bg-earth-50 dark:hover:bg-earth-700 border-b border-earth-100 dark:border-earth-600 last:border-b-0 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-earth-800 dark:text-earth-100">{result.title}</h4>
                          <p className="text-sm text-earth-600 dark:text-earth-300 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                        <span className="text-xs bg-earth-100 dark:bg-earth-700 text-earth-600 dark:text-earth-300 px-2 py-1 rounded-full ml-2 whitespace-nowrap">
                          {result.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              </div>
            </div>
            {/* <DarkModeToggle /> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-earth-700 dark:text-earth-200 hover:text-earth-500 dark:hover:text-earth-300 focus:outline-none focus:ring-2 focus:ring-earth-500 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {/* Mobile Search */}
            <div className="px-2 py-3">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full pl-3 pr-3 py-2 border border-earth-200 dark:border-earth-600 rounded-lg leading-5 bg-white dark:bg-earth-800 dark:text-earth-100 placeholder-earth-400 dark:placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                placeholder="Cari wisata, kuliner, penginapan..."
              />
              {isSearchOpen && searchResults.length > 0 && (
                <div className="mt-2 bg-white dark:bg-earth-800 rounded-lg shadow-lg dark:shadow-dark border border-earth-200 dark:border-earth-600 max-h-80 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <button
                      key={`${result.category}-${result.id}-m-${index}`}
                      onClick={() => handleSearchResultClick(result.path)}
                      className="w-full text-left px-4 py-3 hover:bg-earth-50 dark:hover:bg-earth-700 border-b border-earth-100 dark:border-earth-600 last:border-b-0 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-earth-800 dark:text-earth-100">{result.title}</h4>
                          <p className="text-sm text-earth-600 dark:text-earth-300 mt-1 line-clamp-2">{result.description}</p>
                        </div>
                        <span className="text-xs bg-earth-100 dark:bg-earth-700 text-earth-600 dark:text-earth-300 px-2 py-1 rounded-full ml-2 whitespace-nowrap">{result.category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-earth-700 dark:text-earth-200 hover:text-earth-500 dark:hover:text-earth-300 hover:bg-earth-50 dark:hover:bg-earth-700 rounded-md font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
