import { supabase } from "@/lib/supabase-node";
import GlossarDetailClient from "./GlossarDetailClient";
import type { GlossEntry } from "@/types/glossary";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { data } = await supabase
    .from("glossary_entries")
    .select("term, definition")
    .eq("id", params.id)
    .maybeSingle();

  if (!data) {
    return { title: "Glossar – Begriff" };
  }

  return {
    title: `${data.term} – Glossar`,
    description: data.definition?.slice(0, 160) ?? "",
  };
}

export default async function GlossarDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { data, error } = await supabase
    .from("glossary_entries")
    .select("*")
    .eq("id", params.id)
    .maybeSingle();

  if (error) {
    console.error("❌ Glossar Detail Fehler:", error);
  }

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center text-slate-600">
        <h1 className="text-3xl font-semibold mb-4">Begriff nicht gefunden</h1>
        <a href="/glossar" className="text-blue-600 hover:underline">
          Zurück zum Glossar
        </a>
      </div>
    );
  }

  return <GlossarDetailClient entry={data as GlossEntry} />;
}
