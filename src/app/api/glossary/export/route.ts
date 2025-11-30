// src/app/api/glossary/export/route.ts
import { supabase } from "@/lib/supabase-node";

function toCsvValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = Array.isArray(value) ? value.join(", ") : String(value);
  // Quotes escapen
  return `"${str.replace(/"/g, '""')}"`;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const format = url.searchParams.get("format") || "json";

  const { data, error } = await supabase
    .from("glossary_entries")
    .select(
      "id,letter,term,definition,category,tags,related_terms,source,updated_at",
    )
    .order("letter", { ascending: true })
    .order("term", { ascending: true });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const entries = data || [];

  if (format === "json") {
    return new Response(JSON.stringify(entries, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }

  if (format === "csv") {
    const header = [
      "id",
      "letter",
      "term",
      "definition",
      "category",
      "tags",
      "related_terms",
      "source",
      "updated_at",
    ];

    const lines = [
      header.join(";"),
      ...entries.map((e) =>
        [
          toCsvValue(e.id),
          toCsvValue(e.letter),
          toCsvValue(e.term),
          toCsvValue(e.definition),
          toCsvValue(e.category),
          toCsvValue(e.tags),
          toCsvValue(e.related_terms),
          toCsvValue(e.source),
          toCsvValue(e.updated_at),
        ].join(";"),
      ),
    ];

    const csv = "\uFEFF" + lines.join("\n"); // UTF-8 BOM

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="glossary-export.csv"',
      },
    });
  }

  return new Response(JSON.stringify({ error: "Unsupported format" }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}
