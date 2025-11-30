// src/app/api/glossary/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-node";
import type { GlossEntry } from "@/types/glossary";

function normalizeArrayField(input: unknown): string[] | null {
  if (!input) return null;
  if (Array.isArray(input)) {
    return input.map(String).map((v) => v.trim()).filter(Boolean);
  }
  if (typeof input === "string") {
    return input
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  }
  return null;
}

function computeLetter(term: string): string {
  const trimmed = term.trim();
  if (!trimmed) return "#";
  const first = trimmed[0].toUpperCase();
  return /[A-ZÄÖÜ]/.test(first) ? first : "#";
}

// GET → alle Glossar-Einträge
export async function GET() {
  const { data, error } = await supabase
    .from("glossary_entries")
    .select("*")
    .order("letter", { ascending: true })
    .order("term", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json((data || []) as GlossEntry[]);
}

// POST → neuen Eintrag anlegen
export async function POST(req: Request) {
  const body = await req.json();

  const term = String(body.term || "").trim();
  const definition = String(body.definition || "").trim();
  const category = body.category ? String(body.category).trim() : null;
  const tags = normalizeArrayField(body.tags);
  const related_terms = normalizeArrayField(body.related_terms);
  const source = body.source ? String(body.source).trim() : null;

  if (!term || !definition) {
    return NextResponse.json(
      { error: "term und definition sind Pflichtfelder" },
      { status: 400 },
    );
  }

  const letter = computeLetter(term);

  const { data, error } = await supabase
    .from("glossary_entries")
    .insert([
      {
        term,
        definition,
        category,
        tags,
        related_terms,
        source,
        letter,
      },
    ])
    .select("*")
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: error?.message || "Insert failed" },
      { status: 500 },
    );
  }

  return NextResponse.json(data as GlossEntry, { status: 201 });
}
