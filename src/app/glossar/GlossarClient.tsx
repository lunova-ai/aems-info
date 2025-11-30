"use client";

import { useMemo, useState } from "react";
import type { GlossEntry } from "@/types/glossary";
import GlossaryToolbar from "@/components/glossary/GlossaryToolbar";
import GlossarySearch, { type GlossaryGroup } from "@/components/glossary/GlossarySearch";
import GlossaryEditor, { type NewEntry } from "@/components/glossary/GlossaryEditor";
import Fuse from "fuse.js";

export default function GlossarClient({ entries }: { entries: GlossEntry[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [letter, setLetter] = useState<string | null>(null);
  const [editor, setEditor] = useState<GlossEntry | NewEntry | null>(null);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(entries.map((e) => e.category).filter(Boolean))
      ) as string[],
    [entries]
  );

  /** ---- Fuzzy Search ---- */
  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: ["term", "definition", "tags", "related_terms"],
        threshold: 0.35,
        includeScore: true,
      }),
    [entries]
  );

  const fuzzyResults = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query.trim()).map((r) => r.item);
  }, [query, fuse]);

   /** ---- Live Filtering ---- */
  const filtered = useMemo(() => {
    let result = entries;

    if (category) {
      result = result.filter((e) => e.category === category);
    }

    if (letter) {
      result = result.filter((e) => e.letter === letter);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((e) =>
        [
          e.term,
          e.definition,
          e.category ?? "",
          ...(e.tags ?? []),
          ...(e.related_terms ?? []),
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    return result;
  }, [entries, category, letter, query]);

  /** ---- Gruppieren (A–Z) ---- */
  const grouped = useMemo<GlossaryGroup[]>(() => {
    const map = new Map<string, GlossEntry[]>();
    for (const e of filtered) {
      const L = e.letter || "#";
      if (!map.has(L)) map.set(L, []);
      map.get(L)!.push(e);
    }
    return Array.from(map.entries())
      .map(([letter, items]) => ({ letter, items }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  }, [filtered]);

  /** ---- Map für Auto-Linking: term -> id ---- */
  const termToId = useMemo(() => {
    const m: Record<string, string> = {};
    for (const e of entries) {
      m[e.term] = e.id;
    }
    return m;
  }, [entries]);

  /** ---- Render ---- */
  return (
    <div className="max-w-5xl mx-auto py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Glossar – AEMS Begriffe
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Das AEMS Glossar stellt eine gemeinsame Sprache bereit für:
          Einkauf, Controlling, Technik, ESG und Management.
        </p>
      </header>

      <GlossaryToolbar
        searchQuery={query}
        setSearchQuery={setQuery}
        onAdd={() =>
          setEditor({
            id: "new",
            term: "",
            definition: "",
            letter: "",
            category: null,
            tags: null,
            related_terms: null,
            source: null,
          })
        }
        onFilterCategory={setCategory}
        onFilterLetter={setLetter}
        categories={categories}
        suggestions={fuzzyResults.slice(0, 5)}
        onSelectSuggestion={(s) => {
          window.location.href = `/glossar/${s.id}`;
        }}
      />

      <GlossarySearch entries={grouped} query={query} termToId={termToId} />

      {editor && (
        <GlossaryEditor
          entry={editor}
          onClose={() => {
            setEditor(null);
            location.reload();
          }}
        />
      )}
    </div>
  );
}


