import GlossaryTable from "@/components/glossary/GlossaryTable";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Glossar Admin",
};

export default function GlossarAdminPage() {
  return (
    <div className="w-full px-6 py-10">
      {/* Titel */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Glossar Admin
        </h1>

        <p className="text-slate-600 text-base max-w-2xl">
          Verwalte alle Glossar-Einträge zentral. Du kannst hier neue Begriffe
          anlegen, bestehende bearbeiten, Kategorien anpassen, Datenqualität
          prüfen, Duplikate identifizieren oder Einträge löschen.
        </p>
      </div>

      {/* Tabelle */}
      <div className="w-full">
        <GlossaryTable />
      </div>
    </div>
  );
}

