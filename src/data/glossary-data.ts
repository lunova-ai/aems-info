// src/data/glossary-data.ts

export type GlossaryEntry = {
  letter: string;
  term: string;
  definition: string;
};

export const glossary: GlossaryEntry[] = [
  // ---------------- A ----------------
  {
    letter: "A",
    term: "AEMS",
    definition:
      "Antifragiles Energiemanagement-System. Ein modularer Ansatz, der Unsicherheit nutzt, um Energieentscheidungen robuster zu machen.",
  },
  {
    letter: "A",
    term: "Analyse",
    definition:
      "Kernprozess des AEMS: Daten → Bandbreiten → Szenarien → Entscheidungen.",
  },
  {
    letter: "A",
    term: "Antifragilität",
    definition:
      "Konzept nach Taleb: Systeme, die durch Stress besser werden.",
  },

  // ---------------- B ----------------
  {
    letter: "B",
    term: "Bandbreiten",
    definition:
      "Spannbreiten statt fixer Werte (z. B. 100–140 €/MWh). Grundlage antifragiler Analyse.",
  },

  // ---------------- C ----------------
  {
    letter: "C",
    term: "CEnO-Datenkatalog",
    definition:
      "Datenmodell für Messstellen, Anlagen, Tarife, Zuordnungen und Energieflüsse.",
  },
  {
    letter: "C",
    term: "CO₂",
    definition:
      "„Zweiter Preis“ im Energiesystem. Verknüpft mit Erzeugung, Verbrauch und Kosten.",
  },
  {
    letter: "C",
    term: "Cost Stack",
    definition:
      "Zerlegung der Energiekosten in alle Preisbestandteile.",
  },

  // ---------------- D ----------------
  {
    letter: "D",
    term: "Datenqualität",
    definition:
      "Bewertung der Verlässlichkeit: hart, weich, Annahmen, unbekannt.",
  },
  {
    letter: "D",
    term: "Dateninfrastruktur",
    definition:
      "Alle Quellen, Systeme, Zähler, Schnittstellen und Ownerships.",
  },

  // ---------------- E ----------------
  {
    letter: "E",
    term: "EPRIS",
    definition:
      "Strategischer Denkrahmen, auf dem das AEMS aufbaut.",
  },
  {
    letter: "E",
    term: "Erzeugung",
    definition:
      "Eigene Energieanlagen (PV, BHKW, Speicher). Hebel für Robustheit.",
  },

  // ---------------- F ----------------
  {
    letter: "F",
    term: "Fragilität",
    definition:
      "Systemzustand, der durch Volatilität oder Unsicherheit bricht.",
  },
  {
    letter: "F",
    term: "Flexibilität",
    definition:
      "Steuerbare oder verschiebbare Verbrauchs- oder Erzeugungselemente.",
  },

  // ---------------- G ----------------
  {
    letter: "G",
    term: "Geopolitische Unsicherheit",
    definition:
      "Einflussfaktor für Preisrisiken und Märkte.",
  },

  // ---------------- H ----------------
  {
    letter: "H",
    term: "Hedging",
    definition:
      "Abgesicherte Beschaffungsentscheidung, im AEMS immer Szenario-basiert.",
  },
  {
    letter: "H",
    term: "Haftungsrisiko",
    definition:
      "Risiken durch fehlende Entscheidungen oder falsche Datenannahmen.",
  },

  // ---------------- I ----------------
  {
    letter: "I",
    term: "IEM",
    definition:
      "Internes Energiemanagement. AEMS erweitert dieses um Unsicherheit, Rollenlogik und robuste Entscheidungen.",
  },

  // ---------------- K ----------------
  {
    letter: "K",
    term: "Kostenanalyse",
    definition:
      "Zerlegung in Preis-, Mengen- und Strukturtreiber.",
  },
  {
    letter: "K",
    term: "KPIs (Bandbreiten-KPIs)",
    definition:
      "Kennzahlen als Bandbreiten statt Fixwerte.",
  },

  // ---------------- L ----------------
  {
    letter: "L",
    term: "Lastprofil",
    definition:
      "Verbrauchsverläufe (Tages-, Wochen-, Jahresmuster). Basis für Szenario- und Kostenanalysen.",
  },

  // ---------------- M ----------------
  {
    letter: "M",
    term: "Methodenbibliothek",
    definition:
      "Sensitivitätsanalysen, Bandbreitenmodelle, Stresstests, Szenariomatrizen, Monte-Carlo-Light, Wirkungsmodelle für Maßnahmen, Abhängigkeitstreiber, CO₂-Kostenmodelle, technische Effizienzmodelle, Portfolioansätze.",
  },

  // ---------------- O ----------------
  {
    letter: "O",
    term: "Ownership",
    definition:
      "Klare Verantwortlichkeit für Daten und Entscheidungen.",
  },

  // ---------------- P ----------------
  {
    letter: "P",
    term: "Portfoliologik",
    definition:
      "Behandlung von Energie als Risiko-Portfolio, nicht als Einzelgröße.",
  },

  // ---------------- R ----------------
  {
    letter: "R",
    term: "Risikoanalyse",
    definition:
      "Bewertung von Preis-, Mengen-, technischen und strukturellen Risiken.",
  },
  {
    letter: "R",
    term: "Rollenmodell",
    definition:
      "Owner – Analyst – Expert – Approver. Strukturierter, klar definierter Entscheidungsprozess.",
  },

  // ---------------- S ----------------
  {
    letter: "S",
    term: "Szenarien",
    definition:
      "Denkmodelle, keine Vorhersagen. Typisch: Baseline, Stress, Chance, Worst Case.",
  },
  {
    letter: "S",
    term: "Steuerung",
    definition:
      "Regelmäßiger Entscheidungsrhythmus (operativ, taktisch, strategisch).",
  },

  // ---------------- T ----------------
  {
    letter: "T",
    term: "Taleb (Nassim Nicholas)",
    definition: "Autor des Konzepts der Antifragilität.",
  },

  // ---------------- U ----------------
  {
    letter: "U",
    term: "Unsicherheit",
    definition:
      "Grundannahme: Die Zukunft ist nicht vorhersehbar. AEMS macht Unsicherheit sichtbar.",
  },

  // ---------------- V ----------------
  {
    letter: "V",
    term: "Volatilität",
    definition:
      "Schwankung von Preisen oder Mengen. Im AEMS Informationsquelle, kein Risiko an sich.",
  },

  // ---------------- W ----------------
  {
    letter: "W",
    term: "Worst Case",
    definition:
      "Extremszenario zur Risikodarstellung.",
  },

  // ---------------- Z ----------------
  {
    letter: "Z",
    term: "Zählerlandschaft",
    definition:
      "Alle Messpunkte eines Unternehmens.",
  },
  {
    letter: "Z",
    term: "Zuverlässigkeit",
    definition:
      "Bewertung der Verlässlichkeit von Daten und Modellen.",
  },
];
