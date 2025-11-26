export default function QualityPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Glossar Quality Checks</h2>

      <p className="text-gray-700">
        Hier erscheinen später automatische Prüfungen:
      </p>

      <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
        <li>Duplikate</li>
        <li>Falsche Buchstaben (letter mismatch)</li>
        <li>Zu kurze Definitionen</li>
        <li>Sonderzeichen / Unicode</li>
        <li>Inkonsistente Kategorien</li>
      </ul>

      <p className="text-gray-500 italic mt-5">
        Bald verfügbar…
      </p>
    </div>
  );
}
