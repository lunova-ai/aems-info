"use client";

import Link from "next/link";
import Callout from "@/components/callouts/Callout";

export default function Home() {
  return (
    <div className="prose prose-slate max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-extrabold tracking-tight">
        Willkommen im AEMS-System
      </h1>

      <Callout type="info">
        Dies ist dein Einstiegspunkt ins <strong>AEMS – Antifragile Energiemanagement-System</strong>.  
        Wähle einen Bereich, um tiefer einzusteigen.
      </Callout>

      <p className="text-lg mt-4">
        AEMS verbindet <strong>Talebs Antifragilität</strong> mit der 
        <strong> Entscheidungsarchitektur von EPRIS</strong>.  
        Es ist ein System, das Energie, Risiko, Kosten und CO₂ **klar, robust und
        entscheidungsorientiert** abbildet.
      </p>

      <hr className="my-10" />

      {/* Quick Navigation */}
      <h2 className="text-2xl font-bold">Schnellstart</h2>
      <p>Wohin möchtest du?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        {/* Card 1 */}
        <Link
          href="/aems"
          className="block rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">AEMS Grundlagen</h3>
          <p className="text-slate-600">
            Was ist AEMS? Warum existiert es? Wie baut es antifragile Strukturen?
          </p>
        </Link>

        {/* Card 2 */}
        <Link
          href="/prinzipien"
          className="block rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">Prinzipien</h3>
          <p className="text-slate-600">
            Die Denklogik hinter dem AEMS – Taleb + EPRIS + Robustheit.
          </p>
        </Link>

        {/* Card 3 */}
        <Link
          href="/module"
          className="block rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">Module</h3>
          <p className="text-slate-600">
            Die 8 Bausteine des Systems – vom Verbrauch bis zu Szenarien.
          </p>
        </Link>

        {/* Card 4 */}
        <Link
          href="/analyse"
          className="block rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">Analyse</h3>
          <p className="text-slate-600">
            Wie AEMS Daten, Bandbreiten, Szenarien & Entscheidungen verbindet.
          </p>
        </Link>

      </div>

      <hr className="my-10" />

      <p className="text-sm text-slate-500">
        Tipp: Das Glossar enthält alle Begriffe als gemeinsame Sprache →{" "}
        <Link href="/glossar" className="text-blue-600 underline">
          zum Glossar
        </Link>
      </p>
    </div>
  );
}
