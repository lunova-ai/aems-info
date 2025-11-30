"use client";

import type { GlossEntry } from "@/types/glossary";

type Props = {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  onAdd: () => void;
  onFilterCategory: (c: string | null) => void;
  onFilterLetter: (l: string | null) => void;
  categories: string[];
  suggestions: GlossEntry[];
  onSelectSuggestion: (e: GlossEntry) => void;
};

export default function GlossaryToolbar({
  searchQuery,
  setSearchQuery,
  onAdd,
  onFilterCategory,
  onFilterLetter,
  categories,
  suggestions,
  onSelectSuggestion,
}: Props) {
  return (
    <div className="mb-8 p-4 rounded-lg border bg-white shadow-sm space-y-4">

      {/* SEARCH */}
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Begriff suchen…"
          className="w-full px-4 py-2 border rounded text-sm"
        />

        {/* AUTOCOMPLETE */}
        {searchQuery.trim() && suggestions.length > 0 && (
          <div className="mt-1 border rounded bg-white shadow-lg z-20 relative">
            {suggestions.slice(0, 6).map((s) => (
              <button
                key={s.id}
                className="block text-left w-full px-3 py-2 hover:bg-slate-100 text-sm"
                onClick={() => onSelectSuggestion(s)}
              >
                {s.term}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 items-center">
        
        {/* Kategorie */}
        <select
          className="px-3 py-2 border rounded text-sm"
          onChange={(e) =>
            onFilterCategory(e.target.value || null)
          }
        >
          <option value="">Alle Kategorien</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* A–Z */}
        <div className="flex flex-wrap gap-1">
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((l) => (
            <button
              key={l}
              onClick={() => onFilterLetter(l)}
              className="px-2 py-1 border rounded text-xs hover:bg-slate-100"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => onFilterLetter(null)}
            className="px-2 py-1 border rounded text-xs text-slate-500"
          >
            Reset
          </button>
        </div>

        {/* ADD */}
        <button
          onClick={onAdd}
          className="ml-auto px-4 py-2 bg-blue-600 text-white text-sm rounded"
        >
          + Neuer Eintrag
        </button>
      </div>
    </div>
  );
}

