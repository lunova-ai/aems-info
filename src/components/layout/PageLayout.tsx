"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/glossar/admin");

  return (
    <main
      className={
        isAdmin
          ? `
            md:ml-64
            w-[calc(100vw-16rem)]
            px-4 py-6
            overflow-x-hidden
            max-w-none
          `
          : `
            md:ml-64
            px-6 py-10
            max-w-3xl mx-auto
            prose prose-slate sm:prose-lg
          `
      }
    >
      {children}
    </main>
  );
}



