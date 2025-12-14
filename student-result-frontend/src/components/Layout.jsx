import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">
          Student Result System
        </h1>

        {user && (
          <div className="flex items-center gap-4">
            {user.role === "STUDENT" && (
              <Link
                to="/student"
                className="text-blue-600 hover:underline"
              >
                Dashboard
              </Link>
            )}

            {user.role === "ADMIN" && (
              <Link
                to="/admin"
                className="text-blue-600 hover:underline"
              >
                Admin
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}

export default Layout;
