import { supabase } from "@/lib/supabase";
import GlossarySearch from "@/components/glossary/GlossarySearch";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Glossar – AEMS Begriffe",
};

export default async function GlossarPage() {
  // Daten laden
  const { data: entries, error } = await supabase
    .from("glossary_entries")
    .select("*")
    .order("term", { ascending: true });

  // Debug: Was kommt wirklich an? (SERVER LOG!)
  console.log("🔍 RAW Supabase Response (erste 3 Einträge):");
  console.log(entries?.slice(0, 3));

  if (error) {
    console.error("❌ Supabase Error:", error);
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800 mb-4">
          Glossar – AEMS Begriffe
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Dieses Glossar sammelt alle zentralen Begriffe des AEMS.  
          Es stellt sicher, dass CFO, Technik, Einkauf, ESG und Controlling mit einer 
          <strong className="text-slate-700"> gemeinsamen Sprache</strong> arbeiten.
        </p>
      </header>

      <div className="mb-14">
        <GlossarySearch entries={entries ?? []} />
      </div>

      <footer className="border-t pt-8 mt-14 text-center text-slate-500 text-sm">
        <p className="mb-4">Mehr über das AEMS-System:</p>
        <div className="flex justify-center gap-6">
          <a href="/analyse" className="text-blue-600 hover:underline">
            Analyse
          </a>
          <a href="/module" className="text-blue-600 hover:underline">
            Module
          </a>
          <a href="/prinzipien" className="text-blue-600 hover:underline">
            Prinzipien
          </a>
        </div>
      </footer>
    </div>
  );
}
