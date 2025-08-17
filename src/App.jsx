import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Student Manager</h1>
        <nav className="space-y-3">
          <Link to="/" className="block hover:underline">Dashboard</Link>
          <Link to="/students" className="block hover:underline">Students</Link>
          <Link to="/add-student" className="block hover:underline">Add Student</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
