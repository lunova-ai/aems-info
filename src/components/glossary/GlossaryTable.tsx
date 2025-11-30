"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { GlossEntry } from "@/types/glossary";
import GlossaryEditor from "./GlossaryEditor";
import Fuse from "fuse.js";

function isError(e: unknown): e is Error {
  return typeof e === "object" && e !== null && "message" in e;
}

type GlossEntryWithMeta = GlossEntry & {
  created_at?: string;
  updated_at?: string;
};

const PAGE_SIZE = 20;

const CATEGORY_COLORS: Record<string, string> = {
  "Markt & Preis": "bg-blue-100 text-blue-800",
  Development: "bg-purple-100 text-purple-800",
  "Steuerung & Regeln": "bg-amber-100 text-amber-800",
  "Verbrauch & Last": "bg-orange-100 text-orange-800",
  Regulierung: "bg-red-100 text-red-800",
  "Rollen & Organisation": "bg-emerald-100 text-emerald-800",
};

type SortKey = "term" | "category" | "updated_at";

export default function GlossaryTable() {
  const [entries, setEntries] = useState<GlossEntryWithMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("term");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkCategory, setBulkCategory] = useState("");
  const [editorEntry, setEditorEntry] = useState<GlossEntryWithMeta | null>(
    null
  );

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/glossary");
      if (!res.ok) throw new Error(`Fehler: ${res.status}`);
      const data = (await res.json()) as GlossEntryWithMeta[];
      setEntries(data);
      setError(null);
      setSelectedIds(new Set());
      setPage(1);
    } catch (e: unknown) {
      setError(isError(e) ? e.message : "Unbekannter Fehler beim Laden");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const e of entries) {
      if (e.category) set.add(e.category);
    }
    return Array.from(set);
  }, [entries]);

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: ["term", "definition", "tags", "related_terms"],
        threshold: 0.35,
      }),
    [entries]
  );

  /** ----- Qualitätsanalyse & Duplicate-Finder ----- */

  function normalizeTerm(t: string): string {
    return t.toLowerCase().replace(/[^a-z0-9äöüß]/gi, "");
  }

  const quality = useMemo(() => {
    const duplicatesMap = new Map<string, GlossEntryWithMeta[]>();

    for (const e of entries) {
      const key = normalizeTerm(e.term);
      if (!duplicatesMap.has(key)) duplicatesMap.set(key, []);
      duplicatesMap.get(key)!.push(e);
    }

    const duplicateGroups = Array.from(duplicatesMap.values()).filter(
      (group) => group.length > 1
    );

    return {
      duplicateGroups,
      withoutCategory: entries.filter((e) => !e.category).length,
      withoutTags: entries.filter((e) => !e.tags || e.tags.length === 0).length,
      withoutRelated: entries.filter(
        (e) => !e.related_terms || e.related_terms.length === 0
      ).length,
      tooShort: entries.filter((e) => e.definition.length < 80).length,
    };
  }, [entries]);

  /** ----- Filter / Sort / Pagination ----- */

  const filtered = useMemo(() => {
    let result = entries;

    if (categoryFilter) {
      result = result.filter((e) => e.category === categoryFilter);
    }

    if (search.trim()) {
      const q = search.trim();
      const fuzzy = fuse.search(q).map((r) => r.item.id);
      const idSet = new Set(fuzzy);
      result = result.filter((e) => idSet.has(e.id));
    }

    result = [...result].sort((a, b) => {
      let v1: string | number = "";
      let v2: string | number = "";

      if (sortKey === "updated_at") {
        v1 = a.updated_at ? new Date(a.updated_at).getTime() : 0;
        v2 = b.updated_at ? new Date(b.updated_at).getTime() : 0;
      } else {
        v1 = (a[sortKey] || "").toString().toLowerCase();
        v2 = (b[sortKey] || "").toString().toLowerCase();
      }

      const cmp =
        typeof v1 === "number" && typeof v2 === "number"
          ? v1 - v2
          : (v1 as string).localeCompare(v2 as string);

      return sortDir === "asc" ? cmp : -cmp;
    });

    return result;
  }, [entries, categoryFilter, search, sortKey, sortDir, fuse]);

  useEffect(() => {
    setPage(1);
  }, [search, categoryFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageEntries = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  /** -------- Selection -------- */

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function toggleSelect(id: string) {
    setSelectedIds((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  }

  function toggleSelectAllCurrentPage() {
    const ids = pageEntries.map((e) => e.id);
    setSelectedIds((prev) => {
      const copy = new Set(prev);
      const allSelected = ids.every((id) => copy.has(id));
      if (allSelected) {
        ids.forEach((id) => copy.delete(id));
      } else {
        ids.forEach((id) => copy.add(id));
      }
      return copy;
    });
  }

  /** -------- Delete -------- */

  async function handleDelete(id: string) {
    if (!confirm("Diesen Eintrag wirklich löschen?")) return;
    await fetch(`/api/glossary/${id}`, { method: "DELETE" });
    await load();
  }

  async function handleBulkDelete() {
    if (selectedIds.size === 0) return;
    if (!confirm("Alle ausgewählten Einträge löschen?")) return;

    for (const id of Array.from(selectedIds)) {
      await fetch(`/api/glossary/${id}`, { method: "DELETE" });
    }
    await load();
  }

  /** -------- Bulk category -------- */

  async function handleBulkCategoryApply() {
    if (!bulkCategory || selectedIds.size === 0) return;

    if (
      !confirm(
        `Kategorie "${bulkCategory}" für ${selectedIds.size} Einträge übernehmen?`
      )
    )
      return;

    const payload = { category: bulkCategory };

    for (const id of Array.from(selectedIds)) {
      await fetch(`/api/glossary/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    await load();
    setBulkCategory("");
  }

  /** Stats */
  const stats = useMemo(() => {
    const total = entries.length;
    const withCategory = entries.filter((e) => e.category).length;
    const withoutCategory = total - withCategory;

    const catSet = new Set(entries.map((e) => e.category).filter(Boolean));
    const categoryCount = catSet.size;

    const now = Date.now();
    const last30 = entries.filter((e) => {
      if (!e.updated_at) return false;
      return now - new Date(e.updated_at).getTime() <=
        30 * 24 * 60 * 60 * 1000;
    }).length;

    return { total, categoryCount, withoutCategory, last30 };
  }, [entries]);

  /** -------- Render -------- */

  return (
    <div className="space-y-6">
      {/* STATISTIK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Begriffe gesamt" value={stats.total} />
        <StatCard label="Kategorien" value={stats.categoryCount} />
        <StatCard label="Ohne Kategorie" value={stats.withoutCategory} />
        <StatCard label="Geändert (30 Tage)" value={stats.last30} />
      </div>

      {/* QUALITÄT */}
      <div className="bg-slate-50 border rounded-lg p-4 text-xs text-slate-700 space-y-2">
        <div className="font-semibold text-slate-800 mb-1">
          Qualitätsübersicht
        </div>

        <div className="flex flex-wrap gap-4">
          <span>⚠️ Ohne Kategorie: {quality.withoutCategory}</span>
          <span>🏷️ Ohne Tags: {quality.withoutTags}</span>
          <span>🔗 Ohne verwandte Begriffe: {quality.withoutRelated}</span>
          <span>📏 Definition kurz (&lt; 80 Zeichen): {quality.tooShort}</span>
        </div>

        {quality.duplicateGroups.length > 0 && (
          <div className="mt-3">
            <div className="font-semibold mb-1">Mögliche Duplikate:</div>
            <ul className="list-disc list-inside space-y-1">
              {quality.duplicateGroups.map((group, i) => (
                <li key={i}>
                  {group.map((e) => e.term).join("  ·  ")}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div>
            <label className="block text-xs font-semibold mb-1">Suche</label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Begriff, Definition, Tag…"
              className="border rounded px-3 py-1.5 text-sm w-full sm:w-64"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">
              Kategorie
            </label>
            <select
              value={categoryFilter ?? ""}
              onChange={(e) => setCategoryFilter(e.target.value || null)}
              className="border rounded px-3 py-1.5 text-sm w-full sm:w-56"
            >
              <option value="">Alle Kategorien</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* BULK-ACTIONS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3">
          <div>
            <label className="block text-xs font-semibold mb-1">
              Kategorie für Auswahl setzen
            </label>
            <div className="flex gap-2">
              <select
                value={bulkCategory}
                onChange={(e) => setBulkCategory(e.target.value)}
                className="border rounded px-3 py-1.5 text-sm w-40"
              >
                <option value="">– Kategorie –</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <button
                onClick={handleBulkCategoryApply}
                disabled={!bulkCategory || selectedIds.size === 0}
                className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded disabled:opacity-40"
              >
                Anwenden
              </button>
            </div>
          </div>

          <button
            onClick={handleBulkDelete}
            disabled={selectedIds.size === 0}
            className="px-3 py-1.5 text-xs bg-red-600 text-white rounded disabled:opacity-40"
          >
            Auswahl löschen
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="rounded-lg border bg-white shadow">
        {loading && (
          <div className="p-4 text-sm text-slate-500">
            Lade Glossar-Einträge…
          </div>
        )}

        {error && (
          <div className="p-4 text-sm text-red-600">{error}</div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="p-4 text-sm text-slate-500">
            Keine Einträge gefunden – Filter oder Suche anpassen.
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100 text-slate-600 text-xs uppercase border-b">
                <tr>
                  <th className="px-2 py-2 w-8">
                    <input
                      type="checkbox"
                      onChange={toggleSelectAllCurrentPage}
                      checked={
                        pageEntries.length > 0 &&
                        pageEntries.every((e) => selectedIds.has(e.id))
                      }
                    />
                  </th>

                  <SortableTh
                    label="Begriff"
                    sortKey="term"
                    activeKey={sortKey}
                    dir={sortDir}
                    onClick={toggleSort}
                  />

                  <th className="px-3 py-2 text-left w-1/2">Definition</th>

                  <SortableTh
                    label="Kategorie"
                    sortKey="category"
                    activeKey={sortKey}
                    dir={sortDir}
                    onClick={toggleSort}
                  />

                  <SortableTh
                    label="Geändert"
                    sortKey="updated_at"
                    activeKey={sortKey}
                    dir={sortDir}
                    onClick={toggleSort}
                  />

                  <th className="px-3 py-2 text-left">Qualität</th>
                  <th className="px-3 py-2 text-right">Aktionen</th>
                </tr>
              </thead>

              <tbody>
                {pageEntries.map((entry) => {
                  const qualityBadges: string[] = [];

                  if (!entry.category) qualityBadges.push("⚠️ Kategorie");
                  if (!entry.tags || entry.tags.length === 0)
                    qualityBadges.push("🏷️ Tags");
                  if (!entry.related_terms || entry.related_terms.length === 0)
                    qualityBadges.push("🔗 Verwandte");
                  if (entry.definition.length < 80)
                    qualityBadges.push("📏 kurz");

                  return (
                    <tr
                      key={entry.id}
                      className="border-b last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-2 py-2 align-top">
                        <input
                          type="checkbox"
                          checked={selectedIds.has(entry.id)}
                          onChange={() => toggleSelect(entry.id)}
                        />
                      </td>

                      <td className="px-3 py-2 align-top font-semibold text-slate-900">
                        {entry.term}
                      </td>

                      <td className="px-3 py-2 align-top text-slate-600 max-w-[450px]">
                        <span 
                         className="block line-clamp-3"
                         title={entry.definition}
                         >
                          {entry.definition}
                        </span>
                      </td>

                      <td className="px-3 py-2 align-top">
                        {entry.category ? (
                          <span
                            className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                              CATEGORY_COLORS[entry.category] ??
                              "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {entry.category}
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400">
                            – keine –
                          </span>
                        )}
                      </td>

                      <td className="px-3 py-2 align-top text-xs text-slate-500">
                        {entry.updated_at
                          ? new Date(entry.updated_at).toLocaleDateString(
                              "de-AT"
                            )
                          : "–"}
                      </td>

                      <td className="px-3 py-2 align-top text-xs text-slate-700">
                        {qualityBadges.length === 0 ? (
                          <span className="text-emerald-600">✅ OK</span>
                        ) : (
                          <div className="flex flex-wrap gap-1">
                            {qualityBadges.map((b) => (
                              <span
                                key={b}
                                className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="px-3 py-2 align-top text-right space-x-3">
                        <button
                          className="text-xs text-blue-600 hover:underline"
                          onClick={() => setEditorEntry(entry)}
                        >
                          Bearbeiten
                        </button>

                          <button
                          className="text-xs text-red-600 hover:underline"
                          onClick={() => void handleDelete(entry.id)}
                        >
                          Löschen
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className="flex justify-between items-center px-4 py-3 border-t bg-slate-50 text-xs text-slate-600">
              <span>
                Seite {page} von {totalPages} – {filtered.length} Einträge
              </span>
              <div className="space-x-2">
                <button
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-2 py-1 border rounded disabled:opacity-40"
                >
                  Zurück
                </button>
                <button
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="px-2 py-1 border rounded disabled:opacity-40"
                >
                  Weiter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* EDITOR */}
      {editorEntry && (
        <GlossaryEditor
          entry={editorEntry}
          onClose={() => {
            setEditorEntry(null);
            void load();
          }}
        />
      )}
    </div>
  );
}

/* --- Helpers ------------------------------------------------------------------ */

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="text-xs uppercase text-slate-500 mb-1">
        {label}
      </div>
      <div className="text-2xl font-semibold text-slate-800">
        {value}
      </div>
    </div>
  );
}

function SortableTh({
  label,
  sortKey,
  activeKey,
  dir,
  onClick,
}: {
  label: string;
  sortKey: SortKey;
  activeKey: SortKey;
  dir: "asc" | "desc";
  onClick: (key: SortKey) => void;
}) {
  const active = sortKey === activeKey;
  return (
    <th
      className="px-3 py-2 text-left cursor-pointer select-none"
      onClick={() => onClick(sortKey)}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        {active && (dir === "asc" ? "↑" : "↓")}
      </span>
    </th>
  );
}


