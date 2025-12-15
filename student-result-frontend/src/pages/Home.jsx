import PublicLayout from "../components/PublicLayout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <PublicLayout>
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow text-center">
        <h1 className="text-3xl font-bold mb-4">
          Student Result Management System
        </h1>

        <p className="text-gray-600 mb-6">
          A role-based academic portal for managing students, subjects,
          marks, and performance metrics like SPI/GPA.
        </p>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </PublicLayout>
  );
}

export default Home;
