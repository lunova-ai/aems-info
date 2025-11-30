// src/components/glossary/ExportButton.tsx
"use client";

export default function ExportButton() {
  async function exportJSON() {
    const res = await fetch("/api/glossary/export?format=json");
    const blob = await res.blob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "glossary-export.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function exportCSV() {
    const res = await fetch("/api/glossary/export?format=csv");
    const blob = await res.blob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "glossary-export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={exportJSON}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        JSON exportieren
      </button>

      <button
        onClick={exportCSV}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        CSV exportieren
      </button>
    </div>
  );
}
