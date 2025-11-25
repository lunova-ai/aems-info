import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";

export const metadata = {
  title: "AEMS-System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-gray-50">
        <Sidebar />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
