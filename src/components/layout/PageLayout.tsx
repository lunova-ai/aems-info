import type { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className="
        md:ml-64
        px-6 py-10
        max-w-3xl
        mx-auto
        prose prose-slate
        sm:prose-lg
      "
    >
      {children}
    </main>
  );
}
