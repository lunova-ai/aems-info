"use client";

import { useState } from "react";

export type GlossaryEntry = {
  id: string;
  letter: string;
  term: string;
  definition: string;
  category?: string | null;
  tags?: string[] | null;
};

export default function GlossarySearch({ entries }: { entries: GlossaryEntry[] }) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filtered = entries.filter((item) => {
    const matchesText =
      item.term.toLowerCase().includes(query.toLowerCase()) ||
      item.definition.toLowerCase().includes(query.toLowerCase());

    const matchesLetter = letter ? item.term.startsWith(letter) : true;

    return matchesText && matchesLetter;
  });

  return (
    <div className="space-y-8">
      {/* Search */}
      <input
        type="text"
        placeholder="Begriff suchen…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
      />

      {/* Letter Filter */}
      <div className="flex flex-wrap gap-2">
        {letters.map((l) => (
          <button
            key={l}
            onClick={() => setLetter(l === letter ? null : l)}
            className={`px-3 py-1 rounded-md border text-sm transition ${
              l === letter
                ? "bg-blue-600 text-white border-blue-700"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-6 mt-6">
        {filtered.length === 0 && (
          <p className="text-gray-500 italic">Keine Treffer.</p>
        )}

        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg border bg-white shadow-sm"
          >
            <h3 className="text-lg font-semibold text-blue-800">
              {item.term}
            </h3>

            <p className="text-gray-700 leading-relaxed">
              {item.definition}
            </p>

            {item.category && (
              <p className="mt-2 text-sm text-gray-500">
                Kategorie: <strong>{item.category}</strong>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

