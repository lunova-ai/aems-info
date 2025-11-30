// src/app/api/glossary/by-term/route.ts
import { supabase } from "@/lib/supabase-node";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const term = url.searchParams.get("term");

  if (!term) {
    return Response.json({ error: "term missing" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("glossary_entries")
    .select("*")
    .ilike("term", term)
    .maybeSingle();

  if (error || !data) {
    return Response.json({ error: "not found" }, { status: 404 });
  }

  return Response.json(data);
}

