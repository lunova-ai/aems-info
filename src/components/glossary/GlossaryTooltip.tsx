"use client";

import { useEffect, useRef, useState } from "react";
import type { GlossEntry } from "@/types/glossary";

type TooltipEntry = GlossEntry | null;

export default function GlossaryTooltip({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [entry, setEntry] = useState<TooltipEntry>(null);
  const [loading, setLoading] = useState(false);

  // Timer-Typen korrekt für Browser + Node
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchEntry = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/glossary/by-term?term=${encodeURIComponent(term)}`
      );

      if (res.ok) {
        const json = (await res.json()) as GlossEntry;
        setEntry(json);
      } else {
        setEntry(null);
      }
    } catch {
      setEntry(null);
    } finally {
      setLoading(false);
    }
  };

  const openDelayed = (): void => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    hoverTimer.current = setTimeout(() => {
      void fetchEntry();
      setOpen(true);
    }, 150);
  };

  const closeDelayed = (): void => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    leaveTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  useEffect(() => {
    const fn = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <span
      className="relative inline-block cursor-help text-blue-700 hover:text-blue-900 transition"
      onMouseEnter={openDelayed}
      onMouseLeave={closeDelayed}
    >
      {children}

      {open && (
        <div
          className="
            absolute z-50 mt-2
            max-w-xs
            p-4 rounded-lg shadow-xl border bg-white
            text-slate-800 text-sm leading-relaxed
            pointer-events-none
          "
          style={{ top: "100%", left: "0" }}
        >
          {loading ? (
            <div className="text-slate-500 text-xs">Lade…</div>
          ) : entry ? (
            <>
              <div className="font-semibold mb-1">{entry.term}</div>
              <div className="text-slate-700">{entry.definition}</div>

              {entry.tags && entry.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-slate-500 italic text-xs">
              Keine Definition gefunden.
            </div>
          )}
        </div>
      )}
    </span>
  );
}

