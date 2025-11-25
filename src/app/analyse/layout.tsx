import PageLayout from "@/components/layout/PageLayout";
import type { ReactNode } from "react";

export default function AemsLayout({ children }: { children: ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
