"use client";

import { useState } from "react";
import type { GlossEntry } from "@/types/glossary";

export type GlossaryEditorProps = {
  entry: GlossEntry | { id: "new"; term: string; definition: string; letter: string; category: null };
  onClose: () => void;
};


// -------------------------------------

export default function GlossaryEditor({ entry, onClose }: GlossaryEditorProps) {
  const [term, setTerm] = useState<string>(entry.term);
  const [definition, setDefinition] = useState<string>(entry.definition);
  const [letter, setLetter] = useState<string>(entry.letter);
  const [category, setCategory] = useState<string>(entry.category ?? "");


  async function save() {
    const body = {
      term,
      definition,
      letter: letter.toUpperCase(),
      category: category || null,
    };

    const isNew = entry.id === "new";
    const url = isNew ? "/api/glossary" : `/api/glossary/${entry.id}`;
    const method = isNew ? "POST" : "PUT";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error("❌ Fehler beim Speichern:", err);
    }

    onClose();
  }

  async function deleteEntry() {
    if (entry.id !== "new") {
      try {
        await fetch(`/api/glossary/${entry.id}`, {
          method: "DELETE",
        });
      } catch (err) {
        console.error("❌ Fehler beim Löschen:", err);
      }
    }
    onClose();
  }

  // ---------- UI ----------

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[500px] space-y-4 shadow-lg border">
        <h3 className="text-xl font-semibold">
          {entry.id === "new" ? "Neuen Begriff anlegen" : "Eintrag bearbeiten"}
        </h3>

        {/* TERM */}
        <input
          className="w-full p-2 border rounded"
          value={term}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTerm(e.target.value)
          }
          placeholder="Begriff"
        />

        {/* DEFINITION */}
        <textarea
          className="w-full p-2 border rounded h-32"
          value={definition}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDefinition(e.target.value)
          }
          placeholder="Definition"
        />

        {/* LETTER */}
        <input
          className="w-full p-2 border rounded"
          value={letter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLetter(e.target.value.toUpperCase().slice(0, 1))
          }
          placeholder="Buchstabe (A–Z)"
        />

        {/* CATEGORY */}
        <input
          className="w-full p-2 border rounded"
          placeholder="Kategorie (optional)"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCategory(e.target.value)
          }
        />

        <div className="flex justify-between pt-2">
          <button className="px-3 py-2 bg-gray-300 rounded" onClick={onClose}>
            Abbrechen
          </button>
          <div className="flex gap-4">
            {entry.id !== "new" && (
              <button
                className="px-3 py-2 bg-red-600 text-white rounded"
                onClick={deleteEntry}
              >
                Löschen
              </button>
            )}
            <button
              className="px-3 py-2 bg-blue-600 text-white rounded"
              onClick={save}
            >
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
