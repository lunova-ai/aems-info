"use client";

import { useEffect, useState } from "react";
import GlossaryEditor from "./GlossaryEditor";

type GlossEntry = {
  id: string;
  term: string;
  definition: string;
  letter: string;
  category?: string;
};

export default function GlossaryTable() {
  const [entries, setEntries] = useState<GlossEntry[]>([]);
  const [selected, setSelected] = useState<GlossEntry | null>(null);

  async function load() {
    const res = await fetch("/api/glossary");
    const data = await res.json();
    setEntries(data);
  }

  useEffect(() => {
    load();
  }, []);

  function refresh() {
    load();
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => setSelected({ id: "new", term: "", definition: "", letter: "A" })}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        + Neuer Begriff
      </button>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">Term</th>
            <th>Letter</th>
            <th>Kategorie</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id} className="border-b">
              <td className="py-2">{entry.term}</td>
              <td>{entry.letter}</td>
              <td>{entry.category}</td>
              <td>
                <button
                  className="text-blue-600 underline"
                  onClick={() => setSelected(entry)}
                >
                  Bearbeiten
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <GlossaryEditor entry={selected} onClose={() => { setSelected(null); refresh(); }} />
      )}
    </div>
  );
}
