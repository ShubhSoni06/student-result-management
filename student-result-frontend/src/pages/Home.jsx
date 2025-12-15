import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-10 rounded-xl shadow text-center">
        <h1 className="text-3xl font-bold mb-4">
          Student Result Management System
        </h1>

        <p className="text-gray-600 mb-6">
          A role-based academic portal for managing students, subjects,
          marks, and performance metrics like SPI/GPA.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>

          <Link
            to="/about"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
