import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("glossary_entries")
    .select("*")
    .order("term", { ascending: true });

  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("glossary_entries")
    .insert(body)
    .select();

  return Response.json(data);
}
