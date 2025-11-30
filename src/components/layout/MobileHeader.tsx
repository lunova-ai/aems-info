"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { title: "AEMS", href: "/aems" },
  { title: "Prinzipien", href: "/prinzipien" },
  { title: "Module", href: "/module" },
  { title: "Analyse", href: "/analyse" },

  { title: "Glossar", href: "/glossar" },

  { title: "Glossar Admin", href: "/glossar/admin", admin: true },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="md:hidden sticky top-0 z-50 bg-white border-b px-4 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">AEMS</h1>

      <button
        onClick={() => setOpen(!open)}
        className="text-2xl select-none"
      >
        ☰
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-14 bg-white shadow-lg border-b py-4 px-6 space-y-2">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  active
                    ? "bg-blue-600 text-white"
                    : item.admin
                    ? "text-gray-500 hover:bg-gray-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
