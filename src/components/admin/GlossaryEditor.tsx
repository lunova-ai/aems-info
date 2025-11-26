"use client";

import { useState } from "react";

export default function GlossaryEditor({
  entry,
  onClose,
}: {
  entry: any;
  onClose: () => void;
}) {
  const [term, setTerm] = useState(entry.term);
  const [definition, setDefinition] = useState(entry.definition);
  const [letter, setLetter] = useState(entry.letter);
  const [category, setCategory] = useState(entry.category || "");

  async function save() {
    const body = {
      term,
      definition,
      letter,
      category,
    };

    const url =
      entry.id === "new"
        ? "/api/glossary"
        : `/api/glossary/${entry.id}`;

    const method = entry.id === "new" ? "POST" : "PUT";

    await fetch(url, {
      method,
      body: JSON.stringify(body),
    });

    onClose();
  }

  async function deleteEntry() {
    if (entry.id !== "new") {
      await fetch(`/api/glossary/${entry.id}`, { method: "DELETE" });
    }
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[500px] space-y-4 shadow-lg">
        <h3 className="text-xl font-semibold">Eintrag bearbeiten</h3>

        <input
          className="w-full p-2 border rounded"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded h-32"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          value={letter}
          onChange={(e) => setLetter(e.target.value.toUpperCase())}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Kategorie"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <div className="flex justify-between">
          <button className="px-3 py-2 bg-gray-300 rounded" onClick={onClose}>
            Abbrechen
          </button>
          <div className="flex gap-4">
            <button className="px-3 py-2 bg-red-600 text-white rounded" onClick={deleteEntry}>
              Löschen
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={save}>
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
