import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  { src: '/bilder/buss03_stor.gif', alt: 'Buss 1' },
  { src: '/bilder/nedladdning.jpg', alt: 'Buss 2' },
  { src: '/bilder/ibuss.gif', alt: 'Buss 3' },
  { src: '/bilder/nedladdning (1).jpg', alt: 'Buss 4' },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setCurrent(i => (i === 0 ? slides.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === slides.length - 1 ? 0 : i + 1))

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <span className="hero-label">Töreboda · Sedan 1980-talet</span>
          <h1>Din resa börjar här</h1>
          <p className="hero-sub">
            Leif-Åkes Buss är ditt pålitliga bussbolag med säte i Töreboda.
            Vi tar dig bekvämt till resmålet – oavsett om det är runt hörnet eller genom Europa.
          </p>
          <ul className="hero-list">
            <li><i className="fa-solid fa-check"></i> Hela Europa är vår spelplan, och vi ser till att du når din destination bekvämt och smidigt.</li>
            <li><i className="fa-solid fa-check"></i> Har du egna idéer? Vi skapar resan efter dina önskemål – från stora äventyr till små utflykter, vår beställningstrafik gör det möjligt att få en unik och personlig upplevelse.</li>
            <li><i className="fa-solid fa-check"></i> Hotell, teaterbiljetter och härliga måltider? Självklart! Vi fixar hela paketet för din resa.</li>
            <li><i className="fa-solid fa-check"></i> Våra förare har både erfarenhet och yrkeskompetens, så du kan känna dig trygg hela vägen.</li>
            <li><i className="fa-solid fa-check"></i> Vi tänker på miljön i allt vi gör och är stolta över att vara miljöcertifierade.</li>
          </ul>
          <div className="hero-buttons">
            <Link to="/resor" className="btn btn--primary">Våra resor</Link>
            <Link to="/kontakt" className="btn btn--outline">Kontakta oss</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/bilder/buss03_stor.gif" alt="Leif-Åkes buss" />
        </div>
      </section>

      {/* Bildspel */}
      <section className="section-carousel">
        <div
          className="slideshow"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={slide.alt}
              className={`slide${i === current ? ' slide--active' : ''}`}
            />
          ))}

          <button className="arrow left-arrow" onClick={prev} aria-label="Föregående bild">
            &#10094;
          </button>
          <button className="arrow right-arrow" onClick={next} aria-label="Nästa bild">
            &#10095;
          </button>

          <div className="slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot${i === current ? ' dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Bild ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Miljöansvar */}
      <section className="section-miljo">
        <div className="miljo-inner">
          <div className="miljo-icon">
            <i className="fa-solid fa-leaf"></i>
          </div>
          <div className="miljo-text">
            <h2>Miljöansvar</h2>
            <p>
              Vi tar ansvar för miljön! Våra bussar drivs med miljöklassade drivmedel och
              underhålls med oljor och tvättmedel som är skonsamma för naturen.
            </p>
            <p>
              Vi är miljöcertifierade enligt ISO 14001 och säkerställer att allt avfall
              tas om hand på ett korrekt och hållbart sätt för att minimera vår miljöpåverkan.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
