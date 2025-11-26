"use client";

import { useEffect, useState } from "react";
import ExportButton from "@/components/admin/ExportButton";
import ImportDialog from "@/components/admin/ImportDialog";

export default function GlossarAdminPage() {
  const [count, setCount] = useState<number | null>(null);
  const [duplicates, setDuplicates] = useState<number | null>(null);
  const [dirtyEntries, setDirtyEntries] = useState<number | null>(null);

  // Load metrics from API
  async function loadMetrics() {
    // Anzahl Glossareinträge
    const res1 = await fetch("/api/glossary");
    const data1 = await res1.json();
    setCount(data1.length);

    // Anzahl Duplikate
    const res2 = await fetch("/api/glossary/scan");
    const dup = await res2.json();
    setDuplicates(dup.length);

    // Unicode / Cleanup Issues (später echtes SQL)
    const res3 = await fetch("/api/glossary/scan?type=unicode");
    const dirty = await res3.json();
    setDirtyEntries(dirty.length);
  }

  useEffect(() => {
    loadMetrics();
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Glossar Verwaltung</h2>

      {/* DASHBOARD CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* TOTAL ENTRIES */}
        <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-900">Einträge gesamt</h3>
          <p className="text-4xl font-bold text-blue-700 mt-2">
            {count ?? "…"}
          </p>
          <a
            href="/admin/glossar/list"
            className="text-blue-600 underline text-sm block mt-3"
          >
            Einträge durchsuchen →
          </a>
        </div>

        {/* DUPLICATES */}
        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-yellow-900">Duplikate</h3>
          <p className="text-4xl font-bold text-yellow-700 mt-2">
            {duplicates ?? "…"}
          </p>
          <a
            href="/admin/quality"
            className="text-yellow-700 underline text-sm block mt-3"
          >
            Duplikate anzeigen →
          </a>
        </div>

        {/* CLEANUP */}
        <div className="p-5 bg-red-50 border border-red-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-red-900">Cleanup nötig</h3>
          <p className="text-4xl font-bold text-red-700 mt-2">
            {dirtyEntries ?? "…"}
          </p>
          <a
            href="/admin/tools"
            className="text-red-700 underline text-sm block mt-3"
          >
            Cleanup durchführen →
          </a>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-8">
        <a
          href="/admin/glossar/list"
          className="px-4 py-2 bg-blue-600 text-white rounded shadow"
        >
          Glossar öffnen
        </a>

        <ImportDialog />

        <ExportButton />
      </div>

      {/* INFO TEXT */}
      <p className="text-gray-500 mt-6 italic">
        Dieses Admin-Dashboard zeigt Live-Status, Qualität und Werkzeuge für das AEMS-Glossar.
      </p>
    </div>
  );
}

