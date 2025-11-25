"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { title: "AEMS", href: "/aems" },
  { title: "Prinzipien", href: "/prinzipien" },
  { title: "Module", href: "/module" },
  { title: "Analyse", href: "/analyse" },
  { title: "Glossar", href: "/glossar" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        hidden md:flex
        fixed left-0 top-0
        h-screen w-64
        border-r border-gray-200
        bg-white
        flex-col
        px-6 py-8
        z-50
      "
    >
      <h1 className="text-2xl font-bold mb-8 tracking-tight">
        AEMS-System
      </h1>

      <nav className="space-y-2">
        {nav.map((item) => {
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                active
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
