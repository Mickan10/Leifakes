import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Resor from './pages/Resor'
import Kontakt from './pages/Kontakt'
import Resevillkor from './pages/Resevillkor'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resor" element={<Resor />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/resevillkor" element={<Resevillkor />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
