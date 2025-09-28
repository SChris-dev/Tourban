import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchProvider } from './contexts/SearchContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Wisata from './pages/Wisata'
import Kuliner from './pages/Kuliner'
import Penginapan from './pages/Penginapan'
import OlehOleh from './pages/OlehOleh'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="min-h-screen bg-gradient-earth dark:bg-gradient-earth-dark transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/wisata" element={<Wisata />} />
              <Route path="/kuliner" element={<Kuliner />} />
              <Route path="/penginapan" element={<Penginapan />} />
              <Route path="/oleh-oleh" element={<OlehOleh />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  )
}

export default App
