import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const entries = await req.json();

  const { error } = await supabase
    .from("glossary_entries")
    .insert(entries);

  return Response.json({ success: !error, error });
}
