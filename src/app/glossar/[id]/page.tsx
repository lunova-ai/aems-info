import { supabase } from "@/lib/supabase";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default async function GlossarDetailPage({ params }: Props) {
  const { data: entry } = await supabase
    .from("glossary_entries")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!entry) {
    return (
      <div className="max-w-3xl mx-auto py-10">
        <p className="text-slate-600">Begriff nicht gefunden.</p>
        <Link href="/glossar" className="text-blue-600 underline mt-4 block">
          Zurück zum Glossar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      <Link href="/glossar" className="text-sm text-blue-600 hover:underline">
        ← Zurück zum Glossar
      </Link>

      <h1 className="text-3xl font-bold text-slate-900">{entry.term}</h1>

      {entry.category && (
        <p className="text-sm text-slate-500">
          Kategorie: <strong>{entry.category}</strong>
        </p>
      )}

      <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
        {entry.definition}
      </p>

      {entry.tags && entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {entry.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
