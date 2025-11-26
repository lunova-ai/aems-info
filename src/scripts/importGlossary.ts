#!/usr/bin/env node
import { supabase } from "../lib/supabase-node.ts";
import glossary from "../data/glossary-data.ts";

// Entfernt ALLE problematischen Unicode-Zeichen aus Strings
function cleanString(str: string): string {
  return str
    // typografische Striche → normales "-"
    .replace(/–/g, "-")
    .replace(/—/g, "-")
    // Auslassungspunkte … → "..."
    .replace(/…/g, "...")
    // typografische Hochkommas ’ → '
    .replace(/’/g, "'")
    // NBSP → normaler space
    .replace(/\u00A0/g, " ")
    // Zero-width spaces → löschen
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    // Trim
    .trim();
}

// Rekursive Tiefenreinigung für Glossarobjekte
function deepClean(obj: any): any {
  if (typeof obj === "string") {
    return cleanString(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map((v) => deepClean(v));
  }
  if (obj && typeof obj === "object") {
    const cleaned: any = {};
    for (const [key, value] of Object.entries(obj)) {
      cleaned[key] = deepClean(value);
    }
    return cleaned;
  }
  return obj;
}

async function run() {
  console.log("🔍 Reinige Glossardaten…");
  const cleaned = glossary.map((item) => deepClean(item));

  console.log("📥 Importiere Glossar in Supabase…");
  const { error } = await supabase.from("glossary_entries").insert(cleaned);

  if (error) {
    console.error("❌ Fehler beim Import:", error);
    process.exit(1);
  }

  console.log("✅ Import erfolgreich!");
  process.exit(0);
}

run();
