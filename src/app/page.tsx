export default function Home() {
  return (
    <div className="p-10 text-xl">
      <h1 className="text-3xl font-bold mb-4">AEMS-System</h1>
      <p>
        Willkommen im AEMS – Antifragiles Energiemanagement-System.
      </p>
      <p className="mt-4">
        Wähle links im Menü einen Bereich aus oder starte mit{" "}
        <a href="/aems" className="text-blue-600 underline">
          AEMS Grundlagen
        </a>.
      </p>
    </div>
  );
}

