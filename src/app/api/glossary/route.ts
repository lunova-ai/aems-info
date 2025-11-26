import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET → alle Glossar-Einträge
export async function GET() {
  const { data, error } = await supabase
    .from("glossary_entries")
    .select("*")
    .order("term", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST → neuen Eintrag erstellen
export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("glossary_entries")
    .insert(body)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
