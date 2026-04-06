export default function Kontakt() {
  return (
    <div className="page-kontakt">
      <div className="page-hero-banner">
        <h1>Kontakta oss</h1>
        <p>Vi hjälper dig planera den perfekta resan – hör av dig!</p>
      </div>

      <div className="kontakt-wrapper">
        <div className="kontakt-features">
          <div className="kontakt-feature">
            <i className="fa-solid fa-bolt"></i>
            <span>Snabba svar</span>
          </div>
          <div className="kontakt-feature">
            <i className="fa-solid fa-bus"></i>
            <span>Beställningstrafik</span>
          </div>
          <div className="kontakt-feature">
            <i className="fa-solid fa-leaf"></i>
            <span>Miljöcertifierade</span>
          </div>
        </div>

        <div className="kontakt-grid">
          <div className="kontakt-info-kort">
            <h2>Kontaktuppgifter</h2>
            <p>
              Letar du efter en flexibel och pålitlig partner för din resa? Hos Leif-Åkes Buss
              anpassar vi oss efter dina behov, vare sig det gäller dagsutflykter, längre resor
              eller specialanpassade turer.
            </p>

            <ul className="kontakt-detaljer">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>Adress</strong>
                  <span>Leif-Åkes Buss AB<br />Torstorp Dalen 6<br />545 90 Töreboda</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <strong>Telefon</strong>
                  <a href="tel:050610644">0506-106 44</a>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-mobile-screen"></i>
                <div>
                  <strong>Mobil Mikael</strong>
                  <a href="tel:0706710641">070-671 06 41</a>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-mobile-screen"></i>
                <div>
                  <strong>Mobil Leif</strong>
                  <a href="tel:0706710640">070-671 06 40</a>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <strong>E-post</strong>
                  <a href="mailto:info@leifakesbuss.se">info@leifakesbuss.se</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="kontakt-jobb-kort">
            <div className="jobb-icon">
              <i className="fa-solid fa-people-group"></i>
            </div>
            <h2>Bli en del av vårt team!</h2>
            <p>
              Vi söker alltid drivna personer som vill växa med oss.
              Spontanansökningar är varmt välkomna!
            </p>
            <a href="mailto:info@leifakesbuss.se" className="btn btn--primary">
              Skicka spontanansökan
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
