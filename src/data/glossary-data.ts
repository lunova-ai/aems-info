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
  {
  letter: "A",
  term: "Action Effects Bridge",
  definition:
    "Visualisierungsebene im AEMS, die zeigt, wie einzelne Maßnahmen auf Kosten, Risiko und Resilienz wirken. Erlaubt abgestimmte Entscheidungen zwischen Technik, Finanzen und Nachhaltigkeit.",
},
{
  letter: "A",
  term: "Adaptive Control Center",
  definition:
    "Zentrale Steuerungsübersicht im AEMS, die Systemstatus, Policies, Wirkungsmodelle und Empfehlungen bündelt. Grundlage für operative und strategische Entscheidungen.",
},
{
  letter: "A",
  term: "Adaptive Policy Engine (APE)",
  definition:
    "Dynamisches Regelsystem im AEMS, das Policies mit realen Messdaten verknüpft und automatisch anpasst. Ziel: weniger Ad-hoc-Reaktionen, mehr vorausschauende Steuerung.",
},
{
  letter: "A",
  term: "Act (Control Loop)",
  definition:
    "Umsetzungsebene im AEMS-Regelkreis. Maßnahmen werden technisch ausgeführt, und das Monitoring überprüft Wirkung und Stabilität.",
},
{
  letter: "A",
  term: "Adaptivität",
  definition:
    "Fähigkeit eines Energiesystems, Schwankungen, Preisbewegungen und Stressoren aktiv für Verbesserungen zu nutzen. Hohe Adaptivität ist ein Kernelement antifragiler Systeme.",
},
{
  letter: "A",
  term: "Abendfenster 18–22 Uhr",
  definition:
    "Kritischer Zeitraum typischer Abendspitzen im Energieverbrauch. Wird im AEMS für Analysen und Szenariotests genutzt, da hier häufig Last- und Kostenrisiken entstehen.",
},
{
  letter: "A",
  term: "Antifragile Empfehlung",
  definition:
    "Automatisch generierte Handlungsvorschläge des AEMS, die Systeme nicht nur stabiler machen, sondern sie befähigen, aus Stresssituationen zu lernen und stärker zu werden.",
},
{
  letter: "A",
  term: "Abhängigkeit Erdgas",
  definition:
    "Einflussfaktor, der zeigt, wie stark ein Energiesystem von Erdgas als Energieträger abhängig ist. Hohe Abhängigkeit erhöht Preisrisiken und Versorgungsrisiken.",
},
{
  letter: "A",
  term: "Analyse-Snapshot",
  definition:
    "Momentaufnahme aller Analyseergebnisse wie Ursachenpfade, Zusammenhänge und Einflussstärken. Kann im AEMS exportiert oder verglichen werden.",
},
{
  letter: "A",
  term: "Antifragile Einkaufsstrategien",
  definition:
    "Ansätze, die Preisvolatilität gezielt nutzen, um Vorteile beim Energieeinkauf zu erzielen. Statt Volatilität zu vermeiden, werden Schwankungen aktiv zum Vorteil genutzt.",
},
{
  letter: "A",
  term: "Automatische systemweite Bewertung",
  definition:
    "Analysemodul des AEMS, das das Energiesystem auf Stress, Kosten, Resilienz, Effizienz und CO₂-Intensität bewertet und eine sofort verständliche Executive Summary erzeugt.",
},
{
  letter: "A",
  term: "Adaptive Control Center",
  definition:
    "Steuerungsmodul im AEMS, das Systemstatus, Policies, Wirkungsmodelle und Empfehlungen bündelt. Dient als zentrale Leitstelle für operative und strategische Energieentscheidungen.",
},
{
  letter: "A",
  term: "Adaptive Policy Engine – Vorschlag",
  definition:
    "Policy-Status, bei dem das AEMS eine Regel als potenziell sinnvoll erkennt, sie aber noch nicht aktiviert ist. Vorschläge entstehen durch Muster, Stressoren und Einflussfaktoren.",
},
{
  letter: "A",
  term: "Action Effects Bridge – Kurzfristmaßnahmen",
  definition:
    "Maßnahmen, die innerhalb kurzer Zeiträume wirken und direkte Effekte auf Last, Kosten oder Risiko haben. Beispiele: Peak Shaving, Nachtabsenkung.",
},
{
  letter: "A",
  term: "Action Effects Bridge – Langfristmaßnahmen",
  definition:
    "Maßnahmen mit längerfristiger Wirkung wie Redundanz- oder Notfallpfadtests. Diese stärken Resilienz und antifragile Eigenschaften.",
},
{
  letter: "A",
  term: "Alternative Vergangenheit (Scenario Replay)",
  definition:
    "Analysefunktion im AEMS, die vergangene Zeiträume unter geänderten Bedingungen erneut simuliert. Zeigt, wie Policies oder Maßnahmen Kosten, Risiko und Last beeinflusst hätten.",
},
{
  letter: "A",
  term: "Anschlussfähigkeit",
  definition:
    "Eigenschaft eines Systems, sich gut in bestehende Strukturen zu integrieren. Hohe Anschlussfähigkeit bedeutet: verständlich, kompatibel und ohne Reibungsverluste einbindbar. AEMS: AEMS ist bewusst anschlussfähig an bestehende IT-Landschaften, Rollenmodelle und Energiekonzepte.",
},
{
  letter: "A",
  term: "Antifragilität",
  definition:
    "Systemeigenschaft, durch Stress stärker zu werden. Antifragile Systeme nutzen Unsicherheit, Volatilität und Belastung, um zu lernen und sich zu verbessern. AEMS: AEMS verarbeitet Stressereignisse als Lernimpulse und verstärkt dadurch systemische Robustheit.",
},

  // ---------------- B ----------------
  {
    letter: "B",
    term: "Bandbreiten",
    definition:
      "Spannbreiten statt fixer Werte (z. B. 100–140 €/MWh). Grundlage antifragiler Analyse.",
  },
  {
  letter: "B",
  term: "Baseline-Szenario",
  definition:
    "Standardannahmen eines Modells, von denen aus weitere Szenarien abgeleitet werden. Dient als Referenzpunkt für Vergleiche.",
},
{
  letter: "B",
  term: "Bandbreiten-Modellierung",
  definition:
    "Darstellung von Eingaben und Ergebnissen als Wertebereiche statt Fixzahlen. Erlaubt eine realistische und robuste Abbildung von Unsicherheit im AEMS.",
},
{
  letter: "B",
  term: "Blindleistung",
  definition:
    "Leistungsanteil, der keine Nutzarbeit verrichtet, aber das Netz belastet und zusätzliche Energieverluste verursacht. Erhöht Ineffizienzen im Energiesystem.",
},
{
  letter: "B",
  term: "Bubble-Matrix",
  definition:
    "Darstellung von Korrelationen als Blasenmatrix, bei der Größe und Farbe die Stärke und Richtung der Zusammenhänge sichtbar machen.",
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
  {
  letter: "C",
  term: "CO₂-optimierte Erzeugungspriorität",
  definition:
    "Policy, die Anlagen mit niedriger CO₂-Intensität bevorzugt, sofern Kosten und Versorgungssicherheit vergleichbar bleiben.",
},
{
  letter: "C",
  term: "Comfort-Schutz (Komfortschutz)",
  definition:
    "Regelung, die sicherstellt, dass sensible Bereiche wie OP, Intensivstation oder SPA jederzeit stabil versorgt bleiben.",
},
{
  letter: "C",
  term: "Control Loop",
  definition:
    "Geschlossener Regelkreis aus Beobachten, Einordnen, Entscheiden und Handeln. Kernprinzip im AEMS, um Stressoren nicht nur abzuwehren, sondern zur Verbesserung zu nutzen.",
},
{
  letter: "C",
  term: "CO₂-Profil",
  definition:
    "Darstellung der Emissionsintensität eines Energiesystems über Zeit. Zeigt, wie stark Scope-1-Emissionen kontrolliert sind und wie viel Spielraum für Dekarbonisierung besteht.",
},
{
  letter: "C",
  term: "Clusteranalyse (Energiepfade)",
  definition:
    "Analyseverfahren, das ähnliche Verbrauchs- oder Belastungsmuster gruppiert, um anfällige Energiepfade zu identifizieren und gezielte Maßnahmen abzuleiten.",
},
{
  letter: "C",
  term: "CO₂-Intensität",
  definition:
    "Maß für die Emissionsmenge pro Einheit Energieverbrauch. Eine mittlere CO₂-Intensität zeigt, dass Verbesserungen durch Dekarbonisierung möglich sind.",
},
{
  letter: "C",
  term: "Cost per MWh (Kosten pro Megawattstunde)",
  definition:
    "Kennzahl, die zeigt, wie teuer eine Megawattstunde Energie im Verbrauch oder Einkauf ist. Wird im AEMS historisch und prognostisch dargestellt.",
},
{
  letter: "C",
  term: "CO₂-optimierte Fahrweise",
  definition:
    "Steuerstrategie, bei der Anlagen mithilfe CO₂-reduzierter Setpoints betrieben werden. Führt zu geringerer Emissionsintensität und stabilerer Nachhaltigkeitsbilanz.",
},
{
  letter: "C",
  term: "CO₂-optimierte Erzeugungspriorität (APE)",
  definition:
    "Policy, die CO₂-arme Anlagen bevorzugt, wenn Leistungs- und Kostenniveau vergleichbar sind. Unterstützt Dekarbonisierung und nachhaltige Erzeugungsstrategien.",
},
{
  letter: "C",
  term: "CO₂-Optimierung (Szenariofaktor)",
  definition:
    "Stellgröße im Scenario Composer, die beschreibt, wie stark CO₂-orientierte Setpoints oder Betriebsweisen das System beeinflussen sollen.",
},
{
  letter: "C",
  term: "CEnO",
  definition:
    "Chief Energy Officer – zentrale Führungsrolle im EPRIS-Modell. Verantwortet Energie, Risiko, Nachhaltigkeit und Strategie. AEMS: AEMS dient dem CEnO als integriertes Entscheidungs- und Steuerungscockpit.",
},
{
  letter: "C",
  term: "CEnO Denkmodell",
  definition:
    "Denkrahmen des EPRIS-Playbooks, der beschreibt, wie Organisationen Energie systemisch betrachten. AEMS: AEMS spiegelt diese Denkmodelle über Executive, Analyse, Control und Simulation wider.",
},
{
  letter: "C",
  term: "Control Loop (erweitert)",
  definition:
    "Zyklus aus Beobachten → Einordnen → Entscheiden → Handeln. Beschreibt den vollständigen Systemregelkreis im AEMS, inklusive Rückkopplung und Lernen.",
},
{
  letter: "C",
  term: "CO₂-Intensität",
  definition:
    "Maß für die Emissionsmenge pro Energieeinheit. Mittelwerte zeigen, wie viel Potenzial für Dekarbonisierung besteht. AEMS: Wird für Zielpfade und Effizienzanalyse genutzt.",
},
{
  letter: "C",
  term: "CO₂-Optimierung (Szenario)",
  definition:
    "Parameter in Simulationen, die beschreibt, wie stark CO₂-reduzierte Setpoints oder Betriebsstrategien wirken sollen. AEMS: Wird im Scenario Composer zur Emissionsoptimierung eingesetzt.",
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
  {
  letter: "D",
  term: "Deterministische Simulation",
  definition:
    "Simulation mit festen Eingabewerten und ohne Zufallsvariablen. Gleiche Eingaben führen zu exakt gleichen Ergebnissen. Wird für Basisszenarien und Referenzberechnungen im AEMS verwendet.",
},
{
  letter: "D",
  term: "Decide (Control Loop)",
  definition:
    "Entscheidungsphase im AEMS-Regelkreis. Entscheidungen werden getroffen – zunehmend automatisiert durch die Adaptive Policy Engine.",
},
{
  letter: "D",
  term: "Dashboard für kritische Zonen",
  definition:
    "Visualisierungsebene im AEMS, die besonders wichtige Bereiche wie OP, Intensivstation oder thermisch sensible Räume hervorhebt.",
},
{
  letter: "D",
  term: "Dashboard für kritische Zonen",
  definition:
    "AEMS-Ansicht, die sensible Bereiche wie OP, Intensivstation oder thermisch anspruchsvolle Räume hervorhebt. Dient der Priorisierung im Monitoring.",
},
{
  letter: "D",
  term: "Differenz (Scenario Replay)",
  definition:
    "Abweichung zwischen tatsächlichen historischen Werten und den neu simulierten Ergebnissen eines Replay-Szenarios. Zeigt potenzielle Einsparungen oder Mehrkosten.",
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

  {
  letter: "E",
  term: "Einspeiser",
  definition:
    "Anlagen oder Personen, die Strom in das öffentliche Netz einspeisen (z. B. PV-Anlagen, BHKW, Windkraft oder Biogasanlagen). Für Einspeiser gelten eigene Netzverlustentgelte nach der SNE-V.",
},
{
  letter: "E",
  term: "Entgelte SNE-V (Novelle 2025)",
  definition:
    "Datentabelle der E-Control, die die ab 2025 gültigen Netzverlustentgelte für Einspeiser enthält. Die Werte sind in Cent pro kWh angegeben und nach Netzebenen sowie Tarifzeiten (SHT, SNT, WHT, WNT) differenziert.",
},
{
  letter: "E",
  term: "Energiesystem-Simulation",
  definition:
    "Ganzheitliche Simulation des Energiesystems, bestehend aus Verbrauch, Erzeugung, Netz, Preisen, Wetter und technischen Einschränkungen. Grundlage aller Analyse- und Entscheidungsmodelle im AEMS.",
},
{
  letter: "E",
  term: "Empfohlene Steuerungsmaßnahmen",
  definition:
    "Vom AEMS generierte Maßnahmenlisten mit Priorisierung nach Kurz-, Mittel- und Langfrist. Ziel ist ein robustes und antifragiles Energiemanagement.",
},
{
  letter: "E",
  term: "Effizienz (Energiesystem)",
  definition:
    "Maß dafür, wie wirksam Energie genutzt wird. Hohe Effizienz bedeutet geringe Verluste und optimalen Einsatz der vorhandenen Energie.",
},
{
  letter: "E",
  term: "Entwicklung des Systemzustands",
  definition:
    "Zeitverlauf der Resilienz-, Stabilitäts-, Adaptivitäts- und Effizienzwerte eines Energiesystems. Im AEMS als Trendlinie, Unsicherheitsband und Schockereignisse dargestellt.",
},
{
  letter: "E",
  term: "Empfindliche Bereiche (Sensitive Zonen)",
  definition:
    "Teile eines Energiesystems, die besonders auf Volatilität, Spitzenlast oder Stress reagieren. Erfordern erhöhte Aufmerksamkeit im Monitoring und in der Steuerung.",
},
{
  letter: "E",
  term: "Empfehlung: Adaptivität stärken",
  definition:
    "Hinweis des AEMS zur Verbesserung der Reaktionsfähigkeit des Systems. Bezieht sich häufig auf kritische Zeitfenster wie 18–22 Uhr oder Schockereignisse.",
},
{
  letter: "E",
  term: "Empfehlung: Stabilität steigern",
  definition:
    "AEMS-Hinweis bei instabilen Teilsystemen oder hoher Schwankungsanfälligkeit. Ziel ist die Reduktion von Schockwirkung und Kostenrisiken.",
},
{
  letter: "E",
  term: "Einflussfaktor",
  definition:
    "Variable, die Kosten, Stabilität, Effizienz oder CO₂ beeinflusst. Beispiele sind Preisvolatilität, Spitzenlast oder Ineffizienzen.",
},
{
  letter: "E",
  term: "Einflusskette",
  definition:
    "Abfolge kausaler Wirkungen, z. B. Spitzenlast → Kostenanstieg → geringere Stabilität. Wird im AEMS als Ursache-Wirkungsstruktur dargestellt.",
},
{
  letter: "E",
  term: "Einflussstärke",
  definition:
    "Prozentwert, der zeigt, wie stark ein Faktor das Gesamtsystem beeinflusst. Höhere Werte bedeuten größere Relevanz.",
},
{
  letter: "E",
  term: "Energieintensität",
  definition:
    "Kennzahl, die den Energieverbrauch pro Quadratmeter oder Produktionseinheit zeigt. Hohe Werte weisen auf ineffiziente Prozesse oder hohe Lastdichte hin.",
},
{
  letter: "E",
  term: "Executive Cockpit",
  definition:
    "AEMS-Modul zur schnellen Orientierung für Vorstand, Geschäftsführung und Verantwortliche. Zeigt Kern-Kennzahlen zu Kosten, Risiko, Resilienz und CO₂.",
},
{
  letter: "E",
  term: "Executive Summary (AEMS)",
  definition:
    "Kurzbewertung des Energiesystems auf Basis zentraler Kennzahlen wie Stressniveau, Resilienz, Kostenrisiko, Effizienz und CO₂. Dient als schnelle Entscheidungsgrundlage.",
},
{
  letter: "E",
  term: "Erweiterte Nachtabsenkung",
  definition:
    "Intensivierte Version der Nachtabsenkung, die zusätzliche Zeiträume oder niedrigere Sollwerte nutzt, um Energie zu sparen. Hat direkten Einfluss auf Kosten und Effizienz.",
},
{
  letter: "E",
  term: "Einsparprogramm (Szenariofaktor)",
  definition:
    "Regelung, die bestimmte Verbraucher oder Prozesse reduziert, um Energie einzusparen. Kann im Scenario Composer parametrisiert werden.",
},
{
  letter: "E",
  term: "Energieintensität",
  definition:
    "Kennzahl für den Energieverbrauch pro Fläche, Einheit oder Maschine. Wichtige Benchmarkinggröße für Effizienz. AEMS: Unterstützt Standortvergleiche und Zielpfade.",
},
{
  letter: "E",
  term: "Energieportfolio",
  definition:
    "Mischung verschiedener Energiequellen und Verträge. Ein gut ausbalanciertes Portfolio reduziert Kosten-, Markt- und Versorgungsrisiken. AEMS: Bewertet Portfolio-Risiken systemisch.",
},
{
  letter: "E",
  term: "Energie-Resilienz",
  definition:
    "Fähigkeit eines Energiesystems, Risiken auszuhalten und sich anzupassen. Vereint technische Stabilität, organisatorische Vorbereitung und Strategie. AEMS: Misst Energie-Resilienz und zeigt ihre Treiber.",
},
{
  letter: "E",
  term: "Energie-Stress",
  definition:
    "Druck durch Preise, Versorgung, CO₂, Technik oder Last. AEMS: Interpretiert Energie-Stress als Lernsignal und verarbeitet ihn in antifragilen Feedbackloops.",
},
{
  letter: "E",
  term: "Executive-Ebene Insights",
  definition:
    "Kurztexte und Hinweismeldungen, die das Energiesystem für Management und Vorstand interpretiert. AEMS: Erkennt automatisch Prioritäten und Risikofelder.",
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
  {
  letter: "F",
  term: "Force-Graph",
  definition:
    "Netzwerkvisualisierung zur Darstellung von Ursachenketten und Einflussbeziehungen. Die Positionen der Elemente ergeben sich aus simulierten Kräften.",
},
{
  letter: "F",
  term: "Forecast Confidence 2.0",
  definition:
    "Erweiterte Prognose-Vertrauenskennzahl des AEMS. Berücksichtigt historische Modelltreue, aktuelle Marktvolatilität und Modellstabilität.",
},

{
  letter: "F",
  term: "Forecast Confidence",
  definition:
    "Vertrauensmaß einer Prognose. Zeigt, wie stabil ein Modell unter aktuellen Bedingungen ist. AEMS: Visualisiert Confidence dynamisch und warnt bei erhöhter Unsicherheit.",
},

  // ---------------- G ----------------
  {
    letter: "G",
    term: "Geopolitische Unsicherheit",
    definition:
      "Einflussfaktor für Preisrisiken und Märkte.",
  },
  {
  letter: "G",
  term: "Gas-Netzebene G1",
  definition:
    "Transportebene im Hochdrucknetz, auf der große Gasströme überregional bewegt werden. Geringste Entgelte, da die Infrastruktur auf hohe Durchflussmengen ausgelegt ist.",
},
{
  letter: "G",
  term: "Gas-Netzebene G2",
  definition:
    "Regionale Hochdruckebene, die Gas von überregionalen Leitungen in regionale Netze überführt. Mittlere Entgeltstufe.",
},
{
  letter: "G",
  term: "Gas-Netzebene G3",
  definition:
    "Mitteldrucknetz zur Versorgung von Stadtgebieten, Gewerbekunden und lokalen Netzen. Höhere Entgelte als G1 und G2, da geringere Durchflussmengen.",
},
{
  letter: "G",
  term: "Gas-Netzebene G4",
  definition:
    "Niederdrucknetz für Haushalte und kleine Gewerbebetriebe. Feinmaschiges Versorgungsnetz mit den höchsten Netzentgelten.",
},
{
  letter: "G",
  term: "Gas-Netztarife 2025",
  definition:
    "Von der E-Control festgelegte Netzentgelte für den Gastransport und die Gasverteilung in Österreich, gültig ab 2025. Enthält Kapazitätsentgelte, Arbeitspreise, Messpreise und Grundpreise je Netzebene.",
},
{
  letter: "G",
  term: "Gas-Netztarife-2025 (Tarife-Alle-VO)",
  definition:
    "Datentabelle mit allen von der E-Control veröffentlichten Gasnetztarifen für 2025. Enthält Kapazitätsentgelte, Arbeitspreise, Messpreise und Grundpreise, getrennt nach Netzebenen G1–G4 und Marktgebieten Ost/West. Grundlage für Kalkulationen im AEMS.",
},
{
  letter: "G",
  term: "Grundpreis Gas",
  definition:
    "Jährliches Fixentgelt für Netzzugang und Administration, unabhängig vom Gasverbrauch. Bestandteil der regulierten Gasnetzentgelte.",
},
{
  letter: "G",
  term: "Gesamtsteuerbarkeit",
  definition:
    "Kennzahl, die zeigt, wie gut das System durch Policies, technische Maßnahmen und Steuerungslogiken geführt werden kann.",
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
{
  letter: "H",
  term: "Heatmap-Daten",
  definition:
    "Grafische Daten zur Darstellung von Mustern, Hotspots und Intensitäten im Energiesystem. Fehlen Heatmap-Daten, erschwert dies die Mustererkennung.",
},
{
  letter: "H",
  term: "Hierarchie-Baum",
  definition:
    "Baumstruktur zur Darstellung von Ursachenketten. Zeigt, wie Einflussfaktoren aufeinander aufbauen und Kosten, Last oder Effizienz beeinflussen.",
},
{
  letter: "H",
  term: "Handlungsaktivität (Impact Score)",
  definition:
    "Kennzahl, die zeigt, wie aktiv ein Energiemanagement geführt wird – basierend auf geprüften Alerts, geöffneten Empfehlungen, gestarteten Simulationen und genutzten Heatmap-Insights.",
},
{
  letter: "H",
  term: "Heatmap-Insights",
  definition:
    "Visuelle Mustererkennung im AEMS, die Hotspots und kritische Zeitfenster sichtbar macht und in den Impact Score einfließt.",
},
{
  letter: "H",
  term: "History Fit",
  definition:
    "Maß für die historische Genauigkeit eines Prognosemodells. Hohe Werte bedeuten, dass das Modell vergangene Werte gut reproduziert.",
},
  // ---------------- I ----------------
  {
    letter: "I",
    term: "IEM",
    definition:
      "Internes Energiemanagement. AEMS erweitert dieses um Unsicherheit, Rollenlogik und robuste Entscheidungen.",
  },
  {
  letter: "I",
  term: "Input-Parameter",
  definition:
    "Eingabewerte, die eine Simulation steuern, wie Verbrauch, Erzeugung, Preise, Kapazitäten oder technische Grenzwerte. Bestimmen das Verhalten des AEMS-Modells.",
},
{
  letter: "I",
  term: "Ineffizienzen",
  definition:
    "Verluste oder unnötige Energieverbräuche im System, beispielsweise durch Blindleistung oder Wärmeverluste. Erhöhen Kosten und reduzieren Effizienz.",
},
{
  letter: "I",
  term: "Influence Path (Ursachenpfad)",
  definition:
    "Kette von Faktoren, die gemeinsam eine Wirkung erzeugen. Beispiel: Preisvolatilität → Kostenanstieg → geringere Stabilität.",
},
{
  letter: "I",
  term: "Impact Score",
  definition:
    "Bewertet, wie stark durchgeführte Maßnahmen, Entscheidungen und Analysen Kosten, Risiko und Resilienz beeinflusst haben. Zeigt die antifragile Lernkurve.",
},
{
  letter: "I",
  term: "Iterationen (Monte Carlo)",
  definition:
    "Anzahl der Läufe innerhalb einer Monte-Carlo-Simulation. Viele Iterationen erzeugen eine robustere Verteilung und genauere Risikoaussagen.",
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
{
  letter: "K",
  term: "Kapazitätsbuchung Gas",
  definition:
    "Gebuchte Transportkapazität im Gasnetz, die bestimmt, wie viel Gas ein Kunde maximal durch das Netz leiten darf. Basis für Kapazitätsentgelte.",
},
{
  letter: "K",
  term: "Kapazitätsentgelt Gas",
  definition:
    "Preis für die Bereitstellung von Gastransportkapazität. Wird meist in Euro pro kWh/h und Jahr verrechnet und variiert je Netzebene.",
},
{
  letter: "K",
  term: "Kostenrisiko",
  definition:
    "Risiko, dass Energiekosten durch Volatilität, Lastmuster oder geringe Stabilität steigen. Hohe Werte deuten auf empfindliche Kostenstrukturen hin.",
},
{
  letter: "K",
  term: "Kostenstruktur",
  definition:
    "Verteilung und Zusammensetzung der Energiekosten eines Systems. Beeinflusst durch Preisvolatilität, Lastverlauf und Systemstabilität.",
},
{
  letter: "K",
  term: "Kostenanstieg",
  definition:
    "Ursachenfaktor in der Analyse, der beschreibt, warum Kosten steigen. Typische Treiber sind Preisvolatilität, Spitzenlast und Ineffizienzen.",
},
{
  letter: "K",
  term: "Korrelationsanalyse",
  definition:
    "Analyseinstrument zur Ermittlung statistischer Zusammenhänge zwischen Einflussfaktoren wie Preis, Last, Wetter oder Verbrauch. Zeigt Muster, aber keine Kausalität.",
},
{
  letter: "K",
  term: "Kurzfristige Beschaffung",
  definition:
    "Einkauf von Energie oder Gas in kurzer zeitlicher Nähe zur Lieferung. Erhöht das Preisrisiko bei volatilen Märkten.",
},
{
  letter: "K",
  term: "Kostenanstieg",
  definition:
    "Ursachenfaktor, der beschreibt, warum Energiekosten steigen. Typische Treiber: Preisvolatilität, Spitzenlast, ineffiziente Prozesse.",
},
{
  letter: "K",
  term: "Korrelationsmatrix",
  definition:
    "Tabelle, die zeigt, wie stark Variablen wie Preis, Last oder Verbrauch statistisch miteinander zusammenhängen.",
},
{
  letter: "K",
  term: "Kostenrisiko (Executive Cockpit)",
  definition:
    "Risiko, dass Energiekosten durch Marktbedingungen, Volatilität oder Lastprofile steigen. Wird im Executive Cockpit priorisiert bewertet.",
},
{
  letter: "K",
  term: "Kurzfristmaßnahme (AEMS)",
  definition:
    "Steuerungsmaßnahme mit sofortiger oder sehr kurzfristiger Wirkung. Reduziert Stress, Spitzenlast oder Kosten innerhalb weniger Stunden oder Tage.",
},
{
  letter: "K",
  term: "Kurzfristiger Kostenverlauf",
  definition:
    "Prognose der Energiekosten über einen kurzen Zeitraum, basierend auf historischen Mustern und Marktbedingungen. Wird von der Smart Forecast Engine erzeugt.",
},
  // ---------------- L ----------------
  {
    letter: "L",
    term: "Lastprofil",
    definition:
      "Verbrauchsverläufe (Tages-, Wochen-, Jahresmuster). Basis für Szenario- und Kostenanalysen.",
  },
  {
  letter: "L",
  term: "Lastprofil Gas",
  definition:
    "Typischer zeitlicher Verlauf des Gasverbrauchs eines Kunden (z. B. Haushalt oder Gewerbe). Grundlage für Prognosen und Abrechnungsmodelle.",
},
{
  letter: "L",
  term: "Lineare Programmierung",
  definition:
    "Optimierungsmethode, die ein Energiesystem mit linearen Gleichungen beschreibt. Im AEMS genutzt, um optimale Entscheidungen für Energieeinsatz, Kosten oder Robustheit zu berechnen.",
},
{
  letter: "L",
  term: "Lastmanagement (Peak Shaving)",
  definition:
    "Policy, die nichtkritische Verbraucher in Hochlastphasen aktiv reduziert, um Spitzenlasten und Kosten zu senken sowie Anlagen zu schützen.",
},
{
  letter: "L",
  term: "Load Stress Index",
  definition:
    "Kennzahl im AEMS, die die Belastung durch Lastspitzen und Grundlast bewertet. Hohe Werte zeigen potenziell kritische Netz- oder Anlagenzustände.",
},
{
  letter: "L",
  term: "Langfristmaßnahme (AEMS)",
  definition:
    "Maßnahme mit nachhaltiger Wirkung, die Systemrobustheit, Redundanz und antifragile Entwicklung stärkt. Beispiele: Notfallpfadtests, Infrastrukturmaßnahmen.",
},
{
  letter: "L",
  term: "Lastverschiebungsszenario",
  definition:
    "Simulation im AEMS, die analysiert, wie das Verschieben bestimmter Verbraucher (z. B. Pumpen, Waschen, Speicherladung) Lastspitzen reduziert und Effizienz erhöht.",
},
{
  letter: "L",
  term: "Leitstern",
  definition:
    "Langfristiges Zielbild einer Organisation oder eines Systems. AEMS: Der Leitstern lautet, Energie über Kosten, Risiko und Resilienz strategisch steuerbar zu machen.",
},
{
  letter: "L",
  term: "Lastverschiebung",
  definition:
    "Verlagerung von Energieverbrauch in günstigere Zeitfenster. Reduziert Kosten, CO₂ und Netzbelastung. AEMS: Schlägt Lastverschiebungen automatisch vor und simuliert sie.",
},

  // ---------------- M ----------------
  {
    letter: "M",
    term: "Methodenbibliothek",
    definition:
      "Sensitivitätsanalysen, Bandbreitenmodelle, Stresstests, Szenariomatrizen, Monte-Carlo-Light, Wirkungsmodelle für Maßnahmen, Abhängigkeitstreiber, CO₂-Kostenmodelle, technische Effizienzmodelle, Portfolioansätze.",
  },

  {
  letter: "M",
  term: "Marktgebiet Gas Ost",
  definition:
    "Eines der österreichischen Gasmarktgebiete. Umfasst die östlichen Bundesländer. Enthält eigene Netzentgelte basierend auf regionaler Infrastruktur.",
},
{
  letter: "M",
  term: "Marktgebiet Gas West",
  definition:
    "Gasmarktgebiet für Tirol und Vorarlberg. Aufgrund der geografischen Lage verfügt es über eigene Tarifstrukturen und Entgelte.",
},
{
  letter: "M",
  term: "Messpreis Gas",
  definition:
    "Entgelt für die Messung, Ablesung und Datenbereitstellung des Gasverbrauchs. Höhe abhängig vom Zählertyp und der Netzebene.",
},
{
  letter: "M",
  term: "Monte-Carlo-Simulation",
  definition:
    "Stochastische Methode, bei der viele Zufallsvarianten eines Szenarios durchgerechnet werden. Zeigt Schwankungsbreiten und Risiken. Kernmethode des AEMS zur Abbildung echter Unsicherheit.",
},
{
  letter: "M",
  term: "Modellkalibrierung",
  definition:
    "Anpassung eines Modells an reale Mess- und Verbrauchsdaten, damit Simulationen realistische Ergebnisse liefern. Ein zentraler Schritt vor jeder AEMS-Simulation.",
},
{
  letter: "M",
  term: "Maßnahmenhorizont",
  definition:
    "Zeitrahmen, in dem eine Maßnahme wirkt – kurzfristig, mittelfristig oder langfristig. Dient der strategischen Planung im AEMS.",
},
{
  letter: "M",
  term: "Modell-Confidence",
  definition:
    "Vertrauensmaß in das Prognosemodell basierend auf der Modellstruktur, verwendeten Daten und der Stabilität früherer Prognosen.",
},
{
  letter: "M",
  term: "Mittelfristmaßnahme (AEMS)",
  definition:
    "Maßnahme, deren Wirkung innerhalb von Wochen oder Monaten eintritt. Reduziert Risiko, verbessert Versorgung und ermöglicht Lernprozesse.",
},
{
  letter: "M",
  term: "Median (P50)",
  definition:
    "Der mittlere Wert einer Wahrscheinlichkeitsverteilung. In Monte-Carlo-Simulationen repräsentiert der P50-Wert das Szenario, das am wahrscheinlichsten eintritt.",
},
{
  letter: "M",
  term: "Monte Carlo – Verteilung",
  definition:
    "Ergebnisdarstellung einer Monte-Carlo-Simulation, meist mit Erwartungswert, Streuung und Perzentilen. Zeigt die Bandbreite möglicher Ergebnisse.",
},
{
  letter: "M",
  term: "Monte Carlo – Erwartungswert",
  definition:
    "Durchschnittswert aller Simulationsergebnisse einer Monte-Carlo-Analyse. Dient als zentrale Benchmark zur Kosten- oder Risikoabschätzung.",
},
{
  letter: "M",
  term: "Monte Carlo – Streuung",
  definition:
    "Maß für die Schwankungsbreite einer Simulation. Gibt an, wie groß die Unsicherheit der simulierten Werte ist.",
},
// ---------------- N ----------------
{
  letter: "N",
  term: "Netznutzungsentgelt Gas (Arbeitspreis)",
  definition:
    "Preis pro verbrauchter Kilowattstunde Gas. Ergänzt das Kapazitätsentgelt und variiert je Netzebene und Marktgebiet.",
},
{
  letter: "N",
  term: "Netznutzungsentgelt Gas (Kapazität)",
  definition:
    "Preis für die bereitgestellte Gastransportkapazität. Wird in Euro pro kWh/h und Jahr abgerechnet. Grundlage der Gasnetzentgelte.",
},
{
  letter: "N",
  term: "Systemnutzungsentgelte Gas (SNE-V Gas)",
  definition:
    "Regulatorische Vorgaben der E-Control, die festlegen, welche Gasnetzentgelte verrechnet werden dürfen – inklusive Kapazität, Arbeit, Messpreis und Grundpreis.",
},
{
  letter: "N",
  term: "Netzebene 1 (NE1)",
  definition:
    "Höchstspannungsnetz (220–380 kV). 'Autobahn des Stroms'. Transportiert große Mengen über weite Strecken und verbindet Österreich mit anderen Ländern. Sehr geringe relative Verluste.",
},
{
  letter: "N",
  term: "Netzebene 2 (NE2)",
  definition:
    "Hochspannungsnetz (110 kV). Regionale Transportebene zwischen großen Umspannwerken und Industrie. Verbindung zwischen NE1 und Mittelspannungsnetz.",
},
{
  letter: "N",
  term: "Netzebene 3 (NE3)",
  definition:
    "Mittelspannungsnetz (10–30 kV). Versorgung von Gemeinden, Gewerbegebieten und größeren Betrieben. Typische Ebene für Transformatorenstationen.",
},
{
  letter: "N",
  term: "Netzebene 4 (NE4)",
  definition:
    "Niederspannungs-Ortsnetz (400/230 V). Versorgung von Ortschaften, Wohngebieten und Mehrparteienhäusern. Häufige Ebene für lokale Netzverluste.",
},
{
  letter: "N",
  term: "Netzebene 5 (NE5)",
  definition:
    "Feinverteilungsnetz innerhalb kleinerer Ortsbereiche oder Straßenzüge. Verbindung zwischen Trafostationen und lokalen Netzabschnitten.",
},
{
  letter: "N",
  term: "Netzebene 6 (NE6)",
  definition:
    "Gebäude- bzw. Hausanschluss. Leitung vom Straßenverteiler zum Gebäude. Typische Einspeise- und Verbrauchsebene für Haushalte.",
},
{
  letter: "N",
  term: "Netzebene 7 (NE7)",
  definition:
    "Kundenanlage hinter dem Zähler, z. B. die elektrische Installation im Gebäude. Gehört nicht mehr zum öffentlichen Netz.",
},
{
  letter: "N",
  term: "Netzverlustentgelt",
  definition:
    "Preis zur Abdeckung technischer Energieverluste im Stromnetz. Fällt an, wenn Strom eingespeist oder verbraucht wird. In der SNE-V in Cent pro kWh festgelegt und je Netzebene sowie Tarifzeit unterschiedlich.",
},
{
  letter: "N",
  term: "Novelle 2025",
  definition:
    "Überarbeitete Fassung der Systemnutzungsentgelte-Verordnung (SNE-V), gültig ab 2025. Aktualisiert Tarifwerte und Berechnungsgrundlagen für Netzbetreiber.",
},
{
  letter: "N",
  term: "Nichtlineare Optimierung",
  definition:
    "Optimierungsansatz für Energiesysteme mit nichtlinearen Zusammenhängen wie Wirkungsgraden, Verlustkurven oder physikalischen Beschränkungen. Im AEMS genutzt, wenn lineare Modelle nicht ausreichen.",
},
{
  letter: "N",
  term: "Nachtabsenkung (Wärme/Kälte)",
  definition:
    "Policy, die außerhalb der Nutzungszeiten Sollwerte reduziert, um Energie zu sparen. Kann bei Umbauten oder Tests pausiert werden.",
},
{
  letter: "N",
  term: "Notfallpfad",
  definition:
    "Alternative Betriebsroute oder Konfiguration, die bei Ausfall eines Systems aktiviert wird. Tests von Notfallpfaden erhöhen Resilienz und antifragile Eigenschaften.",
},

  // ---------------- O ----------------
  {
    letter: "O",
    term: "Ownership",
    definition:
      "Klare Verantwortlichkeit für Daten und Entscheidungen.",
  },
{
  letter: "O",
  term: "Observe (Control Loop)",
  definition:
    "Erste Phase des AEMS-Regelkreises. Messdaten aus Zählern, SCADA, Marktpreisen und Sensorik werden erfasst und geprüft.",
},
{
  letter: "O",
  term: "Orient (Control Loop)",
  definition:
    "Analysephase im Control Loop. Muster, Korrelationen, Heatmaps und Ursachenbäume helfen, die Lage korrekt einzuordnen.",
},
  // ---------------- P ----------------
  {
    letter: "P",
    term: "Portfoliologik",
    definition:
      "Behandlung von Energie als Risiko-Portfolio, nicht als Einzelgröße.",
  },
  {
  letter: "P",
  term: "Parameter-Sensitivität",
  definition:
    "Analyse, wie stark ein Ergebnis auf Änderungen einzelner Parameter reagiert. Im AEMS genutzt, um die wichtigsten Einflussfaktoren sichtbar zu machen.",
},
{
  letter: "P",
  term: "Peak Shaving",
  definition:
    "Maßnahme zur Reduktion von elektrischen oder thermischen Lastspitzen. Senkt Kosten und schützt Anlagen durch gezielte Entlastung in Hochlastmomenten.",
},
{
  letter: "P",
  term: "Policy",
  definition:
    "Regel oder Steuerungsvorgabe im AEMS, die automatisch wirkt oder manuell ausgelöst werden kann. Policies steuern Verbraucher, Erzeuger, Speicher oder Komfortparameter.",
},
{
  letter: "P",
  term: "Preisvolatilität",
  definition:
    "Schwankungsintensität der Energiepreise. Hohe Preisvolatilität erhöht Kostenrisiken und destabilisiert Systeme.",
},
{
  letter: "P",
  term: "Preis-Last-Korrelation",
  definition:
    "Zusammenhang zwischen Energiepreis und Lastverlauf. Positive Werte zeigen, dass hohe Lasten oft mit hohen Preisen zusammenfallen.",
},
{
  letter: "P",
  term: "Preisvolatilität (30 Tage)",
  definition:
    "Kennzahl, die zeigt, wie stark sich Energiepreise in den letzten 30 Tagen verändert haben. Grundlage antifragiler Einkaufsstrategien.",
},
{
  letter: "P",
  term: "Policy-Status (AEMS)",
  definition:
    "Anzeigemodus einer Policy: Aktiv, Pausiert oder Vorgeschlagen. Zeigt an, wie Regeln im AEMS aktuell wirken oder bereitstehen.",
},
{
  letter: "P",
  term: "P10 / P90",
  definition:
    "Perzentile aus Monte-Carlo-Simulationen. P10 steht für ein optimistisches Szenario (nur 10 % sind besser), P90 für ein konservatives Risikoszenario.",
},
{
  letter: "P",
  term: "Perzentil (Simulation)",
  definition:
    "Kennzahl aus Wahrscheinlichkeitsverteilungen, die beschreibt, wie ein Wert im Vergleich zu vielen Simulationen einzuordnen ist. Genutzt für Risiko- und Budgetplanung.",
},
{
  letter: "P",
  term: "Policy (AEMS)",
  definition:
    "Regel oder Steuerungsvorschrift, die beschreibt, wie ein System in bestimmten Situationen reagieren soll. AEMS: Die Adaptive Policy Engine verwaltet und optimiert Policies automatisch.",
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
  {
  letter: "R",
  term: "Regelbasierte Simulation",
  definition:
    "Simulation, die nach festen Wenn-Dann-Regeln läuft, z. B. Speicherlogiken, Netzgrenzen oder Abschaltmechanismen. Wird im AEMS verwendet, wenn technische Regeln präzise abgebildet werden müssen.",
},
{
  letter: "R",
  term: "Rolling-Horizon-Simulation",
  definition:
    "Schrittweise Simulation über einen längeren Zeitraum. Das AEMS berechnet jeweils ein Zeitfenster, rückt vor und berechnet erneut. Wird für operative Planung und dynamische Energieentscheidungen eingesetzt.",
},
{
  letter: "R",
  term: "Redundanzpfade",
  definition:
    "Alternative Versorgungswege oder Backup-Systeme, die bei Störungen aktive Resilienz bieten. Werden durch Tests gestärkt.",
},
{
  letter: "R",
  term: "Resilienz (AEMS)",
  definition:
    "Fähigkeit des Energiesystems, Störungen zu absorbieren, weiterhin funktionsfähig zu bleiben und aus Stresssituationen zu lernen. Wird im AEMS aktiv gemessen und verbessert.",
},
{
  letter: "R",
  term: "Risikoindikator Supply Risk",
  definition:
    "Kennzahl, die die Risiken durch Versorgungslage, Verträge und Marktsituation bewertet.",
},
{
  letter: "R",
  term: "Resilienz",
  definition:
    "Fähigkeit eines Energiesystems, Stress auszuhalten, stabil zu bleiben und nach Störungen schnell wieder funktionsfähig zu sein. Hohe Resilienz schützt vor Kosten- und Ausfallrisiken.",
},
{
  letter: "R",
  term: "Risikoindikator Versorgungssicherheit",
  definition:
    "Bewertung der Fähigkeit eines Systems, Lasten jederzeit zuverlässig zu decken. Kritische Werte zeigen potenzielle Engpässe oder hohe Lastspitzen.",
},
{
  letter: "R",
  term: "Resilienzscore",
  definition:
    "Bewertung der Fähigkeit eines Systems, Stress, Volatilität und Schockereignisse abzufangen und dabei stabil zu bleiben oder sich zu verbessern.",
},
{
  letter: "R",
  term: "Redundanztest",
  definition:
    "Geplanter Belastungstest, bei dem alternative Versorgungswege oder Backups aktiviert werden. Ziel ist die Stärkung antifragiler Systemeigenschaften.",
},
{
  letter: "R",
  term: "Redundanzpfad-Test",
  definition:
    "Überprüfung, ob alternative Energie- oder Netzpfade wie vorgesehen funktionieren. Verbessert die Systemrobustheit und die antifragile Entwicklung.",
},
{
  letter: "R",
  term: "Replay-Szenario",
  definition:
    "Simulation eines historischen Zeitraums mit geänderten Rahmenbedingungen. Zeigt, welche Auswirkungen frühere Entscheidungen gehabt hätten.",
},
{
  letter: "R",
  term: "Resilienz",
  definition:
    "Widerstandsfähigkeit eines Systems gegenüber externen Störungen. AEMS: Misst Resilienz kontinuierlich und zeigt Risiken und Verbesserungspotenziale.",
},
{
  letter: "R",
  term: "Risikoindikator (Energie)",
  definition:
    "Bewertung, wie stark Energiepreise, Lastmuster oder Versorgungslage ein Risiko darstellen. AEMS: Verwendet Risikoindikatoren für Entscheidungen.",
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
  {
  letter: "S",
  term: "SNE-V (Systemnutzungsentgelte-Verordnung)",
  definition:
    "Verordnung der E-Control, die regelt, welche Entgelte Netzbetreiber in Österreich verrechnen dürfen. Dazu gehören u. a. Netznutzungs-, Mess- und Netzverlustentgelte. Die Novelle 2025 enthält die ab 2025 gültigen Werte.",
},
{
  letter: "S",
  term: "SHT (Sommer Hochtarif)",
  definition:
    "Zeitraum hoher Netzlast im Sommer, typischerweise tagsüber. Netzverlustentgelte sind hier oft höher.",
},
{
  letter: "S",
  term: "SNT (Sommer Niedertarif)",
  definition:
    "Zeitraum niedriger Netzlast im Sommer, meist nachts. Eigenes Entgeltniveau in der SNE-V.",
},
{
  letter: "S",
  term: "Szenario",
  definition:
    "Eine definierte Kombination aus Annahmen wie Verbrauch, Erzeugung, Preisen oder Wetter. AEMS nutzt Szenarien, um unterschiedliche Zukunftsentwicklungen systematisch durchzuspielen.",
},
{
  letter: "S",
  term: "Szenarioanalyse",
  definition:
    "Vergleich mehrerer Szenarien, um robuste Entscheidungen zu treffen. Zeigt, wie sich das System unter unterschiedlichen Bedingungen verhält.",
},
{
  letter: "S",
  term: "Szenario-Matrix",
  definition:
    "Kombination von Szenarien entlang mehrerer Einflussfaktoren (z. B. Verbrauch hoch/niedrig und Preise hoch/niedrig). Grundlage für robuste Entscheidungen im AEMS.",
},
{
  letter: "S",
  term: "Sensitivitätsanalyse",
  definition:
    "Systematische Variation einzelner Parameter, um ihre Bedeutung für das Gesamtergebnis sichtbar zu machen. Zeigt, welche Faktoren das System am stärksten beeinflussen.",
},
{
  letter: "S",
  term: "Simulation",
  definition:
    "Virtuelle Nachbildung eines Energiesystems, um Verhalten, Kosten, Risiken oder technische Einschränkungen zu berechnen. Kernwerkzeug des AEMS zur Entscheidungsunterstützung.",
},
{
  letter: "S",
  term: "Stochastische Simulation",
  definition:
    "Simulation mit Zufallsvariablen wie Verbrauch, Wetter oder Preisen. Jede Ausführung liefert leicht andere Ergebnisse. Im AEMS genutzt, um Unsicherheit realistisch abzubilden.",
},
{
  letter: "S",
  term: "Stress-Test",
  definition:
    "Simulation extremer, aber möglicher Bedingungen wie hoher Verbrauch, geringer Einspeisung oder Netzengpässe. Zeigt Schwachstellen und Systemrisiken auf.",
},
{
  letter: "S",
  term: "Spitzenlast-Alarm",
  definition:
    "Warnmechanismus, der bei hohen oder kritischen Lastständen ausgelöst wird und Peak-Shaving-Maßnahmen aktiviert.",
},
{
  letter: "S",
  term: "Supply Risk",
  definition:
    "Bewertung des Risikos der Energieversorgung basierend auf Marktpreisen, Vertragslage und technischer Versorgungssicherheit.",
},
{
  letter: "S",
  term: "Systemstatus",
  definition:
    "Übersicht der aktuellen Belastungs- und Risikowerte im AEMS, einschließlich Laststress, Versorgungssituation, Volatilität und Steuerbarkeit.",
},
{
  letter: "S",
  term: "Stabilität (Control Loop)",
  definition:
    "Zustand, in dem Datenerfassung, Analyse, Entscheidungen und Maßnahmen im AEMS fehlerfrei laufen.",
},
{
  letter: "S",
  term: "Simulation (AEMS Control)",
  definition:
    "Analysewerkzeug, das Lastverschiebungen, CO₂-Optimierung und betriebliche Maßnahmen virtuell durchspielt, um robuste Entscheidungen zu ermöglichen.",
},
{
  letter: "S",
  term: "Stressoren",
  definition:
    "Belastungs- oder Risikofaktoren wie Lastspitzen, Preisvolatilität oder Versorgungsschwankungen, die im AEMS aktiv beobachtet und genutzt werden.",
},
{
  letter: "S",
  term: "Sensitive Zonen",
  definition:
    "Systembereiche mit hoher Empfindlichkeit gegenüber Volatilität, Stress oder Spitzenlast. Beispiele: Versorgungssicherheit, Kostenstruktur, CO₂-Profil.",
},
{
  letter: "S",
  term: "Spitzenlast (Abendspitze)",
  definition:
    "Regelmäßig wiederkehrende hohe Last in den Abendstunden. Führt zu erhöhtem Risiko bei Versorgungssicherheit und Kosten.",
},
{
  letter: "S",
  term: "Stabilität",
  definition:
    "Maß für die Zuverlässigkeit und Schwankungsanfälligkeit eines Energiesystems. Niedrige Stabilität erhöht Risiko und Kosten und kann Schockereignisse verstärken.",
},
{
  letter: "S",
  term: "Systemzustand",
  definition:
    "Gesamtbewertung des Energiesystems anhand der vier Hauptdimensionen Resilienz, Stabilität, Adaptivität und Effizienz.",
},
{
  letter: "S",
  term: "Sensitive Zone (Analyse)",
  definition:
    "Systembereich mit hoher Empfindlichkeit gegenüber bestimmten Einflussfaktoren wie Preis, Last oder Stress. Wird im Analysebereich gesondert bewertet.",
},
{
  letter: "S",
  term: "Square-Matrix",
  definition:
    "Visuelle Darstellungsform einer Korrelationsmatrix in quadratischer Rasterform. Erleichtert Mustererkennung und Hotspots.",
},
{
  letter: "S",
  term: "Spitzenlast",
  definition:
    "Besonders hohe Lastwerte, die das System belasten und häufig Kosten, Stabilität und Versorgungssicherheit beeinflussen.",
},
{
  letter: "S",
  term: "Systemstabilität (Analyse)",
  definition:
    "Analysekennzahl, die zeigt, wie widerstandsfähig das System gegenüber Schwankungen und Stressoren ist. Wird von Spitzenlast, Ineffizienzen und Preisvolatilität beeinflusst.",
},
{
  letter: "S",
  term: "Stressniveau (Energiestress)",
  definition:
    "Gesamtbelastung des Energiesystems durch Lastspitzen, Volatilität, Wetter und Marktsituation. Hohes Stressniveau erhöht die Priorität antifragiler Maßnahmen.",
},
{
  letter: "S",
  term: "Systemweite Insights",
  definition:
    "Automatisch generierte Erkenntnisse über Kosten, Risiko, Resilienz und CO₂. Unterstützen Top-Level-Entscheidungsträger:innen bei schnellen Bewertungen.",
},
{
  letter: "S",
  term: "Setpoint-Optimierung",
  definition:
    "Anpassung von Sollwerten (z. B. Temperatur, Leistung, Druck), um Komfort, Effizienz und Risiko auszubalancieren. Wird oft durch die Adaptive Policy Engine gesteuert.",
},
{
  letter: "S",
  term: "Simulationsbasierte Lastverschiebung",
  definition:
    "AEMS-Simulation, die berechnet, wie das zeitliche Verlegen von Verbrauchern Kosten, Spitzenlast und Belastung reduziert.",
},
{
  letter: "S",
  term: "Steuerungsmaßnahmen (AEMS)",
  definition:
    "Vom AEMS generierte Maßnahmenpakete, die systematisch nach Kurz-, Mittel- und Langfrist gruppiert werden. Basieren auf Einflussfaktoren, Policies und Stressoren.",
},
{
  letter: "S",
  term: "Sensible Zone (Control Center)",
  definition:
    "Bereich im Energiesystem, der besonders auf Temperatur, Volatilität, Verbrauch oder Last reagiert. Erfordert gezielte Schutz- und Steuerungslogiken.",
},
{
  letter: "S",
  term: "Spitzenlast-Alarm",
  definition:
    "Warnsignal des AEMS, das bei hoher Last aktiviert wird und automatische Maßnahmen wie Peak Shaving auslöst.",
},
{
  letter: "S",
  term: "Supply Risk (AEMS)",
  definition:
    "Bewertung des Versorgungsrisikos basierend auf Verträgen, Marktbedingungen und technischer Versorgungslage.",
},
{
  letter: "S",
  term: "Scenario Composer",
  definition:
    "Interaktives Werkzeug im AEMS, mit dem Was-wäre-wenn-Szenarien erstellt werden. Ermöglicht die Anpassung von Faktoren wie Last, Temperatur, Volatilität oder CO₂-Optimierung.",
},
{
  letter: "S",
  term: "Scenario Replay",
  definition:
    "Analysemodul, das vergangene Zeiträume erneut simuliert, um den Einfluss hypothetischer Maßnahmen sichtbar zu machen. Ideal zur Bewertung verpasster Entscheidungen.",
},
{
  letter: "S",
  term: "Scenario Impact (vereinfachtes Modell)",
  definition:
    "Schnellberechnung, die zeigt, wie sich Szenarioparameter Richtung und Größenordnung für Kosten, Risiko und Resilienz verändern. Grundlage für detaillierte Simulationen.",
},
{
  letter: "S",
  term: "Simulation Timeline",
  definition:
    "Chronologische Dokumentation aller durchgeführten Simulationen, inklusive Erkenntnissen und Maßnahmen. Dient Governance, Audits und organisationalem Lernen.",
},
{
  letter: "S",
  term: "Smart Forecast Engine",
  definition:
    "Prognosemodul des AEMS, das kurzfristige Entwicklungen auf Basis historischer Muster, Volatilität und Systembedingungen schätzt.",
},
{
  letter: "S",
  term: "Streuung (Statistik)",
  definition:
    "Kennzahl, die beschreibt, wie weit Werte einer Verteilung auseinanderliegen. In Szenarien zeigt sie die Unsicherheit des Ergebnisses.",
},
{
  letter: "S",
  term: "Scenario Temperature Shift (Temperaturänderung)",
  definition:
    "Einstellparameter im Scenario Composer, der simuliert, wie Änderungen der Außentemperatur Last, Verbrauch und Betrieb beeinflussen.",
},
{
  letter: "S",
  term: "Szenario",
  definition:
    "Was-wäre-wenn-Beschreibung einer möglichen Zukunft. AEMS: Simuliert Szenarien und quantifiziert deren Wirkung auf Kosten, Risiko, Resilienz und CO₂.",
},
{
  letter: "S",
  term: "Sensitive Zone (Glossar)",
  definition:
    "Bereiche, die empfindlich auf Preis, Last oder Stress reagieren. Beispiele: Versorgungssicherheit, Kostenstruktur, CO₂-Profil. AEMS: Priorisiert Sensitive Zones automatisch.",
},

//------------------------------W-----------------------------------------
{
  letter: "W",
  term: "WHT (Winter Hochtarif)",
  definition:
    "Zeitraum hoher Netzlast im Winter, typischerweise tagsüber. Entgelte sind höher, da Verluste im Winter stärker variieren.",
},
{
  letter: "W",
  term: "WNT (Winter Niedertarif)",
  definition:
    "Zeitraum niedriger Netzlast im Winter, meist nachts. Eigene Kategorie der Netzverlustentgelte.",
},


  // ---------------- T ----------------
  {
    letter: "T",
    term: "Taleb (Nassim Nicholas)",
    definition: "Autor des Konzepts der Antifragilität.",
  },
  {
  letter: "T",
  term: "Technische Randbedingungen",
  definition:
    "Physische oder technische Limits, die das Verhalten des Energiesystems bestimmen, z. B. Netzkapazitäten, Wirkungsgrade oder Sicherheitsvorgaben. Werden in AEMS-Simulationen exakt berücksichtigt.",
},

  // ---------------- U ----------------
  {
    letter: "U",
    term: "Unsicherheit",
    definition:
      "Grundannahme: Die Zukunft ist nicht vorhersehbar. AEMS macht Unsicherheit sichtbar.",
  },
{
  letter: "U",
  term: "Unsicherheitsband",
  definition:
    "Grafische Darstellung möglicher Schwankungen um den Trend eines Systemzustands. Zeigt, wie unsicher die Zukunftsprojektion ist.",
},
{
  letter: "U",
  term: "Unnötige Lastspitzen",
  definition:
    "Lastspitzen, die nicht aus betrieblicher Notwendigkeit entstehen, sondern durch Verhaltens- oder Prozessmuster. Eine der häufigsten Ursachen für Kosten und Instabilität.",
},
{
  letter: "U",
  term: "Ursachenanalyse",
  definition:
    "Methode im AEMS zur Identifikation echter Ursache-Wirkungsbeziehungen. Zeigt Einflussketten und Haupttreiber für Kosten, Stabilität, Effizienz und CO₂.",
},
{
  letter: "U",
  term: "Ursachenpfad",
  definition:
    "Verkettung von Einflussfaktoren, die gemeinsam eine Wirkung erzeugen. Wird visuell im Hierarchie-Baum oder Force-Graph dargestellt.",
},
{
  letter: "U",
  term: "Unsicherheitsband (Analyse)",
  definition:
    "Darstellung möglicher Schwankungsbreiten in einer Zeitreihe. Zeigt, wie unsicher ein Trend oder ein Systemzustand ist.",
},
  // ---------------- V ----------------
  {
    letter: "V",
    term: "Volatilität",
    definition:
      "Schwankung von Preisen oder Mengen. Im AEMS Informationsquelle, kein Risiko an sich.",
  },
  {
  letter: "V",
  term: "Volatilitätsdruck",
  definition:
    "Kennzahl, die den Einfluss von Preis- und Marktvolatilität auf das Gesamtsystem bewertet.",
},
{
  letter: "V",
  term: "Volatility Penalty",
  definition:
    "Abschlag auf die Prognose-Confidence, der entsteht, wenn die Marktvolatilität hoch ist. Zeigt, wie stark Preisschwankungen die Vorhersageunsicherheit erhöhen.",
},
{
  letter: "V",
  term: "Vorstands-Insights",
  definition:
    "Vom Executive Cockpit generierte Zusammenfassungen, die speziell für Vorstand, Geschäftsführung und Verantwortliche im Finanz-, Technik- und Nachhaltigkeitsbereich aufbereitet sind.",
},
{
  letter: "V",
  term: "Volatilitätsdruck",
  definition:
    "Kennzahl, die zeigt, wie stark Preis- und Marktvolatilität das Energiesystem belastet. Beeinflusst Kosten, Risiko und Steuerungsbedarf.",
},
{
  letter: "V",
  term: "Verteilung (Monte Carlo)",
  definition:
    "Beschreibt die Form der simulierten Werteverteilung, z. B. Normalverteilung. Zeigt, wie Wahrscheinlichkeiten über das Ergebnisspektrum verteilt sind.",
},
{
  letter: "V",
  term: "Volatilität – Szenariofaktor",
  definition:
    "Einstellbare Größe im Scenario Composer, die die Wirkung von Preisvolatilität auf Kosten und Risiko simuliert.",
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
  {
  letter: "Z",
  term: "Zeitreihen-Simulation",
  definition:
    "Simulation über eine definierte zeitliche Auflösung wie 15 Minuten, Stunden oder Tage. Im AEMS genutzt, um Lastgänge, Einspeisung, Netzbelastung und Kosten dynamisch abzubilden.",
},
];
