import { Link } from "react-router-dom";

function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Public Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">
          Student Result System
        </h1>

        <div className="flex gap-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}

export default PublicLayout;
