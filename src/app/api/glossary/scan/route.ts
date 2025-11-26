import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type");

  if (type === "unicode") {
    const { data } = await supabase
      .from("glossary_entries")
      .select("*")
      .or("definition.ilike('%–%'),definition.ilike('%—%'),definition.ilike('%…%')");
      
    return Response.json(data || []);
  }

  // default: Duplikate
  const { data } = await supabase.rpc("detect_glossary_duplicates");
  return Response.json(data || []);
}
