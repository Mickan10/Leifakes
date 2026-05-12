// ============================================================
//  REDIGERA HÄR när resor ska uppdateras
//  Bygg sedan om med: npm run build
// ============================================================

export interface Datum {
  datum: string       // t.ex. "24 april"
  pris: string        // t.ex. "från 2 925 kr" — eller "Fullbokat"
  full?: boolean      // true = grå chip
}

export interface Avgang {
  plats: string       // t.ex. "Töreboda, Bussgaraget"
  tid: string         // t.ex. "12.40"
}

export interface Resa {
  id: string
  titel: string
  bilder: { src: string; alt: string }[]
  beskrivning: string
  avgångar?: Avgang[]
  inkluderat?: string[]
  datum?: Datum[]
  prisText?: string       // fritext-pris, t.ex. "300 kr inkl. bussresa tur & retur"
  not?: string
  länk?: { url: string; text: string }
}

const resor: Resa[] = [
  {
    id: 'kiel',
    titel: '3-Dagars Kielkryss – 2026',
    bilder: [
      { src: '/bilder/stena.jpg', alt: 'Stena Line' },
      { src: '/bilder/kiel.webp', alt: 'Kiel' },
    ],
    beskrivning:
      'Res bekvämt med buss till Göteborg och gå sedan ombord på en kryssning där upplevelserna börjar direkt! Fredagskvällen tillbringas på båten med musik, god mat och underhållning medan vi glider över havet under natten.\n\nPå lördag morgon anländer vi till Kiel — shopping på Citti köpcenter och fri tid för att upptäcka stadens charmiga gator och caféer. På kvällen bär det av hemåt, fylld med nya minnen!',
    avgångar: [
      { plats: 'Töreboda, Bussgaraget', tid: '12.40' },
      { plats: 'Mariestad, Coop', tid: '13.00' },
      { plats: 'Skövde, Vipansgränd', tid: '13.40' },
      { plats: "Skara, McDonald's", tid: '14.00' },
    ],
    inkluderat: [
      'Bussresa tur och retur',
      'Hyttplats med över- och undersäng',
      'Två välsmakande frukostar',
      'Bussanslutning till Citti Köpcenter',
      'Miljöavgift',
    ],
    datum: [
      { datum: '8 maj',    pris: 'från 2 925 kr' },
      { datum: '29 maj',   pris: 'Fullbokat', full: true },
    ],
    not: 'Obs! Giltigt pass krävs.',
    länk: { url: 'https://citti.se/', text: 'Läs mer om Citti köpcenter' },
  },

  {
    id: 'ullared',
    titel: 'Shoppingresa till Ullared',
    bilder: [
      { src: '/bilder/ullared.jpg', alt: 'Gekås Ullared' },
    ],
    beskrivning:
      'Följ med oss på en härlig shoppingdag till Gekås i Ullared – fynd i överflöd, go fika och kanske lite för många påsar på vägen hem!',
    avgångar: [
      { plats: 'Töreboda, Bussplan', tid: '05.30' },
      { plats: 'Mariestad, Stora Coop', tid: '06.00' },
      { plats: 'Skövde (enl. överenskommelse)', tid: '06.40' },
    ],
    datum: [
      { datum: '25 maj (Måndag)', pris: '' },
    ],
    prisText: '300 kr inkl. bussresa tur & retur',
    länk: { url: 'https://www.gekas.se/', text: 'Läs mer om Gekås Ullared' },
  },
]

export default resor
