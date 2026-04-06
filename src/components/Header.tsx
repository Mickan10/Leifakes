import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="header-brand" onClick={() => setMenuOpen(false)}>
          Leif-Åkes Buss
        </NavLink>

        <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Hem</NavLink>
          <NavLink to="/resor" onClick={() => setMenuOpen(false)}>Våra resor</NavLink>
          <NavLink to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</NavLink>
          <NavLink to="/resevillkor" onClick={() => setMenuOpen(false)}>Resevillkor</NavLink>
          <a href="tel:050610644" className="nav-phone">
            <i className="fa-solid fa-phone"></i> 0506-106 44
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="header-stripes">
        <div className="stripe stripe--red"></div>
        <div className="stripe stripe--mid"></div>
        <div className="stripe stripe--dark"></div>
      </div>
    </header>
  )
}
