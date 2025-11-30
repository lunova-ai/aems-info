"use client";

import { useState, useCallback } from "react";
import type { GlossEntry } from "@/types/glossary";

export type NewEntry = {
  id: "new";
  term: string;
  definition: string;
  letter: string;
  category: string | null;
  tags: string[] | null;
  related_terms: string[] | null;
  source: string | null;
};

const CATEGORY_OPTIONS = [
  "Analyse & Statistik",
  "Development",
  "Energie-Resilienz",
  "Markt & Preis",
  "Philosophie & Strategie",
  "Prognose",
  "Regulierung",
  "Rollen & Organisation",
  "Steuerung & Regeln",
  "System & Architektur",
  "Verbrauch & Last",
];

type Props = {
  entry: GlossEntry | NewEntry;
  onClose: () => void;
};

function isError(e: unknown): e is Error {
  return typeof e === "object" && e !== null && "message" in e;
}

function arrayToInput(value: string[] | null | undefined): string {
  if (!value || value.length === 0) return "";
  return value.join(", ");
}

export default function GlossaryEditor({ entry, onClose }: Props) {
  const isNew = entry.id === "new";

  const [term, setTerm] = useState(entry.term);
  const [definition, setDefinition] = useState(entry.definition);
  const [category, setCategory] = useState(entry.category ?? "");
  const [tagsInput, setTagsInput] = useState(
    "tags" in entry ? arrayToInput(entry.tags) : ""
  );
  const [relatedInput, setRelatedInput] = useState(
    "related_terms" in entry ? arrayToInput(entry.related_terms) : ""
  );
  const [source, setSource] = useState(entry.source ?? "");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const parseList = useCallback((input: string): string[] | null => {
    const parts = input
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);

    return parts.length > 0 ? parts : null;
  }, []);

  const handleSave = useCallback(async () => {
    setLoading(true);
    setErrorMsg(null);

    const payload = {
      term,
      definition,
      category: category || null,
      tags: parseList(tagsInput),
      related_terms: parseList(relatedInput),
      source: source || null,
    };

    try {
      const url = isNew ? "/api/glossary" : `/api/glossary/${entry.id}`;
      const method = isNew ? "POST" : "PATCH";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(
          (errData && errData.error) || `Fehler beim Speichern (${res.status})`
        );
      }

      onClose();
    } catch (e: unknown) {
      setErrorMsg(isError(e) ? e.message : "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  }, [
    category,
    definition,
    entry.id,
    isNew,
    onClose,
    parseList,
    source,
    tagsInput,
    relatedInput,
    term,
  ]);

  const handleDelete = useCallback(async () => {
    if (isNew) {
      onClose();
      return;
    }

    if (!confirm("Diesen Glossar-Eintrag wirklich löschen?")) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch(`/api/glossary/${entry.id}`, { method: "DELETE" });
      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(
          (errData && errData.error) || `Fehler beim Löschen (${res.status})`
        );
      }

      onClose();
    } catch (e: unknown) {
      setErrorMsg(isError(e) ? e.message : "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  }, [entry.id, isNew, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {isNew
              ? "Neuen Glossar-Eintrag anlegen"
              : "Glossar-Eintrag bearbeiten"}
          </h2>
          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-800"
          >
            ✕
          </button>
        </div>

        {errorMsg && (
          <div className="mb-3 rounded bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        <div className="space-y-4">
          {/* TERM */}
          <div>
            <label className="block text-sm font-medium mb-1">Begriff *</label>
            <input
              className="w-full border rounded px-3 py-2 text-sm"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              required
            />
          </div>

          {/* DEFINITION */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Definition *
            </label>
            <textarea
              className="w-full border rounded px-3 py-2 text-sm"
              rows={5}
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              required
            />
          </div>

          {/* CATEGORY + SOURCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Kategorie</label>
              <select
                className="w-full border rounded px-3 py-2 text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">– keine Kategorie –</option>
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Quelle</label>
              <input
                className="w-full border rounded px-3 py-2 text-sm"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="z.B. interner Leitfaden"
              />
            </div>
          </div>

          {/* TAGS */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Tags (kommagetrennt)
            </label>
            <input
              className="w-full border rounded px-3 py-2 text-sm"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="energie, tarif, risiko"
            />
          </div>

          {/* RELATED TERMS */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Verwandte Begriffe (kommagetrennt)
            </label>
            <input
              className="w-full border rounded px-3 py-2 text-sm"
              value={relatedInput}
              onChange={(e) => setRelatedInput(e.target.value)}
              placeholder="Grundgebühr, Leistungspreis"
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 flex justify-between items-center">
          {!isNew && (
            <button
              className="text-sm text-red-600 hover:text-red-800"
              onClick={handleDelete}
              disabled={loading}
            >
              Eintrag löschen
            </button>
          )}

          <div className="flex gap-3 ml-auto">
            <button
              className="px-3 py-1.5 text-sm rounded border border-slate-300 text-slate-700"
              onClick={onClose}
              disabled={loading}
            >
              Abbrechen
            </button>
            <button
              className="px-4 py-1.5 text-sm rounded bg-blue-600 text-white disabled:opacity-60"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Speichern…" : "Speichern"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

