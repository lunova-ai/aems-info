"use client";

import { ReactNode } from "react";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  FireIcon,
  CubeTransparentIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

type CalloutType =
  | "info"
  | "warning"
  | "success"
  | "danger"
  | "neutral"
  | "definition"
  | "strategy"
  | "fragil"
  | "robust"
  | "antifragil";

const styles = {
  info: {
    border: "border-blue-300",
    bg: "bg-blue-50",
    text: "text-blue-800",
    icon: <InformationCircleIcon className="w-6 h-6 text-blue-600" />,
    label: "Hinweis",
  },
  warning: {
    border: "border-yellow-300",
    bg: "bg-yellow-50",
    text: "text-yellow-800",
    icon: <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600" />,
    label: "Achtung",
  },
  success: {
    border: "border-green-300",
    bg: "bg-green-50",
    text: "text-green-800",
    icon: <CheckCircleIcon className="w-6 h-6 text-green-600" />,
    label: "Ergebnis",
  },
  danger: {
    border: "border-red-300",
    bg: "bg-red-50",
    text: "text-red-800",
    icon: <XCircleIcon className="w-6 h-6 text-red-600" />,
    label: "Risiko",
  },
  neutral: {
    border: "border-gray-300",
    bg: "bg-gray-50",
    text: "text-gray-800",
    icon: <LightBulbIcon className="w-6 h-6 text-gray-500" />,
    label: "Beispiel",
  },
  definition: {
    border: "border-purple-300",
    bg: "bg-purple-50",
    text: "text-purple-800",
    icon: <BookOpenIcon className="w-6 h-6 text-purple-600" />,
    label: "Definition",
  },
  strategy: {
    border: "border-indigo-300",
    bg: "bg-indigo-50",
    text: "text-indigo-800",
    icon: <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />,
    label: "Strategie",
  },

  // Taleb-Boxen ❤️
  fragil: {
    border: "border-red-400",
    bg: "bg-red-100",
    text: "text-red-900",
    icon: <FireIcon className="w-6 h-6 text-red-700" />,
    label: "Fragil",
  },
  robust: {
    border: "border-gray-400",
    bg: "bg-gray-100",
    text: "text-gray-900",
    icon: <CubeTransparentIcon className="w-6 h-6 text-gray-700" />,
    label: "Robust",
  },
  antifragil: {
    border: "border-green-500",
    bg: "bg-green-100",
    text: "text-green-900",
    icon: <SparklesIcon className="w-6 h-6 text-green-700" />,
    label: "Antifragil",
  },
};

export default function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const s = styles[type];

  return (
    <div className={`my-6 p-4 rounded-lg border-l-4 ${s.bg} ${s.border}`}>
      <div className="flex items-start gap-3">
        {s.icon}
        <div>
          <div className={`font-semibold mb-1 ${s.text}`}>{s.label}</div>
          <div className="text-gray-800 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}


