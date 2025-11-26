"use client";

import { useEffect, useState } from "react";

type Props = {
  term: string;
  children: React.ReactNode;
};

type GlossaryEntry = {
  term: string;
  definition: string;
  category?: string | null;
};

export default function GlossaryTooltip({ term, children }: Props) {
  const [open, setOpen] = useState(false);
  const [entry, setEntry] = useState<GlossaryEntry | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!open || loaded) return;

    (async () => {
      const res = await fetch(`/api/glossary/by-term?term=${encodeURIComponent(term)}`);
      if (res.ok) {
        const data = await res.json();
        setEntry(data);
      }
      setLoaded(true);
    })();
  }, [open, loaded, term]);

  return (
    <span
      className="relative inline-block cursor-help underline decoration-dotted underline-offset-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}

      {open && entry && (
        <div className="absolute z-20 mt-2 w-72 max-w-xs rounded-md border bg-white shadow-lg p-3 text-xs text-slate-700">
          <div className="font-semibold text-slate-900 mb-1">{entry.term}</div>
          <div className="text-slate-700 line-clamp-4">
            {entry.definition}
          </div>
          {entry.category && (
            <div className="mt-2 text-[11px] text-slate-500">
              Kategorie: {entry.category}
            </div>
          )}
        </div>
      )}
    </span>
  );
}
