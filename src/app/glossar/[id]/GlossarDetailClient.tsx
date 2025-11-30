"use client";

import type { GlossEntry } from "@/types/glossary";
import { useState } from "react";
import GlossaryEditor from "@/components/glossary/GlossaryEditor";

export default function GlossarDetailClient({ entry }: { entry: GlossEntry }) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-16">
      <a
        href="/glossar"
        className="text-blue-600 hover:underline text-sm inline-block mb-4"
      >
        ← Zurück zum Glossar
      </a>

      <div className="flex justify-between items-start mb-6">
        <h1 className="text-4xl font-bold text-slate-900">{entry.term}</h1>
        <button
          onClick={() => setEditing(true)}
          className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm"
        >
          Bearbeiten
        </button>
      </div>

      <p className="text-lg text-slate-700 leading-relaxed mb-8">
        {entry.definition}
      </p>

      <div className="space-y-3 text-sm text-slate-700">
        {entry.category && (
          <p>
            <span className="font-semibold">Kategorie:</span> {entry.category}
          </p>
        )}

        {entry.tags && entry.tags.length > 0 && (
          <p>
            <span className="font-semibold">Tags:</span>{" "}
            {entry.tags.map((t) => (
              <span
                key={t}
                className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded mr-2 text-xs"
              >
                #{t}
              </span>
            ))}
          </p>
        )}

        {entry.related_terms && entry.related_terms.length > 0 && (
          <p>
            <span className="font-semibold">Verwandte Begriffe:</span>{" "}
            {entry.related_terms.map((t) => (
              <a
                key={t}
                href={`/glossar?query=${encodeURIComponent(t)}`}
                className="text-blue-600 hover:underline mr-2"
              >
                {t}
              </a>
            ))}
          </p>
        )}

        {entry.source && (
          <p>
            <span className="font-semibold">Quelle:</span> {entry.source}
          </p>
        )}
      </div>

      {editing && (
        <GlossaryEditor
          entry={entry}
          onClose={() => {
            setEditing(false);
            location.reload();
          }}
        />
      )}
    </div>
  );
}
