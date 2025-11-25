"use client";

import GlossarySearch from "@/components/glossary/GlossarySearch";

export default function GlossarPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Glossar – AEMS Begriffe</h1>

      <p>
        Dieses Glossar sammelt alle zentralen Begriffe des AEMS.
        Es stellt sicher, dass CFO, Technik, Einkauf, ESG und Controlling mit
        einer <strong>gemeinsamen Sprache</strong> arbeiten.
      </p>

      <GlossarySearch />

      <hr />

      <p>
        👉 <a href="/analyse">Analyse</a>  
        <br />
        👉 <a href="/module">Module</a>  
        <br />
        👉 <a href="/prinzipien">Prinzipien</a>
      </p>
    </div>
  );
}
