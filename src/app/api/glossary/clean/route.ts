import { supabase } from "@/lib/supabase";

export async function POST() {
  const { error } = await supabase.rpc("clean_glossary_entries");
  return Response.json({ success: !error, error });
}
