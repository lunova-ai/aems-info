import { supabase } from "@/lib/supabase-node";
import GlossarClient from "./GlossarClient";
import type { GlossEntry } from "@/types/glossary";

export const dynamic = "force-dynamic";

export default async function GlossarPage() {
  const { data, error } = await supabase
    .from("glossary_entries")
    .select("*")
    .order("letter")
    .order("term");

  if (error) console.error("❌ Glossar Fehler:", error);

  return <GlossarClient entries={(data as GlossEntry[]) ?? []} />;
}
