export type GlossEntry = {
  id: string;
  term: string;
  definition: string;
  letter: string;
  category: string | null;
  tags?: string[] | null;
};
