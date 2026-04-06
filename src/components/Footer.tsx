import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Leif-Åkes Buss</span>
          <p>Ditt pålitliga bussbolag sedan 1980-talet, med säte i Töreboda.</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/leifakesbuss/?locale=sv_SE"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigering</h4>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/resor">Våra resor</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <NavLink to="/resevillkor">Resevillkor</NavLink>
        </div>

        <div className="footer-col">
          <h4>Kontakt</h4>
          <a href="tel:050610644"><i className="fa-solid fa-phone"></i> 0506-106 44</a>
          <a href="mailto:info@leifakesbuss.se"><i className="fa-solid fa-envelope"></i> info@leifakesbuss.se</a>
          <p><i className="fa-solid fa-location-dot"></i> Torstorp Dalen 6<br />545 90 Töreboda</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Leif-Åkes Buss AB. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  )
}
