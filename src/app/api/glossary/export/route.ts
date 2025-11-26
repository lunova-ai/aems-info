import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data } = await supabase.from("glossary_entries").select("*");
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
