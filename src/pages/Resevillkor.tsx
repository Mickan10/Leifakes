export default function Resevillkor() {
  return (
    <div className="page-resevillkor">
      <div className="page-hero-banner">
        <h1>Resevillkor</h1>
        <p>Läs igenom våra villkor inför din bokning.</p>
      </div>

      <div className="villkor-wrapper">
        <div className="villkor-grid">

          <div className="villkor-kort">
            <h3>Betalning</h3>
            <ul>
              <li>Anmälningsavgift på 250 kr + ev. avbeställningsskydd vid anmälan. Resterande belopp betalas 14 dagar före avresan.</li>
              <li>Betalning görs via bankgiro nr 967-1512 eller direkt till oss (vi tar ej betalkort). Kvitto fungerar som deltagarbevis.</li>
              <li>För två- och tredagarsresor betalas hela resan senast 2 veckor före avresa.</li>
              <li>Endagarsresor betalas direkt på bussen.</li>
            </ul>
          </div>

          <div className="villkor-kort">
            <h3>Avbeställning & skydd</h3>
            <ul>
              <li>Avbeställningsskydd betalas samtidigt med anmälningsavgiften och täcker kostnader vid sjukdom (läkarintyg krävs).</li>
              <li>Avbeställningskostnad per person: expeditionsavgift 200 kr + avbeställningsskydd om tillämpligt.</li>
              <li>Vid avbeställning utan skydd gäller de allmänna resevillkoren 3.2–3.4.</li>
            </ul>
          </div>

          <div className="villkor-kort">
            <h3>Reseinformation</h3>
            <ul>
              <li>Drycker, entréavgifter och aftonnöjen ingår inte om ej annat anges.</li>
              <li>Enkelrum kan ordnas vid tillgång, men de har lägre standard.</li>
              <li>För resor utanför Norden måste giltigt pass medföras.</li>
              <li>Resenärer rekommenderas att teckna reseförsäkring och skaffa det europeiska sjukförsäkringskortet vid utlandsresa.</li>
            </ul>
          </div>

          <div className="villkor-kort">
            <h3>Övriga villkor</h3>
            <ul>
              <li>Ändringar kan göras i programmet om det behövs, och resan sker endast om tillräckligt antal deltagare anmäler sig.</li>
              <li>Om en dubbelrumspartner inte kan ordnas kan ett tillägg debiteras.</li>
              <li>Vi förbehåller oss rätten till prishöjningar beroende på externa faktorer (t.ex. oljepris, valutaändringar).</li>
              <li>Det är viktigt att anmäla påstigningsort vid bokning. Påstigning kan ske på mellanliggande orter.</li>
            </ul>
          </div>

          <div className="villkor-kort">
            <h3>Busstransport & behov</h3>
            <ul>
              <li>Alla resor sker med förstklassiga turistbussar med AC, läslampor, högtalare, fotstöd och toalett.</li>
              <li>Handikapparkering och hjälp vid behov kan ordnas – kontakta oss för mer information.</li>
              <li>Vid flerdagarsresor, undvik bagagekärror p.g.a. platsbrist. Vi erbjuder en gemensam kärra på bussen.</li>
            </ul>
          </div>

          <div className="villkor-kort">
            <h3>Specialkost & övrigt</h3>
            <ul>
              <li>Meddela vid bokning om särskild kost, t.ex. vegetarisk, glutenfri, laktosfri eller sockerfri kost.</li>
              <li>För den som är eller har varit utländsk medborgare: sök information om gällande pass- och visumregler.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
