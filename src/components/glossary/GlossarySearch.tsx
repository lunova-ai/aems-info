"use client";

import { useMemo, useState } from "react";

const categoryColors: Record<string, string> = {
  "Verbrauch & Last": "bg-orange-100 text-orange-800",
  "Analyse & Statistik": "bg-purple-100 text-purple-800",
  "Steuerung & Regeln": "bg-blue-100 text-blue-800",
  "Markt & Preis": "bg-yellow-100 text-yellow-800",
  "Philosophie & Strategie": "bg-teal-100 text-teal-800",
  "Prognose": "bg-indigo-100 text-indigo-800",
  "System & Architektur": "bg-slate-200 text-slate-700",
  "Rollen & Organisation": "bg-pink-100 text-pink-700",
  "Energie-Resilienz": "bg-green-100 text-green-800",
};

function getCategoryColor(cat: string) {
  return categoryColors[cat] ?? "bg-slate-100 text-slate-700";
}


export type GlossaryEntry = {
  id: string;
  letter: string;
  term: string;
  definition: string;
  category?: string | null;
  tags?: string[] | null;
};

type Props = {
  entries: GlossaryEntry[];
};

export default function GlossarySearch({ entries }: Props) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Kategorien aus Daten ableiten
  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          entries
            .map((e) => e.category)
            .filter((c): c is string => !!c && c.trim().length > 0),
        ),
      ).sort(),
    [entries],
  );

  // Filterlogik
  const filtered = useMemo(() => {
    const q = query.toLowerCase();

    return entries
      .slice()
      .sort((a, b) => a.term.localeCompare(b.term, "de"))
      .filter((item) => {
        const text =
          item.term.toLowerCase() +
          " " +
          item.definition.toLowerCase() +
          " " +
          (item.category?.toLowerCase() || "") +
          " " +
          (item.tags?.join(" ").toLowerCase() || "");

        const matchesQuery = q.length === 0 || text.includes(q);
        const matchesLetter = letter
          ? (item.letter || item.term[0]?.toUpperCase()) === letter
          : true;
        const matchesCategory = category ? item.category === category : true;
        const matchesTag = activeTag
          ? item.tags?.includes(activeTag)
          : true;

        return matchesQuery && matchesLetter && matchesCategory && matchesTag;
      });
  }, [entries, query, letter, category, activeTag]);

  // Gruppierung nach Buchstaben
  const grouped = useMemo(() => {
    const groups: Record<string, GlossaryEntry[]> = {};
    for (const item of filtered) {
      const l = (item.letter || item.term[0] || "?").toUpperCase();
      if (!groups[l]) groups[l] = [];
      groups[l].push(item);
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b, "de"));
  }, [filtered]);

  function handleLetterClick(l: string) {
    const newLetter = l === letter ? null : l;
    setLetter(newLetter);

    if (newLetter) {
      // smooth scroll zu Abschnitt
      setTimeout(() => {
        const el = document.getElementById(`letter-${newLetter}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }

  function resetFilters() {
    setQuery("");
    setLetter(null);
    setCategory(null);
    setActiveTag(null);
  }

  return (
    <div className="space-y-8">
      {/* Suche + Filterzeile */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="🔍 Begriff, Beschreibung oder Kategorie suchen…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 rounded-lg border border-slate-300 shadow-sm focus:ring-2 focus:ring-blue-500 pr-10"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Kategorie-Filter */}
        <select
          value={category || ""}
          onChange={(e) => setCategory(e.target.value || null)}
          className="p-3 rounded-lg border border-slate-300 bg-white shadow-sm text-sm w-full md:w-60"
        >
          <option value="">Alle Kategorien</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button
          onClick={resetFilters}
          className="px-3 py-2 rounded-md border border-slate-300 text-sm text-slate-700 hover:bg-slate-100"
        >
          Filter zurücksetzen
        </button>
      </div>

      {/* Buchstabenleiste */}
      <div className="flex flex-wrap gap-1 md:gap-2">
        {letters.map((l) => {
          const isActive = l === letter;
          return (
            <button
              key={l}
              onClick={() => handleLetterClick(l)}
              className={`px-2.5 py-1 rounded-md text-xs md:text-sm border transition-all ${
                isActive
                  ? "bg-blue-600 text-white border-blue-700 shadow"
                  : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200"
              }`}
            >
              {l}
            </button>
          );
        })}
      </div>

      {/* Ergebnis-Info */}
      <div className="text-slate-600 text-sm">
        {filtered.length} Eintrag{filtered.length !== 1 && "e"} gefunden
        {letter && (
          <> · Filter: Buchstabe <strong>{letter}</strong></>
        )}
        {category && (
          <> · Kategorie: <strong>{category}</strong></>
        )}
        {activeTag && (
          <> · Tag: <strong>#{activeTag}</strong></>
        )}
      </div>

      {/* Ergebnisse gruppiert A–Z */}
      <div className="space-y-10 mt-4">
        {grouped.length === 0 && (
          <p className="text-slate-500 italic text-center py-6">
            Keine passenden Begriffe gefunden.
          </p>
        )}

        {grouped.map(([l, items]) => (
          <section key={l} id={`letter-${l}`} className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-800">{l}</h2>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <a
                    href={`/glossar/${item.id}`}
                    className="block"
                  >
                    <h3 className="text-lg font-semibold text-blue-800 mb-1">
                      <HighlightedText text={item.term} query={query} />
                    </h3>

                    <p className="text-slate-700 leading-relaxed">
                      <HighlightedText
                        text={item.definition}
                        query={query}
                      />
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      {item.category && (
  <span
    className={`
      inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
      ${getCategoryColor(item.category)}
    `}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-current" />
    {item.category}
  </span>
)}


                      {item.tags &&
                        item.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTag(tag === activeTag ? null : tag);
                            }}
                            className={`px-2 py-1 rounded-full border text-[11px] ${
                              tag === activeTag
                                ? "bg-blue-600 text-white border-blue-700"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            #{tag}
                          </button>
                        ))}
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/**
 * Hilfs-Komponente, die Suchbegriffe im Text hervorhebt.
 */
function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escaped, "gi");

  const parts = text.split(regex);
  const matches = text.match(regex);

  if (!matches) return <>{text}</>;

  const result: React.ReactNode[] = [];
  parts.forEach((part, i) => {
    result.push(part);
    if (matches[i]) {
      result.push(
        <mark key={i} className="bg-yellow-200 text-slate-900">
          {matches[i]}
        </mark>,
      );
    }
  });

  return <>{result}</>;
}

