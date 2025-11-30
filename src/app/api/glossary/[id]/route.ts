// src/app/api/glossary/[id]/route.ts
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

// GET /api/glossary/:id
export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const { data, error } = await supabase
    .from("glossary_entries")
    .select("*")
    .eq("id", params.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(data as GlossEntry);
}

// PATCH /api/glossary/:id
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  const body = await req.json();
  const update: Record<string, unknown> = {};

  if (body.term !== undefined) {
    const term = String(body.term).trim();
    update.term = term;
    update.letter = computeLetter(term);
  }

  if (body.definition !== undefined) {
    update.definition = String(body.definition).trim();
  }

  if (body.category !== undefined) {
    update.category = body.category ? String(body.category).trim() : null;
  }

  if (body.tags !== undefined) {
    update.tags = normalizeArrayField(body.tags);
  }

  if (body.related_terms !== undefined) {
    update.related_terms = normalizeArrayField(body.related_terms);
  }

  if (body.source !== undefined) {
    update.source = body.source ? String(body.source).trim() : null;
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json(
      { error: "Keine gültigen Felder zum Updaten" },
      { status: 400 },
    );
  }

  const { data, error } = await supabase
    .from("glossary_entries")
    .update(update)
    .eq("id", params.id)
    .select("*")
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(data as GlossEntry);
}

// DELETE /api/glossary/:id
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const { error } = await supabase
    .from("glossary_entries")
    .delete()
    .eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

