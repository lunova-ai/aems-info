"use client";

import type { GlossEntry } from "@/types/glossary";
import GlossaryTooltip from "./GlossaryTooltip";

export type GlossaryGroup = {
  letter: string;
  items: GlossEntry[];
};

type Props = {
  entries: GlossaryGroup[];
  query: string;
  termToId: Record<string, string>;
};

/** Hilfsfunktion: Regex für Begriffe escapen */
function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Auto-Linking: bekannte Begriffe in Definitionen verlinken */
function renderDefinition(
  definition: string,
  termToId: Record<string, string>
) {
  const terms = Object.keys(termToId);
  if (!terms.length) return definition;

  // längere Begriffe zuerst, damit "Energie" nicht "Energiepreis" zerschießt
  const sorted = [...terms].sort((a, b) => b.length - a.length);
  const pattern = sorted.map(escapeRegex).join("|");
  const regex = new RegExp(`\\b(${pattern})\\b`, "gi");

  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(definition)) !== null) {
    if (match.index > lastIndex) {
      parts.push(definition.slice(lastIndex, match.index));
    }

    const matchedText = match[0];
    const id = termToId[Object.keys(termToId).find(
      (key) => key.toLowerCase() === matchedText.toLowerCase()
    ) || ""];

    if (id) {
      parts.push(
        <a
          key={`${matchedText}-${match.index}`}
          href={`/glossar/${id}`}
          className="text-blue-600 hover:underline"
        >
          {matchedText}
        </a>
      );
    } else {
      parts.push(matchedText);
    }

    lastIndex = match.index + matchedText.length;
  }

  if (lastIndex < definition.length) {
    parts.push(definition.slice(lastIndex));
  }

  return parts;
}

export default function GlossarySearch({ entries, termToId }: Props) {
  return (
    <div className="space-y-10">
      {entries.map((group) => (
        <section key={group.letter} id={`letter-${group.letter}`}>
          <h3 className="text-xl font-semibold mb-3">{group.letter}</h3>

          <div className="space-y-4">
            {group.items.map((entry) => (
              <div
                key={entry.id}
                className="border p-4 rounded-xl bg-white shadow-sm"
              >
                <a
                  href={`/glossar/${entry.id}`}
                  className="text-lg font-semibold text-blue-700 hover:underline"
                >
                  <GlossaryTooltip term={entry.term}>
                    {entry.term}
                  </GlossaryTooltip>
                </a>

                <p className="text-sm text-slate-700 mt-1 line-clamp-3">
                  {renderDefinition(entry.definition, termToId)}
                </p>

                {entry.related_terms?.length ? (
                  <div className="flex gap-2 text-xs text-blue-600 mt-2 flex-wrap">
                    {entry.related_terms.map((t) => (
                      <a
                        key={t}
                        href={`/glossar?query=${encodeURIComponent(t)}`}
                        className="hover:underline"
                      >
                        {t}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}




