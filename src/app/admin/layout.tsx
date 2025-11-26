export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-6">AEMS Admin</h1>

        <nav className="flex gap-4 mb-10 text-sm font-medium">
          <a href="/admin/glossar" className="text-blue-600 hover:underline">
            Glossar
          </a>
          <a href="/admin/quality" className="text-blue-600 hover:underline">
            Checks
          </a>
          <a href="/admin/tools" className="text-blue-600 hover:underline">
            Tools
          </a>
        </nav>

        <div className="bg-white shadow rounded-lg p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
