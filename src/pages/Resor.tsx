import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import resor from '../data/resor-data'

export default function Resor() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.FB) window.FB.XFBML.parse()
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page-resor">
      <div className="page-hero-banner">
        <h1>Våra resor</h1>
        <p>Välj din nästa upplevelse – vi tar dig dit bekvämt och smidigt.</p>
      </div>

      <div className="resorna">
        <div className="resor-lista">

          {resor.map(resa => (
            <article key={resa.id} className="resa-kort">

              {/* Bilder */}
              {resa.bilder.length > 1 ? (
                <div className="resor-bilder-row">
                  {resa.bilder.map((b, i) => (
                    <img key={i} src={b.src} alt={b.alt} className="resor-bild" />
                  ))}
                </div>
              ) : (
                <img src={resa.bilder[0].src} alt={resa.bilder[0].alt} className="resor-bild resor-bild--full" />
              )}

              <div className="resa-innehall">
                <h2>{resa.titel}</h2>

                {/* Beskrivning — stödjer radbrytningar med \n\n */}
                {resa.beskrivning.split('\n\n').map((stycke, i) => (
                  <p key={i}>{stycke}</p>
                ))}

                <div className="resa-info-grid">
                  {/* Avgångar */}
                  {resa.avgångar && (
                    <div className="resa-info-block">
                      <h4><i className="fa-solid fa-bus"></i> Avresa</h4>
                      <ul>
                        {resa.avgångar.map((a, i) => (
                          <li key={i}>{a.plats} — {a.tid}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Inkluderat */}
                  {resa.inkluderat && (
                    <div className="resa-info-block">
                      <h4><i className="fa-solid fa-circle-check"></i> Ingår i priset</h4>
                      <ul>
                        {resa.inkluderat.map((rad, i) => (
                          <li key={i}>{rad}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Datum (utan pris — enkelt block) */}
                  {resa.datum && !resa.datum[0].pris && (
                    <div className="resa-info-block">
                      <h4><i className="fa-solid fa-calendar-days"></i> Datum</h4>
                      <ul>
                        {resa.datum.map((d, i) => (
                          <li key={i}>{d.datum}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Datum med priser */}
                {resa.datum && resa.datum[0].pris && (
                  <div className="resa-datum">
                    <h4><i className="fa-solid fa-calendar-days"></i> Datum & priser</h4>
                    <div className="datum-grid">
                      {resa.datum.map((d, i) => (
                        <div key={i} className={`datum-chip${d.full ? ' datum-chip--full' : ''}`}>
                          {d.datum}<span>{d.pris}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Prisbadge */}
                {resa.prisText && (
                  <div className="pris-badge">
                    {resa.prisText.split(' inkl.')[0]} <span>inkl. {resa.prisText.split(' inkl.')[1]}</span>
                  </div>
                )}

                {/* Not */}
                {resa.not && (
                  <p className="resa-not"><i className="fa-solid fa-circle-info"></i> {resa.not}</p>
                )}

                {/* Länk */}
                {resa.länk && (
                  <a href={resa.länk.url} className="btn btn--primary" target="_blank" rel="noreferrer">
                    {resa.länk.text}
                  </a>
                )}
              </div>
            </article>
          ))}

          <div className="kontakt-knapp-container">
            <p>Har du frågor om en resa? Vi hjälper dig gärna!</p>
            <Link to="/kontakt" className="btn btn--primary">Till kontaktsidan</Link>
          </div>
        </div>

        {/* Facebook */}
        <aside className="resor-fb">
          <h3>Följ oss på Facebook</h3>
          <div id="fb-root"></div>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/leifakesbuss"
            data-tabs="timeline"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </aside>
      </div>
    </div>
  )
}
