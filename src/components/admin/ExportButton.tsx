"use client";

export default function ExportButton() {
  async function exportGlossary() {
    const res = await fetch("/api/glossary/export");
    const blob = await res.blob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "glossary-export.json";
    a.click();
  }

  return (
    <button
      onClick={exportGlossary}
      className="px-4 py-2 bg-green-600 text-white rounded"
    >
      Exportieren
    </button>
  );
}
