import GlossaryTable from "@/components/admin/GlossaryTable";

export default function GlossarAdminPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Glossar Verwaltung</h2>
      <p className="text-gray-700">
        Hier verwaltest du alle Glossareinträge.
      </p>

      <GlossaryTable />
    </div>
  );
}
