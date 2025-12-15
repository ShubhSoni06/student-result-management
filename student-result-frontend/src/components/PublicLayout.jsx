import { Link, useLocation } from "react-router-dom";

function PublicLayout({ children }) {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `px-3 py-1 rounded-md transition ${
      pathname === path
        ? "text-indigo-600 font-semibold bg-indigo-50"
        : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Public Navbar */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand */}
          <h1 className="text-lg font-bold tracking-tight text-indigo-600">
            Student Result System
          </h1>

          {/* Links */}
          <div className="flex items-center gap-2">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>

            <Link
              to="/login"
              className="ml-2 bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="px-6 py-10">
        {children}
      </main>
    </div>
  );
}

export default PublicLayout;
