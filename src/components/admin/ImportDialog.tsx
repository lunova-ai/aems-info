"use client";

import { useState } from "react";

export default function ImportDialog() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  async function importFile() {
    if (!file) return;

    const text = await file.text();
    const json = JSON.parse(text);

    await fetch("/api/glossary/import", {
      method: "POST",
      body: JSON.stringify(json),
    });

    setOpen(false);
  }

  return (
    <div>
      <button
        className="px-4 py-2 bg-purple-600 text-white rounded"
        onClick={() => setOpen(true)}
      >
        Importieren
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h3 className="text-xl font-semibold">Glossar importieren</h3>

            <input
              type="file"
              accept=".json"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="mt-4"
            />

            <div className="flex justify-end mt-6 gap-3">
              <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setOpen(false)}>
                Abbrechen
              </button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={importFile}>
                Importieren
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
