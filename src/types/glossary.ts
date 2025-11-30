// src/types/glossary.ts
export type GlossEntry = {
  id: string;
  letter: string;
  term: string;
  definition: string;
  category: string | null;
  tags: string[] | null;
  related_terms: string[] | null;
  source: string | null;
  created_at: string;
  updated_at: string;
};
