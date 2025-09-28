import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { wisataData } from '../data/wisataData'
import type { WisataItem } from '../data/wisataData'
import { kulinerData } from '../data/kulinerData'
import type { KulinerItem } from '../data/kulinerData'
import { penginapanData } from '../data/penginapanData'
import type { PenginapanItem } from '../data/penginapanData'
import { olehOlehData } from '../data/olehOlehData'
import type { OlehOlehItem } from '../data/olehOlehData'

export interface SearchResult {
  id: number
  title: string
  description: string
  category: 'wisata' | 'kuliner' | 'penginapan' | 'oleh-oleh'
  path: string
}

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchResults: SearchResult[]
  isSearching: boolean
  performSearch: (query: string) => SearchResult[]
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

interface SearchProviderProps {
  children: ReactNode
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const performSearch = (query: string): SearchResult[] => {
    if (!query.trim()) {
      setSearchResults([])
      return []
    }

    setIsSearching(true)
    const results: SearchResult[] = []
    const searchTerm = query.toLowerCase()

    // Search in wisata data
    wisataData.forEach((item: WisataItem) => {
      if (
        item.nama.toLowerCase().includes(searchTerm) ||
        item.deskripsi.toLowerCase().includes(searchTerm) ||
        item.sejarah.toLowerCase().includes(searchTerm) ||
        item.lokasi.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: item.id,
          title: item.nama,
          description: item.deskripsi,
          category: 'wisata',
          path: '/wisata'
        })
      }
    })

    // Search in kuliner data
    kulinerData.forEach((item: KulinerItem) => {
      if (
        item.nama.toLowerCase().includes(searchTerm) ||
        item.deskripsi.toLowerCase().includes(searchTerm) ||
        item.bahanUtama.toLowerCase().includes(searchTerm) ||
        item.tempatBeli.some(tempat => tempat.toLowerCase().includes(searchTerm))
      ) {
        results.push({
          id: item.id,
          title: item.nama,
          description: item.deskripsi,
          category: 'kuliner',
          path: '/kuliner'
        })
      }
    })

    // Search in penginapan data
    penginapanData.forEach((item: PenginapanItem) => {
      if (
        item.nama.toLowerCase().includes(searchTerm) ||
        item.deskripsi.toLowerCase().includes(searchTerm) ||
        item.lokasi.toLowerCase().includes(searchTerm) ||
        item.fasilitas.some(fasilitas => fasilitas.toLowerCase().includes(searchTerm))
      ) {
        results.push({
          id: item.id,
          title: item.nama,
          description: item.deskripsi,
          category: 'penginapan',
          path: '/penginapan'
        })
      }
    })

    // Search in oleh-oleh data
    olehOlehData.forEach((item: OlehOlehItem) => {
      if (
        item.nama.toLowerCase().includes(searchTerm) ||
        item.deskripsi.toLowerCase().includes(searchTerm) ||
        item.deskripsiDetail.toLowerCase().includes(searchTerm) ||
        item.tempatBeli.some(tempat => tempat.toLowerCase().includes(searchTerm))
      ) {
        results.push({
          id: item.id,
          title: item.nama,
          description: item.deskripsi,
          category: 'oleh-oleh',
          path: '/oleh-oleh'
        })
      }
    })

    setSearchResults(results)
    setIsSearching(false)
    return results
  }

  const value: SearchContextType = {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    performSearch
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}
